const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),main={innerHTML:'',querySelector:()=>null,querySelectorAll:()=>[],focus:()=>{}};
const s={URL,document:{querySelector:()=>main,title:''},location:{hash:'#/final/study-guide'},window:{addEventListener:()=>{},scrollTo:()=>{}},console};vm.createContext(s);
for(const file of ['content.js','presentations.js','conditions.js','videos.js','video-library.js','podcast.js','quiz-data.js','quiz.js','posters.js','section-quizzes.js','app.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),s,{filename:file});
const data=vm.runInContext('({posters:conditionPosterData,topics:examTopics})',s);assert.equal(Object.keys(data.posters).length,14);
for(const topic of data.topics){
 const p=data.posters[topic.id];assert(p,topic.id);assert.equal(p.number,topic.number);assert(/^posters\/\d{2}-[a-z-]+\.png$/.test(p.file));
 const bytes=fs.readFileSync(path.join(root,p.file));assert.equal(bytes.toString('hex',0,8),'89504e470d0a1a0a');assert.equal(bytes.readUInt32BE(16),1200);assert.equal(bytes.readUInt32BE(20),1446);assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),p.sha256,`${topic.id} original asset changed`);
 assert.equal(p.priorities.length,4);assert.equal(p.watch_for.length,4);assert.equal(p.glance.length,3);
 s.location.hash='#/final/condition/'+topic.id;vm.runInContext('render()',s);const html=main.innerHTML;
 assert(html.indexOf('class="condition-poster"')<html.indexOf('class="condition-focus"'));assert(html.indexOf('class="condition-poster"')<html.indexOf('id="condition-overview"'));
 assert(html.includes(`src="${p.file}"`));assert(html.includes('width="1200" height="1446"'));assert(html.includes('fetchpriority="high"'));assert(!html.includes('Read poster text'));assert(!html.includes('Expand poster'));assert(html.includes('Click poster to enlarge'));assert(html.indexOf('class="condition-navigation"')<html.indexOf('class="condition-sections"'));assert(html.indexOf('Poster clinical clarification')>html.indexOf('id="condition-videos"'));assert(html.includes('data-poster-actual'));assert(html.includes('data-open-section="overview"'));
 assert.equal((html.match(/class="condition-section"/g)||[]).length,16);assert(html.indexOf('id="reading-title"')>html.indexOf('id="condition-videos"'));
 for(const section of ['overview','manifestations','risk','diagnostics','medical','medications','nonpharmacological','adverse-effects','nutrition','assessment','diagnoses','priorities','plan','interventions','education','evaluation'])assert(html.includes('id="condition-'+section+'"'));
 if(p.clarification){assert(html.includes('Poster clinical clarification'));assert(p.clarification.references.every(ref=>new URL(ref.url).protocol==='https:'));}
}
const workflow=fs.readFileSync(path.join(root,'.github/workflows/pages.yml'),'utf8');assert(workflow.includes('posters.js'));assert(workflow.includes('presentations posters practice-questions _site/'));
console.log('Passed: all 14 route/poster mappings, original PNG hashes/dimensions, compact poster/navigation layout, hidden accessible text, bottom clarifications, viewer controls, preserved 16-section notes and bottom references, and deployment assets.');
