/* Original presentation review questions, grouped by their source deck. */
const PresentationQuizzes = (() => {
  const instances = new Map();
  const hat = '<svg class="distinguished-hat" viewBox="0 0 40 36" aria-hidden="true" focusable="false"><ellipse cx="20" cy="29" rx="18" ry="5" fill="#dfb948" stroke="#8c6b23" stroke-width="1.4"/><path d="M9 7h22l-2 21c-6 3-12 3-18 0Z" fill="#202c28"/><path d="m10.5 23 .5 5c6 3 12 3 18 0l.5-5c-6 2-13 2-19 0Z" fill="#dfb948"/><ellipse cx="20" cy="7" rx="11" ry="3" fill="#35433d" stroke="#202c28" stroke-width="1.4"/></svg>';
  function section(selectedID = '') {
    const bank = presentationQuizData[selectedID];
    return `<section class="presentation-quiz-intro"><p class="quiz-thanks distinguished-thanks">${hat}<span aria-hidden="true">🩺</span><span>Special thanks to a distinguished fellow.</span></p><p>These questions come from the student presentations. Choose a presentation, answer, and submit to review the explanations.</p><div class="presentation-quiz-picker"><label for="presentation-quiz-topic">Presentation</label><select id="presentation-quiz-topic"><option value="">Choose a presentation…</option>${Object.values(presentationDecks).filter(deck => presentationQuizData[deck.id]?.questions.length).map(deck => `<option value="${deck.id}" ${selectedID === deck.id ? 'selected' : ''}>${escapeHTML(deck.title)}</option>`).join('')}</select></div></section><div class="presentation-quiz-content">${bank?.questions.length ? quiz(bank).section() : selectedID ? '<p class="section-copy">There isn’t a scored quiz for this presentation yet. You can review the questions in the original slides.</p>' : '<p class="section-copy presentation-quiz-empty">Choose a presentation above to start its quiz.</p>'}</div>`;
  }
  function sourceNotes(bank) {
    const deck = presentationDecks[bank.id];
    const references = new Map();
    bank.questions.forEach(q => (q.references || []).forEach(ref => references.set(ref.url, ref)));
    const notes = [...(bank.adaptations || []).map(reason => ({pages: [], reason})), ...(bank.excluded || [])];
    return `<section class="reading-references quiz-references" aria-labelledby="quiz-reading-title"><h2 id="quiz-reading-title">Reading references</h2><p>Questions adapted from the ${escapeHTML(deck.title)} student presentation. Answers and rationales have been checked; feedback identifies presentation rationales and added clinical explanations.</p><ul>${bank.questions.map(q => `<li>Question ${q.id}: <a href="${deck.pdf}#page=${q.sourcePages[0]}" target="_blank" rel="noopener noreferrer">Original slide${q.sourcePages.length > 1 ? 's' : ''} ${q.sourcePages.join(', ')} ↗</a></li>`).join('')}${[...references.values()].map(ref => `<li><a href="${escapeHTML(ref.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(ref.title)} ↗</a></li>`).join('')}</ul>${notes.length ? `<details class="presentation-quiz-notes"><summary>Source notes</summary>${notes.map(note => `<p>${note.pages.length ? `<strong>Slide${note.pages.length > 1 ? 's' : ''} ${note.pages.join(', ')}:</strong> ` : ''}${escapeHTML(note.reason)}</p>`).join('')}</details>` : ''}</section>`;
  }
  function quiz(bank) {
    if (!instances.has(bank.id)) {
      const deck = presentationDecks[bank.id];
      instances.set(bank.id, PracticeQuiz.create(bank, {
        formLabel: `${deck.title} presentation quiz`,
        introHTML: `<div class="presentation-quiz-heading"><h2>${escapeHTML(deck.title)}</h2><a class="text-link" href="#/final/presentation/${deck.id}">View presentation →</a></div><p class="quiz-instructions">${bank.questions.length} questions. For multi-select items, follow the number requested or select all that apply. Each question is worth one point; select every correct answer and no others.</p>`,
        rationaleLabel: q => q.rationaleSource === 'presentation' ? 'Presentation rationale' : 'Reviewed rationale',
        referencesHTML: sourceNotes(bank)
      }));
    }
    return instances.get(bank.id);
  }
  function mount(root, selectedID = '') {
    const picker = root.querySelector('#presentation-quiz-topic');
    if (!picker) return () => {};
    const onChange = () => { location.hash = picker.value ? `#/final/nclex/${picker.value}` : '#/final/nclex'; };
    picker.addEventListener('change', onChange);
    const bank = presentationQuizData[selectedID];
    const dispose = bank?.questions.length ? quiz(bank).mount(root) : () => {};
    return () => { picker.removeEventListener('change', onChange); dispose(); };
  }
  return {section, mount};
})();
