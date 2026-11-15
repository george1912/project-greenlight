const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const main = {innerHTML:'',querySelector:()=>null,querySelectorAll:()=>[],focus:()=>{}};
const sandbox = {URL,document:{querySelector:()=>main,title:''},location:{hash:'#/final/study-guide'},window:{addEventListener:()=>{},scrollTo:()=>{}},console};
vm.createContext(sandbox);
for (const file of ['content.js','presentations.js','conditions.js','videos.js','video-library.js','app.js']) vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),sandbox,{filename:file});
vm.runInContext(`
  if (videoResources.length !== 80 || VideoLibrary.available().length !== 78) throw Error('Import count mismatch');
  for (const v of videoResources) {
    if (!examTopics.some(t=>t.number === v.topic)) throw Error('Unknown topic');
    if (!(v.platform === 'YouTube' ? /^[\\w-]{11}$/ : /^\\d+$/).test(v.id)) throw Error('Invalid player ID');
    if (new URL(v.url).hostname !== (v.platform === 'YouTube' ? 'www.youtube.com' : 'www.tiktok.com')) throw Error('Invalid source URL');
  }
  for (const topic of examTopics) {
    location.hash = '#/final/condition/' + topic.id; render();
    if (!main.innerHTML.includes('id="condition-videos"') || !main.innerHTML.includes('>17</span>')) throw Error('Missing resources: ' + topic.id);
    if (main.innerHTML.includes('data-video-search') || main.innerHTML.includes('<select')) throw Error('Unexpected topic search/dropdown');
    if ((main.innerHTML.match(/data-video-platform-button=/g)||[]).length !== 2) throw Error('Missing platform buttons');
    if (main.innerHTML.includes('<iframe')) throw Error('Player loaded before a tap');
    const indices = [...main.innerHTML.matchAll(/data-video-index="(\\d+)"/g)].map(m=>Number(m[1]));
    if (indices.length !== VideoLibrary.available(topic.number).length || indices.some(i=>videoResources[i].topic !== topic.number)) throw Error('Incorrect topic mapping');
    if (conditionNotes[topic.id] && (main.innerHTML.match(/class="condition-section"/g)||[]).length !== 16) throw Error('Study sections lost');
  }
  location.hash = '#/final/videos'; render();
  if (!main.innerHTML.includes('data-video-search') || !main.innerHTML.includes('<select')) throw Error('Library filters lost');
  for (const v of videoResources.filter(v=>v.pending)) if(main.innerHTML.includes(v.url)) throw Error('Pending resource visible');
  location.hash = '#/final/week-7'; render();
  if(main.innerHTML.includes('video-resources-title')) throw Error('Unexpected weekly video library');
`,sandbox);
console.log('Passed: 80 imported entries, 78 visible, all 14 topic routes, pending exclusions, preserved study notes and weekly layout.');
