/* Additive OB library routes. Existing renderers, notes, posters and quizzes stay intact. */
const OBMnemonics = (() => {
  const data=obMnemonicData,base='#/ob-final/mnemonics',course=obCourse;
  const countLabel=n=>n+' '+(n===1?'card':'cards');
  const category=id=>data.categories.find(c=>c.id===id);
  const objective=id=>obStudyObjectives.find(o=>o.id===id);
  const categoryURL=id=>base+'/category/'+id;
  const relatedURL=id=>base+'/related/'+id;
  function related(id){
    const week=course.weeks.find(w=>w.id===id),topic=course.topics.find(t=>t.id===id);
    if(week){const weeks=week.reviewOf||[week.id];return {label:week.label,url:'#/ob-final/'+week.id,cards:data.cards.filter(m=>m.weekIds.some(w=>weeks.includes(w))),existing:data.existing.filter(m=>m.weekIds.some(w=>weeks.includes(w)))};}
    if(topic)return {label:topic.title,url:'#/ob-final/topic/'+topic.id,cards:data.cards.filter(m=>m.topicIds.includes(topic.id)),existing:data.existing.filter(m=>m.topicIds.includes(topic.id))};
    return null;
  }
  function entry(href,title,copy){return `<aside class="ob-mnemonic-entry" aria-label="Mnemonic library"><a href="${escapeHTML(href)}"><strong>${escapeHTML(title)}</strong><span>${escapeHTML(copy)}</span><span aria-hidden="true">→</span></a></aside>`;}
  function breadcrumb(label,parents){return courseBreadcrumb(label,{overview:{label:'OB overview',url:'#/ob-final'},parents});}
  function notesLinks(card){
    return card.objectiveIds.map(id=>{const o=objective(id),w=course.weeks.find(w=>w.id===o.weekIds[0]);return `<li><a href="#/ob-final/${escapeHTML(w.id)}"><strong>${escapeHTML(w.label)}</strong> · ${escapeHTML(o.title)}</a></li>`;}).join('');
  }
  function cardMarkup(card){
    const picture=card.image?`<details class="ob-mnemonic-illustration"><summary>View illustrated card</summary><img src="${escapeHTML(card.image.file)}" width="${card.image.width}" height="${card.image.height}" loading="lazy" decoding="async" alt="${escapeHTML(card.title+': '+card.hook)}"></details>`:'';
    return `<details class="ob-mnemonic-card" data-mnemonic="${escapeHTML(card.id)}"><summary><span class="ob-mnemonic-number" aria-hidden="true">${String(card.n).padStart(2,'0')}</span><span><strong>${escapeHTML(card.title)}</strong><span class="ob-mnemonic-hook">${escapeHTML(card.hook)}</span></span></summary><div class="ob-mnemonic-body">${card.context?`<p class="ob-mnemonic-context">${escapeHTML(card.context)}</p>`:''}<dl class="ob-mnemonic-facts">${card.items.map(i=>`<div><dt>${escapeHTML(i.k)}</dt><dd>${escapeHTML(i.v)}</dd></div>`).join('')}</dl><p class="ob-mnemonic-note">${card.reviewNote?'<strong>Study clarification</strong> · ':''}${escapeHTML(card.note)}</p>${picture}<nav class="ob-mnemonic-study-links" aria-label="Full notes for ${escapeHTML(card.title)}"><h3>Read the full notes</h3><ul>${notesLinks(card)}</ul></nav>${card.references.length?`<details class="ob-mnemonic-references"><summary>Guidance for this clarification</summary><ul>${card.references.map(r=>`<li><a href="${escapeHTML(r.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(r.title)}</a></li>`).join('')}</ul></details>`:''}</div></details>`;
  }
  function existingEntry(items){return items.length?entry('#/ob-final/memory-notes','Also on your existing memory sheet',items.map(m=>m.title).join(' · ')):'';}
  function hasRelated(context){return context&&(context.cards.length||context.existing.length);}
  function renderPage(selection=null,context=null){
    const title=context?`Mnemonics for ${context.label}`:selection?selection.title:'Mnemonic library';
    const cards=context?context.cards:selection?data.cards.filter(m=>m.categoryId===selection.id):data.cards;
    const existing=context?context.existing:selection?data.existing.filter(m=>m.categoryId===selection.id):[];
    const parents=context?[{label:context.label,url:context.url}]:[{label:'Exam topics',url:'#/ob-final/study-guide'},...(selection?[{label:'Mnemonic library',url:base}]:[])];
    document.title=title+' · OB · Project Green Light';
    const hero=`<section class="hero condition-hero ob-mnemonics-hero"><p class="eyebrow">OB / MEMORY AIDS</p><h1>${escapeHTML(title)}</h1><p class="hero-copy">${selection||context?cards.length?`${cards.length} memory aids. Open one to review the key points and return to the full notes.`:'Find the related memory aids on your existing sheet.':'29 new memory aids, plus links to your existing seven. Choose a category, then open only what you need.'}</p></section>`;
    const grid=`<nav class="ob-mnemonic-categories" aria-label="Mnemonic categories">${data.categories.map(c=>`<a href="${categoryURL(c.id)}"${selection?.id===c.id?' aria-current="page"':''}><strong>${escapeHTML(c.title)}</strong><span>${countLabel(data.cards.filter(m=>m.categoryId===c.id).length)}</span>${!selection&&!context?`<p>${escapeHTML(c.description)}</p>`:''}</a>`).join('')}</nav>`;
    const content=selection?`<section class="ob-mnemonic-group" aria-label="${escapeHTML(selection.title)} mnemonics">${cards.map(cardMarkup).join('')}</section>`:context?data.categories.filter(c=>cards.some(m=>m.categoryId===c.id)).map(c=>`<section class="ob-mnemonic-group" aria-labelledby="mnemonic-${c.id}"><h2 id="mnemonic-${c.id}">${escapeHTML(c.title)}</h2>${cards.filter(m=>m.categoryId===c.id).map(cardMarkup).join('')}</section>`).join(''):entry('#/ob-final/memory-notes','Your existing memory sheet','VEAL CHOP, BUBBLE-HE, 4 Ts, ACHES, APGAR, GTPAL and HELLP.');
    main.innerHTML=breadcrumb(title,parents)+hero+(selection||context?'<details class="ob-mnemonic-browse"><summary>Browse other categories</summary>'+grid+'</details>':grid)+content+existingEntry(existing)+`<p class="ob-mnemonic-scope">Use these as recall cues alongside the full notes. Clinical clarifications appear on the relevant cards.</p><nav class="guide-bottom">${selection||context?`<a class="text-link" href="${base}">All mnemonic categories</a>`:''}<a class="text-link" href="${context?escapeHTML(context.url):'#/ob-final/study-guide'}">${context?'Back to '+escapeHTML(context.label):'OB final exam study guide'}</a></nav>`;
  }
  function render(route){
    if(route===base){renderPage();return true;}
    let m=route.match(/^#\/ob-final\/mnemonics\/category\/([a-z0-9-]+)$/);
    if(m){const c=category(m[1]);if(c){renderPage(c);return true;}return false;}
    m=route.match(/^#\/ob-final\/mnemonics\/related\/([a-z0-9-]+)$/);
    if(m){const r=related(m[1]);if(hasRelated(r)){renderPage(null,r);return true;}return false;}
    return false;
  }
  function decorate(route){
    let block='';
    if(['#/ob-final','#/ob-final/study-guide','#/ob-final/memory-notes'].includes(route))block=entry(base,'Mnemonic library','29 cards, grouped by topic.');
    else {const week=course.weeks.find(w=>route==='#/ob-final/'+w.id),topic=course.topics.find(t=>route==='#/ob-final/topic/'+t.id),id=week?.id||topic?.id,r=id&&related(id);if(hasRelated(r))block=entry(relatedURL(id),'Related mnemonics',r.cards.length?countLabel(r.cards.length)+' for this section.':r.existing.map(m=>m.title).join(' · ')+' on your memory sheet.');}
    if(block){
      const hero=main.querySelector('.hero');
      // Insert beside the existing DOM so poster/quiz listeners and mounted nodes survive.
      if(hero?.insertAdjacentHTML)hero.insertAdjacentHTML('afterend',block);
      else if(typeof main.insertAdjacentHTML!=='function'){
        // Static render harnesses expose an HTML string rather than a browser DOM.
        const end=main.innerHTML.indexOf('</section>');if(end>=0)main.innerHTML=main.innerHTML.slice(0,end+10)+block+main.innerHTML.slice(end+10);
      }
    }
  }
  const installed=new WeakSet();
  function install(study){if(installed.has(study))return;installed.add(study);const original=study.render;study.render=function(route){if(render(route))return true;const handled=original.call(study,route);if(handled)decorate(route);return handled;};}
  return {install,render,related,cardMarkup,base};
})();
OBMnemonics.install(OBStudy);
