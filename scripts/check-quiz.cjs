const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),main={innerHTML:'',querySelector:()=>null,querySelectorAll:()=>[],focus:()=>{}};
const s={URL,document:{querySelector:()=>main,title:''},location:{hash:'#/final/quiz'},window:{addEventListener:()=>{},scrollTo:()=>{}},console};vm.createContext(s);
for(const f of ['content.js','presentations.js','conditions.js','videos.js','video-library.js','podcast.js','quiz-data.js','quiz.js','posters.js','app.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),s,{filename:f});
const data=vm.runInContext('practiceQuizData',s),qs=data.questions,score=answers=>vm.runInContext(`PracticeQuiz.grade(practiceQuizData.questions,${JSON.stringify(answers)})`,s);
const expected=['B','B','A','B','ABD','C','A','A','A','B','B','C','A','A','D'];assert.equal(qs.length,15);assert.equal(qs.map(q=>q.correct.join('')).join('|'),expected.join('|'));
for(let i=0;i<qs.length;i++){const q=qs[i];assert.equal(q.id,i+1);assert.equal(q.options.length,q.id===5?5:4);assert(q.prompt&&q.rationale);assert(q.correct.every(a=>q.options.some(o=>o.id===a)));assert.equal(q.multiple,q.id===5);}
assert.equal(qs.reduce((n,q)=>n+q.options.length,0),61);
const all=Object.fromEntries(qs.map(q=>[q.id,[...q.correct]]));assert.equal(score(all).correct,15);assert.equal(score(all).percentage,100);
const empty=score({});assert.equal(empty.correct,0);assert.equal(empty.unanswered,15);assert.equal(empty.percentage,0);
const mixed=score({1:['B'],2:['A'],5:['A','B','D']});assert.equal(mixed.correct,2);assert.equal(mixed.incorrect,1);assert.equal(mixed.unanswered,12);assert.equal(mixed.percentage,13);
const wrong=Object.fromEntries(qs.map(q=>[q.id,[q.options.find(o=>!q.correct.includes(o.id)).id]]));assert.equal(score(wrong).correct,0);assert.equal(score(wrong).incorrect,15);
for(let bits=0;bits<32;bits++){const selected=['A','B','C','D','E'].filter((_,i)=>bits&(1<<i));const result=score({5:selected}).results.find(r=>r.id===5);assert.equal(result.status,selected.length===0?'unanswered':selected.join('')==='ABD'?'correct':'incorrect');}
assert(main.innerHTML.includes('Special thanks to Danalky.'));assert(main.innerHTML.includes('aria-current="page"><span>Practice quiz'));
assert.equal((main.innerHTML.match(/type="radio"/g)||[]).length,56);assert.equal((main.innerHTML.match(/type="checkbox"/g)||[]).length,5);
assert(!main.innerHTML.includes('Provided answer-key rationale:'));assert(!main.innerHTML.includes('quiz-verdict'));assert(main.innerHTML.includes('Submit quiz'));assert(main.innerHTML.includes('Reset quiz'));
assert(main.innerHTML.indexOf('id="quiz-reading-title"')>main.innerHTML.indexOf('id="quiz-question-15"'));
s.location.hash='#/final';vm.runInContext('render()',s);assert(main.innerHTML.includes('href="#/final/quiz"'));assert(main.innerHTML.indexOf('study-guide-entry')<main.innerHTML.indexOf('exam-section-nav'));
s.location.hash='#/final/study-guide';vm.runInContext('render()',s);assert(main.innerHTML.includes('Practice quiz →'));assert.equal((main.innerHTML.match(/class="condition-topic"/g)||[]).length,14);
console.log('Passed: source-matched 15-question key / 61 options, all 32 multi-select combinations, full/empty/wrong/partial scoring, hidden answers before submission, quiz attribution, routing, preserved overview and bottom references.');
