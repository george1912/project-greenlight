/* Shared section-practice behavior, with one question visible per OB objective. */
const OBReinforcement = (() => {
  const practice = SectionQuizzes.create({directory:'ob-practice-questions',version:'20261120-ob-reinforcement',oneAtATime:true,intro:'questions to reinforce this topic. Check each answer for a brief explanation.',feedbackExtra:question=>typeof OBNoteReview!=='undefined'?OBNoteReview.feedback(question):''});
  function section(id) {
    const count=obQuestionMap.sections[id];
    return count ? practice.section('ob-review',id,{label:`Practice questions (${count})`,caption:'One question at a time · feedback after each answer'}) : '';
  }
  function overview(items, week = null) {
    const extras=week ? obQuestionMap.extras.filter(group=>group.weekIds.includes(week.id)) : [];
    const available=[...items,...extras].filter(item=>obQuestionMap.sections[item.id]);
    if(!available.length)return '';
    const total=available.reduce((sum,item)=>sum+obQuestionMap.sections[item.id],0);
    const buttons=`<div class="ob-practice-shortcuts">${available.map(item=>`<button type="button" data-ob-practice-open="${escapeHTML(item.id)}"><span>${escapeHTML(item.title)}</span><span>${obQuestionMap.sections[item.id]} questions <span aria-hidden="true">→</span></span></button>`).join('')}</div>`;
    const choices=available.length>4?`<details class="ob-practice-topic-list"><summary>Choose a practice topic (${available.length})</summary>${buttons}</details>`:buttons;
    return `<section class="ob-practice-overview" aria-label="Practice questions"><h2>Practice questions</h2><p>${total} questions available here. Choose a topic to open its questions directly.</p>${choices}<a class="text-link" href="#/ob-final/practice">Full OB practice exams</a></section>`;
  }
  function mount(root) {
    const disposePractice=practice.mount(root);
    const disposeReview=typeof OBNoteReview!=='undefined'?OBNoteReview.mount(root):()=>{};
    const shortcuts=[...root.querySelectorAll('[data-ob-practice-open]')];
    const listeners=shortcuts.map(button=>{
      const open=()=>{
        const panel=[...root.querySelectorAll('.section-practice')].find(item=>item.dataset.practiceSection===button.dataset.obPracticeOpen);
        if(!panel)return;
        for(let parent=panel.parentElement;parent&&parent!==root;parent=parent.parentElement)if(parent.tagName==='DETAILS')parent.open=true;
        panel.open=true;
        panel.querySelector('summary')?.focus({preventScroll:true});
        panel.scrollIntoView({behavior:'auto',block:'start'});
      };
      button.addEventListener('click',open);
      return ()=>button.removeEventListener('click',open);
    });
    return ()=>{listeners.forEach(remove=>remove());disposeReview();disposePractice();};
  }
  function weeklyExtras(week) {
    const groups=obQuestionMap.extras.filter(group=>group.weekIds.includes(week.id));
    return groups.length?`<section class="ob-supplemental-practice"><h2>Additional infant & child review</h2><p class="section-copy">These questions extend into later infant development and preventive follow-up. Use them after your newborn exam review.</p>${groups.map(group=>`<section class="ob-supplemental-group"><h3>${escapeHTML(group.title)}</h3>${section(group.id)}</section>`).join('')}</section>`:'';
  }
  return {section,overview,weeklyExtras,mount};
})();
