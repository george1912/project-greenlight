const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),main={innerHTML:'',querySelector:()=>null,querySelectorAll:()=>[],focus:()=>{}};
const s={URL,document:{querySelector:()=>main,title:''},location:{hash:'#/final/focused-review'},window:{addEventListener:()=>{},scrollTo:()=>{}},console};vm.createContext(s);
for(const f of ['content.js','presentations.js','conditions.js','videos.js','video-library.js','podcast.js','quiz-data.js','quiz.js','presentation-quiz-data.js','presentation-quizzes.js','posters.js','section-quizzes.js','focused-review-data.js','focused-review-olivia-data.js','focused-review-combined-data.js','focused-review.js','app.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),s,{filename:f});
const [one,two,combined]=vm.runInContext('[focusedReviewData,oliviaFocusedReviewData,combinedFocusedReviewData]',s);
assert.equal(one.sections.length,16);assert.equal(two.sections.length,14);assert.equal(combined.sections.length,16);assert.equal(one.recall.length,18);assert.equal(combined.recall.length,18);
assert.equal(JSON.stringify(combined.recall),JSON.stringify(one.recall));
const norm=text=>String(text).normalize('NFKC').toLowerCase().replace(/[’‘]/g,"'").replace(/[–−]/g,'-').replace(/\s+/g,' ').trim();
const audit=JSON.parse(fs.readFileSync(path.join(root,'docs/focused-review-combined-audit.json')));
const expected=[];
for(const [name,data] of [['one',one],['two',two]])for(const topic of data.sections){
 const target=combined.sections.find(item=>item.id===topic.id);assert(target);
 const text=norm(JSON.stringify(target.blocks));
 topic.blocks.forEach((block,index)=>{
  if(block.type==='heading')return;
  const ref=`${name}:${topic.id}:${index}`;
  if(block.type==='list')block.items.forEach((item,i)=>{const key=`${ref}:${i}`;expected.push(key);assert(audit.deduplicated.some(entry=>entry.source===key&&entry.coveredBy?.length)||text.includes(norm(JSON.stringify(item)).slice(1,-1)),`Lost study point ${key}`);});
  else {
   expected.push(ref);
   if(name==='two'&&topic.id==='osteoporosis'&&block.type==='table'){
    assert(audit.deduplicated.some(item=>item.source===ref));assert(target.blocks.some(item=>item.type==='table'&&item.rows.length===3));
   }else assert(audit.deduplicated.some(entry=>entry.source===ref&&entry.coveredBy?.length)||text.includes(norm(JSON.stringify(block))),`Lost study block ${ref}`);
  }
 });
}
assert.deepEqual([...audit.coveredSourceItems].sort(),expected.sort());
for(const entry of audit.deduplicated.filter(item=>item.coveredBy))for(const target of entry.coveredBy){assert(expected.includes(target),`Unknown coverage target ${target}`);assert(!audit.deduplicated.some(item=>item.source===target),`Coverage must resolve to a retained point: ${target}`);}
for(const data of [one,two,combined]){
 for(const [index,topic] of data.sections.entries()){
  assert.equal(topic.number,index+1);assert(topic.blocks.length);
  const headings=topic.blocks.filter(block=>block.type==='heading').map(block=>block.text);
  if(data===combined)assert.equal(new Set(headings).size,headings.length,'Repeated combined subsection');
  for(const block of topic.blocks){assert(['heading','paragraph','list','table'].includes(block.type));if(block.type==='list')assert(block.items.every(Boolean));if(block.type==='table')assert(block.rows.every(row=>row.length===block.columns.length&&row.every(Boolean)));}
 }
 assert(!data.source&&!data.references&&!data.clarifications);
}
const allText=JSON.stringify(combined.sections);
for(const phrase of ['do not apply a blanket stop rule','HLA-B*58:01','until after the first food','Benzodiazepines are not routine treatment','irregular respirations','Usually lymphocyte predominant','Acetaminophen is not universally first-line','injections every 6 months','HAND is not itself an opportunistic infection','HIV-1 p24 antigen plus HIV-1 and HIV-2 antibodies'])assert(allText.includes(phrase),phrase);
assert(main.innerHTML.includes('Special thanks to Kristeen and Olivia.'));
for(const label of ['Focus guide one','Focus guide two','Combined guide'])assert(main.innerHTML.includes(`>${label}</button>`));
assert(!/Compare guides|Kristeen’s guide|Olivia’s guide|Reading references|clinical references|Source note|Download|\.pdf|target="_blank"|\bdownload=|href="https?:/i.test(main.innerHTML));
assert.equal((main.innerHTML.match(/class="condition-section focused-topic"/g)||[]).length,48);
const ids=[...main.innerHTML.matchAll(/\bid="([^\"]+)"/g)].map(match=>match[1]);assert.equal(new Set(ids).size,ids.length);
for(const mode of ['one','two'])assert(new RegExp(`data-focused-view="${mode}"[^>]*hidden`).test(main.innerHTML));assert(!/data-focused-view="combined"[^>]*hidden/.test(main.innerHTML));
for(const file of ['resources/focused-review-original.pdf','resources/focused-review-olivia-original.pdf'])assert(!fs.existsSync(path.join(root,file)),`Original PDF still publishable: ${file}`);
assert(main.innerHTML.includes('href="#/final/presentation/lupus"'));assert(main.innerHTML.includes('href="#/final/condition/parkinsons"'));
s.location.hash='#/final/study-guide';vm.runInContext('render()',s);assert(main.innerHTML.includes('href="#/final/focused-review"'));assert.equal((main.innerHTML.match(/class="study-tool-arrow"/g)||[]).length,5);
const workflow=fs.readFileSync(path.join(root,'.github/workflows/pages.yml'),'utf8');assert(workflow.includes('focused-review-combined-data.js'));
// Switching and controls operate on exactly one guide, including the combined edition.
const handlers={},views=['one','two','combined'].map(name=>({dataset:{focusedView:name},hidden:name!=='combined',panels:[{open:false},{open:false}],querySelectorAll(){return this.panels;}}));
const modes=views.map(view=>({dataset:{focusedGuide:view.dataset.focusedView},attributes:{},setAttribute(key,value){this.attributes[key]=value;}}));
const host={querySelectorAll:selector=>selector==='[data-focused-view]'?views:modes,addEventListener:(name,fn)=>{handlers[name]=fn;},removeEventListener:name=>{delete handlers[name];}};
s.reviewRoot={querySelector:()=>host};const dispose=vm.runInContext('FocusedReview.mount(reviewRoot)',s);
for(const [index,mode] of modes.entries()){
 handlers.click({target:{closest:selector=>selector==='[data-focused-guide]'?mode:null}});
 assert.equal(views.filter(view=>!view.hidden).length,1);assert(!views[index].hidden);assert.equal(mode.attributes['aria-pressed'],'true');
 const action={dataset:{focusedAction:'expand'},closest:()=>views[index]};
 handlers.click({target:{closest:selector=>selector==='[data-focused-action]'?action:null}});assert(views[index].panels.every(panel=>panel.open));
 action.dataset.focusedAction='collapse';handlers.click({target:{closest:selector=>selector==='[data-focused-action]'?action:null}});assert(views[index].panels.every(panel=>!panel.open));
}
const panel={dataset:{focusedTopic:'hiv'},open:false,querySelector(){return {focus(){panel.focused=true;}};},scrollIntoView(){this.scrolled=true;}};
handlers.change({target:{value:'hiv',matches:()=>true,closest:()=>({querySelectorAll:()=>[panel]})}});assert(panel.open&&panel.focused&&panel.scrolled);
dispose();assert.equal(Object.keys(handlers).length,0);
console.log(`Passed: all ${expected.length} source items preserved/consolidated, 16 combined topics, 18 recall rows, safety points, three anonymous labels, combined default, isolated controls/jumps, no source PDFs/downloads/reference UI, and cleanup.`);
