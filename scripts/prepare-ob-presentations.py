"""Prepare only the supplied, explicitly mapped OB PDFs for the shared slide reader.
Run with bundled Python/Pillow/pypdf and pdftoppm on PATH:
  python scripts/prepare-ob-presentations.py --archive /path/to/weekly_pdfs.zip
"""
import argparse,concurrent.futures,hashlib,io,json,logging,shutil,subprocess,tempfile,zipfile
from pathlib import Path
from PIL import Image
from pypdf import PdfReader
ROOT=Path(__file__).resolve().parent.parent
logging.getLogger('pypdf').setLevel(logging.ERROR)
def digest(data):return hashlib.sha256(data).hexdigest()
def prepare(spec,archive_path):
    with zipfile.ZipFile(archive_path) as archive:
        data=archive.read(spec['member'])
        aliases=[(name,archive.read(name)) for name in spec['aliases']]
    reader=PdfReader(io.BytesIO(data));page_text=[page.extract_text() or '' for page in reader.pages]
    for name,other in aliases:
        duplicate=PdfReader(io.BytesIO(other))
        assert len(duplicate.pages)==len(reader.pages),name
        for a,b in zip(reader.pages,duplicate.pages):
            assert a.get_contents().get_data()==b.get_contents().get_data() and a.mediabox==b.mediabox,name
            assert (a.extract_text() or '')==(b.extract_text() or ''),name
    folder=ROOT/'ob-presentations'/spec['id'];folder.mkdir(parents=True,exist_ok=True)
    pdf=folder/'original.pdf';manifest_file=folder/'deck.json'
    source_hash=digest(data)
    ready=False
    if pdf.exists() and manifest_file.exists() and digest(pdf.read_bytes())==source_hash:
        manifest=json.loads(manifest_file.read_text())
        ready=len(manifest.get('pages',[]))==len(reader.pages) and all((folder/p['image']).exists() for p in manifest['pages'])
    if not ready:
        pdf.write_bytes(data)
        with tempfile.TemporaryDirectory(prefix='ob-pdf-render-') as temp:
            subprocess.run(['pdftoppm','-scale-to','2000','-png',str(pdf),str(Path(temp)/'page')],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.PIPE)
            images=sorted(Path(temp).glob('page-*.png'),key=lambda p:int(p.stem.split('-')[-1]));assert len(images)==len(reader.pages)
            pages=[]
            for i,(image,text) in enumerate(zip(images,page_text),1):
                name=f'page-{i:03}.webp'
                with Image.open(image) as picture:
                    picture=picture.convert('RGB');width,height=picture.size;picture.save(folder/name,'WEBP',quality=92,method=4)
                pages.append({'image':name,'width':width,'height':height,'text':text})
            manifest={'id':spec['id'],'title':spec['title'],'pages':pages};manifest_file.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
    count=len(manifest['pages'])
    for focus in spec['focus']:assert 1<=focus['page']<=focus['endPage']<=count
    meta={key:spec[key] for key in ['id','title','weekIds','kind','focus']}
    meta.update({'pages':count,'pdf':f'ob-presentations/{spec["id"]}/original.pdf','manifest':f'ob-presentations/{spec["id"]}/deck.json','contextLabel':'OB COURSE MATERIAL','showSourceLinks':False})
    audit={'id':spec['id'],'sourceMember':spec['member'],'sourceSha256':source_hash,'duplicateSources':[{'member':name,'sha256':digest(other),'equivalence':'Same page streams, media boxes, and extracted text.'} for name,other in aliases],'pages':count,'weekIds':spec['weekIds'],'focus':spec['focus']}
    print(f'{spec["id"]}: {count} pages ready',flush=True)
    return spec['id'],meta,audit
if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--archive',type=Path,required=True);args=parser.parse_args()
    specs=json.loads((ROOT/'scripts/ob-presentation-sources.json').read_text())
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:results=list(pool.map(lambda spec:prepare(spec,args.archive),specs))
    decks={id:meta for id,meta,audit in results}
    (ROOT/'ob-presentations.js').write_text('/* Supplied OB presentations and handouts, organized by syllabus subject. */\nconst obPresentationDecks = '+json.dumps(decks,ensure_ascii=False,indent=2)+';\n')
    record={'archiveSha256':digest(args.archive.read_bytes()),'sourcePDFCount':sum(1+len(spec['aliases']) for spec in specs),'uniqueDecks':len(decks),'pages':sum(deck['pages'] for deck in decks.values()),'decks':[audit for id,meta,audit in results]}
    (ROOT/'docs/ob-presentations-audit.json').write_text(json.dumps(record,ensure_ascii=False,indent=2)+'\n')
    print(f'Prepared {len(decks)} unique decks / {record["pages"]} pages from {record["sourcePDFCount"]} supplied PDFs.',flush=True)
