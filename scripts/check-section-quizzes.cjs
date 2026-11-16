const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm'), assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const main = {innerHTML:'',querySelector:()=>null,querySelectorAll:()=>[],focus:()=>{}};
const context = {URL,document:{querySelector:()=>main,title:''},location:{hash:'#/final/study-guide'},window:{addEventListener:()=>{},scrollTo:()=>{}},console};
vm.createContext(context);
for (const file of ['content.js','presentations.js','conditions.js','videos.js','video-library.js','podcast.js','quiz-data.js','quiz.js','posters.js','section-quizzes.js','app.js']) vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
const {topics,sections,grade} = vm.runInContext('({topics:examTopics,sections:conditionSections,grade:SectionQuizzes.grade})',context);
const ids = new Set(); let total=0, multiple=0, combinations=0;
for (const topic of topics) {
  const bank = JSON.parse(fs.readFileSync(path.join(root,'practice-questions',topic.id+'.json')));
  assert.equal(bank.id,topic.id);
  assert.deepEqual(Object.keys(bank.sections).sort(),Array.from(sections,s=>s.id).sort());
  context.location.hash='#/final/condition/'+topic.id; vm.runInContext('render()',context);
  assert.equal((main.innerHTML.match(/class="section-practice"/g)||[]).length,16);
  assert(!/class="section-practice"[^>]*\bopen\b/.test(main.innerHTML),'Practice must start collapsed');
  assert(!main.innerHTML.includes('data-practice-question='),'Questions/answers must load on demand');
  for (const section of sections) {
    const questions=bank.sections[section.id]; assert(questions.length>=1 && questions.length<=5,topic.id+'/'+section.id);
    for (const q of questions) {
      total++; assert(!ids.has(q.id),'Duplicate '+q.id); ids.add(q.id);
      assert(/^[A-Z0-9-]+$/.test(q.id)); assert(q.prompt?.trim() && q.rationale?.trim());
      assert(['mcq','sata'].includes(q.type)); assert(q.options.length>=4 && q.options.length<=6);
      assert.equal(new Set(q.options.map(o=>o.id)).size,q.options.length);
      assert.equal(new Set(q.options.map(o=>o.text.trim())).size,q.options.length,'Duplicate option '+q.id);
      assert(q.options.every(o=>/^[A-F]$/.test(o.id)&&o.text.trim()));
      assert(q.correct.length && new Set(q.correct).size===q.correct.length);
      assert(q.correct.every(id=>q.options.some(o=>o.id===id)));
      if(q.type==='mcq') assert.equal(q.correct.length,1); else multiple++;
      assert.equal(grade(q,[]),'unanswered'); assert.equal(grade(q,q.correct),'correct');
      // Every possible selection, including omitted keys and extra distractors, must use exact-set scoring.
      for(let mask=1;mask<(1<<q.options.length);mask++) {
        const selected=q.options.filter((o,i)=>mask&(1<<i)).map(o=>o.id);
        const expected=selected.length===q.correct.length && selected.every(id=>q.correct.includes(id))?'correct':'incorrect';
        assert.equal(grade(q,selected),expected,q.id+' mask '+mask); combinations++;
      }
      assert.equal(grade(q,[...q.correct,...q.correct]),'correct','Duplicate values must not inflate scoring');
    }
  }
}
const workflow=fs.readFileSync(path.join(root,'.github/workflows/pages.yml'),'utf8'), html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(workflow.includes('section-quizzes.js')); assert(workflow.includes('practice-questions resources _site/')); assert(html.indexOf('section-quizzes.js')<html.indexOf('app.js'));
assert.equal(topics.length,14); assert.equal(sections.length,16); assert.equal(total,617); assert.equal(multiple,27);
console.log(`Passed: ${total} questions across all 224 sections / 14 conditions, ${multiple} multi-select items, ${combinations} answer combinations, valid unique keys/options, collapsed lazy-loaded panels, preserved routes and deployment assets.`);
