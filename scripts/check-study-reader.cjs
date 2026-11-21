const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),vm=require('node:vm'),assert=require('node:assert/strict');
const {loadReader,prepare}=require('./prepare-study-reader.cjs');
const root=path.resolve(__dirname,'..'),reader=loadReader(),pages=reader.pages();
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const main={innerHTML:'',querySelector:()=>null,querySelectorAll:()=>[],focus(){}};
const c={URL,console,document:{querySelector:()=>main,title:''},location:{hash:'#/'},window:{addEventListener(){},scrollTo(){}},PresentationViewer:{mount:()=>()=>{}}};vm.createContext(c);
for(const match of html.matchAll(/<script src="([^?]+)\?[^\"]+" defer><\/script>/g))if(!['viewer.js','analytics.js'].includes(match[1]))vm.runInContext(fs.readFileSync(path.join(root,match[1]),'utf8'),c,{filename:match[1]});
const data=vm.runInContext('({ob:obCourse,objectives:obStudyObjectives,weeks:studyWeeks,topics:examTopics,conditions:conditionNotes})',c);
const escape=value=>String(value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const decode=value=>value.replace(/&(amp|lt|gt|quot|#39);/g,(_,entity)=>({amp:'&',lt:'<',gt:'>',quot:'"','#39':"'"}[entity]));
const plain=value=>decode(value.replace(/<\/?(?:strong|em|span)\b[^>]*>/g,'').replace(/<[^>]+>/g,' ')).replace(/\s+/g,' ').trim();
const normalized=value=>String(value).replace(/\s+/g,' ').trim();
function originalText(blocks){return blocks.flatMap(block=>{
 if(typeof block==='string')return [block];
 if(block.type==='group')return [block.title,...originalText(block.blocks)];
 if(['list','overview'].includes(block.type))return block.items;
 if(block.type==='facts')return block.items.flatMap(item=>[item.label,item.text]);
 if(block.type==='cards')return block.items.flatMap(item=>[item.title,...item.fields.flat()]);
 if(block.type==='callout')return [block.title,block.text];
 return [block.text];
});}
const render=route=>{c.location.hash=route;vm.runInContext('render()',c);return main.innerHTML;};
const expected=[];
for(const week of data.ob.weeks){const objectives=week.reviewOf?week.reviewOf.flatMap(id=>data.objectives.filter(o=>o.weekIds.includes(id))):data.objectives.filter(o=>o.weekIds.includes(week.id));if(objectives.some(o=>o.answer.length))expected.push('#/ob-final/'+week.id);}
for(const topic of data.ob.topics)if(data.objectives.some(o=>o.topicIds.includes(topic.id)&&o.answer.length)||Object.values(topic.content).some(b=>b.length))expected.push('#/ob-final/topic/'+topic.id);
for(const week of data.weeks)if(week.objectives.some(o=>o.answer.length))expected.push('#/final/week-'+week.number);
for(const topic of data.topics)if(Object.values(data.conditions[topic.id]?.content||{}).some(b=>b.length))expected.push('#/final/condition/'+topic.id);
assert.deepEqual(Array.from(pages,p=>p.route),expected);assert.equal(pages.length,29);assert.equal(new Set(pages.map(p=>p.path)).size,pages.length);
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'green-light-reader-check-'));
let textChecks=0;
try{
 prepare(temp);
 for(const page of pages){
  const document=fs.readFileSync(path.join(temp,page.path),'utf8'),article=document.match(/<article aria-labelledby="reader-title">([\s\S]*?)<\/article>/)?.[1];assert(article,page.route);const text=plain(article);
  assert.equal((document.match(/<h1\b/g)||[]).length,1);assert(document.includes('lang="en"'));assert(document.includes('width=device-width, initial-scale=1'));assert(!/user-scalable|maximum-scale/.test(document));
  assert(!/<(?:script|iframe|video|audio|details|button)\b|<[^>]+\s(?:hidden\b|aria-hidden=)|display:\s*none/.test(article),'Continuous notes without controls or hidden content: '+page.route);
  assert(document.includes('href="../../'+escape(page.route)+'"'));assert(document.includes('id="study-article" tabindex="-1"'));assert(document.includes('Listen to Page')&&document.includes('Speak Screen'));
  assert(!document.includes('speechSynthesis')&&!document.includes('Practice questions (')&&!document.includes('data-question'));
  const check=value=>{assert(text.includes(normalized(value)),page.route+': missing original text '+value.slice(0,90));textChecks++;};
  const refs=[];
  if(page.kind==='med-condition'){
   const condition=data.conditions[page.route.split('/').pop()];for(const blocks of Object.values(condition.content))originalText(blocks).forEach(check);
   condition.clarifications.forEach(item=>{check(item.title);check(item.text);});check(condition.reading);refs.push(...condition.references);
  }else{
   const expectedObjectives=page.kind==='ob'?(page.topic?data.objectives.filter(o=>o.topicIds.includes(page.topic.id)):(()=>{const week=data.ob.weeks.find(w=>'#/ob-final/'+w.id===page.route);return week.reviewOf?week.reviewOf.flatMap(id=>data.objectives.filter(o=>o.weekIds.includes(id))):data.objectives.filter(o=>o.weekIds.includes(week.id));})()):data.weeks.find(w=>'#/final/week-'+w.number===page.route).objectives;
   assert.deepEqual(Array.from(page.objectives,o=>o.id),Array.from(expectedObjectives,o=>o.id));
   for(const o of expectedObjectives){check(o.title);check(o.text);originalText(o.answer).forEach(check);if(o.answerSourceNote)check(o.answerSourceNote);refs.push(...o.answerSources||[]);}
   if(page.topic)for(const blocks of Object.values(page.topic.content))originalText(blocks).forEach(check);
   if(page.week){originalText(page.week.reading||[]).forEach(check);originalText(page.week.assignments||[]).forEach(check);(page.week.reviewNotes||[]).forEach(check);refs.push(...page.week.sourceReferences||[]);}
  }
  for(const ref of refs){check(ref.title);if(ref.supports)check(ref.supports);assert(document.includes('href="'+escape(ref.url.startsWith('#/')?'../../'+ref.url:ref.url)+'"'));}
  for(const match of document.matchAll(/(?:href|src)="([^"]+)"/g)){
   const url=decode(match[1]);if(url.startsWith('https:'))continue;
   if(url.startsWith('#')){assert(document.includes('id="'+url.slice(1)+'"'));continue;}
   const target=path.resolve(path.dirname(path.join(temp,page.path)),url.split(/[?#]/)[0]);
   if(url.startsWith('../../#/')){assert.equal(target,temp);continue;}
   assert(fs.existsSync(target)||target===path.join(temp,'favicon.svg'),'Reader asset '+url);
  }
  const regular=render(page.route);assert(regular.includes(reader.link(page.route)),page.route+' has its Reader view entry');
 }
 for(const route of ['#/','#/ob-final','#/ob-final/study-guide','#/ob-final/week-9','#/ob-final/week-10','#/ob-final/august-4','#/ob-final/topic/normal-newborn','#/ob-final/practice','#/ob-final/practice/exam-1','#/ob-final/podcast','#/ob-final/presentation/postpartum-care','#/final/study-guide','#/final/week-8','#/final/week-9','#/final/quiz','#/final/nclex','#/final/podcast','#/final/presentation/parkinsons'])assert(!render(route).includes('class="study-reader-link"'),'No empty/unrelated Reader button: '+route);
 const weekly=render('#/ob-final/week-7');assert.equal((weekly.match(/class="study-reader-link"/g)||[]).length,1);assert(!/<details class="(?:objective ob-study-objective|ob-note-topic|ob-note-sources)"[^>]*\bopen\b/.test(weekly));assert(weekly.includes('class="ob-practice-overview"'));
 const all=data.objectives,unsafe='<img src=x onerror="alert(1)"> & "care"',o=all.find(o=>o.id==='postpartum-physiology'),saved=o.answer[1].blocks[0].items[0].text;
 o.answer[1].blocks[0].items[0].text=unsafe;const altered=vm.runInContext('StudyReader.documentFor(StudyReader.pages().find(p=>p.route==="#/ob-final/week-7"))',c);assert(altered.includes(escape(unsafe)));assert(!altered.includes('<img src=x'));o.answer[1].blocks[0].items[0].text=saved;
 assert.equal(reader.link('#/ob-final/week-99'),'');assert.equal(reader.link('#/ob-final/topic/__proto__'),'');
 const invalid=reader.pages().find(p=>p.route==='#/ob-final/week-7'),ref=invalid.objectives[0].answerSources[0],url=ref.url;ref.url='javascript:alert(1)';assert.throws(()=>reader.documentFor(invalid),/Unsupported reader reference/);ref.url=url;
 const formatted=fs.readFileSync(path.join(temp,'reader/ob/week-7.html'),'utf8');assert(formatted.includes('<strong data-ob-emphasis="bold">'));
 const style=fs.readFileSync(path.join(root,'study-reader.css'),'utf8');
 const luminance=hex=>{const rgb=hex.match(/[a-f\d]{2}/gi).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722;};
 const palettes=[...style.matchAll(/:root\{([^}]+)\}/g)].map(match=>Object.fromEntries([...match[1].matchAll(/--([a-z]+):#([a-f\d]{6})/g)].map(m=>[m[1],m[2]])));
 const cautions=[...style.matchAll(/\[data-ob-emphasis~="red"\]\{color:#([a-f\d]{6})\}/g)].map(m=>m[1]);
 assert.equal(palettes.length,2);assert.equal(cautions.length,2);for(const [i,palette] of palettes.entries())for(const foreground of [palette.ink,palette.green,cautions[i]]){const values=[luminance(foreground),luminance(palette.paper)].sort((a,b)=>b-a);assert((values[0]+.05)/(values[1]+.05)>=4.5,'Readable normal, link and caution text in both themes');}
 const workflow=fs.readFileSync(path.join(root,'.github/workflows/pages.yml'),'utf8');assert(workflow.includes('cp study-reader.js _site/'));assert(workflow.includes('node scripts/prepare-study-reader.cjs _site'));assert(workflow.includes('node scripts/check-study-reader.cjs'));assert(workflow.indexOf('node scripts/prepare-study-reader.cjs _site')<workflow.indexOf('- name: Upload website'));
 console.log(`Passed: ${pages.length} generated OB/Med-Surg articles, ${textChecks} original text/source checks, no-script continuous notes, shared emphasis, visible entries/returns, honest empty pages, safe escaping/URLs, zoom/contrast styles and publication assets. Safari/iPhone availability still needs a device check.`);
}finally{fs.rmSync(temp,{recursive:true,force:true});}
