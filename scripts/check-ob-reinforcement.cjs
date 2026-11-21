const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const main={innerHTML:'',querySelector:()=>null,querySelectorAll:()=>[],focus(){}};
const s={URL,console,document:{querySelector:()=>main,title:''},location:{hash:'#/'},window:{addEventListener(){},scrollTo(){}},PresentationViewer:{mount:()=>()=>{}}};vm.createContext(s);
for(const match of html.matchAll(/<script src="([^?]+)\?[^\"]+" defer><\/script>/g))if(!['viewer.js','analytics.js'].includes(match[1]))vm.runInContext(fs.readFileSync(path.join(root,match[1]),'utf8'),s,{filename:match[1]});
const {course,objectives,map,grade}=vm.runInContext('({course:obCourse,objectives:obStudyObjectives,map:obQuestionMap,grade:SectionQuizzes.grade})',s);
const bank=JSON.parse(fs.readFileSync(path.join(root,'ob-practice-questions/ob-review.json'),'utf8'));
const audit=JSON.parse(fs.readFileSync(path.join(root,'docs/ob-reinforcement-audit.json'),'utf8'));
assert.equal(bank.id,'ob-review');assert.equal(map.questionCount,541);assert.equal(audit.sourceRows,541);assert.equal(audit.publishedQuestions,541);assert.equal(audit.excluded.length,0);
const extras=new Set(map.extras.map(group=>group.id)),ids=new Set(),numbers=new Set(),answers=new Map();let count=0;
for(const [section,questions] of Object.entries(bank.sections)){
 assert(objectives.some(o=>o.id===section)||extras.has(section),'Unknown section '+section);assert.equal(map.sections[section],questions.length);
 for(const q of questions){
  count++;assert(!ids.has(q.id));ids.add(q.id);assert(!numbers.has(q.sourceNumber));numbers.add(q.sourceNumber);
  assert(/^OBR-\d{4}$/.test(q.id));assert(q.prompt&&q.rationale);assert.equal(q.type,'mcq');assert.equal(q.options.length,4);assert.equal(q.correct.length,1);
  assert.equal(new Set(q.options.map(o=>o.id)).size,4);assert.equal(new Set(q.options.map(o=>o.text.trim().toLowerCase())).size,4,'Duplicate choices '+q.id);
  const right=q.options.find(o=>o.id===q.correct[0]);assert(right);answers.set(q.sourceNumber,{question:q.prompt,answer:right.text,options:q.options});
  assert.equal(grade(q,[]),'unanswered');for(const option of q.options)assert.equal(grade(q,[option.id]),q.correct.includes(option.id)?'correct':'incorrect');
  assert.equal(grade(q,q.options.map(o=>o.id)),'incorrect');assert.equal(grade(q,[...q.correct,...q.correct]),'correct');
  const record=audit.mapping.find(row=>row.sourceNumber===q.sourceNumber);assert.equal(record.sectionId,section);
  for(const ref of q.references||[])assert(/^https:\/\//.test(ref.url));
 }
}
assert.equal(count,541);assert.deepEqual([...numbers].sort((a,b)=>a-b),Array.from({length:541},(_,i)=>i+1));assert.equal(Object.keys(bank.sections).length,50);
for(const letter of ['A','B','C','D'])assert(audit.correctChoiceDistribution[letter]>100,'Avoid position-only answer cues');
const render=route=>{s.location.hash=route;vm.runInContext('render()',s);return main.innerHTML;};
const sections=markup=>[...markup.matchAll(/data-practice-section="([^"]+)"/g)].map(m=>m[1]).sort();
for(const topic of course.topics){
 const expected=Array.from(objectives.filter(o=>o.topicIds.includes(topic.id)&&map.sections[o.id]),o=>o.id).sort();
 const markup=render('#/ob-final/topic/'+topic.id);assert.deepEqual(sections(markup),expected,topic.id);
 assert(!markup.includes('data-practice-question='),'Question content loads on opening');assert(!/class="section-practice"[^>]*\bopen\b/.test(markup));
 assert(![...extras].some(id=>markup.includes('data-practice-section="'+id+'"')),'Pediatric background must stay outside final topics');
}
for(const week of course.weeks){
 const expected=Array.from(objectives.filter(o=>map.sections[o.id]&&(week.reviewOf?o.weekIds.some(id=>week.reviewOf.includes(id)):o.weekIds.includes(week.id))),o=>o.id);
 expected.push(...map.extras.filter(group=>group.weekIds.includes(week.id)).map(group=>group.id));
 const markup=render('#/ob-final/'+week.id);assert.deepEqual(sections(markup),expected.sort(),week.id);
 assert.equal(new Set(sections(markup)).size,sections(markup).length);assert(!markup.includes('data-practice-question='));
}
const completed=new Set(JSON.parse(fs.readFileSync(path.join(root,'docs/ob-objectives-map.json'),'utf8')).completedObjectiveIds);
assert(objectives.every(o=>Boolean(o.answer.length)===completed.has(o.id)),'Note completion agrees with the objective audit');
assert(objectives.filter(o=>o.weekIds.includes('week-1')).every(o=>o.answer.length),'All Week 1 notes are preserved');
assert(!Object.keys(bank.sections).some(id=>id.startsWith('sti-')),'Do not invent an STI bank from unrelated questions');
const week1=render('#/ob-final/week-1');
assert(week1.includes('<h2>Practice questions</h2>'));assert(week1.includes('8 questions available here.'));
assert.equal((week1.match(/data-ob-practice-open=/g)||[]).length,1);assert(week1.includes('data-ob-practice-open="conception-fetal-development"'));
assert(week1.indexOf('class="ob-week-infographic"')<week1.indexOf('class="ob-practice-overview"'));assert(week1.indexOf('class="ob-practice-overview"')<week1.indexOf('class="ob-objectives"'));
assert(week1.includes('Practice questions (8)'));assert(!week1.includes('data-practice-question='));
for(const week of course.weeks){
 const markup=render('#/ob-final/'+week.id),shortcuts=[...markup.matchAll(/data-ob-practice-open="([^"]+)"/g)].map(m=>m[1]).sort();
 assert.deepEqual(shortcuts,sections(markup),'Every existing question section has a visible entry: '+week.id);
 if(shortcuts.length>4)assert(markup.includes('<details class="ob-practice-topic-list"><summary>'),'Long topic lists stay compact');
}
assert(answers.get(83).answer.includes('unreliable'));assert(answers.get(95).answer.includes('within 3 weeks'));assert(answers.get(195).answer.includes('6 cm'));
assert(answers.get(103).answer.includes('100/min or greater'));assert(!answers.get(216).answer.includes('Reposition, oxygen'));
assert(answers.get(307).answer.includes('threshold chart'));assert(answers.get(540).question.includes('obsessive-compulsive'));
// Optional independent fidelity check against the original CSV (the CSV is never published).
function readCSV(text){
 const rows=[];let row=[],cell='',quoted=false;
 for(let i=0;i<text.length;i++){const c=text[i];if(c==='"'){if(quoted&&text[i+1]==='"'){cell+='"';i++;}else quoted=!quoted;}else if(c===','&&!quoted){row.push(cell);cell='';}else if((c==='\n'||c==='\r')&&!quoted){if(c==='\r'&&text[i+1]==='\n')i++;row.push(cell);if(row.some(Boolean))rows.push(row);row=[];cell='';}else cell+=c;}
 if(cell||row.length){row.push(cell);rows.push(row);}return rows;
}
const arg=process.argv.find(arg=>arg.startsWith('--source='));
if(arg){
 const bytes=fs.readFileSync(arg.slice(9));assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),audit.sha256);
 const [headers,...rows]=readCSV(bytes.toString('utf8').replace(/^\uFEFF/,''));assert.equal(rows.length,541);
 for(const cells of rows){const original=Object.fromEntries(headers.map((key,i)=>[key,cells[i]])),n=Number(original.number),edit=audit.reviewedEdits.find(e=>e.sourceNumber===n),expected=edit?.after||original,actual=answers.get(n);
  assert.equal(actual.question,expected.question);assert.equal(actual.answer,expected.correct_answer,`Source key ${n}`);
  assert.deepEqual(actual.options.map(o=>o.text).sort(),['correct_answer','distractor_1','distractor_2','distractor_3'].map(key=>expected[key]).sort(),`Source choices ${n}`);
 }
}
const workflow=fs.readFileSync(path.join(root,'.github/workflows/pages.yml'),'utf8');for(const asset of ['ob-question-map.js','ob-question-quizzes.js','ob-practice-questions'])assert(workflow.includes(asset));
async function checkPracticeShortcut(){
 const events=()=>({handlers:new Map(),addEventListener(type,fn){this.handlers.set(type,fn);},removeEventListener(type,fn){assert.equal(this.handlers.get(type),fn);this.handlers.delete(type);}});
 const host=events(),button=Object.assign(events(),{dataset:{obPracticeOpen:'conception-fetal-development'}}),body={innerHTML:''};
 const review={tagName:'DETAILS',open:false,parentElement:host},objective={tagName:'DETAILS',open:false,parentElement:review};
 let isOpen=false,focused=false,scrolled=false,fetches=0;
 const panel=Object.assign(events(),{dataset:{practiceTopic:'ob-review',practiceSection:'conception-fetal-development'},parentElement:objective,
  querySelector(selector){return selector==='.section-practice-body'?body:selector==='summary'?{focus(options){assert(options.preventScroll);focused=true;}}:null;},
  scrollIntoView(options){assert.equal(options.block,'start');scrolled=true;}});
 Object.defineProperty(panel,'open',{get(){return isOpen;},set(value){const changed=isOpen!==value;isOpen=value;if(changed)queueMicrotask(()=>this.handlers.get('toggle')?.());}});
 host.querySelectorAll=selector=>selector==='.section-practice'?[panel]:selector==='[data-ob-practice-open]'?[button]:[];
 const c={console,queueMicrotask,escapeHTML:value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])),fetch:async url=>{fetches++;assert.equal(url,'ob-practice-questions/ob-review.json?v=20261120-ob-reinforcement');return {ok:true,json:async()=>bank};}};
 vm.createContext(c);for(const file of ['section-quizzes.js','ob-question-map.js','ob-question-quizzes.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),c,{filename:file});
 const practice=vm.runInContext('OBReinforcement',c),dispose=practice.mount(host);
 assert.equal(fetches,0,'Do not fetch until the practice shortcut is used');button.handlers.get('click')();await new Promise(resolve=>setImmediate(resolve));
 assert(review.open&&objective.open&&panel.open,'Open every enclosing review/objective and the question panel');assert(focused&&scrolled);
 assert.equal(fetches,1);assert(body.innerHTML.includes('Question 1 of 8'));assert.equal((body.innerHTML.match(/data-practice-question=/g)||[]).length,1);
 assert(body.innerHTML.includes('Check answer'));assert(!body.innerHTML.includes('<strong>Correct answer'));
 button.handlers.get('click')();await new Promise(resolve=>setImmediate(resolve));assert.equal(fetches,1,'Reuse loaded questions');
 dispose();assert.equal(button.handlers.size,0);assert.equal(panel.handlers.size,0);assert.equal(host.handlers.size,0);
 console.log('Passed: all 541 source rows/keys, 50 mapped sections, exact weekly/exam placement and visible shortcuts, Week 1’s 8 questions, one-click ancestor opening/focus/scroll/lazy load, one question at a time, hidden feedback, cleanup, preserved notes and publication assets.');
}
checkPracticeShortcut().catch(error=>{console.error(error);process.exitCode=1;});
