/* Section practice loads only when opened. Answers stay in this browser tab's memory. */
const SectionQuizzes = (() => {
  const banks = new Map(), attempts = new Map();
  const version = '20261116-section-practice';
  function grade(question, values) {
    const selected = [...new Set(values)].sort(), correct = [...question.correct].sort();
    if (!selected.length) return 'unanswered';
    return selected.length === correct.length && selected.every((value, index) => value === correct[index]) ? 'correct' : 'incorrect';
  }
  function section(topic, sectionID) {
    return `<details class="section-practice" data-practice-topic="${escapeHTML(topic)}" data-practice-section="${escapeHTML(sectionID)}"><summary><span>Quiz yourself</span><span class="section-practice-caption">Practice & feedback</span></summary><div class="section-practice-body"><p class="section-practice-status" role="status">Open to practice this section.</p></div></details>`;
  }
  function load(topic) {
    if (!banks.has(topic)) {
      const request = fetch(`practice-questions/${encodeURIComponent(topic)}.json?v=${version}`)
        .then(response => { if (!response.ok) throw new Error('Question bank unavailable'); return response.json(); })
        .then(bank => { if (bank.id !== topic || !bank.sections) throw new Error('Invalid question bank'); return bank; })
        .catch(error => { banks.delete(topic); throw error; });
      banks.set(topic, request);
    }
    return banks.get(topic);
  }
  function card(question, index) {
    const attempt = attempts.get(question.id) || {selected: [], checked: false};
    const result = attempt.checked ? grade(question, attempt.selected) : null;
    return `<form class="section-practice-question" data-practice-question="${escapeHTML(question.id)}"><fieldset ${attempt.checked ? 'disabled' : ''} aria-describedby="practice-hint-${question.id}"><legend><span class="section-practice-number">Question ${index + 1}</span>${escapeHTML(question.prompt)}</legend><p class="section-practice-hint" id="practice-hint-${question.id}">${question.type === 'sata' ? 'Select all that apply. Choose every correct answer and no others.' : 'Choose one answer.'}</p><div class="quiz-options">${question.options.map(option => {
      const selected = attempt.selected.includes(option.id), correct = result && question.correct.includes(option.id), wrong = result && selected && !correct;
      return `<label class="quiz-option${correct ? ' choice-correct' : wrong ? ' choice-wrong' : ''}"><input type="${question.type === 'sata' ? 'checkbox' : 'radio'}" name="${question.id}" value="${option.id}" ${selected ? 'checked' : ''}><span class="quiz-option-letter">${option.id}.</span><span class="quiz-option-copy">${escapeHTML(option.text)}<span class="quiz-option-note">${correct ? '✓ Correct answer' : wrong ? '✕ Your answer' : ''}</span></span></label>`;
    }).join('')}</div></fieldset><div class="section-practice-feedback" tabindex="-1" role="status" ${result ? '' : 'hidden'}>${result ? feedback(question, attempt.selected) : ''}</div><p class="section-practice-error" role="alert"></p><div class="section-practice-actions"><button type="submit" ${attempt.checked ? 'hidden' : ''}>Check answer</button><button type="reset" ${attempt.checked ? '' : 'hidden'}>Try again</button></div></form>`;
  }
  function feedback(question, selected) {
    const result = grade(question, selected), answer = question.options.filter(option => question.correct.includes(option.id)).map(option => `${option.id}. ${option.text}`).join('; ');
    return `<p class="section-practice-verdict ${result}">${result === 'correct' ? '✓ Correct' : '✕ Not quite — review below'}</p><p><strong>Correct answer${question.type === 'sata' ? 's' : ''}:</strong> ${escapeHTML(answer)}</p><p><strong>Why:</strong> ${escapeHTML(question.rationale)}</p>`;
  }
  function mount(root) {
    const panels = [...root.querySelectorAll('.section-practice')];
    if (!panels.length) return () => {};
    let disposed = false;
    const questions = new Map(), listeners = [];
    const listen = (element, event, handler) => { element.addEventListener(event, handler); listeners.push(() => element.removeEventListener(event, handler)); };
    async function open(panel) {
      if (!panel.open || panel.dataset.loaded || panel.dataset.loading || disposed) return;
      panel.dataset.loading = 'true';
      const body = panel.querySelector('.section-practice-body');
      body.innerHTML = '<p class="section-practice-status" role="status">Loading questions…</p>';
      try {
        const bank = await load(panel.dataset.practiceTopic);
        if (disposed) return;
        const items = bank.sections[panel.dataset.practiceSection] || [];
        items.forEach(question => questions.set(question.id, question));
        body.innerHTML = items.length ? `<p class="section-practice-intro">${items.length} questions to reinforce the notes above. Check each answer for an explanation.</p>${items.map(card).join('')}<button type="button" class="section-practice-reset" data-practice-reset>Reset questions</button>` : '<p>No practice questions for this section yet.</p>';
        panel.dataset.loaded = 'true';
      } catch (error) {
        if (!disposed) body.innerHTML = '<p role="status">Questions couldn’t load. Your study notes are still available.</p><button type="button" data-practice-retry>Try loading again</button>';
      } finally { delete panel.dataset.loading; }
    }
    panels.forEach(panel => listen(panel, 'toggle', () => open(panel)));
    function capture(form) { return [...form.querySelectorAll('input:checked')].map(input => input.value); }
    function replace(form, focus) {
      const question = questions.get(form.dataset.practiceQuestion);
      const index = [...form.parentElement.querySelectorAll('.section-practice-question')].indexOf(form);
      const holder = document.createElement('div'); holder.innerHTML = card(question, index);
      const replacement = holder.firstElementChild; form.replaceWith(replacement);
      if (focus) replacement.querySelector(focus)?.focus({preventScroll: true});
    }
    listen(root, 'change', event => {
      const form = event.target.closest('.section-practice-question');
      if (!form || !event.target.matches('input')) return;
      const prior = attempts.get(form.dataset.practiceQuestion);
      if (prior?.checked) return;
      attempts.set(form.dataset.practiceQuestion, {selected: capture(form), checked: false});
      form.querySelector('.section-practice-error').textContent = '';
    });
    listen(root, 'submit', event => {
      const form = event.target.closest('.section-practice-question'); if (!form) return;
      event.preventDefault();
      const id = form.dataset.practiceQuestion; if (attempts.get(id)?.checked) return;
      const selected = capture(form);
      if (!selected.length) { form.querySelector('.section-practice-error').textContent = 'Choose an answer before checking.'; return; }
      attempts.set(id, {selected, checked: true});
      if (typeof SiteAnalytics !== 'undefined') SiteAnalytics.event('answer_checked');
      replace(form, '.section-practice-feedback');
    });
    listen(root, 'reset', event => {
      const form = event.target.closest('.section-practice-question'); if (!form) return;
      event.preventDefault(); attempts.delete(form.dataset.practiceQuestion); replace(form, 'input');
    });
    listen(root, 'click', event => {
      const retry = event.target.closest('[data-practice-retry]');
      if (retry) { open(retry.closest('.section-practice')); return; }
      const reset = event.target.closest('[data-practice-reset]'); if (!reset) return;
      const body = reset.closest('.section-practice-body');
      body.querySelectorAll('.section-practice-question').forEach(form => { attempts.delete(form.dataset.practiceQuestion); replace(form); });
      body.querySelector('input')?.focus({preventScroll: true});
    });
    return () => { disposed = true; listeners.forEach(remove => remove()); };
  }
  return {section, mount, grade};
})();
