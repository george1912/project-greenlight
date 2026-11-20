const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8'),origin='https://george1912.github.io',base=origin+'/project-greenlight/';
const metas=new Map();
for(const tag of html.matchAll(/<meta\b[^>]*>/g)){
 const attrs=Object.fromEntries([...tag[0].matchAll(/([\w:]+)="([^"]*)"/g)].map(m=>[m[1],m[2]])),key=attrs.property||attrs.name;
 if(key){assert(!metas.has(key),'Duplicate metadata '+key);metas.set(key,attrs.content);}
}
assert(/<title>Project Green Light \| Your nursing study hub<\/title>/.test(html));assert(metas.get('description').startsWith('Your nursing study hub.'));
assert(html.includes(`rel="canonical" href="${base}"`));assert.equal(metas.get('og:url'),base);assert.equal(metas.get('og:type'),'website');assert.equal(metas.get('og:title'),'Project Green Light');assert.equal(metas.get('twitter:card'),'summary_large_image');assert.equal(metas.get('twitter:image'),metas.get('og:image'));assert.equal(metas.get('og:image:type'),'image/png');assert(metas.get('og:image:alt').includes('green light on'));assert.equal(metas.get('twitter:image:alt'),metas.get('og:image:alt'));
for(const key of ['og:image','og:image:secure_url','twitter:image'])assert(metas.get(key).startsWith(base+'assets/'));
const png=(file,w,h)=>{const bytes=fs.readFileSync(path.join(root,file));assert.equal(bytes.toString('hex',0,8),'89504e470d0a1a0a');assert.equal(bytes.readUInt32BE(16),w);assert.equal(bytes.readUInt32BE(20),h);assert(bytes.length<2e6);};
png('assets/share-green-light.png',1200,630);png('assets/apple-touch-icon.png',180,180);png('assets/favicon-48.png',48,48);assert(fs.readFileSync(path.join(root,'favicon.svg'),'utf8').includes('#87df65'));
const skipHandlers={},main={innerHTML:'',querySelector:()=>null,querySelectorAll:()=>[],focus(){this.focused=true;},scrollIntoView(){this.scrolled=true;}};
const sandbox={URL,document:{querySelector:selector=>selector==='.skip-link'?{addEventListener:(name,fn)=>{skipHandlers[name]=fn;}}:main,title:''},location:{hash:'#/'},window:{addEventListener:()=>{},scrollTo:()=>{}},console,PresentationViewer:{mount:()=>()=>{}}};vm.createContext(sandbox);
for(const file of ['content.js','presentations.js','conditions.js','videos.js','video-library.js','podcast.js','quiz-data.js','quiz.js','presentation-quiz-data.js','presentation-quizzes.js','posters.js','section-quizzes.js','focused-review-data.js','focused-review-olivia-data.js','focused-review-combined-data.js','focused-review.js','ob-content.js','ob.js','app.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),sandbox,{filename:file});
const {topics,decks,posters,ob}=vm.runInContext('({topics:examTopics,decks:presentationDecks,posters:conditionPosterData,ob:obCourse})',sandbox);
const routes=['#/','#/final','#/final/study-guide','#/final/focused-review','#/final/quiz','#/final/nclex','#/final/podcast','#/final/videos','#/final/presentations',...[7,8,9,12].map(n=>'#/final/week-'+n),...topics.map(t=>'#/final/condition/'+t.id),...Object.keys(decks).flatMap(id=>['#/final/presentation/'+id,'#/final/nclex/'+id]),'#/ob-final','#/ob-final/study-guide',...ob.weeks.map(week=>'#/ob-final/'+week.id),...ob.topics.map(topic=>'#/ob-final/topic/'+topic.id)];
const routeSet=new Set(routes),files=new Set(['index.html','404.html','favicon.svg','styles.css','assets/share-green-light.png','assets/favicon-48.png','assets/apple-touch-icon.png']);let links=0;
function checkMarkup(markup){
 for(const match of markup.matchAll(/\b(href|src)="([^"]+)"/g)){
  const url=match[2];if(/^(https?:|data:|mailto:)/.test(url))continue;
  if(url.startsWith('#')){assert(routeSet.has(url)||url==='#main','Broken internal route '+url);links++;}
  else if(url){const file=decodeURIComponent(url.split(/[?#]/)[0]);if(file){assert(fs.existsSync(path.join(root,file)),'Missing '+file);files.add(file);}}
 }
}
checkMarkup(html);
for(const route of routes){sandbox.location.hash=route;assert.doesNotThrow(()=>vm.runInContext('render()',sandbox),route);assert(!sandbox.document.title.includes('Page not found'),route);assert(!sandbox.document.title.includes('undefined'),route);checkMarkup(main.innerHTML);}
for(const route of ['#/final/condition/constructor','#/final/condition/__proto__','#/final/nclex/toString','#/final/presentation/constructor','#/ob-final/topic/constructor','#/ob-final/week-99','#/missing']){sandbox.location.hash=route;assert.doesNotThrow(()=>vm.runInContext('render()',sandbox));assert(sandbox.document.title.includes('Page not found'),route);}
for(const route of ['#/final/','#/final/study-guide/','#/final/condition/hiv/','#/final/presentation/breast-cancer/?source=class','#/final/quiz?source=class','#/ob-final/','#/ob-final/topic/feeding/?source=class']){sandbox.location.hash=route;vm.runInContext('render()',sandbox);assert(!sandbox.document.title.includes('Page not found'),route);}
sandbox.location.hash='#/final/focused-review';let prevented=false;skipHandlers.click({preventDefault(){prevented=true;}});assert(prevented&&main.focused&&main.scrolled);assert.equal(sandbox.location.hash,'#/final/focused-review');
for(const deck of Object.values(decks)){
 files.add(deck.pdf);files.add(deck.manifest);const manifest=JSON.parse(fs.readFileSync(path.join(root,deck.manifest)));assert.equal(manifest.pages.length,deck.pages);
 for(const page of manifest.pages)files.add(path.posix.join(path.posix.dirname(deck.manifest),page.image));
}
Object.values(posters).forEach(p=>files.add(p.file));topics.forEach(t=>files.add('practice-questions/'+t.id+'.json'));
for(const file of files)assert(fs.existsSync(path.join(root,file)),file);
const recovery=fs.readFileSync(path.join(root,'404.html'),'utf8'),script=recovery.match(/<script>([\s\S]*?)<\/script>/)[1];
for(const page of ['final','final/study-guide','final/condition/hiv/','final/nclex/als','final/presentation/breast-cancer','ob-final','ob-final/study-guide','ob-final/topic/feeding','ob-final/week-7']){
 let redirected;const location={pathname:'/project-greenlight/'+page,search:'?source=class',origin,replace:url=>{redirected=url;}};vm.runInNewContext(script,{location,URL});assert.equal(redirected,base+'?source=class#/'+page.replace(/\/+$/,''));
}
for(const page of ['404.html','bad-link','finale','ob-finalist']){let redirected=false;vm.runInNewContext(script,{location:{pathname:'/project-greenlight/'+page,origin,search:'',replace:()=>{redirected=true;}},URL});assert(!redirected,'Redirect loop risk '+page);}
const workflow=fs.readFileSync(path.join(root,'.github/workflows/pages.yml'),'utf8');assert(workflow.includes('index.html 404.html'));assert(workflow.includes('resources assets _site/'));
const arg=process.argv.find(arg=>arg.startsWith('--asset-list='));if(arg)fs.writeFileSync(arg.slice(13),JSON.stringify([...files].sort(),null,2)+'\n');
console.log(`Passed: sharing metadata/icons, ${routes.length} routes, ${links} internal links, ${files.size} local assets, malformed-ID fallbacks, slash/query variants, skip-link route preservation, clean-link recovery and loop prevention.`);
