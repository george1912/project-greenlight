const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8'),sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const audit=JSON.parse(read('docs/ob-note-review-audit.json')),bank=JSON.parse(read('ob-practice-questions/ob-review.json'));
const escapeHTML=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const context={escapeHTML,console};vm.createContext(context);
for(const file of ['ob-objectives.js','ob-content.js','ob-question-notes.js','ob-note-review-data.js','ob-note-review.js'])vm.runInContext(read(file),context,{filename:file});
const {objectives,course,groups,review,supplements}=vm.runInContext('({objectives:obStudyObjectives,course:obCourse,groups:obNoteReviewLinks,review:OBNoteReview,supplements:OBQuestionNotes})',context);
const objectiveById=new Map(objectives.map(o=>[o.id,o])),mapped=new Set();
for(const group of groups){
 const source=objectiveById.get(group.sectionId),target=objectiveById.get(group.objectiveId);assert(source&&target);
 assert(source.weekIds.some(w=>['week-7','week-9','week-10'].includes(w)));
 assert.equal([...target.answer,...supplements.groups(target.id)].filter(b=>b.type==='group'&&b.title===group.heading).length,1,'Unique existing note heading');
 // Every view containing the source practice panel must contain its destination.
 for(const week of course.weeks){const weeks=week.reviewOf||[week.id];if(source.weekIds.some(w=>weeks.includes(w)))assert(target.weekIds.some(w=>weeks.includes(w)),week.id+': '+group.heading);}
 for(const topic of source.topicIds)assert(target.topicIds.includes(topic),'Same-page destination on '+topic);
 for(const id of group.questionIds){assert(!mapped.has(id));mapped.add(id);assert(bank.sections[group.sectionId].some(q=>q.id===id));const markup=review.feedback({id});assert(markup.includes('type="button"'));assert(markup.includes('data-ob-note-review="'+id+'"'));assert(markup.includes(escapeHTML(group.heading)));}
}
assert.equal(mapped.size,371);assert.equal(audit.unlinkedQuestions.length,35);
const scope=objectives.filter(o=>o.weekIds.some(w=>['week-7','week-9','week-10'].includes(w))).flatMap(o=>bank.sections[o.id]||[]);
assert.equal(scope.length,371);const omitted=new Set();for(const q of scope)assert.equal(Number(mapped.has(q.id))+Number(omitted.has(q.id)),1);
for(const q of audit.unlinkedQuestions){assert(review.feedback(q).includes('data-ob-note-review='));assert(q.reason);}
for(const id of ['1','bowtie-1','OBR-0195','UNKNOWN','<script>'])assert.equal(review.feedback({id}),'','No links outside embedded final-material scope');
for(const item of audit.unchangedContent)assert.equal(require('./lib/ob-asset-history.cjs').historicalAssetHash(item.path),item.sha256,'Study notes, question content and standalone exams unchanged: '+item.path);
assert.deepEqual(audit.uiChanges.map(r=>r.path).sort(),['ob-question-quizzes.js','section-quizzes.js']);
for(const item of audit.uiChanges)assert.equal(sha(read(item.path)),item.afterSha256);
// Exercise the shipped navigation listener for every mapping, including sibling objectives.
let focused,scrolled,removed=0;
for(const group of groups)for(const id of group.questionIds){
 const handlers=new Map();let returnNode=null;
 const rootElement={addEventListener:(type,fn)=>handlers.set(type,fn),removeEventListener:(type,fn)=>{assert.equal(handlers.get(type),fn);handlers.delete(type);},contains:node=>node===feedback,querySelectorAll:()=>[objective]};
 const objective={tagName:'DETAILS',open:false,dataset:{objective:group.objectiveId},parentElement:rootElement,querySelectorAll:()=>[topic]};
 const summary={focus:()=>{focused='notes';}},body={prepend:p=>{returnNode=p;}};
 const topic={tagName:'DETAILS',open:false,parentElement:objective,querySelector:s=>s==='summary h4'?{textContent:group.heading}:s==='summary'?summary:s==='.ob-note-topic-body'?body:null,scrollIntoView:options=>{assert.equal(options.behavior,'instant');scrolled='notes';}};
 const panel={tagName:'DETAILS',open:true,parentElement:rootElement,dataset:{practiceSection:group.sectionId}};
 const feedback={parentElement:panel,focus:()=>{focused='question';},scrollIntoView:()=>{scrolled='question';}};
 const form={dataset:{practiceQuestion:id},closest:()=>panel,querySelector:()=>feedback};
 const button={dataset:{obNoteReview:id},closest:()=>form};
 context.document={createElement:()=>{const back={};return {innerHTML:'',querySelector:()=>back,remove(){removed++;returnNode=null;}};}};
 const dispose=review.mount(rootElement),click=target=>handlers.get('click')({target});
 click({closest:s=>s==='[data-ob-note-review]'?button:null});
 assert(objective.open&&topic.open);assert.equal(focused,'notes');assert.equal(scrolled,'notes');assert(returnNode.innerHTML.includes('Back to practice question'));
 const back=returnNode.querySelector('button');click({closest:s=>s==='[data-ob-note-return]'?back:null});assert.equal(focused,'question');assert.equal(scrolled,'question');assert.equal(returnNode,null);
 // Opening twice replaces the temporary return control, rather than accumulating controls.
 click({closest:s=>s==='[data-ob-note-review]'?button:null});click({closest:s=>s==='[data-ob-note-review]'?button:null});assert(returnNode);dispose();assert.equal(returnNode,null);assert.equal(handlers.size,0);
}
assert(removed>=371*3);
// Exercise the actual section quiz's async loading, submit, retry and navigation.
async function feedbackLifecycle(){
 const handlers=new Map(),panelHandlers=new Map();let markup='',currentForm,focusedFeedback=false;
 const status={focus:()=>{focusedFeedback=true;}},error={textContent:''};
 const question=bank.sections['postpartum-physiology'][0];let chosen=[];
 const body={get innerHTML(){return markup;},set innerHTML(value){markup=value;}};
 const panel={open:true,dataset:{practiceTopic:'ob-review',practiceSection:'postpartum-physiology'},addEventListener:(type,fn)=>panelHandlers.set(type,fn),removeEventListener:type=>panelHandlers.delete(type),querySelector:s=>s==='.section-practice-body'?body:null};
 const host={querySelectorAll:()=>[panel],addEventListener:(type,fn)=>handlers.set(type,fn),removeEventListener:type=>handlers.delete(type)};
 function form(){return {dataset:{practiceQuestion:question.id},querySelectorAll:()=>chosen.map(value=>({value})),closest:()=>panel,querySelector:s=>s==='.section-practice-error'?error:status,replaceWith(replacement){markup=markup.replace(/<form[\s\S]*?<\/form>/,replacement.html);currentForm=form();}};}
 const c={escapeHTML,fetch:async()=>({ok:true,json:async()=>bank}),document:{createElement:()=>{let html='';return {set innerHTML(v){html=v;},get firstElementChild(){return {html,querySelector:()=>status};}};}}};vm.createContext(c);
 for(const f of ['section-quizzes.js','ob-note-review-data.js','ob-note-review.js'])vm.runInContext(read(f),c);
 const quiz=vm.runInContext("SectionQuizzes.create({oneAtATime:true,feedbackExtra:OBNoteReview.feedback})",c),dispose=quiz.mount(host);
 panelHandlers.get('toggle')();await new Promise(resolve=>setImmediate(resolve));currentForm=form();assert(!markup.includes('data-ob-note-review='));
 const submit=()=>handlers.get('submit')({target:{closest:()=>currentForm},preventDefault(){}});
 submit();assert(error.textContent);assert(!markup.includes('data-ob-note-review='));
 chosen=[question.options.find(o=>!question.correct.includes(o.id)).id];submit();assert(markup.includes('Not quite'));assert(markup.includes('data-ob-note-review='));assert(focusedFeedback);
 handlers.get('reset')({target:{closest:()=>currentForm},preventDefault(){}});assert(!markup.includes('data-ob-note-review='));
 chosen=question.correct;submit();assert(markup.includes('✓ Correct'));assert(markup.includes('data-ob-note-review='));
 dispose();assert.equal(handlers.size,0);assert.equal(panelHandlers.size,0);
}
const html=read('index.html'),workflow=read('.github/workflows/pages.yml');for(const file of ['ob-note-review-data.js','ob-note-review.js','ob-note-review.css'])assert(html.includes(file+'?')&&workflow.includes(file));
assert(html.indexOf('ob-note-review.js?')<html.indexOf('ob-question-quizzes.js?'));
feedbackLifecycle().then(()=>console.log('Passed: 371 exact note-heading links, all 35 previous gaps closed, all same-page weekly/exam/review destinations, checked-only correct/wrong feedback, keyboard focus and instant scrolling, preserved answer DOM/state, return controls and cleanup; unchanged notes, question banks, standalone exams and unrelated scopes.')).catch(error=>{console.error(error);process.exitCode=1;});
