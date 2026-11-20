/* OB exam selection and independent, in-memory review sessions. */
const OBPractice = (() => {
  const sessions = new Map();
  function session(exam) {
    if(!sessions.has(exam.id))sessions.set(exam.id,createQuestionReviewQuiz(exam));
    return sessions.get(exam.id);
  }
  function selection() {
    return `<div class="ob-exam-grid">${obPracticeExams.map(exam=>`<a class="ob-topic-card" href="#/ob-final/practice/${exam.id}"><strong>${escapeHTML(exam.title)}</strong><span>${escapeHTML(exam.description)}</span><span>${exam.questions.length} questions, including bowties</span></a>`).join('')}</div>`;
  }
  function section(exam) { return session(exam).section(); }
  function mount(root,exam) { return session(exam).mount(root); }
  return {selection,section,mount};
})();
