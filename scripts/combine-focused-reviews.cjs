/* Assemble the two corrected editions without adding clinical claims. */
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),s={};vm.createContext(s);
for(const file of ['focused-review-data.js','focused-review-olivia-data.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),s);
const [one,two]=vm.runInContext('[focusedReviewData,oliviaFocusedReviewData]',s);
const aliases={
 'Cardinal signs (TRAP)':'Cardinal signs (TRAP)',
 'Clinical signs':'Clinical manifestations','Clinical signs and symptoms':'Clinical manifestations','Clinical signs and precautions':'Clinical manifestations',
 'Classic symptom pattern':'Clinical manifestations','Clinical signs and treatment':'Clinical manifestations',
 'Pyridostigmine instructions':'Pyridostigmine (Mestinon) patient instructions',
 'Priority assessment and communication':'Priority assessment',
 'DMARDs':'DMARDs (Disease-Modifying Antirheumatic Drugs)',
 'Labs':'Important labs','Diagnostics and lumbar-puncture care':'Diagnostic tests and lumbar-puncture care',
 'Diagnostic testing':'Diagnostic tests','Diagnostics':'Diagnostic tests',
 'Lumbar-puncture nursing considerations':'Lumbar puncture (LP) nursing considerations',
 'Signs and prevention':'Prevention','Diet and hydration':'Diet',
 'Breast-cancer risk reduction':'Breast cancer – Risk reduction',
 'Sentinel lymph node biopsy (SLNB) care':'Sentinel lymph node biopsy (SLNB)',
 'Cervical screening — average-risk patients':'Cervical cancer screening (ACOG)',
 'Endometrial biopsy: indications and nursing care':'Endometrial biopsy indications and nursing care',
 'Endometrial biopsy indications':'Endometrial biopsy indications and nursing care',
 'Chemotherapy and fever':'Chemotherapy and fevers',
 'Metastasis and symptom assessment':'Metastasis',
 'Opportunistic infections':'Opportunistic infections (OIs)',
 'One partner with HIV, one without HIV':'Partner 1 positive / Partner 1 negative (serodiscordant couple)',
 'Assessment and treatment':'Diagnostic tests',
};
const normalize=text=>String(text).normalize('NFKC').toLowerCase().replace(/[’‘]/g,"'").replace(/[–−]/g,'-').replace(/\s+/g,' ').trim();
// Short points are consolidated only where a fuller retained point covers them.
const coveredBy=new Map();
function cover(id, from, to){coveredBy.set(`${from[0]}:${id}:${from[1]}`,to.map(ref=>`${ref[0]}:${id}:${ref[1]}`));}
const pairs={
 parkinsons:[['1:0','1:0'],['1:1','1:1'],['1:2','1:2'],['1:3','1:3'],['3:3','5:0'],['5:2','3:3']],
 'myasthenia-gravis':[['1:0','2:0'],['1:2','2:1'],['1:3','2:2'],['3:0','4:1'],['3:2','4:1']],
 'multiple-sclerosis':[['1:0','0'],['1:3','2:0']],
 als:[['1:0','0'],['1:3','2:1'],['5','4:1']],
 meningitis:[['1:1','1:0'],['1:2','1:0'],['1:4','1:0'],['3:3','1:2'],['5:6','3:0']],
 'guillain-barre':[['1:3','2:0'],['1:5','2:0'],['3','2:1']],
 'rheumatoid-arthritis':[['1:0','0'],['1:1','2:0'],['1:2','2:1'],['1:3','2:0']],
 osteoarthritis:[['1:0','0'],['1:1','2:0'],['1:5','2:1']],
 osteoporosis:[['1:1','2:2'],['7','6']],
 gout:[['1:1','1:0'],['1:4','1:0'],['5:0','5:1'],['5:1','5:0']],
 'meniere-disease':[['2:0','1:0'],['2:2','1:0'],['2:3','1:0']],
 'breast-gynecologic-cancers':[['3:2','3:1'],['3:3','3:1'],['10:0','7:1'],['10:1','7:0'],['10:3','7:1'],['10:5','7:3'],['12:0','9:0'],['12:4','9:0']],
 'prostate-cancer':[['1:0','1:0'],['1:2','1:0'],['3:2','3:0']],
 hiv:[['10:2','7:1'],['10:3','7:1']]
};
for(const [id,items] of Object.entries(pairs))for(const [from,to] of items)cover(id,['one',from],[['two',to]]);
cover('multiple-sclerosis',['one','1:1'],[['two','2:0'],['two','2:1']]);
cover('als',['two','4:0'],[['one','3:0'],['one','3:1']]);
cover('osteoporosis',['one','1:0'],[['two','2:1'],['two','2:2']]);
cover('meniere-disease',['one','1'],[['two','1:0'],['one','2:4']]);
cover('meniere-disease',['one','4:1'],[['one','4:0']]);
cover('meniere-disease',['one','4:2'],[['one','4:0']]);
cover('meniere-disease',['one','4:3'],[['one','4:0'],['two','3:2']]);
cover('breast-gynecologic-cancers',['two','5:0'],[['one','6']]);
cover('hiv',['two','5:1'],[['one','8:0'],['one','8:3']]);
cover('hiv',['two','5:2'],[['one','8:1'],['one','8:2']]);
cover('hiv',['two','7:0'],[['one','10:0'],['one','10:1']]);
const coverage=[],deduplicated=[];
const sections=one.sections.map(first=>{
 const groups=new Map();
 function add(heading,block,source){
  const title=aliases[heading]||heading;
  if(!groups.has(title))groups.set(title,[]);
  if(coveredBy.has(source)){coverage.push(source);deduplicated.push({source,coveredBy:coveredBy.get(source),reason:'The fuller retained point(s) include this short study point.'});return;}
  const group=groups.get(title),key=normalize(JSON.stringify(block));
  if(group.some(entry=>normalize(JSON.stringify(entry.block))===key))deduplicated.push({source,reason:'Identical content is already in this subsection.'});
  else group.push({block,source});
  coverage.push(source);
 }
 for(const [name,data] of [['one',one],['two',two]]){
  const topic=data.sections.find(topic=>topic.id===first.id);if(!topic)continue;
  let heading='Overview';
  topic.blocks.forEach((block,index)=>{
   if(block.type==='heading'){heading=block.text;return;}
   const ref=`${name}:${topic.id}:${index}`;
   // These are the same three T-score classifications with transposed columns.
   if(name==='two'&&topic.id==='osteoporosis'&&block.type==='table'){
    coverage.push(ref);deduplicated.push({source:ref,reason:'Same three T-score categories are preserved in guide one’s T-score table.'});return;
   }
   const destination=(item,itemIndex)=>{
    if(name==='two'&&topic.id==='guillain-barre'&&heading==='Clinical signs and treatment')return itemIndex===0?'Clinical manifestations':'Treatment';
    if(name==='two'&&topic.id==='als'&&heading==='Priority assessment and communication')return itemIndex===0?'Priority assessment':'Communication assistance (AAC)';
    if(name==='two'&&topic.id==='meniere-disease'&&heading==='Assessment and treatment')return itemIndex===2?'Hydrochlorothiazide (HCTZ)':'Diagnostic tests';
    if(name==='two'&&topic.id==='hiv'&&heading==='PEP versus PrEP')return itemIndex===0?'PEP (Post-Exposure Prophylaxis)':'PrEP (Pre-Exposure Prophylaxis)';
    if(name==='two'&&topic.id==='multiple-sclerosis'&&heading==='Clinical manifestations'&&itemIndex===2)return 'Uhthoff phenomenon';
    if(name==='two'&&topic.id==='gout'&&heading==='Diet and hydration'&&itemIndex===0)return 'Overview';
    if(block.type==='paragraph'&&/^(Myasthenic crisis|Cholinergic crisis):/.test(item))return 'Myasthenic versus cholinergic crisis';
    if(block.type==='paragraph'&&/^Patient education:/.test(item))return 'Medication teaching';
    if(block.type==='paragraph'&&/^Treatment:/.test(item))return 'Treatment';
    if(block.type==='paragraph'&&/^Nursing care:/.test(item))return 'Nursing care';
    return heading;
   };
   if(block.type==='list')block.items.forEach((item,i)=>add(destination(item,i),{type:'list',items:[item]},`${ref}:${i}`));
   else add(destination(block.text||'',0),block,ref);
  });
 }
 // Keep one readable subsection for each subject and consolidate adjacent bullets.
 const preferred=['Overview','Cardinal signs (TRAP)','Clinical manifestations','Swallowing safety','Levodopa/carbidopa','Pyridostigmine (Mestinon) patient instructions','Myasthenic versus cholinergic crisis','Uhthoff phenomenon','Priority assessment','Communication assistance (AAC)','Diagnostic tests','Diagnostic tests and lumbar-puncture care','Standard plus Droplet Precautions when meningococcal or Hib meningitis is suspected/confirmed','Lumbar puncture (LP) nursing considerations','Typical CSF patterns','Prevention','T-score','Breast cancer – Risk reduction','Sentinel lymph node biopsy (SLNB)','Cervical cancer screening (ACOG)','Endometrial biopsy indications and nursing care','Chemotherapy and fevers','Risk factors','Metastasis','Opportunistic infections (OIs)','Common infections','Other HIV complications','PEP (Post-Exposure Prophylaxis)','PrEP (Pre-Exposure Prophylaxis)','Partner 1 positive / Partner 1 negative (serodiscordant couple)','HIV testing','DMARDs (Disease-Modifying Antirheumatic Drugs)','Important labs','Diet','Medications','Medication teaching','Hydrochlorothiazide (HCTZ)','Treatment','Nursing priorities','Nursing care plan','Nursing care'];
 const ordered=[...groups.keys()].sort((a,b)=>{const ia=preferred.indexOf(a),ib=preferred.indexOf(b);return (ia<0?999:ia)-(ib<0?999:ib);});
 const blocks=[];
 for(const heading of ordered){
  if(heading!=='Overview')blocks.push({type:'heading',text:heading});
  for(const {block} of groups.get(heading)){
   if(block.type==='list'&&blocks.at(-1)?.type==='list')blocks.at(-1).items.push(...block.items);
   else blocks.push(JSON.parse(JSON.stringify(block)));
  }
 }
 return {id:first.id,number:first.number,title:first.title,blocks};
});
const combined={intro:two.intro,sections,recall:one.recall};
fs.writeFileSync(path.join(root,'focused-review-combined-data.js'),'/* Combined edition assembled from both corrected focused guides. */\nconst combinedFocusedReviewData = '+JSON.stringify(combined,null,2)+';\n');
fs.writeFileSync(path.join(root,'docs/focused-review-combined-audit.json'),JSON.stringify({method:'Related headings are grouped into one topic. All non-heading source content is retained; identical content, explicitly mapped shorter duplicates, and the equivalent T-score table are consolidated. No new clinical guidance is introduced.',topics:sections.length,recallRows:one.recall.length,coveredSourceItems:coverage,deduplicated},null,2)+'\n');
console.log(`Combined ${sections.length} topics and ${one.recall.length} recall rows; accounted for ${coverage.length} source items.`);
