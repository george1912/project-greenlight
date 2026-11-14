const main = document.querySelector('#main');
let disposePresentation = () => {};
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
function studyContent(blocks) {
  return blocks.map(block => {
    if (typeof block === 'string') return `<p>${escapeHTML(block)}</p>`;
    if (block.type === 'heading') return `<h5>${escapeHTML(block.text)}</h5>`;
    if (block.type === 'list') return `<ul>${block.items.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul>`;
    return `<p>${escapeHTML(block.text)}</p>`;
  }).join('');
}

function referenceSection(week) {
  if (!week.reading?.length) return '';
  return `<section class="reading-references" aria-labelledby="reading-title"><h3 id="reading-title">Reading references</h3>${studyContent(week.reading)}${week.sourceReferences?.length ? `<details class="source-details"><summary>Clinical terminology references</summary><ul>${week.sourceReferences.map(source => `<li><a href="${escapeHTML(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(source.title)}</a></li>`).join('')}</ul></details>` : ''}</section>`;
}

function assignmentSection(week) {
  if (!week.assignments?.length) return '';
  return `<section class="prelecture" aria-labelledby="assignments-title"><h3 id="assignments-title">Pre-Lecture Assignments</h3>${studyContent(week.assignments)}</section>`;
}

function noteReviewSection(week) {
  if (!week.reviewNotes?.length) return '';
  return `<section class="note-review" aria-labelledby="review-title"><h3 id="review-title">Terms to confirm</h3><ul>${week.reviewNotes.map(note => `<li>${escapeHTML(note)}</li>`).join('')}</ul></section>`;
}

function renderHome() {
  document.title = 'Project Green Light';
  main.innerHTML = `
    <section class="hero home-hero" aria-labelledby="home-title">
      <h1 id="home-title">Project <span>Green Light</span></h1>
    </section>
    <section class="study-library" aria-labelledby="library-title">
      <div class="section-heading"><h2 id="library-title">Your Study Shelf</h2></div>
      <a class="exam-card" href="#/final/week-7">
        <div class="window-bar"><span><span class="window-icon" aria-hidden="true">▤</span> NRBS 4210 · ADULT HEALTH III</span><span aria-hidden="true">↗</span></div>
        <div class="exam-card-body">
          <div><span class="tag">FINAL EXAM REVIEW</span><h3>Med Search 3<br>Final Exam</h3><p>Your learning objectives, organized by week.</p><div class="card-scope">WEEKS 7, 8, 9 & 12 <span>·</span> WEEKS 7 & 12 NOTES AVAILABLE</div></div>
          <span class="open-guide">Open study guide <span aria-hidden="true">→</span></span>
        </div>
      </a>
      <div class="future-space"><span class="pixel-plus" aria-hidden="true">+</span><div><h3>Room for what’s next.</h3></div></div>
    </section>`;
}

function objectiveCard(objective, index) {
  return `<details class="objective" ${index === 0 ? 'open' : ''}>
    <summary><span class="objective-number">${String(index + 1).padStart(2, '0')}</span><span class="objective-heading">${escapeHTML(objective.title)}<span class="objective-state">${objective.answer.length ? 'Study notes available' : 'Answer coming soon'}</span></span><span class="expand-icon" aria-hidden="true"></span></summary>
    <div class="objective-body"><p class="micro-label">LEARNING OBJECTIVE</p><p class="objective-text">${escapeHTML(objective.text)}</p>
    <div class="answer-area"><h4>Study notes</h4>${objective.answer.length ? studyContent(objective.answer) : '<p class="empty-answer">This space is ready for the answer. Study content will be added here.</p>'}</div></div>
  </details>`;
}

function renderWeek(week) {
  document.title = `Week ${week.number} · Med Search 3 · Project Green Light`;
  main.innerHTML = `
    <nav class="breadcrumb" aria-label="Breadcrumb"><a href="#/">Home</a><span aria-hidden="true">/</span><span>Med Search 3 Final Exam</span></nav>
    <section class="hero exam-hero" aria-labelledby="exam-title"><p class="eyebrow">NRBS 4210 / YOUR FINAL EXAM STUDY GUIDE</p><h1 id="exam-title">Med Search 3<br><span>Final Exam.</span></h1><div class="hero-meta">Weeks 7, 8, 9 & 12</div></section>
    <nav class="week-nav" aria-label="Study weeks">${studyWeeks.map(w => `<a href="#/final/week-${w.number}" ${w.number === week.number ? 'aria-current="page"' : ''}><span>Week ${w.number}</span><span class="week-subtitle">${w.number === 7 ? 'Parkinson’s disease' : w.number === 12 ? 'HIV / AIDS' : 'Student presentations'}</span></a>`).join('')}</nav>
    <div class="presentation-library-link"><a class="text-link" href="#/final/presentations">All presentation PDFs →</a></div>
    <section class="study-window" aria-labelledby="week-title">
      <div class="window-bar"><span>Week ${week.number} / ${escapeHTML(week.label)}</span><span class="window-date">${escapeHTML(week.date || '')}</span></div>
      <div class="study-window-body">
        <div class="week-intro"><div><p class="eyebrow">${week.objectives.length ? 'STUDY NOTES' : 'IN-CLASS STUDENT PRESENTATIONS'}</p><h2 id="week-title">${escapeHTML(week.title)}</h2></div></div>
        ${referenceSection(week)}
        ${week.objectives.length ? `<div class="objectives">${week.objectives.map(objectiveCard).join('')}</div>` : '<p class="section-copy">Choose a presentation to read its slides.</p>'}
        ${week.presentations.length ? `<section class="presentations" aria-labelledby="presentations-title"><div class="section-heading"><h3 id="presentations-title">${week.objectives.length ? 'Also this week: student presentations' : 'Presentation topics'}</h3></div>${presentationList(week)}</section>` : ''}
        ${noteReviewSection(week)}
        ${assignmentSection(week)}
      </div>
    </section>
    <div class="guide-bottom"><a class="text-link" href="#/">← Back to the study shelf</a></div>`;
}

