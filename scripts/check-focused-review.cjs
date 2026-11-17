const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),main={innerHTML:'',querySelector:()=>null,querySelectorAll:()=>[],focus:()=>{}};
const s={URL,document:{querySelector:()=>main,title:''},location:{hash:'#/final/focused-review'},window:{addEventListener:()=>{},scrollTo:()=>{}},console};vm.createContext(s);
for(const f of ['content.js','presentations.js','conditions.js','videos.js','video-library.js','podcast.js','quiz-data.js','quiz.js','presentation-quiz-data.js','presentation-quizzes.js','posters.js','section-quizzes.js','focused-review-data.js','focused-review-olivia-data.js','focused-review.js','app.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),s,{filename:f});
const data=vm.runInContext('focusedReviewData',s),text=JSON.stringify(data.sections);
assert.equal(data.sections.length,16);assert.equal(new Set(data.sections.map(section=>section.id)).size,16);assert.equal(data.recall.length,18);
for(const [index,section] of data.sections.entries()){
 assert.equal(section.number,index+1);assert(section.title&&section.blocks.length&&section.sourcePages.every(n=>n>=1&&n<=10));
 for(const b of section.blocks){assert(['heading','paragraph','list','table'].includes(b.type));if(b.type==='list')assert(b.items.length&&b.items.every(Boolean));if(b.type==='table')assert(b.rows.length&&b.rows.every(row=>row.length===b.columns.length&&row.every(Boolean)));}
 assert(main.innerHTML.includes(`id="focused-${section.id}"`));
}
assert.equal(data.sections.flatMap(section=>section.blocks).filter(block=>block.type==='table').length,5);
const hiv=data.sections.find(section=>section.id==='hiv'),tables=hiv.blocks.filter(block=>block.type==='table');assert.equal(tables[0].rows.length,7);assert.equal(tables[1].rows.length,5);assert(hiv.blocks.some(block=>block.text?.includes('HAND is not itself an opportunistic infection')));assert(text.includes('HIV-1 p24 antigen plus HIV-1 and HIV-2 antibodies'));
assert(text.includes('do not apply a blanket stop rule'));assert(!text.includes('Stop acetylcholinesterase.'));assert(!text.includes('Do not start it during an acute attack.'));assert(text.includes('may be started during a treated flare'));assert(text.includes('HLA-B*58:01'));assert(text.includes('testing is not universal')||text.includes('Testing is not universal'));assert(text.includes('until after the first food'));
assert(main.innerHTML.includes('Special thanks to Kristeen and Olivia.'));assert(main.innerHTML.includes('topics provided in the final exam study guide'));assert.equal((main.innerHTML.match(/class="condition-section focused-topic"/g)||[]).length,31);assert.equal((main.innerHTML.match(/class="condition-section focused-topic"[^>]*\bopen\b/g)||[]).length,2);
assert(main.innerHTML.indexOf('id="focused-reading-title"')>main.innerHTML.indexOf('id="focused-recall"'));assert(main.innerHTML.includes('Kristeen’s guide · clinical references'));assert(main.innerHTML.includes('Olivia’s guide · clinical references'));assert(!/<details class="focused-reference-links" open/.test(main.innerHTML));assert(data.references.length&&data.references.every(ref=>new URL(ref.url).protocol==='https:'));
assert(main.innerHTML.includes('href="#/final/presentation/lupus"'));assert(main.innerHTML.includes('href="#/final/presentation/osteomyelitis"'));assert(main.innerHTML.includes('href="#/final/condition/parkinsons"'));
const audit=JSON.parse(fs.readFileSync(path.join(root,'docs/focused-review-audit.json')));assert.equal(audit.changes.length,39);assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root,data.source))).digest('hex'),audit.sourceSha256);
s.location.hash='#/final/study-guide';vm.runInContext('render()',s);assert(main.innerHTML.includes('href="#/final/focused-review"'));assert.equal((main.innerHTML.match(/class="study-tool-arrow"/g)||[]).length,5);
const workflow=fs.readFileSync(path.join(root,'.github/workflows/pages.yml'),'utf8');assert(workflow.includes('focused-review.js focused-review-data.js'));assert(workflow.includes('practice-questions resources assets _site/'));
console.log('Passed: 16 topics, 18 recall rows, all original readable tables including the image-only HIV source table, corrected safety points, original PDF hash, collapsed topics/references, Kristeen and Olivia credit, study-guide navigation and deployment assets.');

