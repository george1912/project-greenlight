/* Course-specific pages use the shared Green Light layout and hash navigation. */
const OBStudy = (() => {
  const course = obCourse;
  const topicURL = topic => `#/ob-final/topic/${topic.id}`;
  const weekURL = week => `#/ob-final/${week.id}`;
  const weekByID = id => course.weeks.find(week => week.id === id);
  const questionLabel = topic => topic.questions[0] === topic.questions[1] ? `${topic.questions[0]} questions` : `${topic.questions[0]}–${topic.questions[1]} questions`;
  const objectives = () => typeof obStudyObjectives === 'undefined' ? [] : obStudyObjectives;
  const weekObjectives = week => objectives().filter(objective=>objective.weekIds.includes(week.id));
  const topicObjectives = topic => objectives().filter(objective=>objective.topicIds.includes(topic.id));
  function objectiveSection(items, {weekly = false, heading = 'Study objectives'} = {}) {
    if (!items.length) return '';
    return `<section class="ob-objectives" aria-label="${escapeHTML(heading)}"><h2>${escapeHTML(heading)}</h2><p class="ob-objectives-intro">Study prompts based on the syllabus, exam blueprint, and teaching presentations. Use them to guide your notes; expand a prompt to read its study notes.</p><div class="objectives">${items.map((objective,index)=>{
      const examTopics=course.topics.filter(topic=>objective.topicIds.includes(topic.id));
      return `<details class="objective ob-study-objective" data-objective="${escapeHTML(objective.id)}"><summary><span class="objective-number" aria-hidden="true">${String(index+1).padStart(2,'0')}</span><span class="objective-heading"><span class="ob-objective-title">${escapeHTML(objective.title)}</span><span class="ob-objective-prompt">${escapeHTML(objective.text)}</span></span><span class="expand-icon" aria-hidden="true"></span></summary><div class="objective-body"><div class="answer-area"><h3>Study notes</h3>${objective.answer.length ? studyContent(objective.answer) : '<p class="empty-answer">Ready for your notes. Write your explanation in your own words; we’ll add it here when you’re ready.</p>'}</div>${VideoLibrary.objectiveSection(objective.id)}${typeof OBReinforcement!=='undefined'?OBReinforcement.section(objective.id):''}${weekly ? examTopics.length ? `<nav class="ob-objective-topics" aria-label="Related final exam topics">${examTopics.map(topic=>`<a class="text-link" href="${topicURL(topic)}">${escapeHTML(topic.title)}</a>`).join('')}</nav>` : '<p class="ob-objective-context">Weekly course review.</p>' : ''}</div></details>`;
    }).join('')}</div></section>`;
  }
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
  const decks = () => typeof obPresentationDecks === 'undefined' ? [] : Object.values(obPresentationDecks);
  const presentationURL = (deck, focus) => `#/ob-final/presentation/${deck.id}${focus ? '/' + focus.id : ''}`;
  const pageLabel = focus => focus.endPage === focus.page ? `Page ${focus.page}` : `Pages ${focus.page}–${focus.endPage}`;
  function deckCard(deck, topicID = '') {
    const focus = topicID ? deck.focus.filter(item => item.topicId === topicID) : [];
    const topics = [...new Set(deck.focus.map(item => item.topicId))].map(id => course.topics.find(topic => topic.id === id));
    const topicLinks = topics.length ? `<p class="ob-deck-topics">Final exam: ${topics.map(topic => `<a href="${topicURL(topic)}">${escapeHTML(topic.title)}</a>`).join(' · ')}</p>` : '';
    const actions = focus.length
      ? `<div class="ob-deck-focus-links">${focus.map(item => `<a href="${presentationURL(deck,item)}"><span>${escapeHTML(item.label)}</span><span>${pageLabel(item)}</span></a>`).join('')}</div>`
      : `<a class="ob-open-presentation" href="${presentationURL(deck)}">Read presentation</a>${topicLinks}`;
    return `<article class="ob-deck-card"><p class="ob-deck-meta">${escapeHTML(deck.kind)} · ${deck.pages} pages</p><h3><a href="${presentationURL(deck)}">${escapeHTML(deck.title)}</a></h3>${actions}</article>`;
  }
  function deckSection(items, topicID = '', {collapsible = false} = {}) {
    if (!items.length) return '';
    if (collapsible) return `<details class="ob-presentations"><summary><h2>${topicID ? 'Presentations for this exam topic' : 'Presentations &amp; handouts'}</h2><span class="ob-presentation-count">${items.length}</span><span class="expand-icon" aria-hidden="true"></span></summary><div class="ob-deck-grid">${items.map(deck=>deckCard(deck,topicID)).join('')}</div></details>`;
    return `<section class="ob-presentations"><h2>${topicID ? 'Presentations for this exam topic' : 'Presentations & handouts'}</h2>${topicID ? '<p class="section-copy">Open the relevant pages, then use the reader to explore the full presentation.</p>' : ''}<div class="ob-deck-grid">${items.map(deck=>deckCard(deck,topicID)).join('')}</div></section>`;
  }
  function presentationPage(deck, focus = null) {
    document.title = `${deck.title} · OB presentation · Project Green Light`;
    const week=weekByID(deck.weekIds[0]);
    const topic=focus ? course.topics.find(item=>item.id===focus.topicId) : null;
    main.innerHTML = `${breadcrumb(deck.title)}${focus ? `<section class="ob-reader-focus"><p class="eyebrow">FINAL EXAM FOCUS</p><h2>${escapeHTML(topic.title)}</h2><p>${escapeHTML(focus.label)} · ${pageLabel(focus)}</p><a class="text-link" href="${topicURL(topic)}">Back to this exam topic</a></section>` : ''}<section class="presentation-reader" aria-label="${escapeHTML(deck.title)} PDF viewer"></section><nav class="guide-bottom"><a class="text-link" href="${weekURL(week)}">${escapeHTML(week.label)} materials</a><a class="text-link" href="#/ob-final/study-guide">OB final exam study guide</a></nav>`;
    disposePresentation = PresentationViewer.mount(main.querySelector('.presentation-reader'), {...deck,contextLabel:`${deck.kind.toUpperCase()} / ${week.label.toUpperCase()}`,initialPage:focus?.page || 1});
  }
  function overview() {
    document.title = 'OB Final Exam · Project Green Light';
    main.innerHTML = `${breadcrumb('Overview')}<section class="hero exam-hero"><p class="eyebrow">${course.code} / ${course.term.toUpperCase()}</p><h1>OB<br><span>Final Exam.</span></h1><p class="hero-copy">Your exam guide and weekly course materials.</p></section>${guideEntry()}
      <section class="ob-weekly" aria-labelledby="ob-weekly-title"><div class="section-heading"><h2 id="ob-weekly-title">Weekly materials</h2></div><div class="ob-week-grid">${course.weeks.map(weekCard).join('')}</div></section>
      <nav class="guide-bottom"><a class="text-link" href="#/">Back to the study shelf</a></nav>`;
  }
  function studyGuide() {
    document.title = 'OB final exam study guide · Project Green Light';
    main.innerHTML = `${breadcrumb('Study guide')}<section class="hero condition-hero study-guide-hero"><p class="eyebrow">OB / FINAL EXAM</p><h1>Final exam<br><span>study guide.</span></h1><p class="hero-copy">Choose a topic. Use its study objectives to guide your notes, then test your understanding.</p></section><nav class="study-guide-tools" aria-label="OB study guide tools"><a href="#/ob-final/practice"><strong>Practice exams</strong><span>Answer & review</span></a><a href="#/ob-final/podcast"><strong>Podcast</strong><span>Listen & review</span></a><a href="#/ob-final/memory-notes"><strong>Quick Memory Notes</strong><span>OB mnemonics</span></a></nav><p class="guide-intro">${course.exam.questionCount}. The supplied Exam 3 blueprint lists the following focus areas; question counts are approximate and the topic list is not exhaustive.</p>
      <details class="ob-notes-outline"><summary>How to organize your notes</summary><p>Read the related material, answer each objective in your own words, then check your understanding with practice questions. Use the headings that fit the objective.</p><ol>${course.sections.map(section=>`<li>${escapeHTML(section.title)}</li>`).join('')}</ol></details>
      <section class="ob-topic-group" aria-labelledby="ob-main-topics"><div class="section-heading"><h2 id="ob-main-topics">Main exam topics</h2></div><div class="ob-topic-grid">${course.topics.filter(topic=>topic.group==='main').map(topicCard).join('')}</div></section>
      <section class="ob-topic-group" aria-labelledby="ob-cumulative-topics"><div class="section-heading"><h2 id="ob-cumulative-topics">Cumulative review</h2></div><p class="section-copy">Selected material from Exams I and II.</p><div class="ob-topic-grid">${course.topics.filter(topic=>topic.group==='cumulative').map(topicCard).join('')}</div></section><p class="ob-content-note">Each topic links to relevant presentation pages. Use the practice exams above to check your understanding as you review.</p><nav class="guide-bottom"><a class="text-link" href="#/ob-final">Weekly materials</a></nav>`;
  }
  function practicePage(exam = null) {
    document.title = `${exam ? exam.title : 'Practice exams'} · OB study guide · Project Green Light`;
    main.innerHTML = `${breadcrumb(exam ? exam.title : 'Practice exams',true)}<section class="hero quiz-hero"><p class="eyebrow">OB FINAL EXAM STUDY GUIDE</p><h1>${exam ? `Practice <span>exam ${escapeHTML(exam.id.slice(-1))}.</span>` : 'Practice <span>exams.</span>'}</h1><p class="hero-copy">Answer one question at a time. Check your answer, then review the explanation.</p></section>${exam ? `<p class="quiz-instructions">${exam.questions.length} questions, including case studies and bowties. Clarifications are labeled in the feedback.</p>${OBPractice.section(exam)}` : OBPractice.selection()}<nav class="guide-bottom">${exam?'<a class="text-link" href="#/ob-final/practice">All OB practice exams</a>':''}<a class="text-link" href="#/ob-final/study-guide">OB final exam study guide</a></nav>`;
    if(exam)disposeQuiz=OBPractice.mount(main,exam);
  }
  function podcastPage() {
    document.title = 'OB study podcast · Project Green Light';
    main.innerHTML = `${breadcrumb('Podcast',true)}<section class="hero podcast-hero"><p class="eyebrow">OB FINAL EXAM STUDY GUIDE</p><h1>Study <span>podcast.</span></h1><p class="hero-copy">Listen and review for your OB final exam.</p></section>${PodcastPlayer.section(course.podcast)}<nav class="guide-bottom"><a class="text-link" href="#/ob-final/study-guide">OB final exam study guide</a></nav>`;
    disposePodcast = PodcastPlayer.mount(main,course.podcast);
  }
  function posterPreview(id) {
    const poster = obPosters[id];
    const note = poster.clarification;
    return `<div data-ob-poster="${id}">${ConditionPosters.section('ob-' + id, poster)}
      ${note ? `<p class="ob-poster-note"><strong>Clinical clarification</strong> · ${escapeHTML(note.text)} <a href="${escapeHTML(note.references[0].url)}">Guidance</a></p>` : ''}</div>`;
  }

  function posterList(ids, title) {
    if (!ids?.length) return '';
    return `<section class="ob-poster-list"><h2>${title}</h2>${ids.map(id =>
      `<details class="ob-notes-outline"><summary>${escapeHTML(obPosters[id].title)}</summary>${posterPreview(id)}</details>`
    ).join('')}</section>`;
  }

  function mountPosters() {
    const cleanups = Array.from(main.querySelectorAll('[data-ob-poster]'), host =>
      ConditionPosters.mount(host, 'ob-' + host.dataset.obPoster, obPosters[host.dataset.obPoster])
    );
    disposePoster = () => cleanups.forEach(cleanup => cleanup());
  }

  function memoryPage() {
    document.title = 'Quick Memory Notes · OB study guide · Project Green Light';
    main.innerHTML = `${breadcrumb('Quick Memory Notes', true)}
      <section class="hero condition-hero"><h1>Quick <span>Memory Notes</span></h1></section>
      <div class="condition-intro-with-poster">${posterPreview(0)}
        <section class="ob-memory-list"><h2>Review a memory trick</h2>${obPosters[0].description.map(line => {
          const [title, explanation] = line.split(' — ');
          return `<details class="ob-notes-outline"><summary>${escapeHTML(title)}</summary><p>${escapeHTML(explanation)}</p></details>`;
        }).join('')}</section></div>
      <nav class="guide-bottom"><a class="text-link" href="#/ob-final/study-guide">OB final exam study guide</a></nav>`;
    mountPosters();
  }

  function topicPage(topic) {
    document.title = `${topic.title} · OB study guide · Project Green Light`;
    const populated = course.sections.filter(section=>topic.content[section.id]?.length);
    const prompts = topicObjectives(topic);
    const [primaryPoster, ...relatedPosters] = obExamPosters[topic.id];
    main.innerHTML = `${breadcrumb(topic.title,true)}<section class="hero condition-hero"><p class="eyebrow">OB FINAL EXAM / ${topic.group==='main'?'MAIN EXAM TOPIC':'CUMULATIVE REVIEW'}</p><h1>${escapeHTML(topic.title)}</h1><p class="hero-copy">${questionLabel(topic)} in the supplied blueprint.</p></section><div class="condition-intro-with-poster ob-topic-resources">${posterPreview(primaryPoster)}<div class="condition-navigation">${deckSection(decks().filter(deck=>deck.focus.some(item=>item.topicId===topic.id)),topic.id,{collapsible:true})}<section class="condition-focus"><h2>Exam focus</h2><ul>${topic.focus.map(text=>`<li>${escapeHTML(text)}</li>`).join('')}</ul></section>${relatedWeeks(topic)}${posterList(relatedPosters, 'Related posters')}</div></div>
      ${topic.id==='newborn-complications' ? '<p class="ob-content-note">Use your high-risk newborn lecture notes alongside the available PDFs; the current presentations cover parts of this topic.</p>' : ''}
      ${objectiveSection(prompts)}
      ${populated.length ? `<div class="condition-sections">${populated.map(section=>`<details class="condition-section"><summary><h2>${escapeHTML(section.title)}</h2><span class="expand-icon" aria-hidden="true"></span></summary><div class="condition-body">${conditionBlocks(topic.content[section.id])}</div></details>`).join('')}</div>` : prompts.length ? '' : '<section class="ob-notes-pending"><h2>Study notes</h2><p>This topic is ready for your notes. Detailed explanations and practice material will be added here.</p></section>'}
      <nav class="guide-bottom"><a class="text-link" href="#/ob-final/study-guide">All OB study guide topics</a><a class="text-link" href="#/ob-final">OB exam overview</a></nav>`;
    mountPosters();
    if(typeof OBReinforcement!=='undefined')disposeSectionQuizzes=OBReinforcement.mount(main);
  }
  function weekPage(week) {
    document.title = `${week.label} · OB Final Exam · Project Green Light`;
    const topics = course.topics.filter(topic=>topic.weekIds.includes(week.id));
    const [primaryPoster, ...relatedPosters] = obWeeklyPosters[week.id] || [];
    main.innerHTML = `${breadcrumb(week.label)}<section class="hero condition-hero"><p class="eyebrow">${course.code} / ${escapeHTML(week.label.toUpperCase())} / ${escapeHTML(week.date.toUpperCase())} / 2026</p><h1>${escapeHTML(week.title)}</h1></section>
      <div class="ob-week-resources${primaryPoster ? ' condition-intro-with-poster' : ''}">
      ${primaryPoster ? `<div class="ob-week-infographic">${posterPreview(primaryPoster)}${posterList(relatedPosters, 'More infographics')}</div>` : ''}
      <div class="ob-week-materials">${deckSection(decks().filter(deck=>deck.weekIds.includes(week.id)), '', {collapsible:true})}
      ${week.reviewOf ? `<section class="ob-weekly"><h2>Revisit Weeks 5–7</h2><p>Week 8 is Exam II, covering Weeks 5, 6, and 7.</p><div class="ob-week-grid">${week.reviewOf.map(id=>weekCard(weekByID(id))).join('')}</div></section>` : `<section class="ob-week-outline"><h2>Weekly outline</h2><ul>${week.outline.map(text=>`<li>${escapeHTML(text)}</li>`).join('')}</ul>${week.note?`<p class="ob-content-note">${escapeHTML(week.note)}</p>`:''}</section>`}
      </div></div>
      ${week.reviewOf ? `<section class="ob-objective-reviews" aria-label="Study objectives for Exam II review">${week.reviewOf.map(id=>{const sourceWeek=weekByID(id);return `<details class="ob-objective-review"><summary>${escapeHTML(sourceWeek.label)} · ${escapeHTML(sourceWeek.title)}</summary>${objectiveSection(weekObjectives(sourceWeek),{weekly:true,heading:sourceWeek.label+' study objectives'})}</details>`;}).join('')}</section>` : objectiveSection(weekObjectives(week),{weekly:true})}
      ${typeof OBReinforcement!=='undefined'?OBReinforcement.weeklyExtras(week):''}
      ${guideEntry()}
      ${topics.length ? `<section class="ob-topic-group"><h2>Related exam topics</h2><div class="ob-topic-grid">${topics.map(topicCard).join('')}</div></section>` : ''}<nav class="guide-bottom"><a class="text-link" href="#/ob-final">All OB weekly materials</a></nav>`;
    mountPosters();
    if(typeof OBReinforcement!=='undefined')disposeSectionQuizzes=OBReinforcement.mount(main);
  }
  function render(route) {
    if(route==='#/ob-final'){overview();return true;}
    if(route==='#/ob-final/study-guide'){studyGuide();return true;}
    if(route==='#/ob-final/memory-notes'){memoryPage();return true;}
    if(route==='#/ob-final/podcast'){podcastPage();return true;}
    if(route==='#/ob-final/practice'){practicePage();return true;}
    const exam = typeof obPracticeExams === 'undefined' ? null : obPracticeExams.find(item=>route===`#/ob-final/practice/${item.id}`);
    if(exam){practicePage(exam);return true;}
    const match=route.match(/^#\/ob-final\/presentation\/([a-z0-9-]+)(?:\/([a-z0-9-]+))?$/);
    if(match){
      const deck=decks().find(item=>item.id===match[1]);
      const focus=deck&&match[2] ? deck.focus.find(item=>item.id===match[2]) : null;
      if(deck&&(!match[2]||focus)){presentationPage(deck,focus);return true;}
      return false;
    }
    const topic=course.topics.find(topic=>route===topicURL(topic));
    if(topic){topicPage(topic);return true;}
    const week=course.weeks.find(week=>route===weekURL(week));
    if(week){weekPage(week);return true;}
    return false;
  }
  return {render};
})();
