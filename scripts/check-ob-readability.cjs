const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const main={innerHTML:'',querySelector:()=>null,querySelectorAll:()=>[],focus(){}};
const context={URL,console,document:{querySelector:()=>main,title:''},location:{hash:'#/'},window:{addEventListener(){},scrollTo(){}},PresentationViewer:{mount:()=>()=>{}}};
vm.createContext(context);
for(const match of html.matchAll(/<script src="([^?]+)\?[^\"]+" defer><\/script>/g))if(!['viewer.js','analytics.js'].includes(match[1]))vm.runInContext(fs.readFileSync(path.join(root,match[1]),'utf8'),context,{filename:match[1]});
const {objectives,rules,formatter}=vm.runInContext('({objectives:obStudyObjectives,rules:obReadabilityRules,formatter:OBReadability})',context);
const audit=JSON.parse(fs.readFileSync(path.join(root,'docs/ob-readability-audit.json')));
const review=JSON.parse(fs.readFileSync(path.join(root,'docs/readability/ob-readability-review.json')));
const sha=value=>crypto.createHash('sha256').update(value).digest('hex');
const strip=markup=>markup.replace(/<(strong|em|span) data-ob-emphasis="[a-z ]+">([^<]*)<\/\1>/g,'$2');
const escapeHTML=text=>String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const decode=text=>text.replace(/&(amp|lt|gt|quot|#39);/g,(_,entity)=>({amp:'&',lt:'<',gt:'>',quot:'"','#39':"'"}[entity]));
const render=route=>{context.location.hash=route;vm.runInContext('render()',context);return main.innerHTML;};
assert.equal(audit.source.rows,681);assert.equal(audit.records.length,681);assert.equal(sha(fs.readFileSync(path.join(root,audit.source.path))),audit.source.sha256);
assert.deepEqual(audit.counts,{applied:665,omit:4,'already-emphasized':3,adjusted:9});assert.equal(audit.uniqueRules,628+audit.additions.length);assert(audit.additions.length>=10);
for(const [file,expected] of Object.entries(audit.contentHashes))assert.equal(sha(fs.readFileSync(path.join(root,file))),expected,'Authored content remains byte-for-byte unchanged: '+file);
assert.equal(Object.values(rules).reduce((n,items)=>n+items.length,0),audit.uniqueRules);
function segments(formatted){
 const result=[];let cursor=0,offset=0;
 const add=(text,styles)=>{const plain=decode(text);result.push({start:offset,end:offset+plain.length,styles,text:plain});offset+=plain.length;};
 for(const match of formatted.matchAll(/<(strong|em|span) data-ob-emphasis="([a-z ]+)">([^<]*)<\/\1>/g)){add(formatted.slice(cursor,match.index),[]);add(match[3],match[2].split(' '));cursor=match.index+match[0].length;}
 add(formatted.slice(cursor),[]);return result;
}
for(const record of audit.records.filter(r=>r.objectiveId)){
 const objective=objectives.find(o=>o.id===record.objectiveId),value=record.field.split('.').reduce((value,key)=>value[key],objective);
 assert.equal(typeof value,'string');assert.equal(value.split(record.exact_text).length-1,1,'Unique exact field match for CSV row '+record.row);
 if(['applied','adjusted'].includes(record.status)){
  assert(rules[record.key].some(rule=>rule.text===record.exact_text&&rule.style===record.appliedStyle));
  const formatted=formatter.format(value,record.key),start=value.indexOf(record.exact_text),end=start+record.exact_text.length;
  assert.equal(decode(strip(formatted)),value,'No text changes in row '+record.row);
  for(const segment of segments(formatted).filter(s=>s.start<end&&s.end>start))for(const style of record.appliedStyle.split('+'))assert(segment.styles.includes(style),'Correct style at row '+record.row);
 }else assert(['omit','already-emphasized'].includes(record.status));
}
for(const addition of audit.additions){const scope=addition.objectiveId+'|'+addition.section;assert(rules[scope].some(rule=>rule.text===addition.exact_text&&rule.style===addition.style));}
for(const [row,decision] of Object.entries(review.decisions))assert.equal(audit.records.find(r=>r.row===Number(row)).status,decision.action==='style'?'adjusted':decision.action);
// Shared punctuation variants produce one wrapper, with no nested formatting.
const noExam='No digital vaginal examination until previa is excluded.';
const shared=formatter.format(noExam,'placental-emergency-response|First response: recognize severity and summon the team');
assert.equal(shared,'<strong data-ob-emphasis="bold red">'+noExam+'</strong>');
assert(!/<(?:strong|em|span) data-ob-emphasis="[a-z ]+">[^<]*<(?:strong|em|span)/.test(shared));
// Rendered markup is identical to the pre-change snapshot after removing only new wrappers.
assert.equal(Object.keys(audit.baselineRenderHashes).length,32);
for(const [route,expected] of Object.entries(audit.baselineRenderHashes)){const markup=render(route);assert.equal(sha(strip(markup)),expected,'Exact text, punctuation, order and surrounding markup: '+route);assert(!context.document.title.includes('Page not found'));if(!route.startsWith('#/ob-final'))assert(!markup.includes('data-ob-emphasis='));}
const section=(markup,id)=>{const markers=[...markup.matchAll(/data-objective="([^"]+)"/g)],i=markers.findIndex(m=>m[1]===id);assert(i>=0);return markup.slice(markers[i].index,markers[i+1]?.index);};
const prompt=part=>part.match(/<span class="ob-objective-prompt">([\s\S]*?)<\/span><\/span>/)[1];
for(const objective of objectives){
 const routes=[...objective.weekIds.map(id=>'#/ob-final/'+id),...Array.from(objective.topicIds,id=>'#/ob-final/topic/'+id)];
 if(objective.weekIds.some(id=>['week-5','week-6','week-7'].includes(id)))routes.push('#/ob-final/week-8');
 const prompts=routes.map(route=>prompt(section(render(route),objective.id)));assert(prompts.every(p=>p===prompts[0]),'Identical shared prompt: '+objective.id);
}
const week7=render('#/ob-final/week-7');assert(prompt(section(week7,'postpartum-discharge')).includes('<strong data-ob-emphasis="bold">warning signs</strong>'));assert(!section(week7,'postpartum-thromboembolism').includes('<span class="ob-objective-title">Thromboembolism and urgent <'));
for(const route of ['#/ob-final/week-1','#/ob-final/week-6','#/ob-final/week-8','#/ob-final/topic/labor-emergencies']){const markup=render(route);assert(!/<details class="(?:objective ob-study-objective|ob-note-topic|ob-note-sources)"[^>]*\bopen\b/.test(markup));assert(!markup.includes('<iframe'));assert(!/<h[1-6][^>]*>[^<]*<(?:strong|em|span) data-ob-emphasis/.test(markup));}
// Fail closed for stale/ambiguous matches and invalid styles; escape every string before wrapping.
vm.runInContext(`obReadabilityRules['test|safe']=[{text:'<patient> & "care"',style:'bold+red'}];obReadabilityRules['test|ambiguous']=[{text:'pain',style:'bold'}];obReadabilityRules['test|invalid']=[{text:'patient',style:'red" onclick="alert(1)'}];`,context);
const unsafe='<patient> & "care" <img src=x onerror="alert(1)">';const safe=formatter.format(unsafe,'test|safe');assert.equal(strip(safe),escapeHTML(unsafe));assert(!safe.includes('<patient>')&&!safe.includes('<img'));
assert.equal(formatter.format('pain pain','test|ambiguous'),'pain pain');assert.equal(formatter.format('patient','test|invalid'),'patient');assert.equal(formatter.format('changed text','test|safe'),'changed text');
assert.equal(formatter.format('patient','__proto__'),'patient');assert.equal(formatter.format('patient','constructor'),'patient');
const css=fs.readFileSync(path.join(root,'styles.css'),'utf8');assert(css.includes('[data-ob-emphasis~="bold"]{font-weight:600}'));assert(css.includes('[data-ob-emphasis~="red"]{color:#b3261e}'));assert(css.includes('text-underline-offset:.16em'));
const luminance=hex=>{const rgb=hex.match(/[a-f\d]{2}/gi).map(v=>parseInt(v,16)/255).map(v=>v<=0.04045?v/12.92:((v+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722;};
for(const background of ['fffefa','faf7ef','f2f4ec','faf3d5'])assert((luminance(background)+.05)/(luminance('b3261e')+.05)>=4.5,'Readable caution contrast');
const workflow=fs.readFileSync(path.join(root,'.github/workflows/pages.yml'),'utf8');for(const file of ['ob-readability-data.js','ob-readability.js']){assert(html.includes(file+'?v='));assert(workflow.includes(file));assert(html.indexOf(file+'?')<html.indexOf('src="ob.js?'));}
console.log(`Passed: all 681 reviewed flags, ${audit.additions.length} authored additions, ${audit.uniqueRules} scoped rules, current source/32 rendered-route baselines, shared prompts and review reuse, no nested overlap, safe escaping/fail-closed matches, unchanged disclosures, caution contrast and deployment assets.`);
