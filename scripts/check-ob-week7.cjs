const {historicalObjectiveHash,beforeFinalReview}=require('./lib/ob-note-review.cjs');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const main={innerHTML:'',querySelector:()=>null,querySelectorAll:()=>[],focus(){}};
const c={URL,console,document:{querySelector:()=>main,title:''},location:{hash:'#/'},window:{addEventListener(){},scrollTo(){}},PresentationViewer:{mount:()=>()=>{}}};vm.createContext(c);
for(const match of html.matchAll(/<script src="([^?]+)\?[^\"]+" defer><\/script>/g))if(!['viewer.js','analytics.js'].includes(match[1]))vm.runInContext(fs.readFileSync(path.join(root,match[1]),'utf8'),c,{filename:match[1]});
const {all,rules,formatter}=vm.runInContext('({all:obStudyObjectives,rules:obReadabilityRules,formatter:OBReadability})',c),week7=all.filter(o=>o.weekIds.includes('week-7'));
const audit=JSON.parse(fs.readFileSync(path.join(root,'docs/ob-week7-notes-audit.json'))),map=JSON.parse(fs.readFileSync(path.join(root,'docs/ob-objectives-map.json'))),review=JSON.parse(fs.readFileSync(path.join(root,'docs/readability/ob-readability-review.json')));
const expected=['postpartum-physiology','postpartum-assessment','postpartum-labs-elimination','postpartum-comfort-mobility','postpartum-family-adaptation','postpartum-discharge','postpartum-hemorrhage-assessment','postpartum-hemorrhage-management','postpartum-subinvolution','postpartum-infections','postpartum-thromboembolism','postpartum-mental-health'];
assert.deepEqual(Array.from(week7,o=>o.id),expected);assert.deepEqual(audit.objectives.map(o=>o.id),expected);assert(week7.every(o=>o.answer.length));
assert.deepEqual(Array.from(all.filter(o=>o.answer.length),o=>o.id),map.completedObjectiveIds);
const hash=data=>crypto.createHash('sha256').update(data).digest('hex');
assert.equal(audit.preservedCompletedObjectives.length,33);for(const saved of audit.preservedCompletedObjectives)assert.equal(historicalObjectiveHash(all.find(o=>o.id===saved.id)),saved.sha256,'Preserve earlier objective '+saved.id);
for(const source of audit.sources){assert.equal(hash(fs.readFileSync(path.join(root,source.path))),source.sha256);assert.equal(JSON.parse(fs.readFileSync(path.join(root,path.dirname(source.path),'deck.json'))).pages.length,source.pages);}
const render=route=>{c.location.hash=route;vm.runInContext('render()',c);return main.innerHTML;};
const section=(markup,id)=>{const markers=[...markup.matchAll(/data-objective="([^"]+)"/g)],i=markers.findIndex(m=>m[1]===id);assert(i>=0,id);return markup.slice(markers[i].index,markers[i+1]?.index);};
const answerPart=part=>part.split('<div class="answer-area">')[1].split('</ul></details></div>')[0];
const weekly=render('#/ob-final/week-7');assert(!weekly.includes('Ready for your notes'));assert.equal((weekly.match(/class="ob-note-overview"/g)||[]).length,12);
assert(weekly.indexOf('class="ob-week-infographic"')<weekly.indexOf('class="ob-presentations"'));assert(weekly.indexOf('class="ob-practice-overview"')<weekly.indexOf('class="ob-objectives"'));assert(weekly.includes('<details class="ob-presentations"><summary>'));
let groups=0;
for(const record of audit.objectives){const o=all.find(o=>o.id===record.id),topics=o.answer.filter(b=>b.type==='group');groups+=topics.length;
 assert.equal(o.answer[0].type,'overview');assert.equal(o.answer[0].items.length,3);assert.equal(o.answerReviewedOn,audit.reviewedOn);assert(o.answerSourceNote);
 assert.deepEqual(Array.from(topics,g=>g.title),record.topics);for(const coverage of record.outlineCoverage)assert(record.topics.includes(coverage.noteTopic));
 for(const range of record.lectureRanges){const source=audit.sources.find(s=>s.deckId===range.deckId);assert(source&&range.firstPage>=1&&range.lastPage>=range.firstPage&&range.lastPage<=source.pages);}
 assert.deepEqual(Array.from(o.answerSources.slice(0,2),s=>s.url),['#/ob-final/presentation/postpartum-care','#/ob-final/presentation/postpartum-handout']);
 for(const ref of o.answerSources.slice(2)){assert.equal(new URL(ref.url).protocol,'https:');assert(ref.title.includes('clarification'));}
 for(const topic of topics){const text=topic.blocks.flatMap(b=>b.items.map(i=>i.label+' '+i.text)).join(' ');assert(text.split(/\s+/).length<=160,'Readable topic: '+topic.title);assert(!text.includes('**'));assert(topic.blocks.flatMap(b=>b.items).some(i=>formatter.format(i.text,o.id+'|'+topic.title).includes('data-ob-emphasis="bold"')),'Bold study cues: '+topic.title);}
 for(const route of ['#/ob-final/week-7','#/ob-final/week-8',...Array.from(o.topicIds,id=>'#/ob-final/topic/'+id)]){const markup=render(route),part=section(markup,o.id);assert(part.includes('Quick answer')&&part.includes('Sources for these notes'));assert.equal((part.match(/class="ob-note-topic"/g)||[]).length,topics.length);assert(!/<details class="ob-note-(?:topic|sources)"[^>]*\bopen\b/.test(part));assert(!part.includes('<iframe'));assert(!/href="(?!https:)[^\"]+\.pdf/.test(part));assert.equal(answerPart(part),answerPart(section(weekly,o.id)),'Identical shared notes: '+route);}
}
assert.equal(groups,58);assert.equal(audit.emphasis.newBoldSpans,130);const additions=review.additions.filter(a=>beforeFinalReview(a)&&expected.includes(a.objectiveId)&&a.section!=='prompt');assert.equal(additions.length,130);assert(additions.every(a=>a.style==='bold'));for(const a of additions)assert(rules[a.objectiveId+'|'+a.section].some(r=>r.text===a.exact_text&&r.style==='bold'));
const text=id=>JSON.stringify(all.find(o=>o.id===id).answer).toLowerCase();
const coverage={
 'postpartum-physiology':['involution','about 1 cm','rubra','serosa','alba','afterpains','diuresis','estrogen','prolactin','oxytocin','ovulation','diastasis','cervix','postdural','fever ≥38'],
 'postpartum-assessment':['bubblehe','vital signs','reeda','firm versus boggy','decreased bladder sensation','hematoma','homan','emotional','does not by itself diagnose'],
 'postpartum-labs-elimination':['hgb/hct','20,000–30,000','first 24 hours','diuresis','retention','frequent small voids','6 hours','stool softeners','vomiting'],
 'postpartum-comfort-mobility':['analgesia','sedation','cold packs','sitz baths','hemorrhoids','incision','uterine exploration is clinician-led','avoid tight binding','empty bladder','rest'],
 'postpartum-family-adaptation':['taking-in','taking-hold','letting-go','engrossment','expectations','infant illness','chosen partner','no single required','who will help','evaluate'],
 'postpartum-discharge':['teach-back','28 days','unsensitized rh-negative','rh-positive infant','72 hours','amenorrhea','<6 months','4 hours','6 hours','within 3 weeks','by 12 weeks'],
 'postpartum-hemorrhage-assessment':['≥1000 ml','within 24 hours','atony','firm uterus','hematoma','retained','inversion','oozing','1 g','1 ml','dry weight','hypotension'],
 'postpartum-hemorrhage-management':['activate','fundal massage','bladder','iv access','blood products','fibrinogen','avoid methylergonovine','hypertension','avoid carboprost in asthma','antifibrinolytic','3 hours of birth','reassess'],
 'postpartum-subinvolution':['delayed','retained','infection','perfusion','ordered investigations','evaluate','follow-up'],
 'postpartum-infections':['endometritis','wound','urinary','mastitis','antibiotics','normal breastfeeding','avoid deep massage','sepsis','organ dysfunction','without fever','do not delay'],
 'postpartum-thromboembolism':['hypercoagulability','vessel injury','immobility','compression devices','one-sided','homan','ultrasound','anticoagulation','dyspnea','emergency','bleeding precautions'],
 'postpartum-mental-health':['within 2 weeks','even before 2 weeks','unwanted, distressing','reality testing','intent','plan','do not leave','bdi-ii','epds','phq-9','screening is not diagnosis','follow-up']
};for(const [id,terms] of Object.entries(coverage))for(const term of terms)assert(text(id).includes(term),id+': '+term);
assert.equal(audit.materialLimits.length,4);assert(audit.visualReview[0].pages.includes(12));assert(!/\b\d+(?:\.\d+)?\s*(?:mg|mcg|micrograms)\b/i.test(JSON.stringify(week7.map(o=>o.answer))),'No invented medication-dose table');
const fact=week7[0].answer[1].blocks[0].items[0],saved=fact.text;fact.text='<img src=x onerror="alert(1)"> & safety';for(const route of ['#/ob-final/week-7','#/ob-final/week-8','#/ob-final/topic/normal-postpartum']){const part=section(render(route),week7[0].id);assert(part.includes('&lt;img src=x onerror=&quot;alert(1)&quot;&gt; &amp; safety'));assert(!part.includes('<img src=x'));}fact.text=saved;
console.log('Passed: all 12 Week 7 objectives, 58 short closed topics, 130 bold cues, original PDF hashes/page coverage, 33 earlier answers preserved, clinical safety/source limits, practice access, exact weekly/exam/Week 8 reuse and escaped text.');
