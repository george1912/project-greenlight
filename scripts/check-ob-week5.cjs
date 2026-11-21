const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8'),main={innerHTML:'',querySelector:()=>null,querySelectorAll:()=>[],focus(){}};
const context={URL,console,document:{querySelector:()=>main,title:''},location:{hash:'#/'},window:{addEventListener(){},scrollTo(){}},PresentationViewer:{mount:()=>()=>{}}};vm.createContext(context);
for(const match of html.matchAll(/<script src="([^?]+)\?[^\"]+" defer><\/script>/g))if(!['viewer.js','analytics.js'].includes(match[1]))vm.runInContext(fs.readFileSync(path.join(root,match[1]),'utf8'),context,{filename:match[1]});
const {all,course,decks}=vm.runInContext('({all:obStudyObjectives,course:obCourse,decks:obPresentationDecks})',context),week5=all.filter(o=>o.weekIds.includes('week-5'));
const audit=JSON.parse(fs.readFileSync(path.join(root,'docs/ob-week5-notes-audit.json'))),map=JSON.parse(fs.readFileSync(path.join(root,'docs/ob-objectives-map.json')));
const expected=['normal-labor-process','labor-nursing-assessment','monitoring-methods','fhr-strip-assessment','fhr-patterns','fhr-priorities','labor-comfort-medication','induction-augmentation'];
assert.deepEqual(Array.from(week5,o=>o.id),expected);assert.deepEqual(audit.objectives.map(o=>o.id),expected);assert(week5.every(o=>o.answer.length));assert(!course.weeks.some(w=>w.id==='week-4'),'Do not invent teaching notes for Exam I');
assert.deepEqual(Array.from(all.filter(o=>o.answer.length),o=>o.id),map.completedObjectiveIds);assert.equal(all.filter(o=>!o.answer.length).length,75-map.completedObjectiveIds.length);
for(const source of audit.sources){const bytes=fs.readFileSync(path.join(root,source.path));assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),source.sha256);assert.equal(JSON.parse(fs.readFileSync(path.join(root,path.dirname(source.path),'deck.json'))).pages.length,source.pages);}
for(const saved of audit.preservedCompletedObjectives){const o=all.find(o=>o.id===saved.id);assert.equal(crypto.createHash('sha256').update(JSON.stringify(o)).digest('hex'),saved.sha256,'Preserve '+saved.id);}
const render=route=>{context.location.hash=route;vm.runInContext('render()',context);return main.innerHTML;};
const section=(markup,id)=>{const markers=[...markup.matchAll(/data-objective="([^"]+)"/g)],i=markers.findIndex(m=>m[1]===id);assert(i>=0,id);return markup.slice(markers[i].index,markers[i+1]?.index);};
const answerPart=m=>m.split('<div class="answer-area">')[1].split('</ul></details></div>')[0],weekly=render('#/ob-final/week-5');
assert(!weekly.includes('Ready for your notes'));assert.equal((weekly.match(/class="ob-note-overview"/g)||[]).length,8);
assert(weekly.indexOf('class="ob-week-infographic"')<weekly.indexOf('class="ob-presentations"'));assert(weekly.indexOf('class="ob-presentations"')<weekly.indexOf('class="ob-objectives"'));assert(weekly.includes('<details class="ob-presentations"><summary>'));
let groups=0;
for(const record of audit.objectives){const objective=all.find(o=>o.id===record.id),topics=objective.answer.filter(b=>b.type==='group');groups+=topics.length;
 assert.equal(objective.answer[0].type,'overview');assert.equal(objective.answer[0].items.length,3);assert.equal(objective.answerReviewedOn,'2026-11-21');assert(objective.answerSourceNote);
 assert.deepEqual(Array.from(topics,b=>b.title),record.topics);for(const item of record.outlineCoverage)assert(record.topics.includes(item.noteTopic),'Uncovered objective clause: '+item.requirement);
 for(const range of record.lectureRanges){const source=audit.sources.find(s=>s.deckId===range.deckId);assert(source&&range.firstPage>=1&&range.lastPage<=source.pages);}
 const lectureLinks=objective.answerSources.filter(ref=>ref.url.startsWith('#/ob-final/presentation/'));assert(lectureLinks.length,'Original assigned material first');
 for(const ref of lectureLinks){const id=ref.url.split('/').pop();assert(decks[id]);assert(record.lectureRanges.some(r=>r.deckId===id));assert.equal(objective.answerSources.indexOf(ref)<lectureLinks.length,true);}
 for(const ref of objective.answerSources.filter(ref=>!lectureLinks.includes(ref))){assert.equal(new URL(ref.url).protocol,'https:');assert(/clarification/.test(ref.title),'External links limited to explicit clarifications');}
 const routes=['#/ob-final/week-5','#/ob-final/week-8',...Array.from(objective.topicIds,id=>'#/ob-final/topic/'+id)];
 for(const route of routes){const markup=render(route),part=section(markup,objective.id);assert.equal((markup.match(new RegExp('data-objective="'+objective.id+'"','g'))||[]).length,1);
  assert(part.includes('Quick answer')&&part.includes('Sources for these notes'));assert(!part.includes('Ready for your notes'));assert.equal((part.match(/class="ob-note-topic"/g)||[]).length,topics.length);assert(!/<details class="ob-note-topic"[^>]*\bopen\b/.test(part));assert(!part.includes('<iframe'));
  assert.equal(answerPart(part),answerPart(section(weekly,objective.id)),'Same notes in '+route);assert(!/href="[^\"]+\.pdf/.test(part),'Do not expose original course downloads');
 }
}
assert.equal(groups,41);
const text=id=>JSON.stringify(all.find(o=>o.id===id).answer).toLowerCase();
const coverage={
 'normal-labor-process':['false labor','true labor','5 p','dilation','effacement','10 cm','0%','100%','ischial spines','lie','presentation','attitude','loa','cardinal','6 cm','first stage','second stage','third stage','fourth stage'],
 'labor-nursing-assessment':['gtpal','preferences','frequency','duration','membranes','leopold','consent','dilation','effacement','station','vital','coping','document','communicat','escalat'],
 'monitoring-methods':['intermittent','external','ultrasound','toco','maternal pulse','scalp electrode','iupc','ruptured membranes','2 cm','invasive','true contraction strength'],
 'fhr-strip-assessment':['baseline','10-minute','110–160','≤5','6–25','>25','≥15','<2 minutes','decelerations','resting interval','more than 5','30 minutes','tachysystole'],
 'fhr-patterns':['early','head compression','late','uteroplacental','variable','cord compression','prolonged','<10 minutes','category i','category ii','category iii','absent baseline variability plus','sinusoidal'],
 'fhr-priorities':['supplied strip 1','page 27','supplied strip 2','page 28','reposition','oxytocin','hypotension','amnioinfusion','oxygen safety clarification','document','response'],
 'labor-comfort-medication':['nonpharmacological','effleurage','counterpressure','doula','systemic','respiratory depression','epidural','intrathecal','spinal','pudendal','general','consent','hypotension','ventilation','not a universal order'],
 'induction-augmentation':['induction','augmentation','ripening','dinoprostone','misoprostol','oxytocin','vasa previa','prior cesarean','amniotomy','cord prolapse','stop/reduce','not an iv push','do not provide a complete amniotomy protocol']
};
for(const [id,terms] of Object.entries(coverage))for(const term of terms)assert(text(id).includes(term),id+': '+term);
// Source-led scope: use the two actual supplied strips and identify missing procedural detail.
assert.deepEqual(audit.materialLimits.map(x=>x.objectiveId),['induction-augmentation']);assert(audit.visualReview.find(x=>x.deckId==='fetal-monitoring').pages.includes(27));assert(audit.visualReview.find(x=>x.deckId==='fetal-monitoring').pages.includes(28));
assert(text('fhr-priorities').includes('does not provide a full patient history'));for(const term of ['bishop score','montevideo units','balloon catheter'])assert(!JSON.stringify(week5.map(o=>o.answer)).toLowerCase().includes(term),'No extra curriculum: '+term);
// Boundary checks for the clarified definitions the slides abbreviated.
const variability=n=>n===0?'absent':n<=5?'minimal':n<=25?'moderate':'marked';assert.equal(variability(5),'minimal');assert.equal(variability(6),'moderate');assert.equal(variability(25),'moderate');assert.equal(variability(26),'marked');
// Structured text remains escaped in the weekly, exam, and review views.
const fact=week5.find(o=>o.id==='fhr-priorities').answer[1].blocks[0].items[0],saved=fact.text;fact.text='<script>alert("patient")</script> & safety';
for(const route of ['#/ob-final/week-5','#/ob-final/week-8','#/ob-final/topic/fetal-monitoring']){const part=section(render(route),'fhr-priorities');assert(part.includes('&lt;script&gt;alert(&quot;patient&quot;)&lt;/script&gt; &amp; safety'));assert(!part.includes('<script>'));}fact.text=saved;
console.log('Passed: all 8 Week 5 objectives, 41 closed topics, source-page coverage/PDF hashes, preserved earlier answers, original lecture links with labeled clarifications, two supplied strip examples and explicit amniotomy limit, weekly/exam/review reuse and safe rendering.');
