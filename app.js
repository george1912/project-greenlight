const main = document.querySelector('#main');
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const paragraphs = values => values.map(value => `<p>${escapeHTML(value)}</p>`).join('');

function renderHome() {
  document.title = 'Project Greenlight · Your nursing study desk';
  main.innerHTML = `
    <section class="hero home-hero" aria-labelledby="home-title">
      <p class="eyebrow">YOUR NURSING SCHOOL STUDY DESK</p>
      <h1 id="home-title">Project <span>Greenlight.</span></h1>
      <p class="hero-copy">A place for everything you’re learning.<br>One step closer to the nurse you’re becoming.</p>
      <div class="hero-meta"><span class="status-dot" aria-hidden="true"></span> From the next exam to the NCLEX.</div>
    </section>
    <section class="study-library" aria-labelledby="library-title">
      <div class="section-heading"><h2 id="library-title">Your study shelf</h2><span class="micro-label">01 / START HERE</span></div>
      <a class="exam-card" href="#/final/week-7">
        <div class="window-bar"><span><span class="window-icon" aria-hidden="true">▤</span> NRBS 4210 · ADULT HEALTH III</span><span aria-hidden="true">↗</span></div>
        <div class="exam-card-body">
          <div><span class="tag">FINAL EXAM REVIEW</span><h3>Med Search 3<br>Final Exam</h3><p>Your learning objectives, organized by week.<br>We’re starting with Parkinson’s disease.</p><div class="card-scope">WEEKS 7, 8, 9 & 12 <span>·</span> STUDY GUIDE IN PROGRESS</div></div>
          <span class="open-guide">Open study guide <span aria-hidden="true">→</span></span>
        </div>
      </a>
      <div class="future-space"><span class="pixel-plus" aria-hidden="true">+</span><div><h3>Room for what’s next.</h3><p>More courses, more topics, and your NCLEX essentials will find a home here.</p></div></div>
    </section>`;
}

function objectiveCard(objective, index) {
  return `<details class="objective" ${index === 0 ? 'open' : ''}>
    <summary><span class="objective-number">${String(index + 1).padStart(2, '0')}</span><span class="objective-heading">${escapeHTML(objective.title)}<span class="objective-state">${objective.answer.length ? 'Study notes available' : 'Answer coming soon'}</span></span><span class="expand-icon" aria-hidden="true"></span></summary>
    <div class="objective-body"><p class="micro-label">LEARNING OBJECTIVE</p><p class="objective-text">${escapeHTML(objective.text)}</p>
    <div class="answer-area"><h4>Study notes</h4>${objective.answer.length ? paragraphs(objective.answer) : '<p class="empty-answer">This space is ready for the answer. Study content will be added here.</p>'}</div></div>
  </details>`;
}

function renderWeek(week) {
  document.title = `Week ${week.number} · Med Search 3 · Project Greenlight`;
  main.innerHTML = `
    <nav class="breadcrumb" aria-label="Breadcrumb"><a href="#/">Home</a><span aria-hidden="true">/</span><span>Med Search 3 Final Exam</span></nav>
    <section class="hero exam-hero" aria-labelledby="exam-title"><p class="eyebrow">NRBS 4210 / YOUR FINAL EXAM STUDY GUIDE</p><h1 id="exam-title">Med Search 3<br><span>Final Exam.</span></h1><p class="hero-copy">Start with the objectives. Build your understanding, one topic at a time.</p><div class="hero-meta">Weeks 7, 8, 9 & 12 <span aria-hidden="true">·</span> 7 learning objectives <span aria-hidden="true">·</span> 15 presentation topics</div></section>
    <nav class="week-nav" aria-label="Study weeks">${studyWeeks.map(w => `<a href="#/final/week-${w.number}" ${w.number === week.number ? 'aria-current="page"' : ''}><span>Week ${w.number}${w.focus ? '<span class="focus-label">START HERE</span>' : ''}</span><span class="week-subtitle">${w.number === 7 ? 'Parkinson’s disease' : w.number === 12 ? 'HIV / AIDS' : 'Student presentations'}</span></a>`).join('')}</nav>
    <section class="study-window" aria-labelledby="week-title">
      <div class="window-bar"><span>Week ${week.number} / ${escapeHTML(week.label)}</span><span class="window-date">${week.date}</span></div>
      <div class="study-window-body">
        <div class="week-intro"><div><p class="eyebrow">${week.focus ? 'OUR FIRST STUDY FOCUS' : week.objectives.length ? 'LEARNING OBJECTIVES' : 'IN-CLASS STUDENT PRESENTATIONS'}</p><h2 id="week-title">${escapeHTML(week.title)}</h2></div><span class="tag ${week.focus ? 'green-tag' : ''}">${week.focus ? 'CURRENT FOCUS' : 'CONTENT TO COME'}</span></div>
        ${week.objectives.length ? `<p class="section-copy">${week.focus ? 'Three objectives to guide our review. Open each one to see the syllabus wording and its space for study notes.' : 'Four objectives from the syllabus, ready for a future study session.'}</p><div class="objectives">${week.objectives.map(objectiveCard).join('')}</div>` : '<p class="section-copy">Each presentation topic has a place below. We’ll add the material when it’s ready.</p>'}
        ${week.presentations.length ? `<section class="presentations" aria-labelledby="presentations-title"><div class="section-heading"><h3 id="presentations-title">${week.objectives.length ? 'Also this week: student presentations' : 'Presentation topics'}</h3><span class="micro-label">${week.presentations.length} TOPICS</span></div><div class="presentation-list">${week.presentations.map(topic => `<article class="presentation"><span class="group-number">${topic.group}</span><h4>${escapeHTML(topic.title)}</h4><span class="presentation-state">Content to come</span>${topic.content.length ? `<div class="presentation-content">${paragraphs(topic.content)}</div>` : ''}</article>`).join('')}</div></section>` : ''}
        <details class="source-details"><summary>Reading & syllabus reference</summary><p>${escapeHTML(week.reading)}</p><p class="source-note">NRBS 4210 syllabus · Fall 2026 · Page ${week.sourcePage}. Learning objectives follow the syllabus; presentation names use standard spelling.</p></details>
      </div>
    </section>
    <div class="guide-bottom"><a class="text-link" href="#/">← Back to the study shelf</a><span>Built a little at a time. Just like understanding.</span></div>`;
}

function render(focus = false) {
  const route = location.hash || '#/';
  if (route === '#main') { main.focus(); return; }
  if (route === '#/' || route === '#') renderHome();
  else if (route === '#/final') renderWeek(studyWeeks[0]);
  else {
    const match = route.match(/^#\/final\/week-(7|8|9|12)$/);
    if (match) renderWeek(studyWeeks.find(week => week.number === Number(match[1])));
    else {
      document.title = 'Page not found · Project Greenlight';
      main.innerHTML = '<section class="hero"><p class="eyebrow">A SMALL DETOUR</p><h1>Let’s head home.</h1><p>This study page hasn’t been added yet.</p><a class="text-link" href="#/">← Back to the study shelf</a></section>';
    }
  }
  if (focus) { main.focus({ preventScroll: true }); window.scrollTo(0, 0); }
}
window.addEventListener('hashchange', () => render(true));
render();
