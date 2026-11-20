/* Course-specific pages use the shared Green Light layout and hash navigation. */
const OBStudy = (() => {
  const course = obCourse;
  const topicURL = topic => `#/ob-final/topic/${topic.id}`;
  const weekURL = week => `#/ob-final/${week.id}`;
  const weekByID = id => course.weeks.find(week => week.id === id);
  const questionLabel = topic => topic.questions[0] === topic.questions[1] ? `${topic.questions[0]} questions` : `${topic.questions[0]}–${topic.questions[1]} questions`;
  function breadcrumb(label, parent = false) {
    return `<nav class="breadcrumb" aria-label="Breadcrumb"><a href="#/">Home</a><span aria-hidden="true">/</span><a href="#/ob-final">OB Final Exam</a>${parent ? '<span aria-hidden="true">/</span><a href="#/ob-final/study-guide">Study guide</a>' : ''}<span aria-hidden="true">/</span><span>${escapeHTML(label)}</span></nav>`;
  }
  function guideEntry() {
    return `<a class="study-guide-entry" href="#/ob-final/study-guide"><span class="study-guide-entry-copy"><strong>Final exam<br>study guide</strong><span class="study-guide-description">Postpartum, newborn, reproductive health, and cumulative review.</span></span><span class="entry-arrow">Open study guide</span></a>`;
  }
  function weekCard(week) {
    return `<a class="ob-week-card" href="${weekURL(week)}"><span class="ob-week-label">${escapeHTML(week.label)} <span>${escapeHTML(week.date)}</span></span><strong>${escapeHTML(week.title)}</strong></a>`;
  }
  function relatedWeeks(topic) {
    return `<nav class="ob-related-weeks" aria-label="Related weekly material">${topic.weekIds.map(id => {const week=weekByID(id);return `<a href="${weekURL(week)}">${escapeHTML(week.label)}</a>`;}).join('')}</nav>`;
  }
  function topicCard(topic) {
    return `<a class="ob-topic-card" href="${topicURL(topic)}"><strong>${escapeHTML(topic.title)}</strong><span>${escapeHTML(topic.weekIds.map(id=>weekByID(id).label).join(' · '))}</span><span class="ob-question-count">${questionLabel(topic)}</span></a>`;
  }
  function overview() {
    document.title = 'OB Final Exam · Project Green Light';
    main.innerHTML = `${breadcrumb('Overview')}<section class="hero exam-hero"><p class="eyebrow">${course.code} / ${course.term.toUpperCase()}</p><h1>OB<br><span>Final Exam.</span></h1><p class="hero-copy">Your exam guide and weekly course materials.</p></section>${guideEntry()}
      <section class="ob-weekly" aria-labelledby="ob-weekly-title"><div class="section-heading"><h2 id="ob-weekly-title">Weekly materials</h2></div><div class="ob-week-grid">${course.weeks.filter(week=>week.group==='main').map(weekCard).join('')}</div></section>
      <details class="ob-earlier-weeks"><summary>Earlier weeks for cumulative review</summary><div class="ob-week-grid">${course.weeks.filter(week=>week.group==='earlier').map(weekCard).join('')}</div></details><nav class="guide-bottom"><a class="text-link" href="#/">Back to the study shelf</a></nav>`;
  }
  function studyGuide() {
    document.title = 'OB final exam study guide · Project Green Light';
    main.innerHTML = `${breadcrumb('Study guide')}<section class="hero condition-hero study-guide-hero"><p class="eyebrow">OB / FINAL EXAM</p><h1>Final exam<br><span>study guide.</span></h1><p class="hero-copy">Choose a topic to build your review.</p></section><p class="guide-intro">${course.exam.questionCount}. The supplied Exam 3 blueprint lists the following focus areas; question counts are approximate and the topic list is not exhaustive.</p>
      <section class="ob-topic-group" aria-labelledby="ob-main-topics"><div class="section-heading"><h2 id="ob-main-topics">Main exam topics</h2></div><div class="ob-topic-grid">${course.topics.filter(topic=>topic.group==='main').map(topicCard).join('')}</div></section>
      <section class="ob-topic-group" aria-labelledby="ob-cumulative-topics"><div class="section-heading"><h2 id="ob-cumulative-topics">Cumulative review</h2></div><p class="section-copy">Selected material from Exams I and II.</p><div class="ob-topic-grid">${course.topics.filter(topic=>topic.group==='cumulative').map(topicCard).join('')}</div></section><p class="ob-content-note">Study notes, practice questions, and other resources will be added to these topics.</p><nav class="guide-bottom"><a class="text-link" href="#/ob-final">Weekly materials</a></nav>`;
  }
  function topicPage(topic) {
    document.title = `${topic.title} · OB study guide · Project Green Light`;
    const populated = course.sections.filter(section=>topic.content[section.id]?.length);
    main.innerHTML = `${breadcrumb(topic.title,true)}<section class="hero condition-hero"><p class="eyebrow">OB FINAL EXAM / ${topic.group==='main'?'MAIN EXAM TOPIC':'CUMULATIVE REVIEW'}</p><h1>${escapeHTML(topic.title)}</h1><p class="hero-copy">${questionLabel(topic)} in the supplied blueprint.</p></section><section class="condition-focus"><h2>Exam focus</h2><ul>${topic.focus.map(text=>`<li>${escapeHTML(text)}</li>`).join('')}</ul></section>${relatedWeeks(topic)}
      ${populated.length ? `<div class="condition-sections">${populated.map(section=>`<details class="condition-section"><summary><h2>${escapeHTML(section.title)}</h2><span class="expand-icon" aria-hidden="true"></span></summary><div class="condition-body">${conditionBlocks(topic.content[section.id])}</div></details>`).join('')}</div>` : '<section class="ob-notes-pending"><h2>Study notes</h2><p>This topic is ready for your notes. Detailed explanations and practice material will be added here.</p></section>'}
      <nav class="guide-bottom"><a class="text-link" href="#/ob-final/study-guide">All OB study guide topics</a><a class="text-link" href="#/ob-final">OB exam overview</a></nav>`;
  }
  function weekPage(week) {
    document.title = `${week.label} · OB Final Exam · Project Green Light`;
    const topics = course.topics.filter(topic=>topic.weekIds.includes(week.id));
    main.innerHTML = `${breadcrumb(week.label)}<section class="hero condition-hero"><p class="eyebrow">${course.code} / ${escapeHTML(week.label.toUpperCase())} / ${escapeHTML(week.date.toUpperCase())} / 2026</p><h1>${escapeHTML(week.title)}</h1></section>${guideEntry()}
      ${week.reviewOf ? `<section class="ob-weekly"><h2>Revisit Weeks 5–7</h2><p>Week 8 is Exam II, covering Weeks 5, 6, and 7.</p><div class="ob-week-grid">${week.reviewOf.map(id=>weekCard(weekByID(id))).join('')}</div></section>` : `<section class="ob-week-outline"><h2>Weekly outline</h2><ul>${week.outline.map(text=>`<li>${escapeHTML(text)}</li>`).join('')}</ul>${week.note?`<p class="ob-content-note">${escapeHTML(week.note)}</p>`:''}</section>`}
      ${topics.length ? `<section class="ob-topic-group"><h2>Related exam topics</h2><div class="ob-topic-grid">${topics.map(topicCard).join('')}</div></section>` : ''}<nav class="guide-bottom"><a class="text-link" href="#/ob-final">All OB weekly materials</a></nav>`;
  }
  function render(route) {
    if(route==='#/ob-final'){overview();return true;}
    if(route==='#/ob-final/study-guide'){studyGuide();return true;}
    const topic=course.topics.find(topic=>route===topicURL(topic));
    if(topic){topicPage(topic);return true;}
    const week=course.weeks.find(week=>route===weekURL(week));
    if(week){weekPage(week);return true;}
    return false;
  }
  return {render};
})();
