const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const main={innerHTML:'',querySelector:()=>null,querySelectorAll:()=>[],focus(){}};
const context={URL,console,document:{querySelector:()=>main,title:''},location:{hash:'#/'},window:{addEventListener(){},scrollTo(){}},PresentationViewer:{mount:()=>()=>{}}};
vm.createContext(context);
for(const match of html.matchAll(/<script src="([^?]+)\?[^\"]+" defer><\/script>/g)){
 if(['viewer.js','analytics.js'].includes(match[1]))continue;
 vm.runInContext(fs.readFileSync(path.join(root,match[1]),'utf8'),context,{filename:match[1]});
}
const all=vm.runInContext('obStudyObjectives',context),week1=all.filter(o=>o.weekIds.includes('week-1'));
const audit=JSON.parse(fs.readFileSync(path.join(root,'docs/ob-week1-notes-audit.json')));
const map=JSON.parse(fs.readFileSync(path.join(root,'docs/ob-objectives-map.json')));
const expected=['family-centered-care','pregnancy-adaptations','pregnancy-psychosocial-care','conception-fetal-development'];
assert.deepEqual(Array.from(week1,o=>o.id),expected);
assert.deepEqual(map.completedObjectiveIds,expected);assert.equal(all.filter(o=>!o.answer.length).length,71);
assert.deepEqual(audit.objectives.map(o=>o.id),expected);
for(const source of audit.sources){
 const bytes=fs.readFileSync(path.join(root,source.path));assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),source.sha256);
 const manifest=JSON.parse(fs.readFileSync(path.join(root,path.dirname(source.path),'deck.json')));assert.equal(manifest.pages.length,source.pages);
}
const render=route=>{context.location.hash=route;vm.runInContext('render()',context);return main.innerHTML;};
function objectiveMarkup(route,id){
 const markup=render(route),markers=[...markup.matchAll(/data-objective="([^"]+)"/g)],index=markers.findIndex(m=>m[1]===id);
 assert(index>=0,route+': '+id);return markup.slice(markers[index].index,markers[index+1]?.index);
}
let groups=0;
for(const objective of week1){
 assert.equal(objective.answer[0].type,'overview');assert(objective.answer[0].items.length>=3);
 const topics=objective.answer.filter(b=>b.type==='group');groups+=topics.length;
 const record=audit.objectives.find(o=>o.id===objective.id);assert.deepEqual(Array.from(topics,b=>b.title),record.topics);
 for(const requirement of record.outlineCoverage)assert(topics.some(b=>b.title===requirement.noteTopic),'Uncovered outline item: '+requirement.requirement);
 for(const range of record.lectureRanges){const source=audit.sources.find(s=>s.deckId===range.deckId);assert(source&&range.firstPage>=1&&range.lastPage<=source.pages);}
 assert(objective.answerSourceNote&&objective.answerReviewedOn);assert(objective.answerSources.length>=2);
 for(const ref of objective.answerSources)assert.equal(new URL(ref.url).protocol,'https:');
 const routes=[...Array.from(objective.weekIds,id=>'#/ob-final/'+id),...Array.from(objective.topicIds,id=>'#/ob-final/topic/'+id)];
 for(const route of routes){
  const block=objectiveMarkup(route,objective.id);assert(block.includes('Quick answer'));assert(!block.includes('Ready for your notes'));
  assert.equal((block.match(/class="ob-note-topic"/g)||[]).length,topics.length);assert(!/<details class="ob-note-topic"[^>]*\bopen\b/.test(block),'Start with the overview');
  for(const topic of topics)assert(block.includes(topic.title.replace(/&/g,'&amp;')));
  assert(block.includes('Sources for these notes'));assert(!block.includes('<iframe'),'No eager third-party players');
 }
}
assert.equal(groups,36);
const text=objective=>JSON.stringify(objective.answer).toLowerCase();
const coverage={
 'family-centered-care':['failure to rescue','sentinel event','sbar','consent','advocacy','cultur','support','mortality'],
 'pregnancy-adaptations':['cardiovascular','respiratory','reproductive','gastrointestinal','renal','musculoskeletal','skin','hcg','physiologic anemia','supine','27 mg','micrograms','gtpal'],
 'pregnancy-psychosocial-care':['ambivalence','coping','body image','partner','siblings','culture','radar','quickening','lightening','follow-up'],
 'conception-fetal-development':['fsh','lh','corpus luteum','zygote','morula','blastocyst','implantation','ectoderm','mesoderm','endoderm','placenta','igg','passive immunity','chorion','amnion','amniotic','umbilical','foramen ovale','ductus venosus','ductus arteriosus','twin','nipt','cvs','amniocentesis']
};
for(const objective of week1)for(const term of coverage[objective.id])assert(text(objective).includes(term),objective.id+': '+term);
// Structured fact text must remain safe and identical on all views that share the answer.
const conception=week1.find(o=>o.id==='conception-fetal-development');
const fact=conception.answer.find(b=>b.type==='group').blocks.find(b=>b.type==='facts').items[0],saved=fact.text;
fact.text='<script>alert("patient")</script> & teaching';
for(const route of ['#/ob-final/week-1','#/ob-final/week-2']){
 const markup=objectiveMarkup(route,conception.id);assert(markup.includes('&lt;script&gt;alert(&quot;patient&quot;)&lt;/script&gt; &amp; teaching'));assert(!markup.includes('<script>'));
}
fact.text=saved;
console.log('Passed: all 4 Week 1 objectives, 36 collapsed note topics, every outline requirement mapped to source slides, unchanged PDF hashes, safety terminology coverage, shared weekly/topic answers, 71 other note areas preserved and safe structured rendering.');
