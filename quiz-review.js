/* One-question review mode uses the existing practice quiz's choices, grading, and explanations.
   Only in-memory attempts are retained; answers never leave the browser. */
function createQuestionReviewQuiz(data) {
  const shared = PracticeQuiz.create(data, {rationaleLabel:q => q.rationaleSource === 'reviewed' ? 'Reviewed rationale' : 'Provided answer-key rationale'});
  const attempts = new Map();
  let index = 0, finished = false;
  const normalize = (value, unit = '') => {
    let text = String(value).normalize('NFKC').toLowerCase().trim().replace(/[–—−]/g,'-').replace(/\bto\b/g,'-').replace(/[.,;:!?]+$/g,'');
    if (unit) {
      const safe = unit.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
      text = text.replace(new RegExp(`\\s*${safe}$`),'');
    }
    return text.replace(/\s+/g,'');
  };
  const sameSet = (selected, expected) => {
    const unique = [...new Set(selected)].sort(), key = [...expected].sort();
    return unique.length === key.length && unique.every((value,i)=>value===key[i]);
  };
  const matchesText = (field, answer) => {
    const value=normalize(answer || '',field.unit);
    if(field.accepted.some(alias=>normalize(alias,field.unit)===value))return true;
    if(field.numericRange && /^\d+(?:\.\d+)?$/.test(value))return Number(value)>=field.numericRange[0] && Number(value)<=field.numericRange[1];
    return false;
  };
  function grade(question, answer) {
    if (question.type === 'choice') return shared.grade([question], {[question.id]:answer || []}).results[0];
    const parts = question.type === 'text'
      ? question.fields.map((field,i) => ({label:field.label, selected:String(answer?.[i] || ''), expected:field.answer, correct:matchesText(field,answer?.[i])}))
      : question.groups.map(group => {
        const selected = answer?.[group.id] || [], accepted = group.acceptedSets || [group.correct];
        return {label:group.label, selected:selected.map(id=>group.options.find(option=>option.id===id)?.text || id).join('; '), expected:accepted.map(set=>set.map(id=>group.options.find(option=>option.id===id).text).join('; ')).join(' OR '), correct:accepted.some(expected=>sameSet(selected,expected))};
      });
    return {status:parts.every(part=>part.correct)?'correct':'incorrect', parts};
  }
  const attemptFor = question => attempts.get(question.id) || {answer:question.type==='choice'?[]:question.type==='text'?[]:{}, checked:false};
  const reviewed = () => [...attempts.values()].filter(attempt=>attempt.checked).length;
  const complete = (question, answer) => question.type === 'choice' ? answer?.length > 0
    : question.type === 'text' ? question.fields.every((_,i)=>String(answer?.[i] || '').trim())
    : question.groups.every(group=>answer?.[group.id]?.length === group.selectionCount);
  function feedback(question, result) {
    const references = question.references?.length ? `<details class="question-review-sources"><summary>Guidance for this clarification</summary><ul>${question.references.map(ref=>`<li><a href="${escapeHTML(ref.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(ref.title)}</a></li>`).join('')}</ul></details>` : '';
    if (question.type === 'choice') return shared.feedback(question,result) + references;
    return `<h3 class="quiz-verdict">${result.status==='correct'?'✓ Correct':'✕ Incorrect'}</h3><ul class="question-review-parts">${result.parts.map(part=>`<li><strong>${escapeHTML(part.label)} — ${part.correct?'✓ Correct':'✕ Incorrect'}</strong><br>Your answer: ${escapeHTML(part.selected)}<br>Correct answer: ${escapeHTML(part.expected)}</li>`).join('')}</ul><p><strong>${question.rationaleSource==='reviewed'?'Reviewed rationale':'Provided answer-key rationale'}:</strong> ${escapeHTML(question.rationale)}</p>${question.reviewNote?`<p class="quiz-context"><strong>Clinical clarification:</strong> ${escapeHTML(question.reviewNote)}</p>`:''}${references}`;
  }
  function fields(question, attempt, result) {
    const disabled = attempt.checked?'disabled':'';
    if (question.type === 'choice') return `<fieldset ${disabled} aria-describedby="review-hint"><legend class="quiz-prompt">${escapeHTML(question.prompt)}</legend><p class="quiz-hint" id="review-hint">${question.multiple ? question.selectionCount?`Select ${question.selectionCount} answers.`:'Select all that apply.' : 'Choose one answer.'}</p><div class="quiz-options">${practiceQuizOptions(question,attempt.answer,result,'review-answer')}</div></fieldset>`;
    if (question.type === 'text') return `<fieldset ${disabled}><legend class="quiz-prompt">${escapeHTML(question.prompt)}</legend><p class="quiz-hint" id="review-hint">Fill in each answer. Capitalization and spacing do not matter.</p><div class="question-review-fields">${question.fields.map((field,i)=>`<label for="review-field-${i}">${escapeHTML(field.label)}<input type="text" id="review-field-${i}" name="review-field-${i}" data-field="${i}" autocomplete="off" spellcheck="false" aria-describedby="review-hint" value="${escapeHTML(attempt.answer[i] || '')}"></label>`).join('')}</div></fieldset>`;
    return `<p class="quiz-prompt">${escapeHTML(question.prompt)}</p><div class="question-review-groups">${question.groups.map(group=>{
      const selected=attempt.answer[group.id] || [];
      // Accept all alternatives the source key explicitly permits, including bowtie monitor pairs.
      const expected=group.acceptedSets ? [...new Set(group.acceptedSets.flat())] : group.correct;
      return `<fieldset ${disabled} aria-describedby="review-hint-${group.id}" class="question-review-group"><legend>${escapeHTML(group.label)}</legend><p class="quiz-hint" id="review-hint-${group.id}">Choose ${group.selectionCount===1?'one answer':group.selectionCount+' answers'}.</p><div class="quiz-options">${practiceQuizOptions({...group, multiple:group.selectionCount>1, correct:expected, correctNote:group.acceptedSets?'✓ Acceptable choice — see combinations below.':undefined},selected,result,group.id)}</div></fieldset>`;
    }).join('')}</div>`;
  }
  function content() {
    const count=reviewed(), total=data.questions.length;
    if(finished) return `<section class="quiz-results question-review-complete" tabindex="-1"><h2>${count===total?'Review complete.':'Review at your pace.'}</h2><p>You’ve checked ${count} of ${total} questions. Revisit any question to see its explanation.</p><div class="quiz-buttons">${count<total?'<button type="button" class="quiz-submit" data-review-action="unanswered">Continue unanswered questions</button>':''}<button type="button" class="quiz-reset" data-review-action="start">Review from the beginning</button><button type="button" class="quiz-reset" data-review-action="reset">Reset exam</button></div><p class="quiz-end-note">Your answers stay in this tab until you reset the exam or reload the site.</p></section>`;
    const q=data.questions[index], attempt=attemptFor(q), result=attempt.checked?grade(q,attempt.answer):null;
    return `<form class="practice-quiz question-review-form" aria-label="${escapeHTML(data.title)}"><div class="quiz-toolbar question-review-toolbar"><div><label class="question-review-jump" for="review-question">Question <select id="review-question" aria-label="Go to question">${data.questions.map((item,i)=>`<option value="${i}" ${i===index?'selected':''}>${i+1} of ${total}${item.format==='Bowtie'?' · '+escapeHTML(item.label):''}${attempts.get(item.id)?.checked?' · reviewed':''}</option>`).join('')}</select></label><p class="quiz-progress" role="status">${count} of ${total} reviewed</p></div><div class="quiz-buttons"><button type="button" class="quiz-reset" data-review-action="reset">Reset exam</button></div></div><article class="quiz-question${result?' quiz-'+result.status:''}" tabindex="-1"><p class="question-review-category">${escapeHTML(q.category)} · ${escapeHTML(q.format)}${q.format==='Bowtie'?' · '+escapeHTML(q.label):''}</p>${fields(q,attempt,result)}<p class="question-review-error" role="alert"></p><div class="quiz-buttons question-review-check"><button type="submit" class="quiz-submit" ${attempt.checked?'disabled':''}>${attempt.checked?'Answer checked':'Check answer'}</button>${attempt.checked?'<button type="button" class="quiz-reset" data-review-action="retry">Try again</button>':''}</div>${result?`<div class="quiz-feedback" tabindex="-1">${feedback(q,result)}</div>`:''}</article><nav class="question-review-navigation quiz-buttons" aria-label="Question navigation"><button type="button" class="quiz-reset" data-review-action="previous" ${index===0?'disabled':''}>Previous</button><button type="button" class="quiz-submit" data-review-action="next">${index===total-1?'Finish review':'Next question'}</button></nav><p class="quiz-end-note">Check each answer for an explanation. You can skip a question and return using the question menu. Answers stay in this tab until you reset or reload.</p></form>`;
  }
  function section() { return `<div class="question-review">${content()}</div>`; }
  function mount(root) {
    const host=root.querySelector('.question-review'); if(!host) return()=>{};
    let disposed=false;
    function redraw(focus) {
      if(disposed)return;
      host.innerHTML=content();
      if(focus){const target=host.querySelector(focus);target?.focus({preventScroll:true});target?.scrollIntoView({block:'start',behavior:'instant'});}
    }
    function capture() {
      if(finished)return;
      const q=data.questions[index], prior=attemptFor(q);if(prior.checked)return;
      const chosen=name=>[...host.querySelectorAll(`input[name="${name}"]:checked`)].map(input=>input.value);
      const answer=q.type==='choice'?chosen('review-answer'):q.type==='text'?q.fields.map((_,i)=>host.querySelector(`#review-field-${i}`).value):Object.fromEntries(q.groups.map(group=>[group.id,chosen(group.id)]));
      attempts.set(q.id,{answer,checked:false});
    }
    function onChange(event) {
      if(disposed)return;
      if(event.target.id==='review-question') {
        const destination=Number(event.target.value);
        if(!Number.isInteger(destination)||destination<0||destination>=data.questions.length)return;
        capture();index=destination;redraw('.quiz-question');return;
      }
      if(event.target.matches('input')){capture();const error=host.querySelector('.question-review-error');if(error)error.textContent='';}
    }
    function onSubmit(event) {
      event.preventDefault();if(disposed||finished)return;
      const q=data.questions[index];if(attemptFor(q).checked)return;
      capture();const attempt=attemptFor(q);
      if(!complete(q,attempt.answer)){
        host.querySelector('.question-review-error').textContent=q.type==='choice'?'Choose an answer before checking.':q.type==='text'?'Fill in every answer before checking.':'Choose the requested number of answers in each group before checking.';
        return;
      }
      attempt.checked=true;
      if(typeof SiteAnalytics!=='undefined')SiteAnalytics.event('answer_checked');
      redraw('.quiz-feedback');
    }
    function onClick(event) {
      const button=event.target.closest('[data-review-action]');if(!button||button.disabled||disposed)return;
      const action=button.dataset.reviewAction;
      capture();
      if(action==='reset'){attempts.clear();index=0;finished=false;}
      else if(action==='retry')attempts.delete(data.questions[index].id);
      else if(action==='previous')index=Math.max(0,index-1);
      else if(action==='next'){if(index===data.questions.length-1)finished=true;else index++;}
      else if(action==='start'){index=0;finished=false;}
      else if(action==='unanswered'){index=data.questions.findIndex(q=>!attempts.get(q.id)?.checked);if(index<0)index=0;finished=false;}
      else return;
      redraw(finished?'.question-review-complete':'.quiz-question');
    }
    host.addEventListener('change',onChange);host.addEventListener('input',onChange);host.addEventListener('submit',onSubmit);host.addEventListener('click',onClick);
    return()=>{disposed=true;host.removeEventListener('change',onChange);host.removeEventListener('input',onChange);host.removeEventListener('submit',onSubmit);host.removeEventListener('click',onClick);};
  }
  return {section,mount,grade};
}
