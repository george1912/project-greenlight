/* Optional continuous articles, generated from the same notes as the study pages. */
const StudyReader = (() => {
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const base = 'https://george1912.github.io/project-greenlight/';
  const root = '../../';
  const hasAnswers = objectives => objectives.some(objective => objective.answer.length);
  const format = (value, scope) => typeof OBReadability === 'undefined' || !scope ? escape(value) : OBReadability.format(value, scope);

  function pages() {
    const result = [];
    for (const week of obCourse.weeks) {
      const objectives = week.reviewOf
        ? week.reviewOf.flatMap(id => obStudyObjectives.filter(objective => objective.weekIds.includes(id)))
        : obStudyObjectives.filter(objective => objective.weekIds.includes(week.id));
      if (hasAnswers(objectives)) result.push({kind:'ob', route:`#/ob-final/${week.id}`, path:`reader/ob/${week.id}.html`, title:`${week.label}: ${week.title}`, context:'OB / Weekly notes', objectives});
    }
    for (const topic of obCourse.topics) {
      const objectives = obStudyObjectives.filter(objective => objective.topicIds.includes(topic.id));
      if (hasAnswers(objectives) || Object.values(topic.content).some(blocks => blocks.length)) result.push({kind:'ob', route:`#/ob-final/topic/${topic.id}`, path:`reader/ob/topic-${topic.id}.html`, title:topic.title, context:'OB / Exam topic', objectives, topic});
    }
    for (const week of studyWeeks) {
      if (hasAnswers(week.objectives)) result.push({kind:'med-week', route:`#/final/week-${week.number}`, path:`reader/med-surg/week-${week.number}.html`, title:`Week ${week.number}: ${week.title}`, context:'Med-Surg / Weekly notes', objectives:week.objectives, week});
    }
    for (const topic of examTopics) {
      const condition = conditionNotes[topic.id];
      if (condition && Object.values(condition.content).some(blocks => blocks.length)) result.push({kind:'med-condition', route:`#/final/condition/${topic.id}`, path:`reader/med-surg/condition-${topic.id}.html`, title:condition.title, context:'Med-Surg / Exam topic', condition});
    }
    return result;
  }

  function link(route) {
    const page = pages().find(page => page.route === route);
    return page ? `<a class="study-reader-link" href="${escape(page.path)}" aria-label="Reader view: ${escape(page.title)}">Reader view</a>` : '';
  }

  function href(value) {
    // These links are authored source references, never HTML or executable URLs.
    if (/^#\/[a-z0-9/-]*$/i.test(value)) return root + value;
    if (/^https:\/\//i.test(value)) return value;
    throw new Error('Unsupported reader reference URL: ' + value);
  }

  function references(items) {
    return `<ul>${items.map(item => `<li><a href="${escape(href(item.url))}">${escape(item.title)}</a>${item.supports ? `<p>${escape(item.supports)}</p>` : ''}</li>`).join('')}</ul>`;
  }

  function blocks(items, {objectiveID = '', section = '', level = 3} = {}) {
    const heading = `h${Math.min(level, 6)}`;
    const scope = objectiveID ? objectiveID + '|' + section : '';
    return items.map(block => {
      if (typeof block === 'string') return `<p>${format(block, scope)}</p>`;
      if (block.type === 'overview') return `<section><${heading}>Quick answer</${heading}><ul>${block.items.map(item => `<li>${format(item, objectiveID + '|Quick answer')}</li>`).join('')}</ul></section>`;
      if (block.type === 'group') return `<section><${heading}>${escape(block.title)}</${heading}>${blocks(block.blocks, {objectiveID, section:block.title, level:level + 1})}</section>`;
      if (block.type === 'facts') return block.items.map(item => `<p><strong>${escape(item.label)}</strong>: ${format(item.text, scope)}</p>`).join('');
      if (block.type === 'list') return `<ul>${block.items.map(item => `<li>${format(item, scope)}</li>`).join('')}</ul>`;
      if (block.type === 'heading') return `<${heading}>${escape(block.text)}</${heading}>`;
      if (block.type === 'callout') return `<section><${heading}>${escape(block.title)}</${heading}><p>${escape(block.text)}</p></section>`;
      if (block.type === 'cards') return block.items.map(item => `<section><${heading}>${escape(item.title)}</${heading}>${item.fields.map(([label, text]) => `<p><strong>${escape(label)}</strong>: ${escape(text)}</p>`).join('')}</section>`).join('');
      if (block.type === 'paragraph') return `<p>${format(block.text, scope)}</p>`;
      throw new Error('Unsupported reader content block: ' + block.type);
    }).join('');
  }

  function objectiveSections(page) {
    return page.objectives.map(objective => {
      const ob = page.kind === 'ob';
      const sourceNote = ob && objective.answerSources?.length ? `<section class="note-sources"><h3>Sources for these notes</h3><p>${escape(objective.answerSourceNote)} Reviewed ${escape(objective.answerReviewedOn)}.</p>${references(objective.answerSources)}</section>` : '';
      const pending = ob ? 'Ready for your notes. Write your explanation in your own words; we’ll add it here when you’re ready.' : 'This space is ready for the answer. Study content will be added here.';
      return `<section id="${escape(objective.id)}"><h2>${escape(objective.title)}</h2><p class="objective-prompt">${format(objective.text, ob ? objective.id + '|prompt' : '')}</p>${objective.answer.length ? blocks(objective.answer, {objectiveID:ob ? objective.id : ''}) : `<p>${pending}</p>`}${sourceNote}</section>`;
    }).join('');
  }

  function content(page) {
    if (page.kind === 'med-condition') {
      const condition = page.condition;
      return conditionSections.map(section => `<section id="${escape(section.id)}"><h2>${escape(section.title)}</h2>${condition.content[section.id]?.length ? blocks(condition.content[section.id]) : '<p>Notes for this section are coming soon.</p>'}</section>`).join('')
        + `<section><h2>Clinical corrections &amp; clarifications</h2>${condition.clarifications.map(item => `<section><h3>${escape(item.title)}</h3><p>${escape(item.text)}</p></section>`).join('')}</section>`
        + `<section class="note-sources"><h2>Reading references</h2><p>Clinical sources reviewed ${escape(condition.reviewed)}.</p><p>${escape(condition.reading)}</p>${references(condition.references)}</section>`;
    }
    let result = objectiveSections(page);
    if (page.topic) result += obCourse.sections.filter(section => page.topic.content[section.id]?.length).map(section => `<section><h2>${escape(section.title)}</h2>${blocks(page.topic.content[section.id])}</section>`).join('');
    if (page.week) {
      const week = page.week;
      if (week.reviewNotes?.length) result += `<section><h2>Terms to confirm</h2><ul>${week.reviewNotes.map(text => `<li>${escape(text)}</li>`).join('')}</ul></section>`;
      if (week.assignments?.length) result += `<section><h2>Pre-Lecture Assignments</h2>${blocks(week.assignments)}</section>`;
      if (week.reading?.length) result += `<section class="note-sources"><h2>Reading references</h2>${blocks(week.reading)}${week.sourceReferences?.length ? `<h3>Clinical terminology references</h3>${references(week.sourceReferences)}` : ''}</section>`;
    }
    return result;
  }

  function documentFor(page) {
    const back = escape(root + page.route);
    const title = escape(page.title);
    return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#245644">
  <meta name="description" content="${title} — continuous study notes from Project Green Light.">
  <meta name="robots" content="noindex,follow">
  <title>${title} · Reader view · Project Green Light</title>
  <link rel="canonical" href="${escape(base + page.path)}">
  <link rel="icon" href="../../favicon.svg">
  <link rel="stylesheet" href="../../study-reader.css?v=20261121-ios-reader">
</head>
<body>
  <a class="skip-link" href="#study-article">Skip to notes</a>
  <header class="reader-tools">
    <nav aria-label="Study page"><a class="reader-back" href="${back}">Back to study page</a></nav>
    <details class="reader-help"><summary>Reading &amp; listening on iPhone</summary><p>In Safari, open the Page menu beside the address bar and choose <strong>Show Reader</strong> or <strong>Listen to Page</strong> when available. Safari controls availability. You can read all the notes below even when those options are unavailable.</p><p><a href="https://support.apple.com/en-gb/guide/iphone/iph449fc616c/ios">Apple’s Listen to Page guide</a> · <a href="https://support.apple.com/en-gb/guide/iphone/iphdc30e3b86/ios">Apple’s Reader guide</a></p><p>You can also use iPhone’s <a href="https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios">Speak Screen accessibility feature</a> to hear the text.</p></details>
  </header>
  <main id="study-article" tabindex="-1"><article aria-labelledby="reader-title">
    <header><p class="reader-context">${escape(page.context)}</p><h1 id="reader-title">${title}</h1></header>
    ${content(page)}
  </article></main>
  <footer><a class="reader-back" href="${back}">Back to study page</a><p>Project Green Light</p></footer>
</body>
</html>
`;
  }

  return {pages, link, documentFor};
})();
