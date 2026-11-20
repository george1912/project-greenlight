const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const source=fs.readFileSync(path.resolve(__dirname,'../viewer.js'),'utf8');
function fixture(overrides={},fail=false){
 const timers=new Map();let serial=0,disconnected=false,fetchSignal;
 class Node {
  constructor(){this.events={};this.style={};this.hidden=false;this.value='15';this.clientWidth=1000;this.clientHeight=600;this.textContent='';}
  addEventListener(name,fn,options={}){this.events[name]=fn;options.signal?.addEventListener('abort',()=>{delete this.events[name];});}
  setAttribute(name,value){this[name]=value;}
  scrollTo(){}
 }
 const nodes=new Map(),root=new Node();root.innerHTML='';root.querySelector=selector=>{if(!nodes.has(selector))nodes.set(selector,new Node());return nodes.get(selector);};
 const document=new Node();document.baseURI='https://example.invalid/project-greenlight/';document.hidden=false;
 const pages=Array.from({length:5},(_,i)=>({image:`page-${i+1}.webp`,width:400,height:300,text:`Page ${i+1} text`}));
 class Image {set src(value){this.url=value;if(this.onload)queueMicrotask(()=>this.onload());}}
 const context={URL,AbortController,Image,ResizeObserver:class{observe(){}disconnect(){disconnected=true;}},document,window:{matchMedia:()=>({matches:false})},fetch:async(url,{signal})=>{fetchSignal=signal;if(fail)throw Error('Unavailable');return{ok:true,json:async()=>({pages})};},setTimeout:fn=>{const id=++serial;timers.set(id,fn);return id;},clearTimeout:id=>timers.delete(id)};
 vm.createContext(context);vm.runInContext(source,context);
 const deck={title:'Test deck',pdf:'test.pdf',manifest:'test/deck.json',week:7,...overrides};context.root=root;context.deck=deck;
 const dispose=vm.runInContext('PresentationViewer.mount(root,deck)',context);
 const button=action=>root.querySelector(`[data-action="${action}"]`);
 const click=action=>root.events.click({target:{closest:()=>({dataset:{action}})}});
 return {root,nodes,document,context,timers,dispose,button,click,get signal(){return fetchSignal;},get disconnected(){return disconnected;}};
}
const tick=()=>new Promise(resolve=>setImmediate(resolve));
(async()=>{
 const ob=fixture({initialPage:3,contextLabel:'OB COURSE MATERIAL',showSourceLinks:false});await tick();
 assert.equal(ob.nodes.get('input').value,'3');assert.equal(ob.nodes.get('.reader-status').textContent,'Page 3 of 5');assert(ob.root.innerHTML.includes('OB COURSE MATERIAL'));assert(!/Open original PDF|Download PDF|\bdownload\b/.test(ob.root.innerHTML));
 ob.click('next');await tick();assert.equal(ob.nodes.get('input').value,'4');ob.click('previous');await tick();assert.equal(ob.nodes.get('input').value,'3');
 ob.nodes.get('input').value='99';ob.nodes.get('input').events.change();await tick();assert.equal(ob.nodes.get('input').value,'5');assert(ob.button('next').disabled);
 ob.nodes.get('input').value='0';ob.nodes.get('input').events.change();await tick();assert.equal(ob.nodes.get('input').value,'1');assert(ob.button('previous').disabled);
 ob.click('auto');assert(ob.timers.size>0);ob.document.hidden=true;ob.document.events.visibilitychange();assert.equal(ob.timers.size,0);assert.equal(ob.button('auto')['aria-pressed'],'false');
 ob.dispose();assert(ob.signal.aborted&&ob.disconnected);assert.equal(Object.keys(ob.root.events).length,0);
 const old=fixture();await tick();assert.equal(old.nodes.get('input').value,'1');assert(old.root.innerHTML.includes('STUDENT PRESENTATION / WEEK 7'));assert(old.root.innerHTML.includes('Open original PDF'));assert(old.root.innerHTML.includes('Download PDF'));old.dispose();
 for(const value of [-4,100,NaN,2.5]){const f=fixture({initialPage:value});await tick();assert.equal(f.nodes.get('input').value,value===100?'5':'1');f.dispose();}
 const error=fixture({showSourceLinks:false},true);await tick();assert(error.nodes.get('.slide-message').textContent.includes('Reload'));assert(!error.nodes.get('.slide-message').textContent.includes('download'));error.dispose();
 console.log('Passed: focused initial page, bounds, previous/next, page jump, auto/visibility pause, source-link suppression, original Med-Surg defaults, load errors and reader disposal.');
})().catch(error=>{console.error(error);process.exitCode=1;});
