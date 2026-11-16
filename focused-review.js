/* A readable, condition-by-condition edition of the contributed focused review. */
const FocusedReview = (() => {
  function inline(text) {
    const match = String(text).match(/^([^:]{1,75}):\s+(.+)$/s);
    return match ? `<strong>${escapeHTML(match[1])}:</strong> ${escapeHTML(match[2])}` : escapeHTML(text);
  }
  function blocks(items) {
    return items.map(block => {
      if (block.type === 'heading') return `<h3>${escapeHTML(block.text)}</h3>`;
      if (block.type === 'list') return `<ul>${block.items.map(item => `<li>${inline(item)}</li>`).join('')}</ul>`;
      if (block.type === 'table') return `<div class="focused-table-wrap"><table class="focused-table"><thead><tr>${block.columns.map(column => `<th scope="col">${escapeHTML(column)}</th>`).join('')}</tr></thead><tbody>${block.rows.map(row => `<tr>${row.map((cell, index) => index === 0 ? `<th scope="row">${escapeHTML(cell)}</th>` : `<td>${escapeHTML(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
      return `<p>${inline(block.text)}</p>`;
    }).join('');
  }
  function section() {
    const data = focusedReviewData;
    return `<section class="focused-review"><div class="focused-review-intro"><p class="quiz-thanks">Special thanks to Kristeen.</p><p>A focused review guide covering the topics provided in the final exam study guide.</p></div><div class="focused-review-tools"><div class="focused-review-picker"><label for="focused-review-topic">Jump to a topic</label><select id="focused-review-topic"><option value="">Choose a topic…</option>${data.sections.map(item => `<option value="${item.id}">${escapeHTML(item.title)}</option>`).join('')}<option value="recall">Quick recall</option></select></div><div class="condition-disclosures" role="group" aria-label="Focused review controls"><button type="button" data-focused-action="expand">Expand all</button><button type="button" data-focused-action="collapse">Collapse all</button></div></div><div class="focused-review-sections">${data.sections.map((item, index) => {
      const topic = examTopics.find(topic => topic.id === item.id);
      const href = topic ? `#/final/condition/${item.id}` : `#/final/presentation/${item.id}`;
      return `<details class="condition-section focused-topic" id="focused-${item.id}" ${index === 0 ? 'open' : ''}><summary><span class="objective-number" aria-hidden="true">${String(item.number).padStart(2, '0')}</span><h2>${escapeHTML(item.title)}</h2><span class="expand-icon" aria-hidden="true"></span></summary><div class="condition-body">${blocks(item.blocks)}<p class="focused-deeper"><a class="text-link" href="${href}">${topic ? 'Open full study notes' : 'View presentation'} →</a></p></div></details>`;
    }).join('')}<details class="condition-section focused-topic" id="focused-recall"><summary><h2>Quick recall</h2><span class="expand-icon" aria-hidden="true"></span></summary><div class="condition-body">${blocks([{type:'table',columns:['Topic','Remember'],rows:data.recall}])}</div></details></div><details class="condition-clarifications"><summary>Clinical corrections & clarifications</summary><p>The guide’s focused points are preserved, with necessary clinical corrections incorporated above.</p>${data.clarifications.map(item => `<section><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.text)}</p></section>`).join('')}</details><section class="reading-references condition-references" aria-labelledby="focused-reading-title"><h2 id="focused-reading-title">Reading references</h2><p>Source guide: <a href="${data.source}" target="_blank" rel="noopener noreferrer">Mini MS3 Final Exam Study Guide ↗</a>. The original PDF is preserved; use the clarifications on this page when comparing it with the original.</p><p class="reference-review-date">Clinical sources reviewed ${escapeHTML(data.reviewed)}.</p><details class="focused-reference-links"><summary>Clinical reference links</summary><ol>${data.references.map(ref => `<li><a href="${escapeHTML(ref.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(ref.title)} ↗</a></li>`).join('')}</ol></details></section></section>`;
  }
  function mount(root) {
    const host = root.querySelector('.focused-review'); if (!host) return () => {};
    const picker = host.querySelector('#focused-review-topic');
    function jump() {
      if (!picker.value) return;
      const target = host.querySelector(`#focused-${picker.value}`); if (!target) return;
      target.open = true; target.querySelector('summary').focus({preventScroll:true}); target.scrollIntoView({block:'start'});
    }
    function controls(event) {
      const button = event.target.closest('[data-focused-action]'); if (!button) return;
      host.querySelectorAll('.focused-topic').forEach(panel => { panel.open = button.dataset.focusedAction === 'expand'; });
    }
    picker.addEventListener('change', jump); host.addEventListener('click', controls);
    return () => { picker.removeEventListener('change', jump); host.removeEventListener('click', controls); };
  }
  return {section, mount};
})();
