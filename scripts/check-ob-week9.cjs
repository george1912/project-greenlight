const {historicalObjectiveHash,beforeFinalReview}=require('./lib/ob-note-review.cjs');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const main={innerHTML:'',querySelector:()=>null,querySelectorAll:()=>[],focus(){}};
const c={URL,console,document:{querySelector:()=>main,title:''},location:{hash:'#/'},window:{addEventListener(){},scrollTo(){}},PresentationViewer:{mount:()=>()=>{}}};vm.createContext(c);
for(const match of html.matchAll(/<script src="([^?]+)\?[^\"]+" defer><\/script>/g))if(!['viewer.js','analytics.js'].includes(match[1]))vm.runInContext(fs.readFileSync(path.join(root,match[1]),'utf8'),c,{filename:match[1]});
const {all,formatter}=vm.runInContext('({all:obStudyObjectives,formatter:OBReadability})',c);
const week=all.filter(o=>o.weekIds.includes('week-9'));
const expected=['newborn-transition-apgar','newborn-head-to-toe','newborn-variants','newborn-gestational-assessment','newborn-routine-care','newborn-discharge-teaching','feeding-needs-milk-changes','breastfeeding-latch-support','feeding-adequacy','milk-expression-storage','formula-preparation','feeding-special-circumstances'];
const audit=JSON.parse(fs.readFileSync(path.join(root,'docs/ob-week9-notes-audit.json'))),map=JSON.parse(fs.readFileSync(path.join(root,'docs/ob-objectives-map.json'))),review=JSON.parse(fs.readFileSync(path.join(root,'docs/readability/ob-readability-review.json')));
assert.deepEqual(Array.from(week,o=>o.id),expected);assert.deepEqual(audit.objectives.map(o=>o.id),expected);assert(week.every(o=>o.answer.length));assert.deepEqual(Array.from(all.filter(o=>o.answer.length),o=>o.id),map.completedObjectiveIds);
const hash=value=>crypto.createHash('sha256').update(value).digest('hex');
assert.equal(audit.preservedCompletedObjectives.length,45);assert.equal(audit.preservedOtherObjectives.length,63);
const earlierAnswers=new Set(audit.preservedCompletedObjectives.map(o=>o.id));
for(const saved of [...audit.preservedCompletedObjectives,...audit.preservedOtherObjectives]){
 const current=all.find(o=>o.id===saved.id);let candidate=current;
 // A later week may fill an originally blank answer while preserving its prompt/mappings.
 if(!earlierAnswers.has(saved.id)&&hash(JSON.stringify(current))!==saved.sha256){candidate={...current,answer:[]};for(const key of ['answerSources','answerSourceNote','answerReviewedOn'])delete candidate[key];}
 assert.equal(historicalObjectiveHash(candidate),saved.sha256,'Preserve earlier answer or original objective metadata '+saved.id);
}
for(const source of audit.sources){assert.equal(hash(fs.readFileSync(path.join(root,source.path))),source.sha256);assert.equal(JSON.parse(fs.readFileSync(path.join(root,path.dirname(source.path),'deck.json'))).pages.length,source.pages);}
assert.deepEqual(audit.sources.map(s=>s.pages),[63,7,5,26]);
const render=route=>{c.location.hash=route;vm.runInContext('render()',c);return main.innerHTML;};
const section=(markup,id)=>{const marks=[...markup.matchAll(/data-objective="([^"]+)"/g)],i=marks.findIndex(m=>m[1]===id);assert(i>=0,id);return markup.slice(marks[i].index,marks[i+1]?.index);};
const answerPart=part=>part.split('<div class="answer-area">')[1].split('</ul></details></div>')[0];
const weekly=render('#/ob-final/week-9');assert(!weekly.includes('Ready for your notes'));assert.equal((weekly.match(/class="ob-note-overview"/g)||[]).length,12);
assert(weekly.indexOf('class="ob-week-infographic"')<weekly.indexOf('class="ob-presentations"'));assert(weekly.includes('<details class="ob-presentations"><summary>'));assert(weekly.indexOf('class="ob-practice-overview"')<weekly.indexOf('class="ob-objectives"'));assert(weekly.includes('href="reader/ob/week-9.html"'));
let groupCount=0;
for(const record of audit.objectives){
 const o=all.find(o=>o.id===record.id),topics=o.answer.filter(b=>b.type==='group');groupCount+=topics.length;
 assert.equal(o.answer[0].type,'overview');assert.equal(o.answer[0].items.length,3);assert.equal(o.answerReviewedOn,audit.reviewedOn);assert(o.answerSourceNote.startsWith('Lecture base:'));
 assert.deepEqual(Array.from(topics,t=>t.title),record.topics);for(const coverage of record.outlineCoverage){assert(coverage.requirement);assert(record.topics.includes(coverage.noteTopic));}
 for(const range of record.lectureRanges){const source=audit.sources.find(s=>s.deckId===range.deckId);assert(source&&range.firstPage>=1&&range.lastPage>=range.firstPage&&range.lastPage<=source.pages);}
 const supplied=o.answerSources.filter(s=>s.url.startsWith('#/ob-final/presentation/'));assert(supplied.length);assert(o.answerSources.slice(0,supplied.length).every(s=>s.url.startsWith('#/ob-final/presentation/')));
 for(const ref of o.answerSources.slice(supplied.length)){assert.equal(new URL(ref.url).protocol,'https:');assert(ref.title.includes('clarification'));}
 for(const topic of topics){const facts=topic.blocks.flatMap(b=>b.items),text=facts.map(i=>i.label+' '+i.text).join(' ');assert(text.split(/\s+/).length<=160,'Concise topic: '+topic.title);assert(!text.includes('**'));assert(facts.some(i=>formatter.format(i.text,o.id+'|'+topic.title).includes('data-ob-emphasis="bold"')),'Key study cues: '+topic.title);}
 for(const route of [...Array.from(o.weekIds,id=>'#/ob-final/'+id),...Array.from(o.topicIds,id=>'#/ob-final/topic/'+id)]){const part=section(render(route),o.id);assert(part.includes('Quick answer')&&part.includes('Sources for these notes'));assert.equal((part.match(/class="ob-note-topic"/g)||[]).length,topics.length);assert(!/<details class="ob-note-(?:topic|sources)"[^>]*\bopen\b/.test(part));assert(!part.includes('<iframe'));assert(!/href="[^\"]+\.pdf/.test(part));assert.equal(answerPart(part),answerPart(section(weekly,o.id)),'Identical shared notes: '+route);}
}
assert.equal(groupCount,66);assert.equal(audit.emphasis.newBoldSpans,130);assert.equal(review.additions.filter(a=>beforeFinalReview(a)&&expected.includes(a.objectiveId)).length,130);
assert.deepEqual(Array.from(week.slice(0,6),o=>o.topicIds.join(',')),Array(6).fill('normal-newborn'));assert.deepEqual(Array.from(week.slice(6),o=>o.topicIds.join(',')),Array(6).fill('feeding'));
assert.deepEqual(Array.from(week.filter(o=>o.weekIds.includes('week-10')),o=>o.id),['newborn-transition-apgar','newborn-head-to-toe','newborn-gestational-assessment','newborn-discharge-teaching']);
const text=id=>JSON.stringify(all.find(o=>o.id===id).answer).toLowerCase();
const coverage={
 'newborn-transition-apgar':['30–60','circulation','foramen ovale','ductus arteriosus','ductus venosus','≥100','2 + 2 + 2 + 2 + 2 = 10','1 and 5 minutes','through 20 minutes','do not wait','shorter than 20 seconds'],
 'newborn-head-to-toe':['full minute','weight, length and head circumference','fontanelles','palate','apical','two arteries and one vein','genitalia','foreskin','knee heights','upgoing great toe','quiet alert','documentation'],
 'newborn-variants':['milia','congenital dermal melanocytosis','erythema toxicum','central cyanosis','first 24 hours','molding','caput','does not cross suture','subgaleal','concealed loss','immediate neonatal'],
 'newborn-gestational-assessment':['<37 weeks','37 weeks 0 days','39 weeks 0 days','41 weeks 0 days','≥42 weeks','square window','heel-to-ear','<10th percentile','10th–90th','>90th percentile','35 maps to 38 weeks','separate growth percentile'],
 'newborn-routine-care':['do not routinely suction','conduction','identification','stump clean and dry','vitamin k','within 6 hours','erythromycin','hbig is not the vaccine series','24–48 hours','no news','hearing','right-hand and foot','predischarge bilirubin','hypospadias','analgesia'],
 'newborn-discharge-teaching':['back for every sleep','firm, flat, level separate','room-share','rear-facing','≥38°c/100.4°f','emergency help','cord','circumcision','3–5 days','teach-back','support'],
 'feeding-needs-milk-changes':['not universal first-day','do not add free water','colostrum','iga','transitional','mature','prolactin','oxytocin','400 iu','32 ounces','without judgment'],
 'breastfeeding-latch-support':['rooting','8–12','poor arousal','ear, shoulder and hip','c/u hold','chin first','flanged','swallowing','page 22','persistent pain','reobserve'],
 'feeding-adequacy':['birth weight − current weight','>10% requires evaluation','7–14 days','continued loss after day 5','six or more wet diapers','transitional','supplement','recheck'],
 'milk-expression-storage':['after every use','food-grade glass/plastic','4 hours at ≤25°c/77°f','4 days refrigerated','6 months is best','12 months','complete thawing','24 hours','2 hours','never microwave','refreeze','frozen ice packs','work'],
 'formula-preparation':['ready-to-feed needs no added water','water first','not sterile','younger than 2 months','70°c/158°f','cool safely','2 hours of preparation','1 hour from the start','within 24 hours','never prop','prepare a bottle'],
 'feeding-special-circumstances':['hepatitis b or c alone','within 12 hours','affected breast','unaffected breast','viral suppression','not mean zero','methadone/buprenorphine','classic galactosemia','measured breast milk','temporarily','donor milk','follow-up']
};
for(const [id,terms]of Object.entries(coverage))for(const term of terms)assert(text(id).includes(term),id+': '+term);
assert(audit.visualReview.find(r=>r.deckId==='infant-feeding').pages.includes(22));assert(audit.visualReview.find(r=>r.deckId==='newborn-care').pages.includes(55));assert.equal(audit.materialLimits.length,4);
const fact=week[0].answer[1].blocks[0].items[0],saved=fact.text;fact.text='<img src=x onerror="alert(1)"> & safety';for(const route of ['#/ob-final/week-9','#/ob-final/week-10','#/ob-final/topic/normal-newborn']){const part=section(render(route),week[0].id);assert(part.includes('&lt;img src=x onerror=&quot;alert(1)&quot;&gt; &amp; safety'));assert(!part.includes('<img src=x'));}fact.text=saved;
console.log('Passed: 12 Week 9 objectives, 66 concise closed topics, 130 bold cues, four original PDF hashes/figure coverage, all 45 earlier answers/63 other objective prompts and mappings preserved, safety distinctions, exact weekly/exam/Week 10 reuse, practice access and escaped text.');
