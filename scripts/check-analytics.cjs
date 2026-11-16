const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
function fixture(overrides={}){
 const scripts=[],hits=[];
 const context={URL,location:{protocol:'https:',hostname:'george1912.github.io',pathname:'/project-greenlight/',hash:'#/final',...overrides.location},navigator:{doNotTrack:overrides.dnt||'0'},window:{},document:{referrer:overrides.referrer||'https://example.org/link?email=private#secret',head:{appendChild:script=>scripts.push(script)},createElement:()=>({dataset:{},events:{},addEventListener(name,fn){this.events[name]=fn;}})}};
 vm.createContext(context);
 for(const file of ['content.js','presentations.js','conditions.js','analytics.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
 const api=vm.runInContext('SiteAnalytics',context);
 return {context,api,scripts,hits,load(){context.window.goatcounter.count=payload=>hits.push(payload);scripts[0].events.load();}};
}
const f=fixture();f.api.page('#/final','Exam overview');f.api.page('#/final','Exam overview');f.api.page('#/final/condition/parkinsons','Parkinson’s disease');
assert.equal(f.scripts.length,1);assert.equal(f.hits.length,0);assert(f.context.window.goatcounter.no_onload);assert(f.context.window.goatcounter.no_events);
assert.equal(f.scripts[0].src,'https://gc.zgo.at/count.js');assert.equal(f.scripts[0].dataset.goatcounter,'https://george1912.goatcounter.com/count');
f.load();assert.equal(f.hits.length,2);assert.equal(f.hits[1].path,'/project-greenlight/final/condition/parkinsons');assert.equal(f.hits[0].referrer,'https://example.org');
f.api.page('#/final/condition/parkinsons','Duplicate');assert.equal(f.hits.length,2);
const data=vm.runInContext('({topics:examTopics,decks:presentationDecks})',f.context);
for(const topic of data.topics)f.api.page('#/final/condition/'+topic.id,topic.title);
for(const deck of Object.values(data.decks)){f.api.page('#/final/presentation/'+deck.id,deck.title);f.api.page('#/final/nclex/'+deck.id,deck.title);}
const before=f.hits.length;
for(const route of ['#/final/condition/private@example.com','#/final/nclex/__proto__','#/unknown?answer=secret','#main','#/final/quiz?score=80','#/final/week-1'])f.api.page(route,'Private');
assert.equal(f.hits.length,before,'Unknown/typed routes must not be recorded');
f.api.event('quiz_submitted',{answers:['A'],score:100});f.api.event('answer_checked');f.api.event('unknown-private-event');assert.equal(f.hits.length,before+2);
for(const hit of f.hits){assert(hit.path.startsWith('/project-greenlight/'));assert(!JSON.stringify(hit).includes('email='));assert(!JSON.stringify(hit).includes('answers'));assert(!JSON.stringify(hit).includes('score'));assert(Object.keys(hit).every(k=>['path','title','referrer','event'].includes(k)));}
for(const settings of [{location:{hostname:'localhost',protocol:'http:'}},{location:{hostname:'example.com'}},{location:{pathname:'/another-project/'}},{dnt:'1'}]){
 const g=fixture(settings);g.api.page('#/final','Exam');g.api.event('quiz_submitted');assert.equal(g.scripts.length,0);assert.equal(g.hits.length,0);
}
const fail=fixture();fail.api.page('#/final','Exam');fail.scripts[0].events.error();fail.api.page('#/final/quiz','Quiz');assert.equal(fail.scripts.length,1);
const broken=fixture();broken.api.page('#/final','Exam');broken.context.window.goatcounter.count=()=>{throw Error('blocked');};assert.doesNotThrow(()=>broken.scripts[0].events.load());
const internal=fixture({referrer:'https://george1912.github.io/another-site/?email=private'});internal.api.page('#/final','Exam');internal.load();assert.equal(internal.hits[0].referrer,'');
const workflow=fs.readFileSync(path.join(root,'.github/workflows/pages.yml'),'utf8');assert(workflow.includes('app.js analytics.js'));
console.log('Passed: existing owner endpoint, separate Green Light paths, queued first view, all condition/deck/quiz routes, duplicate prevention, fixed activity events, no answers/scores/query data, local/DNT exclusions, and non-blocking failures.');
