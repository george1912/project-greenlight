/* Two contributed guides remain distinct, with a topic-by-topic comparison. */
const FocusedReview = (() => {
  function inline(text) {
    const match = String(text).match(/^([^:]{1,75}):\s+(.+)$/s);
    return match ? `<strong>${escapeHTML(match[1])}:</strong> ${escapeHTML(match[2])}` : escapeHTML(text);
  }
  function blocks(items, level = 3) {
    return items.map(block => {
      if (block.type === 'heading') return `<h${level}>${escapeHTML(block.text)}</h${level}>`;
      if (block.type === 'list') return `<ul>${block.items.map(item => `<li>${inline(item)}</li>`).join('')}</ul>`;
      if (block.type === 'table') return `<div class="focused-table-wrap"><table class="focused-table"><thead><tr>${block.columns.map(column => `<th scope="col">${escapeHTML(column)}</th>`).join('')}</tr></thead><tbody>${block.rows.map(row => `<tr>${row.map((cell, index) => index === 0 ? `<th scope="row">${escapeHTML(cell)}</th>` : `<td>${escapeHTML(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
      return `<p>${inline(block.text)}</p>`;
    }).join('');
  }
  function deeper(item) {
    const topic = examTopics.find(topic => topic.id === item.id);
    const href = topic ? `#/final/condition/${item.id}` : `#/final/presentation/${item.id}`;
    return `<p class="focused-deeper"><a class="text-link" href="${href}">${topic ? 'Open full study notes' : 'View presentation'} →</a></p>`;
  }
  function guide(data, prefix, name) {
    return `<section class="focused-guide-view" data-focused-view="${name}" aria-label="${name === 'kristeen' ? 'Kristeen’s focused guide' : 'Olivia’s quick guide'}" ${name === 'kristeen' ? '' : 'hidden'}>
      <p class="focused-guide-name">${name === 'kristeen' ? 'Kristeen’s focused guide' : 'Olivia’s quick guide'}</p>
      ${data.intro ? `<p class="section-copy">${escapeHTML(data.intro)}</p>` : ''}
      <div class="focused-review-tools"><div class="focused-review-picker"><label for="${prefix}-topic">Jump to a topic</label><select id="${prefix}-topic" data-focused-picker><option value="">Choose a topic…</option>${data.sections.map(item => `<option value="${item.id}">${escapeHTML(item.title)}</option>`).join('')}${data.recall ? '<option value="recall">Quick recall</option>' : ''}</select></div><div class="condition-disclosures" role="group" aria-label="${name === 'kristeen' ? 'Kristeen' : 'Olivia'} guide controls"><button type="button" data-focused-action="expand">Expand all</button><button type="button" data-focused-action="collapse">Collapse all</button></div></div>
      <div class="focused-review-sections">${data.sections.map((item, index) => `<details class="condition-section focused-topic" id="${prefix}-${item.id}" data-focused-topic="${item.id}" ${index === 0 ? 'open' : ''}><summary><span class="objective-number" aria-hidden="true">${String(item.number).padStart(2, '0')}</span><h2>${escapeHTML(item.title)}</h2><span class="expand-icon" aria-hidden="true"></span></summary><div class="condition-body">${blocks(item.blocks)}${deeper(item)}</div></details>`).join('')}
      ${data.recall ? `<details class="condition-section focused-topic" id="${prefix}-recall" data-focused-topic="recall"><summary><h2>Quick recall</h2><span class="expand-icon" aria-hidden="true"></span></summary><div class="condition-body">${blocks([{type:'table',columns:['Topic','Remember'],rows:data.recall}])}</div></details>` : ''}</div>
      ${data.examNote ? `<p class="section-copy focused-source-note">Source note: ${escapeHTML(data.examNote)}</p>` : ''}</section>`;
  }
  function comparison(id) {
    const left = focusedReviewData.sections.find(item => item.id === id);
    const right = oliviaFocusedReviewData.sections.find(item => item.id === id);
    if (!left || !right) return '';
    return `<h2 id="focused-compare-heading">${escapeHTML(left.title)}</h2><div class="focused-comparison-grid">${[[left,'Kristeen'],[right,'Olivia']].map(([item, name]) => `<section class="focused-comparison-column" aria-label="${name} on ${escapeHTML(left.title)}"><h3>${name}’s guide</h3><div class="condition-body">${blocks(item.blocks, 4)}</div></section>`).join('')}</div>${deeper(left)}`;
  }
  function references(data, name) {
    return `<details class="focused-reference-links"><summary>${name}’s guide · clinical references</summary><ol>${data.references.map(ref => `<li><a href="${escapeHTML(ref.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(ref.title)} ↗</a></li>`).join('')}</ol></details>`;
  }
  function section() {
    const common = focusedReviewData.sections.filter(item => oliviaFocusedReviewData.sections.some(other => other.id === item.id));
    return `<section class="focused-review"><div class="focused-review-intro"><p class="quiz-thanks">Special thanks to Kristeen and Olivia.</p><p>Two focused review guides covering the topics provided in the final exam study guide. Read either guide or compare one topic at a time.</p></div>
      <div class="focused-guide-switch" role="group" aria-label="Choose a focused guide"><button type="button" data-focused-guide="kristeen" aria-pressed="true" aria-controls="focused-kristeen-view">Kristeen’s guide</button><button type="button" data-focused-guide="olivia" aria-pressed="false" aria-controls="focused-olivia-view">Olivia’s guide</button><button type="button" data-focused-guide="compare" aria-pressed="false" aria-controls="focused-compare-view">Compare guides</button></div>
      <div id="focused-kristeen-view">${guide(focusedReviewData,'focused','kristeen')}</div><div id="focused-olivia-view">${guide(oliviaFocusedReviewData,'olivia-focused','olivia')}</div>
      <section class="focused-guide-view" id="focused-compare-view" data-focused-view="compare" aria-label="Compare focused guides" hidden><div class="focused-review-tools"><div class="focused-review-picker"><label for="focused-compare-topic">Compare a topic</label><select id="focused-compare-topic">${common.map(item => `<option value="${item.id}">${escapeHTML(item.title)}</option>`).join('')}</select></div></div><p class="section-copy">Compare the 14 shared topics. Kristeen’s guide also includes lupus, osteomyelitis, and quick recall.</p><div class="focused-comparison" aria-live="polite">${comparison(common[0].id)}</div></section>
      <details class="condition-clarifications"><summary>Clinical corrections & clarifications</summary><p>Both web editions preserve the contributed focus points with necessary clinical corrections incorporated. Original source files below retain their supplied wording.</p>${[[focusedReviewData,'Kristeen'],[oliviaFocusedReviewData,'Olivia']].map(([data,name]) => `<section class="focused-correction-group"><h3>${name}’s guide</h3>${data.clarifications.map(item => `<section><h4>${escapeHTML(item.title)}</h4><p>${escapeHTML(item.text)}</p></section>`).join('')}</section>`).join('')}</details>
      <section class="reading-references condition-references" aria-labelledby="focused-reading-title"><h2 id="focused-reading-title">Reading references</h2><ul><li>Kristeen’s source: <a href="${focusedReviewData.source}" target="_blank" rel="noopener noreferrer">Mini MS3 Final Exam Study Guide ↗</a></li><li>Olivia’s source: <a href="${oliviaFocusedReviewData.source}" target="_blank" rel="noopener noreferrer">Final Exam Study Guide ↗</a> (PDF edition of the supplied Word document)</li></ul><p>Use the corrected web editions and the clarifications above when comparing the original guides.</p><p class="reference-review-date">Clinical sources reviewed ${escapeHTML(oliviaFocusedReviewData.reviewed)}.</p>${references(focusedReviewData,'Kristeen')}${references(oliviaFocusedReviewData,'Olivia')}</section></section>`;
  }
  function mount(root) {
    const host = root.querySelector('.focused-review'); if (!host) return () => {};
    function change(event) {
      const picker = event.target;
      if (picker.id === 'focused-compare-topic') {
        const html = comparison(picker.value);
        if (html) host.querySelector('.focused-comparison').innerHTML = html;
        return;
      }
      if (!picker.matches('[data-focused-picker]') || !picker.value) return;
      const view = picker.closest('[data-focused-view]');
      const target = [...view.querySelectorAll('[data-focused-topic]')].find(panel => panel.dataset.focusedTopic === picker.value);
      if (!target) return;
      target.open = true; target.querySelector('summary').focus({preventScroll:true}); target.scrollIntoView({block:'start'});
    }
    function controls(event) {
      const mode = event.target.closest('[data-focused-guide]');
      if (mode) {
        host.querySelectorAll('[data-focused-view]').forEach(view => { view.hidden = view.dataset.focusedView !== mode.dataset.focusedGuide; });
        host.querySelectorAll('[data-focused-guide]').forEach(button => button.setAttribute('aria-pressed', String(button === mode)));
        return;
      }
      const button = event.target.closest('[data-focused-action]'); if (!button) return;
      button.closest('[data-focused-view]').querySelectorAll('.focused-topic').forEach(panel => { panel.open = button.dataset.focusedAction === 'expand'; });
    }
    host.addEventListener('change', change); host.addEventListener('click', controls);
    return () => { host.removeEventListener('change', change); host.removeEventListener('click', controls); };
  }
  return {section, mount};
})();
