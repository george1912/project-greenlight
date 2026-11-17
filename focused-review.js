/* Two focused editions and one combined guide, with notes kept on the page. */
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
  function guide(data, prefix, name, label) {
    return `<section class="focused-guide-view" data-focused-view="${name}" aria-label="${label}" ${name === 'combined' ? '' : 'hidden'}>
      <p class="focused-guide-name">${label}</p>
      ${data.intro ? `<p class="section-copy">${escapeHTML(data.intro)}</p>` : ''}
      <div class="focused-review-tools"><div class="focused-review-picker"><label for="${prefix}-topic">Jump to a topic</label><select id="${prefix}-topic" data-focused-picker><option value="">Choose a topic…</option>${data.sections.map(item => `<option value="${item.id}">${escapeHTML(item.title)}</option>`).join('')}${data.recall ? '<option value="recall">Quick recall</option>' : ''}</select></div><div class="condition-disclosures" role="group" aria-label="${label} controls"><button type="button" data-focused-action="expand">Expand all</button><button type="button" data-focused-action="collapse">Collapse all</button></div></div>
      <div class="focused-review-sections">${data.sections.map((item, index) => `<details class="condition-section focused-topic" id="${prefix}-${item.id}" data-focused-topic="${item.id}" ${index === 0 ? 'open' : ''}><summary><span class="objective-number" aria-hidden="true">${String(item.number).padStart(2, '0')}</span><h2>${escapeHTML(item.title)}</h2><span class="expand-icon" aria-hidden="true"></span></summary><div class="condition-body">${blocks(item.blocks)}${deeper(item)}</div></details>`).join('')}
      ${data.recall ? `<details class="condition-section focused-topic" id="${prefix}-recall" data-focused-topic="recall"><summary><h2>Quick recall</h2><span class="expand-icon" aria-hidden="true"></span></summary><div class="condition-body">${blocks([{type:'table',columns:['Topic','Remember'],rows:data.recall}])}</div></details>` : ''}</div>
      </section>`;
  }
  function section() {
    return `<section class="focused-review"><div class="focused-review-intro"><p class="quiz-thanks">Special thanks to Kristeen and Olivia.</p><p>Choose a focused guide or read the combined guide with all the study points in one place.</p></div>
      <div class="focused-guide-switch" role="group" aria-label="Choose a focused guide"><button type="button" data-focused-guide="one" aria-pressed="false" aria-controls="focused-one-view">Focus guide one</button><button type="button" data-focused-guide="two" aria-pressed="false" aria-controls="focused-two-view">Focus guide two</button><button type="button" data-focused-guide="combined" aria-pressed="true" aria-controls="focused-combined-view">Combined guide</button></div>
      <div id="focused-one-view">${guide(focusedReviewData,'focused','one','Focus guide one')}</div><div id="focused-two-view">${guide(oliviaFocusedReviewData,'olivia-focused','two','Focus guide two')}</div><div id="focused-combined-view">${guide(combinedFocusedReviewData,'combined-focused','combined','Combined guide')}</div></section>`;
  }
  function mount(root) {
    const host = root.querySelector('.focused-review'); if (!host) return () => {};
    function change(event) {
      const picker = event.target;
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