function presentationList(week) {
  return `<div class="presentation-list">${week.presentations.map(topic => {
    const deck = Object.values(presentationDecks).find(d => d.week === week.number && d.group === topic.group);
    const body = `<span class="group-number">${escapeHTML(topic.group)}</span><h4>${escapeHTML(topic.title)}</h4><span class="presentation-state">${deck ? 'View PDF →' : 'PDF to come'}</span>`;
    return deck ? `<a class="presentation presentation-link" href="#/final/presentation/${deck.id}">${body}</a>` : `<article class="presentation">${body}${topic.content.length ? `<div class="presentation-content">${studyContent(topic.content)}</div>` : ''}</article>`;
  }).join('')}</div>`;
}

function renderPresentationLibrary() {
  document.title = 'Student presentations · Project Green Light';
  main.innerHTML = `<nav class="breadcrumb" aria-label="Breadcrumb"><a href="#/">Home</a><span aria-hidden="true">/</span><a href="#/final/week-7">Final exam</a><span aria-hidden="true">/</span><span>Presentations</span></nav>
    <section class="hero presentation-library-hero"><p class="eyebrow">MED SEARCH 3 FINAL EXAM</p><h1>Student<br><span>presentations.</span></h1><p class="hero-copy">Choose a topic. Read the original slides, one page at a time.</p></section>
    ${studyWeeks.filter(w => w.presentations.length).map(week => `<section class="presentation-library-group"><div class="section-heading"><h2>Week ${week.number}</h2><a class="text-link" href="#/final/week-${week.number}">Week ${week.number} guide →</a></div>${presentationList(week)}</section>`).join('')}
    <section class="presentation-library-group"><div class="section-heading"><h2>Additional presentations</h2></div><div class="presentation-list">${Object.values(presentationDecks).filter(deck => deck.week === null).map(deck => `<a class="presentation presentation-link additional-presentation" href="#/final/presentation/${deck.id}"><h4>${escapeHTML(deck.title)}</h4><span class="presentation-state">View PDF →</span></a>`).join('')}</div></section>`;
}

function renderPresentation(deck) {
  document.title = `${deck.title} · Presentation · Project Green Light`;
  main.innerHTML = `<nav class="breadcrumb" aria-label="Breadcrumb"><a href="#/">Home</a><span aria-hidden="true">/</span><a href="#/final/presentations">Presentations</a>${deck.week ? `<span aria-hidden="true">/</span><a href="#/final/week-${deck.week}">Week ${deck.week}</a>` : ''}</nav><section class="presentation-reader" aria-label="${escapeHTML(deck.title)} PDF viewer"></section><div class="guide-bottom"><a class="text-link" href="#/final/presentations">← All presentations</a>${deck.week ? `<a class="text-link" href="#/final/week-${deck.week}">← Week ${deck.week} guide</a>` : ''}</div>`;
  disposePresentation = PresentationViewer.mount(document.querySelector('.presentation-reader'), deck);
}

function render(focus = false) {
  const route = location.hash || '#/';
  if (route === '#main') { if (!main.innerHTML.trim()) renderHome(); main.focus(); return; }
  disposePresentation(); disposePresentation = () => {};
  if (route === '#/final/presentations') renderPresentationLibrary();
  else if (route.startsWith('#/final/presentation/') && presentationDecks[route.slice('#/final/presentation/'.length)]) renderPresentation(presentationDecks[route.slice('#/final/presentation/'.length)]);
  else if (route === '#/' || route === '#') renderHome();
  else if (route === '#/final') renderWeek(studyWeeks[0]);
  else {
    const match = route.match(/^#\/final\/week-(7|8|9|12)$/);
    if (match) renderWeek(studyWeeks.find(week => week.number === Number(match[1])));
    else {
      document.title = 'Page not found · Project Green Light';
      main.innerHTML = '<section class="hero"><p class="eyebrow">A SMALL DETOUR</p><h1>Let’s head home.</h1><p>This study page hasn’t been added yet.</p><a class="text-link" href="#/">← Back to the study shelf</a></section>';
    }
  }
  if (focus) { main.focus({ preventScroll: true }); window.scrollTo(0, 0); }
}
window.addEventListener('hashchange', () => render(true));
render();