const olivia=vm.runInContext('oliviaFocusedReviewData',s),oliviaText=JSON.stringify(olivia.sections);
assert.equal(olivia.sections.length,14);
assert.deepEqual(Array.from(olivia.sections,item=>item.id),Array.from(data.sections.slice(0,14),item=>item.id));
for(const section of olivia.sections){
 assert(section.sourceParagraphs.length&&section.sourcePages.every(n=>n>=1&&n<=8));
 for(const block of section.blocks){assert(['heading','paragraph','list','table'].includes(block.type));if(block.type==='list')assert(block.items.every(Boolean));if(block.type==='table')assert(block.rows.every(row=>row.length===block.columns.length));}
}
assert(oliviaText.includes('it does not confirm Parkinson’s disease by itself'));
assert(oliviaText.includes('Benzodiazepines are not routine treatment'));
assert(oliviaText.includes('irregular respirations'));
assert(oliviaText.includes('Usually lymphocyte predominant'));
assert(oliviaText.includes('Acetaminophen is not universally first-line'));
assert(oliviaText.includes('not an absolute “no SLNB before 30 weeks” rule'));
assert(oliviaText.includes('lenacapavir injections every 6 months'));
assert(oliviaText.includes('it does not by itself establish advanced cancer'));
const oliviaAudit=JSON.parse(fs.readFileSync(path.join(root,'docs/focused-review-olivia-audit.json')));
assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root,olivia.source))).digest('hex'),oliviaAudit.sourcePDFSha256);
assert.equal(oliviaAudit.corrections.length,14);
assert.equal(oliviaAudit.topicMapping.flatMap(item=>item.paragraphs).length,Object.entries(oliviaAudit.sourceParagraphs).filter(([i,value])=>+i>=4&&+i<=260&&value).length);
s.location.hash='#/final/focused-review';vm.runInContext('render()',s);
const ids=[...main.innerHTML.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]);assert.equal(new Set(ids).size,ids.length,'Guide/compare IDs must be unique');
assert(/data-focused-view="olivia"[^>]*hidden/.test(main.innerHTML));assert(/data-focused-view="compare"[^>]*hidden/.test(main.innerHTML));assert(!/data-focused-view="kristeen"[^>]*hidden/.test(main.innerHTML));
assert(main.innerHTML.includes('resources/focused-review-olivia-original.pdf'));
assert(workflow.includes('focused-review-olivia-data.js'));
// Exercise view switching, isolated expand/collapse, topic jumps, comparison and disposal.
const handlers={},views=['kristeen','olivia','compare'].map((name,index)=>({dataset:{focusedView:name},hidden:index>0,panels:[{open:false},{open:false}],querySelectorAll(){return this.panels;}}));
const modes=views.map(view=>({dataset:{focusedGuide:view.dataset.focusedView},attributes:{},setAttribute(key,value){this.attributes[key]=value;}}));
const comparison={innerHTML:''};
const host={querySelector:()=>comparison,querySelectorAll:selector=>selector==='[data-focused-view]'?views:modes,addEventListener:(name,fn)=>{handlers[name]=fn;},removeEventListener:name=>{delete handlers[name];}};
s.reviewRoot={querySelector:()=>host};const dispose=vm.runInContext('FocusedReview.mount(reviewRoot)',s);
handlers.click({target:{closest:selector=>selector==='[data-focused-guide]'?modes[1]:null}});
assert(views[0].hidden&&!views[1].hidden&&views[2].hidden);assert.equal(modes[1].attributes['aria-pressed'],'true');assert.equal(modes[0].attributes['aria-pressed'],'false');
const action={dataset:{focusedAction:'expand'},closest:()=>views[1]};
handlers.click({target:{closest:selector=>selector==='[data-focused-action]'?action:null}});assert(views[1].panels.every(panel=>panel.open));assert(views[0].panels.every(panel=>!panel.open));
action.dataset.focusedAction='collapse';handlers.click({target:{closest:selector=>selector==='[data-focused-action]'?action:null}});assert(views[1].panels.every(panel=>!panel.open));
const panel={dataset:{focusedTopic:'hiv'},open:false,querySelector(){return {focus(){panel.focused=true;}};},scrollIntoView(){this.scrolled=true;}};
handlers.change({target:{id:'olivia-focused-topic',value:'hiv',matches:()=>true,closest:()=>({querySelectorAll:()=>[panel]})}});assert(panel.open&&panel.focused&&panel.scrolled);
handlers.click({target:{closest:selector=>selector==='[data-focused-guide]'?modes[2]:null}});assert(views[0].hidden&&views[1].hidden&&!views[2].hidden);
handlers.change({target:{id:'focused-compare-topic',value:'hiv'}});assert(comparison.innerHTML.includes('Kristeen’s guide'));assert(comparison.innerHTML.includes('Olivia’s guide'));assert(comparison.innerHTML.includes('OIs')||comparison.innerHTML.includes('Opportunistic'));assert(!comparison.innerHTML.includes('Cardinal signs (TRAP)'));
const saved=comparison.innerHTML;handlers.change({target:{id:'focused-compare-topic',value:'constructor'}});assert.equal(comparison.innerHTML,saved);
dispose();assert.equal(Object.keys(handlers).length,0);
console.log('Passed: Olivia’s 14 topics, full source-paragraph mapping/PDF fingerprint, corrected safety points, unique IDs, initially hidden separate guide/compare views, scoped controls, topic jump, matching comparison and listener cleanup.');
