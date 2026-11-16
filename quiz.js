/* Shared quiz controls. Each instance keeps its own answers in tab memory. */
function createPracticeQuiz(data, copy = {}) {
  let answers = {}, submitted = false;
  function grade(questions, responses) {
    const results = questions.map(q => {
      const selected = [...new Set(responses[q.id] || [])].sort();
      const expected = [...q.correct].sort();
      const status = !selected.length ? 'unanswered' : selected.length === expected.length && selected.every((v,i)=>v===expected[i]) ? 'correct' : 'incorrect';
      return {id:q.id,selected,expected,status};
    });
    const correct = results.filter(r=>r.status==='correct').length;
    return {total:questions.length,correct,incorrect:results.filter(r=>r.status==='incorrect').length,unanswered:results.filter(r=>r.status==='unanswered').length,percentage:questions.length?Math.round(correct/questions.length*100):0,results};
  }
  function feedback(q, result) {
    const selected = result.selected.length ? result.selected.join(', ') : 'None';
    const title = {correct:'✓ Correct',incorrect:'✕ Incorrect',unanswered:'— Not answered'}[result.status];
    return `<h3 class="quiz-verdict">${title}</h3><p><strong>Your answer:</strong> ${escapeHTML(selected)}<br><strong>Correct answer${q.multiple?'s':''}:</strong> ${q.correct.join(', ')}</p><p><strong>${escapeHTML(copy.rationaleLabel ? copy.rationaleLabel(q) : 'Provided answer-key rationale')}:</strong> ${escapeHTML(q.rationale)}</p>${q.reviewNote ? `<p class="quiz-context"><strong>Clinical clarification:</strong> ${escapeHTML(q.reviewNote)}</p>` : ''}${q.context ? `<p class="quiz-context"><strong>Clinical context:</strong> ${escapeHTML(q.context.text)} <a href="${escapeHTML(q.context.url)}" target="_blank" rel="noopener noreferrer">Reference ↗</a></p>` : ''}`;
  }
  function summary(score) {
    return `<h2 id="quiz-score-title">${score.correct} / ${score.total} correct <span>(${score.percentage}%)</span></h2><p>${score.correct} correct · ${score.incorrect} incorrect · ${score.unanswered} unanswered</p><p class="quiz-review-help">Review the feedback below. Reset the quiz for a fresh attempt.</p>`;
  }
  function section() {
    const questions = data.questions;
    const score = submitted ? grade(questions,answers) : null;
    const count = questions.filter(q=>answers[q.id]?.length).length;
    return `${copy.introHTML !== undefined ? copy.introHTML : `<section class="quiz-intro" aria-label="Quiz instructions"><p class="quiz-thanks">Special thanks to Danalky.</p><p>${questions.length} questions from your practice-question PDF. Choose your answers, then submit to see your score, correct answers, and rationales.</p><p class="quiz-instructions">For “select all that apply,” choose every correct answer and no others. Each question is worth one point; unanswered questions earn no point.</p></section>`}
      <form class="practice-quiz" aria-label="${escapeHTML(copy.formLabel || 'Med-Surg III practice quiz')}">
        <div class="quiz-toolbar"><p class="quiz-progress" role="status" aria-live="polite">${count} of ${questions.length} answered</p><div class="quiz-buttons"><button type="submit" class="quiz-submit" ${submitted?'disabled':''}>${submitted?'Quiz submitted':'Submit quiz'}</button><button type="reset" class="quiz-reset">Reset quiz</button></div></div>
        <section class="quiz-results" tabindex="-1" aria-labelledby="quiz-score-title" ${submitted?'':'hidden'}>${score?summary(score):''}</section>
        <div class="quiz-questions">${questions.map(q=>{
          const result=score?.results.find(r=>r.id===q.id);
          return `<article class="quiz-question${result?' quiz-'+result.status:''}" id="quiz-question-${q.id}" data-question="${q.id}"><fieldset aria-describedby="quiz-hint-${q.id}" ${submitted?'disabled':''}><legend><span class="quiz-question-number">Question ${q.id}</span><span class="quiz-prompt">${escapeHTML(q.prompt)}</span></legend><p class="quiz-hint" id="quiz-hint-${q.id}">${q.multiple ? (q.selectionCount ? `Select ${q.selectionCount} answers.` : 'Select all that apply.') : 'Choose one answer.'}</p><div class="quiz-options">${q.options.map(option=>{
            const chosen=answers[q.id]?.includes(option.id), right=result&&q.correct.includes(option.id),wrong=result&&chosen&&!right;
            return `<label class="quiz-option${right?' choice-correct':wrong?' choice-wrong':''}"><input type="${q.multiple?'checkbox':'radio'}" name="q${q.id}" value="${option.id}" ${chosen?'checked':''}><span class="quiz-option-letter">${option.id}.</span><span class="quiz-option-copy">${escapeHTML(option.text)}<span class="quiz-option-note">${right?'✓ Correct answer':wrong?'✕ Your answer':''}</span></span></label>`;
          }).join('')}</div></fieldset><div class="quiz-feedback" ${result?'':'hidden'}>${result?feedback(q,result):''}</div></article>`;
        }).join('')}</div>
        <p class="quiz-end-note">Use the Submit quiz and Reset quiz buttons above to review or try again.</p>
      </form>
      ${copy.referencesHTML !== undefined ? copy.referencesHTML : `<section class="reading-references quiz-references" aria-labelledby="quiz-reading-title"><h2 id="quiz-reading-title">Reading references</h2><p>Questions, choices, grading key, and original rationales: ${escapeHTML(data.source)}. The supplied answer key is preserved; separately labeled clinical-context notes clarify selected teaching points.</p><ul>${questions.filter(q=>q.context).map(q=>`<li><a href="${escapeHTML(q.context.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(q.context.sourceTitle)} ↗</a></li>`).join('')}</ul></section>`}`;
  }
  function mount(root) {
    const form=root.querySelector('.practice-quiz');if(!form)return()=>{};
    const questions=data.questions, results=form.querySelector('.quiz-results'), progress=form.querySelector('.quiz-progress'), submit=form.querySelector('.quiz-submit');
    let disposed=false;
    const capture=()=>{questions.forEach(q=>{answers[q.id]=[...form.querySelectorAll(`input[name="q${q.id}"]:checked`)].map(input=>input.value);});};
    const updateProgress=()=>{progress.textContent=`${questions.filter(q=>answers[q.id]?.length).length} of ${questions.length} answered`;};
    function onChange(event){if(submitted||!event.target.matches('input'))return;capture();updateProgress();}
    function onSubmit(event){
      event.preventDefault();if(submitted||disposed)return;capture();submitted=true;
      if (typeof SiteAnalytics !== 'undefined') SiteAnalytics.event('quiz_submitted');
      const score=grade(questions,answers);results.innerHTML=summary(score);results.hidden=false;
      questions.forEach(q=>{
        const card=form.querySelector(`[data-question="${q.id}"]`),result=score.results.find(r=>r.id===q.id);
        card.classList.add('quiz-'+result.status);card.querySelector('fieldset').disabled=true;
        const output=card.querySelector('.quiz-feedback');output.innerHTML=feedback(q,result);output.hidden=false;
        card.querySelectorAll('.quiz-option').forEach(option=>{
          const input=option.querySelector('input'),correct=q.correct.includes(input.value),wrong=input.checked&&!correct;
          option.classList.toggle('choice-correct',correct);option.classList.toggle('choice-wrong',wrong);
          option.querySelector('.quiz-option-note').textContent=correct?'✓ Correct answer':wrong?'✕ Your answer':'';
        });
      });
      submit.disabled=true;submit.textContent='Quiz submitted';results.focus({preventScroll:true});results.scrollIntoView({block:'start'});
    }
    function onReset(event){
      event.preventDefault();answers={};submitted=false;
      form.querySelectorAll('input').forEach(input=>{input.checked=false;});
      form.querySelectorAll('fieldset').forEach(fieldset=>{fieldset.disabled=false;});
      form.querySelectorAll('.quiz-question').forEach(card=>{card.classList.remove('quiz-correct','quiz-incorrect','quiz-unanswered');});
      form.querySelectorAll('.quiz-option').forEach(option=>{option.classList.remove('choice-correct','choice-wrong');option.querySelector('.quiz-option-note').textContent='';});
      form.querySelectorAll('.quiz-feedback').forEach(output=>{output.innerHTML='';output.hidden=true;});
      results.innerHTML='';results.hidden=true;submit.disabled=false;submit.textContent='Submit quiz';updateProgress();
      form.querySelector('input').focus({preventScroll:true});form.querySelector('.quiz-question').scrollIntoView({block:'start'});
    }
    form.addEventListener('change',onChange);form.addEventListener('submit',onSubmit);form.addEventListener('reset',onReset);
    return()=>{disposed=true;form.removeEventListener('change',onChange);form.removeEventListener('submit',onSubmit);form.removeEventListener('reset',onReset);};
  }
  return {section,mount,grade};
}
const PracticeQuiz = Object.assign(createPracticeQuiz(practiceQuizData), {create: createPracticeQuiz});
