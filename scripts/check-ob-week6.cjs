const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const main={innerHTML:'',querySelector:()=>null,querySelectorAll:()=>[],focus(){}};
const context={URL,console,document:{querySelector:()=>main,title:''},location:{hash:'#/'},window:{addEventListener(){},scrollTo(){}},PresentationViewer:{mount:()=>()=>{}}};
vm.createContext(context);
for(const match of html.matchAll(/<script src="([^?]+)\?[^\"]+" defer><\/script>/g))if(!['viewer.js','analytics.js'].includes(match[1]))vm.runInContext(fs.readFileSync(path.join(root,match[1]),'utf8'),context,{filename:match[1]});
const {all,decks}=vm.runInContext('({all:obStudyObjectives,decks:obPresentationDecks})',context);
const audit=JSON.parse(fs.readFileSync(path.join(root,'docs/ob-week6-notes-audit.json'))),map=JSON.parse(fs.readFileSync(path.join(root,'docs/ob-objectives-map.json')));
const expected=['complicated-labor','assisted-cesarean-birth','shoulder-dystocia','placental-emergency-response','other-birth-emergencies'];
const week6=all.filter(o=>o.weekIds.includes('week-6')),newIds=expected.filter(id=>id!=='placental-emergency-response');
assert.deepEqual(Array.from(week6,o=>o.id),expected);assert(week6.every(o=>o.answer.length));assert.deepEqual(audit.objectives.map(o=>o.id),newIds);
assert.deepEqual(Array.from(all.filter(o=>o.answer.length),o=>o.id),map.completedObjectiveIds);
const hash=value=>crypto.createHash('sha256').update(value).digest('hex');
for(const source of audit.sources){assert.equal(hash(fs.readFileSync(path.join(root,source.path))),source.sha256);assert.equal(JSON.parse(fs.readFileSync(path.join(root,path.dirname(source.path),'deck.json'))).pages.length,source.pages);}
assert.equal(audit.preservedCompletedObjectives.length,29);
for(const saved of audit.preservedCompletedObjectives)assert.equal(hash(JSON.stringify(all.find(o=>o.id===saved.id))),saved.sha256,'Preserve earlier objective '+saved.id);
assert.equal(hash(JSON.stringify(all.find(o=>o.id===audit.sharedObjective.id))),audit.sharedObjective.sha256,'Preserve the entire shared hemorrhage object');
const render=route=>{context.location.hash=route;vm.runInContext('render()',context);return main.innerHTML;};
const section=(markup,id)=>{const markers=[...markup.matchAll(/data-objective="([^"]+)"/g)],i=markers.findIndex(m=>m[1]===id);assert(i>=0,id);return markup.slice(markers[i].index,markers[i+1]?.index);};
const answerPart=markup=>markup.split('<div class="answer-area">')[1].split('</ul></details></div>')[0];
const weekly=render('#/ob-final/week-6');
assert(!weekly.includes('Ready for your notes'));assert.equal((weekly.match(/class="ob-note-overview"/g)||[]).length,5);
assert(weekly.indexOf('class="ob-week-infographic"')<weekly.indexOf('class="ob-presentations"'));assert(weekly.indexOf('class="ob-presentations"')<weekly.indexOf('class="ob-objectives"'));assert(weekly.includes('<details class="ob-presentations"><summary>'));
let newTopics=0;
for(const record of audit.objectives){
 const objective=all.find(o=>o.id===record.id),topics=objective.answer.filter(b=>b.type==='group');newTopics+=topics.length;
 assert.equal(objective.answer[0].type,'overview');assert.equal(objective.answer[0].items.length,3);assert.equal(objective.answerReviewedOn,audit.reviewedOn);assert(objective.answerSourceNote);
 assert.deepEqual(Array.from(topics,b=>b.title),record.topics);assert.equal(record.outlineCoverage.length,topics.length);
 for(const item of record.outlineCoverage)assert(record.topics.includes(item.noteTopic),'Uncovered objective clause: '+item.requirement);
 for(const range of record.lectureRanges){const source=audit.sources.find(s=>s.deckId===range.deckId);assert(source&&range.firstPage>=1&&range.firstPage<=range.lastPage&&range.lastPage<=source.pages);}
 const lectureLinks=objective.answerSources.filter(s=>s.url.startsWith('#/ob-final/presentation/'));assert(lectureLinks.length);assert.equal(lectureLinks[0].url,'#/ob-final/presentation/labor-complications');
 for(const ref of lectureLinks){const id=ref.url.split('/').pop();assert(decks[id]);assert(record.lectureRanges.some(r=>r.deckId===id));assert(objective.answerSources.indexOf(ref)<lectureLinks.length);}
 for(const ref of objective.answerSources.filter(s=>!lectureLinks.includes(s))){assert.equal(new URL(ref.url).protocol,'https:');assert(ref.title.includes('clarification'));}
 for(const group of topics){assert(group.blocks.length);for(const block of group.blocks){assert.equal(block.type,'facts');assert(block.items.every(item=>item.label&&item.text));}const words=group.blocks.flatMap(b=>b.items.map(item=>item.label+' '+item.text)).join(' ').split(/\s+/).length;assert(words<=160,'Keep a note topic readable: '+group.title);}
}
assert.equal(newTopics,29);
for(const objective of week6){
 const topics=objective.answer.filter(b=>b.type==='group'),routes=['#/ob-final/week-6','#/ob-final/week-8',...Array.from(objective.topicIds,id=>'#/ob-final/topic/'+id)];
 for(const route of routes){const markup=render(route),part=section(markup,objective.id);assert.equal((markup.match(new RegExp('data-objective="'+objective.id+'"','g'))||[]).length,1);
  assert(part.includes('Quick answer')&&part.includes('Sources for these notes'));assert(!part.includes('Ready for your notes'));assert.equal((part.match(/class="ob-note-topic"/g)||[]).length,topics.length);
  assert(!/<details class="ob-note-(?:topic|sources)"[^>]*\bopen\b/.test(part));assert(!/<details class="objective ob-study-objective"[^>]*\bopen\b/.test(part));assert(!part.includes('<iframe'));assert(!/href="[^\"]+\.pdf/.test(part));
  assert.equal(answerPart(part),answerPart(section(weekly,objective.id)),'Identical notes in '+route);
  assert(part.indexOf('Study notes')<part.indexOf('Watch &amp; understand')||part.indexOf('Study notes')<part.indexOf('Watch & understand'));
 }
}
assert.equal((weekly.match(/class="ob-note-topic"/g)||[]).length,34);
const notes=id=>JSON.stringify(all.find(o=>o.id===id).answer).toLowerCase();
const coverage={
 'complicated-labor':['before 37 completed weeks','cervical change','fetal fibronectin','intact membranes','do not delay evaluation','bed rest','betamethasone','neuroprotection','prelabor rupture','without a required one-hour','pprom','antibiotics','do not wait until rupture','42 weeks','nonstress','biophysical','hypertonic','hypotonic','<3 hours','perineal injury'],
 'assisted-cesarean-birth':['forceps','vacuum','cephalopelvic disproportion','informed consent','full cervical dilation','known head position','lack of descent','3 pop-offs','first degree','fourth','rectal mucosa','cephalohematoma','spinal','hypotension','lochia','approximation','urine output','bowel','pain relief','assisted-mobility','homan','no complete cesarean','do not provide a complete cesarean'],
 'shoulder-dystocia':['do not wait 2 minutes','previous shoulder dystocia','do not reliably predict','activate','mcroberts','onto her back','suprapubic','woods screw','do not apply','fundal','jerking','head-birth time','body-birth time','contemporaneous','no duration is a guaranteed safe','brachial plexus','clavicular','arm movement','hemorrhage'],
 'other-birth-emergencies':['after membrane rupture','sterile-gloved','elevate the presenting part','maintain decompression','do not try to push it back','loss of fetal station','stop a labor-stimulating oxytocin','hypotension','hypoxia','coagulopathy','cpr','clinical diagnosis','fetal cells alone do not confirm','turning inside out','uterotonics are held during replacement','after correction','routine oxygen','normally oxygenated','not full clinical cases']
};
// Some coverage is recorded in the objective/source note, where material limits belong.
for(const [id,terms] of Object.entries(coverage)){const combined=(notes(id)+' '+JSON.stringify(all.find(o=>o.id===id))).toLowerCase();for(const term of terms)assert(combined.includes(term),id+': '+term);}
assert.deepEqual(audit.materialLimits.map(m=>m.objectiveId),['complicated-labor','assisted-cesarean-birth','other-birth-emergencies']);
const sourceScope=JSON.stringify(newIds.map(id=>all.find(o=>o.id===id).answer)).toLowerCase();
for(const term of ['bishop score','montevideo units','zavanelli','huntington','haultain','a-ok regimen'])assert(!sourceScope.includes(term),'Do not add unrelated protocols: '+term);
assert(!/\b\d+(?:\.\d+)?\s*(?:mg|mcg|micrograms|units\/hr)\b/.test(sourceScope),'No replacement medication dosing table');
const fact=all.find(o=>o.id==='shoulder-dystocia').answer[1].blocks[0].items[0],saved=fact.text;fact.text='<script>alert("patient")</script> & safety';
for(const route of ['#/ob-final/week-6','#/ob-final/week-8','#/ob-final/topic/labor-emergencies']){const part=section(render(route),'shoulder-dystocia');assert(part.includes('&lt;script&gt;alert(&quot;patient&quot;)&lt;/script&gt; &amp; safety'));assert(!part.includes('<script>'));}fact.text=saved;
console.log('Passed: all 5 Week 6 objectives populated, 29 new / 34 total closed topics, source-page/PDF integrity, 29 prior answers and shared hemorrhage preserved, explicit source gaps and limited safety clarifications, weekly/exam/review reuse and safe rendering.');
