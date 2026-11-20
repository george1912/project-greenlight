const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const escapeHTML=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const s={escapeHTML,console,events:[],SiteAnalytics:{event:name=>s.events.push(name)}};vm.createContext(s);
for(const file of ['quiz-data.js','quiz.js','quiz-review.js','ob-practice-data.js','ob-practice.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),s,{filename:file});
const exams=vm.runInContext('obPracticeExams',s),create=data=>{s.bank=data;return vm.runInContext('createQuestionReviewQuiz(bank)',s);};
assert.deepEqual(Array.from(exams,e=>e.questions.length),[64,80,80]);
const audit=JSON.parse(fs.readFileSync(path.join(root,'docs/ob-practice-audit.json')));
const canonical=q=>q.type==='choice'?[...q.correct]:q.type==='text'?q.fields.map(f=>f.accepted[0]):Object.fromEntries(q.groups.map(g=>[g.id,[...g.correct]]));
const plain=value=>JSON.parse(JSON.stringify(value));
let combinations=0;
for(const [i,exam] of exams.entries()){
 const quiz=create(exam),ids=new Set();
 for(const q of exam.questions){
  assert(!ids.has(q.id));ids.add(q.id);assert(q.prompt&&q.rationale&&q.category);
  assert.equal(quiz.grade(q,canonical(q)).status,'correct',`${exam.id}/${q.id}: canonical key`);
  if(q.type==='choice'){
   assert(q.correct.length);assert(q.correct.every(id=>q.options.some(o=>o.id===id)));
   assert.equal(new Set(q.options.map(o=>o.id)).size,q.options.length);
   for(let bits=0;bits<2**q.options.length;bits++){
    const selected=q.options.filter((_,i)=>bits&(1<<i)).map(o=>o.id);
    const expected=!selected.length?'unanswered':selected.join('')===q.correct.join('')?'correct':'incorrect';
    assert.equal(quiz.grade(q,selected).status,expected,`${exam.id}/${q.id}: ${selected}`);combinations++;
   }
  } else if(q.type==='text'){
   const answers=canonical(q);answers[0]='definitely incorrect';assert.equal(quiz.grade(q,answers).status,'incorrect');
   for(const [j,field] of q.fields.entries())for(const alias of field.accepted){const a=canonical(q);a[j]='  '+alias.toUpperCase()+'  ';assert.equal(quiz.grade(q,a).status,'correct',`${exam.id}/${q.id}: ${alias}`);}
   q.fields.forEach((field,j)=>{if(field.numericRange){const a=canonical(q);a[j]=String((field.numericRange[0]+field.numericRange[1])/2);assert.equal(quiz.grade(q,a).status,'correct');a[j]=String(field.numericRange[1]+1);assert.equal(quiz.grade(q,a).status,'incorrect');}});
  } else {
   for(const group of q.groups){
    assert.equal(group.options.length,q.format==='Bowtie'&&group.id!=='condition'?5:4);
    assert.equal(group.correct.length,group.selectionCount);
    for(const alt of group.acceptedSets||[group.correct]){const a=canonical(q);a[group.id]=alt;assert.equal(quiz.grade(q,a).status,'correct',`${exam.id}/${q.id}/${group.id}: allowed alternative`);}
    const a=canonical(q);a[group.id]=[group.options.find(o=>!group.correct.includes(o.id)).id];assert.equal(quiz.grade(q,a).status,'incorrect');
   }
  }
  if(q.reviewNote)assert.equal(q.rationaleSource,'reviewed');
 }
 assert.equal(audit.exams[i].count,exam.questions.length);
 // All source labels survive in their original order; bowties are extra items, not missing numbers.
 const numbered=exam.questions.filter(q=>/^\d+$/.test(q.id));assert.equal(numbered.length,i===0?62:76);
 numbered.forEach((q,i)=>assert.equal(q.id,String(i+1)));
}
assert.deepEqual(plain(audit.exams[2].missingSourceKeys),['bowtie-2']);
const q=(exam,id)=>exams[exam-1].questions.find(q=>q.id===String(id));
assert.equal(q(1,10).correct.join(''),'B');assert.equal(q(1,24).correct.join(''),'A');assert.equal(q(1,53).correct.join(''),'B');assert.equal(q(2,25).correct.join(''),'BCF');
assert(q(2,45).options[1].text.includes('5 years'));assert(q(3,'bowtie-2').reviewNote.includes('no answer'));

// A small DOM fixture exercises the shipped event handlers, generated inputs, and lifecycle.
// It is intentionally limited to this player's controls; it does not claim browser/layout QA.
const decode=value=>value.replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
function fixture(quiz){
 let html='';const listeners=new Map(),focus=[];
 const feedback={focus:()=>focus.push('feedback'),scrollIntoView(){}},card={focus:()=>focus.push('question'),scrollIntoView(){}},error={textContent:''};
 const host={inputs:[],addEventListener(name,fn){listeners.set(name,fn);},removeEventListener(name,fn){assert.equal(listeners.get(name),fn);listeners.delete(name);},
  get innerHTML(){return html;},set innerHTML(value){html=value;error.textContent='';this.inputs=[...value.matchAll(/<input\b([^>]+)>/g)].map(match=>{
   const a=Object.fromEntries([...match[1].matchAll(/([\w-]+)="([^"]*)"/g)].map(m=>[m[1],decode(m[2])]));return {...a,value:a.value||'',checked:/\bchecked\b/.test(match[1]),matches:selector=>selector==='input'};
  });},
  querySelector(selector){if(selector==='.question-review-error')return error;if(selector==='.quiz-feedback')return html.includes('class="quiz-feedback"')?feedback:null;if(selector==='.quiz-question'||selector==='.question-review-complete')return card;if(selector.startsWith('#review-field-'))return this.inputs.find(input=>input.id===selector.slice(1));return null;},
  querySelectorAll(selector){const name=selector.match(/name="([^"]+)"/)[1];return this.inputs.filter(input=>input.name===name&&input.checked);}
 };
 const wrapper=quiz.section().match(/^<div class="question-review">([\s\S]*)<\/div>$/)[1];host.innerHTML=wrapper;
 const dispose=quiz.mount({querySelector:selector=>selector==='.question-review'?host:null});
 function event(name,target={}){listeners.get(name)?.({target,preventDefault(){}});}
 function choose(q,answer=canonical(q),notify=true){
  if(q.type==='text'){answer.forEach((value,i)=>{host.querySelector('#review-field-'+i).value=value;});}
  else if(q.type==='choice'){host.inputs.forEach(input=>{input.checked=answer.includes(input.value);});}
  else host.inputs.forEach(input=>{input.checked=(answer[input.name]||[]).includes(input.value);});
  if(notify)event('change',host.inputs[0]);
 }
 const action=reviewAction=>event('click',{closest:()=>({dataset:{reviewAction},disabled:false})});
 return {host,focus,error,listeners,choose,action,dispose,submit:()=>event('submit'),jump:i=>event('change',{id:'review-question',value:String(i)})};
}
for(const exam of exams){
 const quiz=create(exam),dom=fixture(quiz);
 assert.equal((dom.host.innerHTML.match(/class="quiz-question/g)||[]).length,1);
 assert(!dom.host.innerHTML.includes('quiz-verdict'));assert(!dom.host.innerHTML.includes(escapeHTML(exam.questions[0].rationale)));
 dom.submit();assert(dom.error.textContent.includes('Choose an answer'));assert(!dom.host.innerHTML.includes('quiz-verdict'));
 dom.choose(exam.questions[0]);dom.submit();assert(dom.host.innerHTML.includes('✓ Correct'));assert(dom.host.innerHTML.includes('1 of '+exam.questions.length+' reviewed'));assert(dom.focus.includes('feedback'));
 const hitCount=s.events.length;dom.submit();assert.equal(s.events.length,hitCount,'Double checks must not create repeated events');
 assert(dom.host.innerHTML.includes('<fieldset disabled'));dom.action('next');dom.action('previous');assert(dom.host.innerHTML.includes('Answer checked'));
 dom.action('retry');assert(!dom.host.innerHTML.includes('quiz-verdict'));assert(dom.host.innerHTML.includes('0 of '+exam.questions.length+' reviewed'));
 const first=exam.questions[0];dom.choose(first,[first.options.find(o=>!first.correct.includes(o.id)).id]);dom.submit();assert(dom.host.innerHTML.includes('✕ Incorrect'));assert(dom.host.innerHTML.includes('Correct answer'));assert(dom.host.innerHTML.includes(escapeHTML(first.rationale)));
 dom.action('reset');assert(!dom.host.innerHTML.includes('quiz-verdict'));
 // Navigation captures a draft even without a change event.
 dom.choose(first,canonical(first),false);dom.action('next');dom.action('previous');assert(dom.host.inputs.find(input=>input.value===first.correct[0]).checked);
 dom.jump(-1);assert(dom.host.innerHTML.includes(first.prompt.slice(0,20)));dom.jump(9999);assert(!dom.host.innerHTML.includes('undefined'));
 for(const [i,item] of exam.questions.entries()){
  dom.jump(i);assert(!dom.host.innerHTML.includes('quiz-verdict'));
  if(item.type==='groups'){
   const a=canonical(item);a[item.groups[0].id]=[];dom.choose(item,a);dom.submit();assert(dom.error.textContent.includes('requested number'));assert(!dom.host.innerHTML.includes('quiz-verdict'));
  } else if(item.type==='text'){
   dom.choose(item,canonical(item).map(()=>''));dom.submit();assert(dom.error.textContent.includes('Fill in every'));assert(!dom.host.innerHTML.includes('quiz-verdict'));
  }
  dom.choose(item);dom.submit();assert(dom.host.innerHTML.includes('✓ Correct'),`${exam.id}/${item.id}: interactive correct`);assert(dom.host.innerHTML.includes(escapeHTML(item.rationale)));
 }
 dom.action('next');assert(dom.host.innerHTML.includes('Review complete.'));assert(!dom.host.innerHTML.includes('%'));
 dom.action('start');assert(dom.host.innerHTML.includes('Answer checked'));
 dom.dispose();assert.equal(dom.listeners.size,0);const before=dom.host.innerHTML;dom.submit();assert.equal(dom.host.innerHTML,before);
 const revisited=fixture(quiz);assert(revisited.host.innerHTML.includes('Answer checked'));revisited.action('reset');assert(!revisited.host.innerHTML.includes('quiz-verdict'));assert(revisited.host.innerHTML.includes('0 of '+exam.questions.length+' reviewed'));
 revisited.jump(exam.questions.length-1);revisited.action('next');assert(revisited.host.innerHTML.includes('Continue unanswered questions'));revisited.action('unanswered');assert(revisited.host.innerHTML.includes('Question <select'));assert(!revisited.host.innerHTML.includes('Answer checked'));revisited.dispose();
}
const sessionFor=exam=>({section:()=>s.OBPractice.section(exam),mount:root=>s.OBPractice.mount(root,exam)});
s.OBPractice=vm.runInContext('OBPractice',s);
const firstSession=fixture(sessionFor(exams[0]));firstSession.choose(exams[0].questions[0]);firstSession.submit();firstSession.dispose();
const otherSession=fixture(sessionFor(exams[1]));assert(!otherSession.host.innerHTML.includes('Answer checked'));otherSession.dispose();
const firstAgain=fixture(sessionFor(exams[0]));assert(firstAgain.host.innerHTML.includes('Answer checked'));firstAgain.action('reset');firstAgain.dispose();
assert(s.events.every(name=>name==='answer_checked'));
const html=fs.readFileSync(path.join(root,'index.html'),'utf8'),workflow=fs.readFileSync(path.join(root,'.github/workflows/pages.yml'),'utf8');
for(const file of ['quiz-review.js','ob-practice-data.js','ob-practice.js']){assert(html.includes(`src="${file}?`));assert(workflow.includes(file));}
assert(html.indexOf('quiz.js?')<html.indexOf('quiz-review.js?'));assert(html.indexOf('ob-practice-data.js?')<html.indexOf('ob-practice.js?'));assert(html.indexOf('ob-practice.js?')<html.indexOf('src="ob.js?'));
console.log(`Passed: all 224 source items, ${combinations} choice combinations, text aliases, matrices and bowtie alternatives; immediate right/wrong feedback, hidden rationales, required inputs, drafts, navigation, retries, independent sessions, resets, completion and disposal.`);
