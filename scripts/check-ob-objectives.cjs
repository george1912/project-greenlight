const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const main={innerHTML:'',querySelector:()=>null,querySelectorAll:()=>[],focus(){}};
const context={URL,console,document:{querySelector:()=>main,title:''},location:{hash:'#/'},window:{addEventListener(){},scrollTo(){}},PresentationViewer:{mount:()=>()=>{}}};vm.createContext(context);
for(const match of html.matchAll(/<script src="([^?]+)\?[^\"]+" defer><\/script>/g)){
 const file=match[1];if(file==='viewer.js'||file==='analytics.js')continue;
 vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
}
const course=vm.runInContext('obCourse',context),objectives=vm.runInContext('obStudyObjectives',context);
const escapeHTML=text=>String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const render=route=>{context.location.hash=route;vm.runInContext('render()',context);return main.innerHTML;};
const ids=markup=>[...markup.matchAll(/data-objective="([^"]+)"/g)].map(match=>match[1]);
const sorted=values=>Array.from(values).sort();
assert.equal(objectives.length,75);assert.equal(objectives.filter(o=>o.topicIds.length).length,60);
assert.equal(new Set(objectives.map(o=>o.id)).size,75);
for(const objective of objectives){
 assert(/^[a-z0-9-]+$/.test(objective.id));assert(objective.title&&objective.text);if(objective.id!=='family-centered-care')assert.equal(objective.answer.length,0,'Other answers await the user’s notes');
 assert(objective.weekIds.length);assert(objective.weekIds.every(id=>course.weeks.some(w=>w.id===id&&!w.reviewOf)));
 assert(objective.topicIds.every(id=>course.topics.some(t=>t.id===id)));
}
for(const week of course.weeks){
 const expected=objectives.filter(o=>week.reviewOf?o.weekIds.some(id=>week.reviewOf.includes(id)):o.weekIds.includes(week.id));
 const markup=render('#/ob-final/'+week.id);assert.deepEqual(sorted(ids(markup)),sorted(expected.map(o=>o.id)),week.id);
 assert.equal(new Set(ids(markup)).size,ids(markup).length,'No duplicate review objectives');
 for(const objective of expected){assert(markup.includes(escapeHTML(objective.text)));assert(markup.includes(`data-objective="${objective.id}"`));}
 assert(markup.indexOf('class="ob-presentations"')<markup.indexOf('class="ob-objectives"')||week.reviewOf, 'Weekly presentations precede objectives');
 if(!week.reviewOf){assert(markup.includes('<details class="ob-presentations"><summary>'));assert(markup.indexOf('class="ob-week-infographic"')<markup.indexOf('class="ob-objectives"'));}
 assert(markup.includes('based on the syllabus, exam blueprint, and teaching presentations'));
 assert(!/<textarea|contenteditable|<input/.test(markup),'Blank note areas must not imply an unsaved editor');
}
for(const topic of course.topics){
 const expected=objectives.filter(o=>o.topicIds.includes(topic.id));assert(expected.length>=4,topic.id);
 const markup=render('#/ob-final/topic/'+topic.id);assert.deepEqual(sorted(ids(markup)),sorted(expected.map(o=>o.id)),topic.id);
 for(const objective of expected)assert(markup.includes(escapeHTML(objective.text)));
 assert(markup.indexOf('class="ob-presentations"')<markup.indexOf('class="ob-objectives"'));
 assert(markup.includes('<details class="ob-presentations"><summary>'));
 assert(!markup.includes('<details class="ob-presentations" open'));
 assert(markup.indexOf('class="condition-poster"')<markup.indexOf('class="ob-objectives"'));
 assert(markup.includes('Ready for your notes'));assert(!markup.includes('class="ob-notes-pending"'));
 assert(!markup.includes('download')&&!markup.includes('Syllabus(1).pdf'));
}
const family=objectives.find(o=>o.id==='family-centered-care');
assert(family.answer.length>0);assert.equal(family.answerReviewedOn,'2026-11-20');
for(const source of family.answerSources)assert.equal(new URL(source.url).protocol,'https:');
const familyMarkup=render('#/ob-final/week-1').split('data-objective="family-centered-care"')[1].split('data-objective="pregnancy-adaptations"')[0];
assert(!familyMarkup.includes('Ready for your notes'));
for(const text of ['Failure to rescue','Sentinel event','SBAR','teach-back','Informed consent','WIC','Birth center','Sources for these notes'])assert(familyMarkup.includes(text),text);
assert(familyMarkup.includes('<h4>')&&!familyMarkup.includes('<h5>'));
assert(!render('#/ob-final/week-2').includes('Sources for these notes'));
// One future note edit must appear unchanged in both views and preserve safe formatting.
const item=objectives.find(o=>o.id==='postpartum-assessment');
item.answer.push('A future note with <patient> & safety cues.',{type:'list',items:['Assessment','Nursing diagnosis','Plan, intervene, evaluate']});
for(const route of ['#/ob-final/week-7','#/ob-final/topic/normal-postpartum','#/ob-final/week-8']){
 const markup=render(route);assert(markup.includes('A future note with &lt;patient&gt; &amp; safety cues.'));assert(markup.includes('<li>Nursing diagnosis</li>'));assert(!markup.includes('<patient>'));
}
item.answer.length=0;
const guide=render('#/ob-final/study-guide');assert(guide.includes('How to organize your notes'));for(const section of course.sections)assert(guide.includes(escapeHTML(section.title)));
assert(guide.includes('#/ob-final/practice')&&guide.includes('#/ob-final/podcast'));
for(const keyword of ['GTPAL','Naegele','Diabetes','preeclampsia','HELLP','magnesium','variability','decelerations','two different strips','Shoulder dystocia','Placenta previa','Prematurity','phototherapy','formula','LAM','partner'])assert(JSON.stringify(objectives).toLowerCase().includes(keyword.toLowerCase()),keyword);
const audit=JSON.parse(fs.readFileSync(path.join(root,'docs/ob-objectives-map.json'),'utf8'));
assert.equal(audit.counts.allObjectives,75);assert.equal(audit.counts.examObjectives,60);assert.equal(audit.noteStorage,'obStudyObjectives[].answer');assert.equal(audit.objectives.length,75);
for(const entry of audit.objectives){const item=objectives.find(o=>o.id===entry.id);assert(item);assert.deepEqual(sorted(entry.weekIds),sorted(item.weekIds));assert.deepEqual(sorted(entry.topicIds),sorted(item.topicIds));}
const workflow=fs.readFileSync(path.join(root,'.github/workflows/pages.yml'),'utf8');assert(workflow.includes('ob-objectives.js'));assert(html.indexOf('ob-objectives.js?')<html.indexOf('src="ob.js?'));
console.log('Passed: 75 shared objectives across all 9 teaching sessions, 60 mapped to all 11 exam topics; Week 8 reuses Weeks 5–7; completed family-centered notes, other blank note areas, safe future note rendering in both views, nursing outline, source mapping, and deployment.');
