const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),main={innerHTML:'',querySelector:()=>null,querySelectorAll:()=>[],focus:()=>{}};
const sandbox={URL,document:{querySelector:()=>main,title:''},location:{hash:'#/final/nclex'},window:{addEventListener:()=>{},scrollTo:()=>{}},console};vm.createContext(sandbox);
for(const file of ['content.js','presentations.js','conditions.js','videos.js','video-library.js','podcast.js','quiz-data.js','quiz.js','presentation-quiz-data.js','presentation-quizzes.js','posters.js','section-quizzes.js','app.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),sandbox,{filename:file});
const {banks,decks,grade}=vm.runInContext('({banks:presentationQuizData,decks:presentationDecks,grade:PracticeQuiz.grade})',sandbox);
assert.equal(Object.keys(banks).length,16);assert.equal(Object.keys(decks).length,16);
assert(main.innerHTML.includes('Special thanks to a distinguished fellow.'));assert(main.innerHTML.includes('distinguished-hat'));assert(main.innerHTML.includes('#dfb948'));assert(main.innerHTML.includes('🩺'));
assert.equal((main.innerHTML.match(/<option /g)||[]).length,17);assert(!main.innerHTML.includes('<form'),'Start with a presentation choice');
let count=0,multi=0,sourceCount=0,combinations=0,excluded=0;
for(const [id,bank] of Object.entries(banks)){
 assert.equal(bank.id,id);assert(decks[id]);assert(bank.questions.length);
 sourceCount+=new Set(bank.questions.map(q=>q.sourceQuestionNumber)).size;excluded+=bank.excluded.length;
 bank.questions.forEach((q,index)=>{
  count++;if(q.multiple)multi++;
  assert.equal(q.id,index+1);assert(q.prompt.trim()&&q.rationale.trim());assert(q.options.length>=4&&q.options.length<=7);
  assert.equal(new Set(q.options.map(o=>o.id)).size,q.options.length);assert.equal(new Set(q.options.map(o=>o.text)).size,q.options.length);
  assert(q.options.every(o=>/^[A-G]$/.test(o.id)&&o.text.trim()));assert(q.correct.length);assert.equal(new Set(q.correct).size,q.correct.length);assert(q.correct.every(key=>q.options.some(o=>o.id===key)));
  if(!q.multiple)assert.equal(q.correct.length,1);if(q.selectionCount){assert(q.multiple);assert.equal(q.correct.length,q.selectionCount);}
  assert(q.sourcePages.length);assert(q.sourcePages.every(page=>Number.isInteger(page)&&page>0&&page<=decks[id].pages));
  assert(['presentation','clinical-review'].includes(q.answerSource));assert(['presentation','clinical-review'].includes(q.rationaleSource));assert(q.references.length);assert(q.references.every(ref=>new URL(ref.url).protocol==='https:'));
  if(q.answerSource==='clinical-review'){assert(q.reviewNote);assert(q.presentationCorrect);assert.notEqual(q.correct.join(','),q.presentationCorrect.join(','));}
  const empty=grade([q],{});assert.equal(empty.unanswered,1);
  for(let mask=1;mask<(1<<q.options.length);mask++){
   const values=q.options.filter((o,i)=>mask&(1<<i)).map(o=>o.id),exact=values.length===q.correct.length&&values.every(value=>q.correct.includes(value));
   assert.equal(grade([q],{[q.id]:values}).correct,exact?1:0,id+'/'+q.id+'/'+mask);combinations++;
  }
 });
 sandbox.location.hash='#/final/nclex/'+id;vm.runInContext('render()',sandbox);
 assert.equal((main.innerHTML.match(/class="quiz-question(?: |")/g)||[]).length,bank.questions.length);
 assert(main.innerHTML.includes(`value="${id}" selected`));assert(main.innerHTML.includes('Submit quiz'));assert(main.innerHTML.includes('Reset quiz'));assert(!main.innerHTML.includes('quiz-verdict'));assert(!main.innerHTML.includes('Clinical clarification:'));
 assert(main.innerHTML.indexOf('id="quiz-reading-title"')>main.innerHTML.indexOf('class="quiz-questions"'));
 assert(main.innerHTML.includes(decks[id].pdf+'#page='+bank.questions[0].sourcePages[0]));
}
assert.equal(count,33);assert.equal(sourceCount,30);assert.equal(excluded,2);
assert.equal(banks['osteomyelitis'].questions[1].correct.join(''),'BCD');assert.equal(banks['uterine-cancer'].questions[1].correct.join(''),'BC');
assert.equal(banks['als'].questions.filter(q=>q.caseGroup).length,3);assert.equal(banks['als'].questions.filter(q=>q.selectionCount===2).length,2);assert.equal(banks['uterine-cancer'].questions[0].selectionCount,3);
const audit=JSON.parse(fs.readFileSync(path.join(root,'docs/presentation-question-review.json')));assert.equal(audit.sourcePDFs.length,16);
for(const pdf of audit.sourcePDFs){assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root,decks[pdf.id].pdf))).digest('hex'),pdf.sha256);}
sandbox.location.hash='#/final/study-guide';vm.runInContext('render()',sandbox);assert(main.innerHTML.includes('href="#/final/nclex"'));assert(main.innerHTML.includes('href="#/final/quiz"'));assert(main.innerHTML.includes('href="#/final/podcast"'));
const workflow=fs.readFileSync(path.join(root,'.github/workflows/pages.yml'),'utf8');assert(workflow.includes('presentation-quiz-data.js presentation-quizzes.js'));
console.log(`Passed: ${count} scored items (${multi} multi-select), 30 source questions across all 16 decks, ${combinations} answer combinations, linked case parts, original PDF hashes/slide provenance, two explicit key corrections, two documented exclusions, hidden feedback, independent topic routes and deployment assets.`);
