const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const main={innerHTML:'',querySelector:()=>null,querySelectorAll:()=>[],focus(){}};
const context={URL,console,document:{querySelector:()=>main,title:''},location:{hash:'#/'},window:{addEventListener(){},scrollTo(){}},PresentationViewer:{mount:()=>()=>{}}};vm.createContext(context);
for(const match of html.matchAll(/<script src="([^?]+)\?[^\"]+" defer><\/script>/g))if(!['viewer.js','analytics.js'].includes(match[1]))vm.runInContext(fs.readFileSync(path.join(root,match[1]),'utf8'),context,{filename:match[1]});
const all=vm.runInContext('obStudyObjectives',context),week2=all.filter(o=>o.weekIds.includes('week-2'));
const audit=JSON.parse(fs.readFileSync(path.join(root,'docs/ob-week2-notes-audit.json'))),map=JSON.parse(fs.readFileSync(path.join(root,'docs/ob-objectives-map.json')));
const expected=['pregnancy-signs','obstetric-history-gtpal','estimated-due-date','prenatal-assessment','pregnancy-discomforts','prenatal-nutrition-teaching'];
assert.deepEqual(audit.objectives.map(o=>o.id),expected);assert.equal(week2.length,7);assert(week2.every(o=>o.answer.length));
assert.equal(map.completedObjectiveIds.length,10);assert.equal(all.filter(o=>!o.answer.length).length,65);
assert.deepEqual(Array.from(all.filter(o=>o.answer.length),o=>o.id),map.completedObjectiveIds);
for(const source of audit.sources){
 const bytes=fs.readFileSync(path.join(root,source.path));assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),source.sha256);
 const manifest=JSON.parse(fs.readFileSync(path.join(root,path.dirname(source.path),'deck.json')));assert.equal(manifest.pages.length,source.pages);
}
const render=route=>{context.location.hash=route;vm.runInContext('render()',context);return main.innerHTML;};
const section=(markup,id)=>{const markers=[...markup.matchAll(/data-objective="([^"]+)"/g)],i=markers.findIndex(m=>m[1]===id);assert(i>=0,id);return markup.slice(markers[i].index,markers[i+1]?.index);};
const weekly=render('#/ob-final/week-2'),topic=render('#/ob-final/topic/antepartum-prenatal');
assert(!weekly.includes('Ready for your notes'));assert(!topic.includes('Ready for your notes'));
assert(weekly.indexOf('class="ob-week-infographic"')<weekly.indexOf('class="ob-presentations"'));assert(weekly.includes('<details class="ob-presentations"><summary>'));
let groups=0;
for(const record of audit.objectives){
 const objective=all.find(o=>o.id===record.id),topics=objective.answer.filter(b=>b.type==='group');groups+=topics.length;
 assert.equal(objective.answer[0].type,'overview');assert.equal(objective.answer[0].items.length,3);assert.equal(objective.answerReviewedOn,'2026-11-21');assert(objective.answerSourceNote);
 assert.deepEqual(Array.from(topics,b=>b.title),record.topics);for(const requirement of record.outlineCoverage)assert(record.topics.includes(requirement.noteTopic),'Uncovered objective clause: '+requirement.requirement);
 for(const range of record.lectureRanges){const source=audit.sources.find(s=>s.deckId===range.deckId);assert(source&&range.firstPage>=1&&range.lastPage<=source.pages);}
 assert(objective.answerSources.length>=2);for(const source of objective.answerSources)assert.equal(new URL(source.url).protocol,'https:');
 const weekMarkup=section(weekly,objective.id),topicMarkup=section(topic,objective.id);
 for(const markup of [weekMarkup,topicMarkup]){
  assert(markup.includes('Quick answer')&&markup.includes('Sources for these notes'));assert(!markup.includes('Ready for your notes'));
  assert.equal((markup.match(/class="ob-note-topic"/g)||[]).length,topics.length);assert(!/<details class="ob-note-topic"[^>]*\bopen\b/.test(markup));assert(!markup.includes('<iframe'));
 }
 assert.equal(weekMarkup.split('<div class="answer-area">')[1].split('</ul></details></div>')[0],topicMarkup.split('<div class="answer-area">')[1].split('</ul></details></div>')[0],'Same notes in weekly and exam-topic views');
}
assert.equal(groups,34);
const text=id=>JSON.stringify(all.find(o=>o.id===id).answer).toLowerCase();
const coverage={
 'pregnancy-signs':['presumptive','probable','positive','goodell','chadwick','hegar','quickening','false','ectopic'],
 'obstetric-history-gtpal':['current pregnancy','stillbirth','twins','g5p1122','g7p2134','g = t + p + a + 1','living'],
 'estimated-due-date':['first day','28-day','280','august 28, 2026','may 27, 2026','irregular','ivf','crown–rump','13 weeks 6 days'],
 'prenatal-assessment':['gtpal','blood pressure','cbc','antibody','urine culture','hepatitis c','hiv','hb ig'.replace(' ',''),'9–12 months','syphilis','36 weeks 0 days','24–28','95','180','155','140 mg/dl','at or above','fundal','110–160','movement','preeclampsia','teach-back'],
 'pregnancy-discomforts':['nausea','reflux','constipation','urinary','leukorrhea','fatigue','breast','backache','dorsiflex','dvt','hemorrhoids','braxton','100.4','38°c','reduced','emergency'],
 'prenatal-nutrition-teaching':['340','450','28–40','25–35','15–25','11–20','27 mg','600 micrograms','1,300 mg','1,000 mg','b12','165°f','8–12 oz','200 mg','150 minutes','alcohol','vaping','tdap','rsv','abrysvo','mmr','varicella','wic','teach-back']
};
for(const [id,terms] of Object.entries(coverage))for(const term of terms)assert(text(id).includes(term),id+': '+term);
// Independent arithmetic checks for both lecture examples and the two GTPAL cases.
for(const [lmp,edd] of [['2025-11-21','2026-08-28'],['2025-08-20','2026-05-27']]){const d=new Date(lmp+'T00:00:00Z');d.setUTCDate(d.getUTCDate()+280);assert.equal(d.toISOString().slice(0,10),edd);}
function tally(history){return history.reduce((v,p)=>{v.G++;if(p.weeks===null)return v;v[p.weeks<20?'A':p.weeks<37?'P':'T']++;v.L+=p.living;return v;},{G:0,T:0,P:0,A:0,L:0});}
assert.deepEqual(tally([{weeks:null},{weeks:39,living:1},{weeks:34,living:1},{weeks:8,living:0},{weeks:18,living:0}]),{G:5,T:1,P:1,A:2,L:2});
assert.deepEqual(tally([{weeks:null},{weeks:39,living:1},{weeks:40,living:1},{weeks:35,living:2},{weeks:12,living:0},{weeks:14,living:0},{weeks:10,living:0}]),{G:7,T:2,P:1,A:3,L:4});
// Shared conception answer has the identical rendering in both weeks; all Week 1 review dates remain intact.
const week1=render('#/ob-final/week-1');for(const o of all.filter(o=>o.weekIds.includes('week-1')))assert.equal(o.answerReviewedOn,'2026-11-20');
const answerPart=markup=>markup.split('<div class="answer-area">')[1].split('</ul></details></div>')[0];
assert.equal(answerPart(section(week1,'conception-fetal-development')),answerPart(section(weekly,'conception-fetal-development')));
// New structured facts cannot introduce HTML when reused on either route.
const fact=all.find(o=>o.id==='pregnancy-signs').answer[1].blocks[0].items[0],saved=fact.text;fact.text='<img src=x onerror="alert(1)"> & patient';
for(const route of ['#/ob-final/week-2','#/ob-final/topic/antepartum-prenatal']){const m=section(render(route),'pregnancy-signs');assert(m.includes('&lt;img src=x onerror=&quot;alert(1)&quot;&gt; &amp; patient'));assert(!m.includes('<img src=x'));}fact.text=saved;
console.log('Passed: all 7 Week 2 objectives complete, 6 new answers with 34 closed topics, every objective clause mapped to source pages, original PDF hashes, GTPAL and EDD arithmetic, clinical safety coverage, shared weekly/exam notes, preserved Week 1 dates and safe rendering.');
