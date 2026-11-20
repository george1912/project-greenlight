const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const main={innerHTML:'',querySelector:()=>null,querySelectorAll:()=>[],focus(){}};
const s={URL,document:{querySelector:()=>main,title:''},location:{hash:'#/'},window:{addEventListener(){},scrollTo(){}},console,PresentationViewer:{mount:()=>()=>{}}};
vm.createContext(s);
for(const file of ['content.js','presentations.js','conditions.js','videos.js','video-library.js','podcast.js','quiz-data.js','quiz.js','presentation-quiz-data.js','presentation-quizzes.js','posters.js','section-quizzes.js','focused-review-data.js','focused-review-olivia-data.js','focused-review-combined-data.js','focused-review.js','ob-content.js','ob.js','app.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),s,{filename:file});
const course=vm.runInContext('obCourse',s);
assert(main.innerHTML.includes('class="exam-card" href="#/final"'));assert(main.innerHTML.includes('class="exam-card" href="#/ob-final"'));
function render(route){s.location.hash=route;vm.runInContext('render()',s);return main.innerHTML;}
const overview=render('#/ob-final');assert(overview.indexOf('class="study-guide-entry"')<overview.indexOf('id="ob-weekly-title"'));
assert.equal(course.code,'NRBS 3410');assert.equal(course.topics.length,11);assert.equal(course.topics.filter(t=>t.group==='main').length,7);assert.equal(course.topics.filter(t=>t.group==='cumulative').length,4);
assert.deepEqual(Array.from(course.topics,t=>Array.from(t.questions)),[[8,16],[4,8],[6,10],[3,8],[6,10],[4,6],[5,8],[2,2],[2,2],[2,2],[2,2]]);
const expectedMappings={
 'normal-postpartum':['week-7'],'postpartum-complications':['week-7'],'normal-newborn':['week-9','week-10'],'newborn-complications':['week-10'],contraception:['august-4'],stis:['august-4'],feeding:['week-9'],'antepartum-prenatal':['week-1','week-2'],'pregnancy-complications':['week-3'],'fetal-monitoring':['week-5'],'labor-emergencies':['week-3','week-6']
};
for(const topic of course.topics){
 assert.deepEqual(Array.from(topic.weekIds),expectedMappings[topic.id]);
 assert.equal(Object.keys(topic.content).length,0);assert.equal(topic.practiceQuestions.length,0);assert.equal(topic.resources.length,0);
 const markup=render('#/ob-final/topic/'+topic.id);assert(markup.includes('Study notes'));assert(markup.includes('Exam focus'));assert(!s.document.title.includes('Page not found'));
 for(const id of topic.weekIds)assert(markup.includes(`href="#/ob-final/${id}"`));
 assert(!/href="[^\"]+\.pdf|download|<iframe|<form|Clinical references|Reading references/.test(markup));
 assert(!markup.includes('#/final/condition/'),'OB topic must not open Med-Surg conditions');
}
const guide=render('#/ob-final/study-guide');assert.equal((guide.match(/class="ob-topic-card"/g)||[]).length,11);assert(guide.includes('50–60'));assert(guide.includes('approximate'));assert(guide.includes('not exhaustive'));
for(const term of ['Naegele’s rule','GTPAL','Diabetes','preeclampsia','two fetal-monitoring strips','Shoulder dystocia','Placental complications','Prematurity'])assert(JSON.stringify(course.topics).includes(term));
assert.equal(course.weeks.find(w=>w.id==='august-4').number,null);assert(!course.weeks.some(w=>w.id==='week-11'));
const week8=render('#/ob-final/week-8');assert(week8.includes('Exam II'));for(const n of [5,6,7])assert(week8.includes(`href="#/ob-final/week-${n}"`));assert(!week8.includes('class="ob-notes-pending"'));
for(const week of course.weeks){const markup=render('#/ob-final/'+week.id);assert(!s.document.title.includes('Page not found'));for(const topic of course.topics.filter(t=>t.weekIds.includes(week.id)))assert(markup.includes('href="#/ob-final/topic/'+topic.id+'"'));}
for(const route of ['#/ob-final/topic/constructor','#/ob-final/topic/__proto__','#/ob-final/week-99','#/ob-final/unknown']){render(route);assert(s.document.title.includes('Page not found'));}
for(const route of ['#/ob-final/','#/ob-final/study-guide/?source=class','#/ob-final/topic/feeding/']){render(route);assert(!s.document.title.includes('Page not found'));}
render('#/final');assert(s.document.title.includes('Med-Surg III'));render('#/final/study-guide');assert(main.innerHTML.includes('Choose a condition'));
const html=fs.readFileSync(path.join(root,'index.html'),'utf8'),workflow=fs.readFileSync(path.join(root,'.github/workflows/pages.yml'),'utf8');
for(const file of ['ob-content.js','ob.js']){assert(html.includes(`src="${file}?`));assert(workflow.includes(file));}
const recovery=fs.readFileSync(path.join(root,'404.html'),'utf8').match(/<script>([\s\S]*?)<\/script>/)[1];let redirected='';vm.runInNewContext(recovery,{URL,location:{pathname:'/project-greenlight/ob-final/topic/feeding',search:'?source=class',origin:'https://george1912.github.io',replace(url){redirected=url;}}});assert.equal(redirected,'https://george1912.github.io/project-greenlight/?source=class#/ob-final/topic/feeding');
console.log('Passed: two course cards, OB guide before weeks, all 11 blueprint groups/counts, 10 syllabus sessions, cumulative focus items, honest Week 8/August 4 labels, empty study banks, no source downloads, related links, safe invalid routes, redirects and preserved Med-Surg pages.');
