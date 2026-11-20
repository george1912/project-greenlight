const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),main={innerHTML:'',querySelector:()=>null,querySelectorAll:()=>[],focus(){}};
let lastDeck,disposed=0;
const s={URL,document:{querySelector:()=>main,title:''},location:{hash:'#/'},window:{addEventListener(){},scrollTo(){}},console,PresentationViewer:{mount:(host,deck)=>{lastDeck=deck;return()=>{disposed++;};}}};vm.createContext(s);
for(const file of ['content.js','presentations.js','conditions.js','videos.js','video-library.js','podcast.js','quiz-data.js','quiz.js','presentation-quiz-data.js','presentation-quizzes.js','posters.js','section-quizzes.js','focused-review-data.js','focused-review-olivia-data.js','focused-review-combined-data.js','focused-review.js','ob-content.js','ob-posters.js','ob-objectives.js','ob-question-map.js','ob-question-quizzes.js','ob-presentations.js','ob.js','app.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),s,{filename:file});
const {decks,course}=vm.runInContext('({decks:obPresentationDecks,course:obCourse})',s);
const audit=JSON.parse(fs.readFileSync(path.join(root,'docs/ob-presentations-audit.json'))),specs=JSON.parse(fs.readFileSync(path.join(root,'scripts/ob-presentation-sources.json')));
assert.equal(Object.keys(decks).length,19);assert.equal(audit.sourcePDFCount,21);assert.equal(audit.pages,600);assert.equal(audit.decks.filter(d=>d.duplicateSources.length).length,2);
const seenIDs=new Set(),topicCoverage=new Set();let focusCount=0;
function render(route){s.location.hash=route;vm.runInContext('render()',s);assert(!s.document.title.includes('undefined'));return main.innerHTML;}
for(const deck of Object.values(decks)){
 assert(!seenIDs.has(deck.id));seenIDs.add(deck.id);assert.equal(deck.showSourceLinks,false);
 assert(deck.pdf.startsWith('ob-presentations/')&&deck.manifest.startsWith('ob-presentations/'));
 const bytes=fs.readFileSync(path.join(root,deck.pdf)),sourceAudit=audit.decks.find(entry=>entry.id===deck.id);
 assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),sourceAudit.sourceSha256);
 const manifest=JSON.parse(fs.readFileSync(path.join(root,deck.manifest)));assert.equal(manifest.pages.length,deck.pages);
 for(const page of manifest.pages){const image=fs.readFileSync(path.join(root,path.dirname(deck.manifest),page.image));assert.equal(image.toString('ascii',0,4),'RIFF');assert.equal(image.toString('ascii',8,12),'WEBP');assert(page.width>0&&page.height>0);assert.equal(Math.max(page.width,page.height),2000);}
 const markup=render('#/ob-final/presentation/'+deck.id);assert(markup.includes('presentation-reader'));assert.equal(lastDeck.id,deck.id);assert.equal(lastDeck.initialPage,1);assert.equal(lastDeck.showSourceLinks,false);
 for(const id of deck.weekIds){assert(course.weeks.some(w=>w.id===id));assert(render('#/ob-final/'+id).includes('href="#/ob-final/presentation/'+deck.id+'"'));}
 const ids=new Set();
 for(const focus of deck.focus){
  assert(!ids.has(focus.id));ids.add(focus.id);focusCount++;
  assert(course.topics.some(t=>t.id===focus.topicId));topicCoverage.add(focus.topicId);assert(Number.isInteger(focus.page)&&focus.page>=1&&focus.endPage>=focus.page&&focus.endPage<=deck.pages);
  const url='#/ob-final/presentation/'+deck.id+'/'+focus.id;
  assert(render('#/ob-final/topic/'+focus.topicId).includes(`href="${url}"`));
  const html=render(url);assert(html.includes('FINAL EXAM FOCUS'));assert.equal(lastDeck.initialPage,focus.page);assert(html.includes('href="#/ob-final/topic/'+focus.topicId+'"'));
 }
}
assert.equal(topicCoverage.size,11);assert.equal(focusCount,26);assert(disposed>0);
for(const id of ['historical-context','fetal-development','labor-and-birth','labor-pain-management'])assert.equal(decks[id].focus.length,0,'Background material should not be labeled as a blueprint focus');
assert.deepEqual(Array.from(decks['diabetes-in-pregnancy'].weekIds),['week-3']);assert.deepEqual(Array.from(decks['infant-feeding'].weekIds),['week-9']);assert.deepEqual(Array.from(decks['stis'].weekIds),['august-4']);assert.deepEqual(Array.from(decks['contraception'].weekIds),['august-4']);assert.deepEqual(Array.from(decks['labor-pain-management'].weekIds),['week-5']);
for(const route of ['#/ob-final/presentation/constructor','#/ob-final/presentation/__proto__','#/ob-final/presentation/postpartum-care/private','#/ob-final/presentation/postpartum-care/../../private']){render(route);assert(s.document.title.includes('Page not found'));}
render('#/ob-final/presentation/postpartum-care/postpartum-hemorrhage/?source=class');assert.equal(lastDeck.initialPage,14);
render('#/final/presentation/breast-cancer');assert.equal(lastDeck.id,'breast-cancer');assert.equal(lastDeck.initialPage,undefined);
for(const topic of course.topics){assert.equal(Object.keys(topic.content).length,0);assert.equal(topic.practiceQuestions.length,0);}
assert.equal(specs.length,19);assert.equal(specs.reduce((sum,spec)=>sum+1+spec.aliases.length,0),21);
const workflow=fs.readFileSync(path.join(root,'.github/workflows/pages.yml'),'utf8');assert(workflow.includes('ob-presentations.js'));assert(workflow.includes('cp -R ob-presentations _site/'));
console.log('Passed: 21 source PDFs mapped to 19 decks/600 previews, source hashes, deduplicated handouts, corrected weekly placement, all 11 exam groups/26 focused page links, reader mounting/disposal, no fabricated notes/quizzes, invalid routes and Med-Surg preservation.');
