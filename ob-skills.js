/* General OB skills live independently of the exam routes. Practice inputs stay in memory. */
const OBSkillsMath = (() => {
  const day=86400000;
  function date(value){
    if(!/^\d{4}-\d{2}-\d{2}$/.test(value))throw Error('Enter a complete calendar date.');
    const [y,m,d]=value.split('-').map(Number),time=Date.UTC(y,m-1,d),check=new Date(time);
    if(y<1900||y>2100||check.toISOString().slice(0,10)!==value)throw Error('Use a valid date between 1900 and 2100.');
    return time;
  }
  const iso=time=>new Date(time).toISOString().slice(0,10);
  const edd=lmp=>iso(date(lmp)+280*day);
  function naegele(lmp){
    const origin=new Date(date(lmp)),y=origin.getUTCFullYear(),m=origin.getUTCMonth(),d=origin.getUTCDate();
    const shifted=new Date(Date.UTC(y,m-3,d));
    if(shifted.getUTCDate()!==d)return null;
    shifted.setUTCDate(shifted.getUTCDate()+7);
    const result=new Date(Date.UTC(shifted.getUTCFullYear()+1,shifted.getUTCMonth(),shifted.getUTCDate()));
    if(result.getUTCMonth()!==shifted.getUTCMonth())return null;
    return iso(result.getTime());
  }
  function gestation(due,assessment){const days=280+Math.round((date(assessment)-date(due))/day);if(days<0||days>308)throw Error('Check the dates: this practice tool accepts gestational ages from 0+0 through 44+0 weeks.');return {days,weeks:Math.floor(days/7),extra:days%7};}
  function gtpal(term,preterm,losses,living,current){
    if(![term,preterm,losses,living].every(v=>Number.isInteger(v)&&v>=0&&v<=50)||typeof current!=='boolean')throw Error('Enter whole-number practice counts from 0 to 50.');
    if(living>0&&term+preterm===0)throw Error('Check the history: living children were entered without a completed term or preterm pregnancy.');
    return {g:term+preterm+losses+Number(current),t:term,p:preterm,a:losses,l:living,parity:term+preterm};
  }
  function apgar(values){if(values.length!==5||!values.every(v=>Number.isInteger(v)&&v>=0&&v<=2))throw Error('Choose a score for all five Apgar components.');return values.reduce((a,b)=>a+b,0);}
  function weight(birth,current){if(![birth,current].every(v=>Number.isFinite(v)&&v>0))throw Error('Enter two positive weights in grams.');return (birth-current)/birth*100;}
  return {date,edd,naegele,gestation,gtpal,apgar,weight};
})();
const OBSkills = (() => {
  const base='#/ob/skills',data=obSkillsData;
  let dispose=()=>{};
  const escape=value=>escapeHTML(value);
  const skillURL=id=>base+'/'+id;
  const dateLabel=iso=>new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(iso+'T00:00:00Z'));
  function entry(){return `<aside class="ob-skills-entry" aria-label="OB essentials"><a href="${base}"><span><span class="ob-skills-eyebrow">OB NURSING / SKILLS REFERENCE</span><strong>OB essentials</strong><span>Calculations, fetal monitoring and bedside assessment—beyond one exam.</span></span><span aria-hidden="true">→</span></a></aside>`;}
  function breadcrumb(label){return courseBreadcrumb(label,{overview:{label:'OB essentials',url:base},isOverview:label==='OB essentials',backLabel:label==='OB essentials'?'Back to study shelf':'All OB skills'});}
  function catalog(){
    document.title='OB essentials · Skills & calculations · Project Green Light';
    main.innerHTML=breadcrumb('OB essentials')+`<section class="hero ob-skills-hero"><p class="eyebrow">OB NURSING / CORE SKILLS</p><h1>Know the steps.<br><span>Use the skill.</span></h1><p class="hero-copy">13 practical guides for pregnancy dating, fetal monitoring, maternal assessment and newborn care. Choose a skill for the method, a worked example and common mistakes.</p></section><nav class="ob-skills-jump" aria-label="Frequently used OB skills">${['naegele','gtpal','fhr-assessment','apgar'].map(id=>`<a href="${skillURL(id)}">${escape(data.skills.find(s=>s.id===id).title)}</a>`).join('')}</nav><div class="ob-skills-categories">${data.categories.map(category=>`<section aria-labelledby="skills-${category.id}"><p class="ob-skills-eyebrow">${data.skills.filter(s=>s.category===category.id).length} SKILLS</p><h2 id="skills-${category.id}">${escape(category.title)}</h2><p>${escape(category.description)}</p><ul>${data.skills.filter(s=>s.category===category.id).map(s=>`<li><a href="${skillURL(s.id)}"><strong>${escape(s.title)}</strong><span>${escape(s.summary)}</span><span class="ob-skills-open">${s.tool?'Guide + practice calculator':'Step-by-step guide'} <span aria-hidden="true">→</span></span></a></li>`).join('')}</ul></section>`).join('')}</div><p class="ob-skills-scope">Study and supervised-skills practice. Use the patient’s care plan, current local protocols and your instructor’s guidance in clinical care.</p><nav class="guide-bottom"><a href="#/" class="text-link">Study shelf</a><a href="#/ob-final" class="text-link">OB course materials</a></nav>`;
  }
  function field(name,label,type='number',extra=''){return `<label>${label}<input name="${name}" type="${type}" ${type==='number'?((/\bmin=/.test(extra)?'':'min="0" ')+(/\bstep=/.test(extra)?'':'step="1"')):''} ${extra} required></label>`;}
  function tool(skill){
    if(!skill.tool)return '';
    let fields='',caption='Use a made-up study example. Inputs are not saved.';
    if(skill.tool==='edd')fields=field('lmp','First day of LMP','date','min="1900-01-01" max="2100-12-31"');
    if(skill.tool==='ga')fields=field('due','Established EDD','date','min="1900-01-01" max="2100-12-31"')+field('assessment','Date of assessment','date','min="1900-01-01" max="2100-12-31"');
    if(skill.tool==='gtpal')fields=field('term','Term pregnancy outcomes (≥37 weeks)','number','value="0" max="50"')+field('preterm','Preterm outcomes (20+0–36+6)','number','value="0" max="50"')+field('losses','Losses before 20 weeks','number','value="0" max="50"')+field('living','Children currently living','number','value="0" max="50"')+'<label class="ob-skills-checkbox"><input name="current" type="checkbox">Currently pregnant</label>';
    if(skill.tool==='weight')fields=field('birth','Birth weight (grams)','number','min="1" step="any" inputmode="decimal" placeholder="3500"')+field('current','Current weight (grams)','number','min="1" step="any" inputmode="decimal" placeholder="3220"');
    if(skill.tool==='apgar')fields=[['appearance','Appearance',['Blue/pale throughout','Pink body, blue extremities','Completely pink']],['pulse','Pulse',['Absent','Below 100/min','At least 100/min']],['grimace','Grimace / response',['No response','Grimace','Vigorous response']],['activity','Activity / tone',['Flaccid','Some flexion','Active motion']],['respiration','Respiration',['Absent','Slow/irregular or weak cry','Good respirations / strong cry']]].map(([name,label,options])=>`<label>${label}<select name="${name}" required><option value="">Choose the observed finding</option>${options.map((o,i)=>`<option value="${i}">${i} — ${escape(o)}</option>`).join('')}</select></label>`).join('');
    return `<section class="ob-skills-tool" aria-labelledby="practice-tool-title"><h2 id="practice-tool-title">Try the calculation</h2><p>${caption}</p><form data-ob-skill-tool="${skill.tool}"><div class="ob-skills-fields">${fields}</div><div class="ob-skills-tool-actions"><button type="submit">Calculate</button><button type="reset">Clear</button></div><p class="ob-skills-result" role="status" aria-live="polite"></p></form></section>`;
  }
  function detail(skill){
    document.title=skill.title+' · OB essentials · Project Green Light';
    const category=data.categories.find(c=>c.id===skill.category);
    main.innerHTML=breadcrumb(skill.title)+`<section class="hero ob-skills-hero"><p class="eyebrow">OB ESSENTIALS / ${escape(category.title.toUpperCase())}</p><h1>${escape(skill.title)}</h1><p class="hero-copy">${escape(skill.summary)}</p></section><div class="ob-skills-key"><strong>Keep this straight</strong><p>${escape(skill.key)}</p></div><section class="ob-skills-method" aria-labelledby="skill-method"><h2 id="skill-method">How to do it</h2><ol>${skill.steps.map(([label,text])=>`<li><strong>${escape(label)}</strong><p>${escape(text)}</p></li>`).join('')}</ol></section><section class="ob-skills-example"><h2>Work through an example</h2><p>${escape(skill.example.prompt)}</p><details><summary>Show the worked answer</summary><p>${escape(skill.example.answer)}</p></details></section>${tool(skill)}<aside class="ob-skills-pitfall"><h2>Common mistake</h2><p>${escape(skill.pitfall)}</p></aside><details class="ob-skills-sources"><summary>Sources & further study</summary><p>Reviewed ${data.reviewed}. ${skill.related?`<a href="${escape(skill.related)}">Read the related OB course notes.</a>`:''}</p><ul>${skill.references.map(([title,url])=>`<li><a href="${escape(url)}"${url.startsWith('https:')?' target="_blank" rel="noopener noreferrer"':''}>${escape(title)}</a></li>`).join('')}</ul></details><nav class="guide-bottom"><a class="text-link" href="${base}">All OB skills</a><a class="text-link" href="#/ob-final">OB course materials</a></nav>`;
    dispose=mount(main);
  }
  function mount(root){
    const forms=[...root.querySelectorAll('[data-ob-skill-tool]')],removers=[];
    for(const form of forms){
      const result=form.querySelector('[role="status"]');
      const value=name=>form.elements.namedItem(name).value;
      const number=name=>{const raw=value(name);if(raw.trim()==='')throw Error('Complete each field before calculating.');if(!/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(raw))throw Error('Enter a nonnegative number using digits and a decimal point.');return Number(raw);};
      const submit=event=>{
        event.preventDefault();
        try{
          const type=form.dataset.obSkillTool;let message='';
          if(type==='edd'){const lmp=value('lmp'),calendar=OBSkillsMath.naegele(lmp),exact=OBSkillsMath.edd(lmp);message=(calendar?'Naegele calendar shortcut: '+dateLabel(calendar)+'. ':'The calendar shortcut crosses a nonexistent month-end date; verify the dating method. ')+'Exact LMP + 280 days: '+dateLabel(exact)+'. '+(calendar&&calendar!==exact?'Calendar-month arithmetic differs from the exact day count here. ':'')+'Use the requested method for coursework and the established obstetric EDD for clinical care.';}
          if(type==='ga'){const age=OBSkillsMath.gestation(value('due'),value('assessment'));message=`${age.weeks} weeks + ${age.extra} days (${age.weeks}+${age.extra}). ${age.days} total gestational days.`;}
          if(type==='gtpal'){const a=OBSkillsMath.gtpal(number('term'),number('preterm'),number('losses'),number('living'),form.elements.namedItem('current').checked);message=`G${a.g} T${a.t} P${a.p} A${a.a} L${a.l}. Simple gravida/para: G${a.g} P${a.parity}. Here the GTPAL P counts preterm outcomes; the simple P counts all term + preterm outcomes.`;}
          if(type==='apgar'){const total=OBSkillsMath.apgar(['appearance','pulse','grimace','activity','respiration'].map(number));message=`Apgar total: ${total}/10. Record the assessment time and any support given. Do not use the total to delay or replace newborn assessment/resuscitation.`;}
          if(type==='weight'){const change=OBSkillsMath.weight(number('birth'),number('current'));message=`${Math.abs(change).toFixed(2)}% ${change<0?'gain':'loss'} from birth weight. `+(change>10?'Loss exceeds 10% and needs evaluation. ':'')+'Interpret with age, feeding, hydration and the weight trend; this result alone does not establish safety.';}
          result.textContent=message;delete result.dataset.error;
        }catch(error){result.textContent=error.message;result.dataset.error='true';}
      };
      const reset=()=>{result.textContent='';delete result.dataset.error;};
      form.addEventListener('submit',submit);form.addEventListener('reset',reset);
      removers.push(()=>{form.removeEventListener('submit',submit);form.removeEventListener('reset',reset);});
    }
    return ()=>removers.forEach(remove=>remove());
  }
  function render(route){
    dispose();dispose=()=>{};
    if(route===base){catalog();return true;}
    const match=route.match(/^#\/ob\/skills\/([a-z0-9-]+)$/),skill=match&&data.skills.find(s=>s.id===match[1]);
    if(skill){detail(skill);return true;}
    return false;
  }
  function decorate(route){
    if(route!=='#/ob-final')return;
    const hero=main.querySelector('.hero');
    if(hero?.insertAdjacentHTML)hero.insertAdjacentHTML('afterend',entry());
    else if(typeof main.insertAdjacentHTML!=='function'){const end=main.innerHTML.indexOf('</section>');if(end>=0)main.innerHTML=main.innerHTML.slice(0,end+10)+entry()+main.innerHTML.slice(end+10);}
  }
  return {render,entry,decorate,mount,base};
})();
