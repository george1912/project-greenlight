const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.resolve(__dirname,'..');
class Control {
  constructor(){this.listeners={};this.disabled=false;this.textContent='';this.value='0';this.attributes={};this.children=[];}
  addEventListener(name,fn){this.listeners[name]=fn;}
  removeEventListener(name,fn){if(this.listeners[name]===fn)delete this.listeners[name];}
  setAttribute(name,value){this.attributes[name]=value;}
  replaceChildren(...children){this.children=children;}
  append(child){this.children.push(child);}
  fire(name){this.listeners[name]?.();}
}
function fixture({offline=false,pending=false,delayedSeek=false}={}){
  const nodes=Object.fromEntries(['[data-podcast-stage]','[data-podcast-action="toggle"]','[data-podcast-play-label]','[data-podcast-action="back"]','[data-podcast-action="forward"]','#podcast-position','[data-podcast-speed]','[data-podcast-elapsed]','[data-podcast-duration]','.podcast-status'].map(s=>[s,new Control()]));
  const speed=nodes['[data-podcast-speed]'];speed.options=[.75,1,1.25,1.5,2].map(v=>({value:String(v)}));
  const host={querySelector:s=>nodes[s]},document=new Control(),window=new Control();document.hidden=false;document.createElement=()=>new Control();
  let fake,events,resolveAPI;const timers=new Map();let serial=0;
  const YT={Player:function(iframe,options){events=options.events;fake={position:0,state:2,rate:1,plays:0,pauses:0,destroys:0,getDuration:()=>4909,getCurrentTime(){return this.position;},getPlayerState(){return this.state;},getAvailablePlaybackRates:()=>[.75,1,1.25,1.5,2],getPlaybackRate(){return this.rate;},setPlaybackRate(rate){this.rate=rate;events.onPlaybackRateChange({data:rate});},seekTo(position){this.lastSeek=position;if(!delayedSeek)this.position=position;},playVideo(){this.plays++;this.state=1;events.onStateChange({data:1});},pauseVideo(){this.pauses++;this.state=2;events.onStateChange({data:2});},destroy(){this.destroys++;}};return fake;}};
  const context={URLSearchParams,document,window,navigator:{onLine:!offline},location:{origin:'https://george1912.github.io'},escapeHTML:s=>s,VideoLibrary:{loadYouTubeAPI:()=>pending?new Promise(resolve=>{resolveAPI=resolve;}):Promise.resolve(YT)},setTimeout:fn=>{const id=++serial;timers.set(id,fn);return id;},clearTimeout:id=>timers.delete(id),setInterval:fn=>{const id=++serial;timers.set(id,fn);return id;},clearInterval:id=>timers.delete(id)};
  vm.createContext(context);vm.runInContext(fs.readFileSync(path.join(root,'podcast.js'),'utf8'),context);context.testRoot={querySelector:()=>host};const dispose=vm.runInContext('PodcastPlayer.mount(testRoot)',context);
  return {nodes,context,document,window,timers,dispose,get player(){return fake;},get events(){return events;},resolve:()=>resolveAPI(YT),click:action=>nodes[`[data-podcast-action="${action}"]`].fire('click')};
}
(async()=>{
  const f=fixture();f.click('toggle');await new Promise(resolve=>setImmediate(resolve));assert(f.player);f.events.onReady({target:f.player});
  assert.equal(f.player.plays,1);assert.equal(f.nodes['[data-podcast-action="toggle"]'].attributes['aria-label'],'Pause podcast');
  f.click('toggle');assert.equal(f.player.state,2);f.click('toggle');assert.equal(f.player.state,1);
  f.player.position=5;f.click('forward');assert.equal(f.player.position,15);f.click('back');assert.equal(f.player.position,5);
  f.player.position=2;f.click('back');assert.equal(f.player.position,0);f.player.position=4905;f.click('forward');assert.equal(f.player.position,4909);
  const seek=f.nodes['#podcast-position'];seek.value='900';seek.fire('input');assert.equal(f.nodes['[data-podcast-elapsed]'].textContent,'15:00');seek.fire('change');assert.equal(f.player.position,900);
  const speed=f.nodes['[data-podcast-speed]'];speed.value='1.5';speed.fire('change');assert.equal(f.player.rate,1.5);
  f.document.hidden=true;f.document.fire('visibilitychange');assert.equal(f.player.state,2);
  f.dispose();assert.equal(f.player.destroys,1);assert.equal(f.timers.size,0);assert.equal(f.document.listeners.visibilitychange,undefined);assert.equal(f.window.listeners.offline,undefined);
  const rapid=fixture({delayedSeek:true});rapid.click('toggle');await new Promise(resolve=>setImmediate(resolve));rapid.events.onReady({target:rapid.player});rapid.click('forward');rapid.click('forward');assert.equal(rapid.player.lastSeek,20);assert.equal(rapid.nodes['#podcast-position'].value,'20');rapid.click('back');assert.equal(rapid.player.lastSeek,10);rapid.dispose();
  const pending=fixture({pending:true});pending.click('toggle');pending.dispose();pending.resolve();await new Promise(resolve=>setImmediate(resolve));assert.equal(pending.player,undefined);
  const error=fixture();error.click('toggle');await new Promise(resolve=>setImmediate(resolve));error.events.onError();assert.equal(error.nodes['[data-podcast-action="toggle"]'].attributes['aria-label'],'Retry podcast');assert.equal(error.player.destroys,1);assert.equal(error.timers.size,0);error.dispose();
  const offline=fixture({offline:true});offline.click('toggle');assert.equal(offline.player,undefined);assert(offline.nodes['.podcast-status'].textContent.includes('offline'));offline.dispose();
  const main={innerHTML:'',querySelector:()=>null,querySelectorAll:()=>[],focus:()=>{}};
  const s={URL,document:{querySelector:()=>main,title:''},location:{hash:'#/'},window:{addEventListener:()=>{},scrollTo:()=>{}},console};vm.createContext(s);
  for(const file of ['content.js','presentations.js','conditions.js','videos.js','video-library.js','podcast.js','posters.js','app.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),s);
  assert(main.innerHTML.includes('class="exam-card" href="#/final"'));
  s.location.hash='#/final';vm.runInContext('render()',s);assert(main.innerHTML.indexOf('class="study-guide-entry"')<main.innerHTML.indexOf('class="week-nav'));assert(main.innerHTML.includes('href="#/final/podcast"'));assert(main.innerHTML.includes('Week 12'));
  s.location.hash='#/final/podcast';vm.runInContext('render()',s);assert(main.innerHTML.includes('Special thanks to Alessia.'));assert(main.innerHTML.includes('7pSK_zxd2WU'));assert(!main.innerHTML.includes('<iframe'));assert(!main.innerHTML.includes('<audio'));assert(main.innerHTML.includes('Back 10 seconds'));assert(main.innerHTML.includes('Forward 10 seconds'));
  console.log('Passed: overview navigation, podcast credit/link, lazy visible YouTube embed, play/pause, 10-second skips and bounds, seeking, speed, hidden-page pause, failure/offline recovery, and disposal including late API resolution.');
})().catch(e=>{console.error(e);process.exitCode=1;});
