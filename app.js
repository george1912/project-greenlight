const main = document.querySelector('#main');
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
  return `<section class="reading-references" aria-labelledby="reading-title"><h3 id="reading-title">Reading references</h3>${studyContent(week.reading)}</section>`;
}

function assignmentSection(week) {
  if (!week.assignments?.length) return '';
  return `<section class="prelecture" aria-labelledby="assignments-title"><h3 id="assignments-title">Pre-Lecture Assignments</h3>${studyContent(week.assignments)}</section>`;
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
          <div><span class="tag">FINAL EXAM REVIEW</span><h3>Med Search 3<br>Final Exam</h3><p>Your learning objectives, organized by week.</p><div class="card-scope">WEEKS 7, 8, 9 & 12 <span>·</span> WEEK 7 NOTES AVAILABLE</div></div>
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
    <section class="study-window" aria-labelledby="week-title">
      <div class="window-bar"><span>Week ${week.number} / ${escapeHTML(week.label)}</span><span class="window-date">${escapeHTML(week.date || '')}</span></div>
      <div class="study-window-body">
        <div class="week-intro"><div><p class="eyebrow">${week.objectives.length ? 'STUDY NOTES' : 'IN-CLASS STUDENT PRESENTATIONS'}</p><h2 id="week-title">${escapeHTML(week.title)}</h2></div></div>
        ${referenceSection(week)}
        ${week.objectives.length ? `<div class="objectives">${week.objectives.map(objectiveCard).join('')}</div>` : '<p class="section-copy">Each presentation topic has a place below. We’ll add the material when it’s ready.</p>'}
        ${week.presentations.length ? `<section class="presentations" aria-labelledby="presentations-title"><div class="section-heading"><h3 id="presentations-title">${week.objectives.length ? 'Also this week: student presentations' : 'Presentation topics'}</h3></div><div class="presentation-list">${week.presentations.map(topic => `<article class="presentation"><span class="group-number">${topic.group}</span><h4>${escapeHTML(topic.title)}</h4><span class="presentation-state">Content to come</span>${topic.content.length ? `<div class="presentation-content">${studyContent(topic.content)}</div>` : ''}</article>`).join('')}</div></section>` : ''}
        ${assignmentSection(week)}
      </div>
    </section>
    <div class="guide-bottom"><a class="text-link" href="#/">← Back to the study shelf</a></div>`;
}

function render(focus = false) {
  const route = location.hash || '#/';
  if (route === '#main') { if (!main.innerHTML.trim()) renderHome(); main.focus(); return; }
  if (route === '#/' || route === '#') renderHome();
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
