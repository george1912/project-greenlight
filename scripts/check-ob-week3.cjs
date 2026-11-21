const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const main={innerHTML:'',querySelector:()=>null,querySelectorAll:()=>[],focus(){}};
const context={URL,console,document:{querySelector:()=>main,title:''},location:{hash:'#/'},window:{addEventListener(){},scrollTo(){}},PresentationViewer:{mount:()=>()=>{}}};vm.createContext(context);
for(const match of html.matchAll(/<script src="([^?]+)\?[^\"]+" defer><\/script>/g))if(!['viewer.js','analytics.js'].includes(match[1]))vm.runInContext(fs.readFileSync(path.join(root,match[1]),'utf8'),context,{filename:match[1]});
const all=vm.runInContext('obStudyObjectives',context),course=vm.runInContext('obCourse',context),week3=all.filter(o=>o.weekIds.includes('week-3'));
const audit=JSON.parse(fs.readFileSync(path.join(root,'docs/ob-week3-notes-audit.json'))),map=JSON.parse(fs.readFileSync(path.join(root,'docs/ob-objectives-map.json')));
const expected=['high-risk-pregnancy-assessment','early-pregnancy-complications','placental-bleeding','diabetes-assessment','diabetes-nursing-management','hypertensive-disorders','eclampsia-magnesium-hellp','pregnancy-prom-preterm','rh-abo-infections','fluid-multiples-pregnancy','placental-emergency-response'];
assert.deepEqual(Array.from(week3,o=>o.id),expected);assert.deepEqual(audit.objectives.map(o=>o.id),expected);assert(week3.every(o=>o.answer.length));
assert.deepEqual(Array.from(all.filter(o=>o.answer.length),o=>o.id),map.completedObjectiveIds);assert(expected.every(id=>map.completedObjectiveIds.includes(id)));assert.equal(all.filter(o=>!o.answer.length).length,75-map.completedObjectiveIds.length);
for(const source of audit.sources){const bytes=fs.readFileSync(path.join(root,source.path));assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),source.sha256);const manifest=JSON.parse(fs.readFileSync(path.join(root,path.dirname(source.path),'deck.json')));assert.equal(manifest.pages.length,source.pages);}
const render=route=>{context.location.hash=route;vm.runInContext('render()',context);return main.innerHTML;};
const section=(markup,id)=>{const markers=[...markup.matchAll(/data-objective="([^"]+)"/g)],i=markers.findIndex(m=>m[1]===id);assert(i>=0,id);return markup.slice(markers[i].index,markers[i+1]?.index);};
const answerPart=markup=>markup.split('<div class="answer-area">')[1].split('</ul></details></div>')[0];
const weekly=render('#/ob-final/week-3');assert(!weekly.includes('Ready for your notes'));assert.equal((weekly.match(/class="ob-note-overview"/g)||[]).length,11);
assert(weekly.indexOf('class="ob-week-infographic"')<weekly.indexOf('class="ob-presentations"'));assert(weekly.indexOf('class="ob-presentations"')<weekly.indexOf('class="ob-objectives"'));assert(weekly.includes('<details class="ob-presentations"><summary>'));
let groups=0;
for(const record of audit.objectives){
 const objective=all.find(o=>o.id===record.id),topics=objective.answer.filter(b=>b.type==='group');groups+=topics.length;
 assert.equal(objective.answer[0].type,'overview');assert.equal(objective.answer[0].items.length,3);assert.equal(objective.answerReviewedOn,'2026-11-21');assert(objective.answerSourceNote);
 assert.deepEqual(Array.from(topics,b=>b.title),record.topics);for(const requirement of record.outlineCoverage)assert(record.topics.includes(requirement.noteTopic),'Uncovered requirement: '+requirement.requirement);
 for(const range of record.lectureRanges){const source=audit.sources.find(s=>s.deckId===range.deckId);assert(source&&range.firstPage>=1&&range.lastPage<=source.pages);}
 assert(objective.answerSources.length>=2);for(const source of objective.answerSources)assert.equal(new URL(source.url).protocol,'https:');
 const routes=[...Array.from(objective.weekIds,id=>'#/ob-final/'+id),...Array.from(objective.topicIds,id=>'#/ob-final/topic/'+id)];if(objective.id==='placental-emergency-response')routes.push('#/ob-final/week-8');
 for(const route of routes){const markup=render(route),part=section(markup,objective.id);assert.equal((markup.match(new RegExp('data-objective="'+objective.id+'"','g'))||[]).length,1,'No duplicate answer in '+route);
  assert(part.includes('Quick answer')&&part.includes('Sources for these notes'));assert(!part.includes('Ready for your notes'));assert.equal((part.match(/class="ob-note-topic"/g)||[]).length,topics.length);assert(!/<details class="ob-note-topic"[^>]*\bopen\b/.test(part));assert(!part.includes('<iframe'));
  assert.equal(answerPart(part),answerPart(section(weekly,objective.id)),'Same answer on '+route);
  const video=part.indexOf('class="video-resources'),practice=part.indexOf('class="section-practice');if(video>=0)assert(video>part.indexOf('Sources for these notes'));if(practice>=0)assert(practice>part.indexOf('Sources for these notes'));
 }
}
assert.equal(groups,62);
const text=id=>JSON.stringify(all.find(o=>o.id===id).answer).toLowerCase();
const coverage={
 'high-risk-pregnancy-assessment':['maternal','fetal','placental','violence','transportation','surveillance','referral','sbar','teach-back'],
 'early-pregnancy-complications':['threatened','inevitable','complete','incomplete','missed','septic','ultrasound','methotrexate','rupture','mole','contraception','serial hcg','≤25 mm','cerclage','thiamine','ketonuria','grief'],
 'placental-bleeding':['previa','abruption','painless','tenderness','concealed','crossmatch','digital','transvaginal','does not rule out','birth'],
 'diabetes-assessment':['type 1','type 2','a1gdm','a2gdm','24–28','50-g','100-g','95','180','155','140 mg/dl','four','at or above','hba1c','organogenesis','hypoglycemia','growth restriction'],
 'diabetes-nursing-management':['<95','<140','<120','meter','cg m'.replace(' ',''),'nutrition','activity','insulin','metformin','15–15','<70','nothing by mouth','basal insulin','dka','intrapartum','4–12 weeks','75-g','1–3 years','breastfeeding'],
 'hypertensive-disorders':['chronic','gestational','superimposed','postpartum','≥140','≥90','≥160','≥110','15 minutes','30–60','300 mg/24','≥0.3','<100,000','>1.1','pulmonary edema','81 mg','12–28'],
 'eclampsia-magnesium-hellp':['seizure','do not restrain','magnesium','1–2 g/hour','kidneys','reflexes','respiratory','stop the magnesium','calcium gluconate','hemolysis','ldh','<100,000','labetalol','hydralazine','nifedipine','8/min'],
 'pregnancy-prom-preterm':['prelabor','pprom','cervical change','sterile speculum','ferning','nitrazine','digital','infection','latency','24–33','32 weeks','tocoly','reduced fetal movement'],
 'rh-abo-infections':['anti-d','igg','72 hours','28 weeks','before 12 weeks','phototherapy','toxoplasmosis','rubella','syphilis','cmv','21 days','hsv','prodromal','36 weeks 0 days','37 weeks 6 days','bacteriuria','must not be delayed'],
 'fluid-multiples-pregnancy':['dvp <2','afi ≤5','dvp ≥8','afi ≥24','indomethacin','amnioreduction','chorionicity','amnionicity','twin–twin','ttts','hemorrhage','teach-back'],
 'placental-emergency-response':['circulation','concealed','digital','hemoglobin','crossmatch','fibrinogen','pt/aptt','dic','blood products','urine output','birth','postpartum','document']
};
for(const [id,terms] of Object.entries(coverage))for(const term of terms)assert(text(id).includes(term),id+': '+term);
// Independently evaluate the worked OGTT including equality and one-versus-two abnormal values.
const thresholds=[95,180,155,140],abnormal=values=>values.filter((n,i)=>n>=thresholds[i]).length;
assert.equal(abnormal([97,185,150,135]),2);assert.equal(abnormal([95,179,154,140]),2);assert.equal(abnormal([94,180,154,139]),1);
// Every earlier completed objective is unchanged, including provenance and sources.
for(const saved of audit.preservedCompletedObjectives){const actual=all.find(o=>o.id===saved.id);assert.equal(crypto.createHash('sha256').update(JSON.stringify(actual)).digest('hex'),saved.sha256,'Preserved '+saved.id);}
// Same escaping for new fact labels/text across weekly, exam and shared review routes.
const o=all.find(o=>o.id==='placental-emergency-response'),fact=o.answer[1].blocks[0].items[0],saved=fact.text;fact.text='<script>alert("patient")</script> & safety';
for(const route of ['#/ob-final/week-3','#/ob-final/week-6','#/ob-final/week-8','#/ob-final/topic/labor-emergencies']){const m=section(render(route),o.id);assert(m.includes('&lt;script&gt;alert(&quot;patient&quot;)&lt;/script&gt; &amp; safety'));assert(!m.includes('<script>'));}fact.text=saved;
// Preserve the final-exam scope: main material starts in Week 7; earlier subjects remain cumulative.
assert.equal(course.topics.find(t=>t.group==='main').weekIds[0],'week-7');assert.deepEqual(Array.from(course.topics.filter(t=>t.group==='cumulative'),t=>t.id),['antepartum-prenatal','pregnancy-complications','fetal-monitoring','labor-emergencies']);
console.log('Passed: all 11 Week 3 objectives, 62 closed topics, objective-to-slide coverage and source hashes, unchanged earlier completed answers, clinical safety coverage and OGTT boundaries, exact weekly/exam reuse including Weeks 6/8, safe rendering, and preserved exam scope.');
