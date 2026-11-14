"""Prepare faithful slide previews and original PDFs for the static viewer.
Run with the bundled Python, Pillow, pypdf and pdftoppm on PATH:
  python scripts/prepare-presentations.py --source-dir /path/to/provided/pdfs
Only files explicitly listed in presentation-sources.json are processed.
"""
import argparse, concurrent.futures, hashlib, json, shutil, subprocess, tempfile, unicodedata
from pathlib import Path
from PIL import Image
from pypdf import PdfReader
ROOT = Path(__file__).resolve().parent.parent

def prepare(spec, source_dir):
    source = next(p for p in source_dir.iterdir() if unicodedata.normalize('NFC', p.name) == unicodedata.normalize('NFC', spec['file']))
    folder = ROOT / 'presentations' / spec['id']
    folder.mkdir(parents=True, exist_ok=True)
    target = folder / 'original.pdf'
    manifest_path = folder / 'deck.json'
    if target.exists() and manifest_path.exists() and hashlib.sha256(source.read_bytes()).digest() == hashlib.sha256(target.read_bytes()).digest():
        manifest = json.loads(manifest_path.read_text())
        if manifest.get('pages') and all((folder / page['image']).exists() for page in manifest['pages']):
            meta = {key:spec[key] for key in ['id','title','week','group']}
            meta.update({'pages':len(manifest['pages']),'pdf':f'presentations/{spec["id"]}/original.pdf','manifest':f'presentations/{spec["id"]}/deck.json'})
            print(f'{spec["title"]}: existing previews unchanged',flush=True)
            return spec['id'],meta
    shutil.copyfile(source, target)
    assert hashlib.sha256(source.read_bytes()).digest() == hashlib.sha256(target.read_bytes()).digest()
    reader = PdfReader(source)
    pages = []
    with tempfile.TemporaryDirectory(dir=ROOT / 'tmp' / 'presentation-render') as temp:
        subprocess.run(['pdftoppm','-scale-to','2000','-png',str(source),str(Path(temp)/'slide')],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.PIPE)
        previews = sorted(Path(temp).glob('slide-*.png'),key=lambda p:int(p.stem.split('-')[-1]))
        assert len(previews) == len(reader.pages), source.name
        for i,(preview,page) in enumerate(zip(previews,reader.pages),1):
            name=f'page-{i:03}.webp'
            with Image.open(preview) as img:
                img=img.convert('RGB')
                width,height=img.size
                img.save(folder/name,'WEBP',quality=94,method=4)
            pages.append({'image':name,'width':width,'height':height,'text':page.extract_text() or ''})
    manifest={'id':spec['id'],'title':spec['title'],'pages':pages}
    (folder/'deck.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
    meta={key:spec[key] for key in ['id','title','week','group']}
    meta.update({'pages':len(pages),'pdf':f'presentations/{spec["id"]}/original.pdf','manifest':f'presentations/{spec["id"]}/deck.json'})
    print(f'{spec["title"]}: {len(pages)} pages prepared',flush=True)
    return spec['id'],meta

if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--source-dir',type=Path,required=True);args=parser.parse_args()
    specs=json.loads((ROOT/'scripts'/'presentation-sources.json').read_text())
    (ROOT/'tmp'/'presentation-render').mkdir(parents=True,exist_ok=True)
    with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
        results=dict(pool.map(lambda s:prepare(s,args.source_dir),specs))
    (ROOT/'presentations.js').write_text('/* Original student presentation PDFs and prepared page previews. */\nconst presentationDecks = '+json.dumps(results,ensure_ascii=False,indent=2)+';\n')
    print(f'Prepared {len(results)} PDFs and {sum(d["pages"] for d in results.values())} slide previews.',flush=True)
