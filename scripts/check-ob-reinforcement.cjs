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
assert(objectives.filter(o=>o.id!=='family-centered-care').every(o=>!o.answer.length),'Other study notes remain for the user to supply');
assert(objectives.find(o=>o.id==='family-centered-care').answer.length,'Supplied family-centered notes are preserved');
assert(!Object.keys(bank.sections).some(id=>id.startsWith('sti-')),'Do not invent an STI bank from unrelated questions');
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
console.log('Passed: all 541 source rows and keys, 50 mapped sections, shuffled choices, grading, clinical corrections, exact weekly/exam placement, weekly-only infant review, collapsed lazy panels, preserved supplied family-centered notes, other blank study-note areas, and publication assets.');
