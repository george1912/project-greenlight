/* Player URLs are constructed from validated IDs, never supplied HTML. */
const VideoLibrary = (() => {
  const available = topic => videoResources.filter(v => !v.pending && (!topic || v.topic === topic));
  function card(v, index) {
    return `<article class="video-card" data-platform="${v.platform}" data-search="${escapeHTML(`${v.title} ${v.creator} ${v.description}`.toLowerCase())}">
      <div class="video-meta">${v.platform}${v.duration ? ` · ${escapeHTML(v.duration)}` : ''}</div>
      <h3>${escapeHTML(v.title)}</h3><p class="video-creator">${escapeHTML(v.creator)}</p><p>${escapeHTML(v.description)}</p>
      <div class="video-slot" data-video-index="${index}"><button class="video-load" type="button">Watch here <span class="sr-only">${escapeHTML(v.title)}</span><span aria-hidden="true"> ▷</span></button></div>
      <a class="video-source" href="${escapeHTML(v.url)}" target="_blank" rel="noopener noreferrer">Open on ${v.platform} ↗</a>
    </article>`;
  }
  function section(topic) {
    const items = available(topic);
    const platforms = ['YouTube', 'TikTok'];
    const selected = platforms.find(platform => items.some(v => v.platform === platform)) || 'YouTube';
    const controls = topic ? `<div class="video-platform-buttons" role="group" aria-label="Video platform">${platforms.map(platform => `<button type="button" data-video-platform-button="${platform}" aria-pressed="${platform === selected}">${platform} <span>(${items.filter(v => v.platform === platform).length})</span></button>`).join('')}</div>` : `<div class="video-filters"><label>Search videos<input type="search" data-video-search placeholder="Title, creator, or keyword"></label><label>Platform<select data-video-platform><option value="">All platforms</option><option>YouTube</option><option>TikTok</option></select></label></div>`;
    const content = `<section class="video-resources${topic ? ' video-resources-inline' : ''}" ${topic ? 'aria-label="Topic videos"' : 'aria-labelledby="video-resources-title"'}>${topic ? '' : `<div class="section-heading"><h2 id="video-resources-title">Video resources</h2><span>${items.length} videos</span></div>`}
      <p class="section-copy">Watch here, at your own pace. Players load when you choose a video. If a player is unavailable, use its source link.</p>
      <p class="video-context">Creator videos supplement your course materials. Descriptions are supplied resource summaries; coverage and accuracy may vary.</p>
      ${controls}
      <p class="video-results" role="status" aria-live="polite"></p>
      <div class="video-groups">${examTopics.filter(t => (!topic || t.number === topic) && available(t.number).length).map(t => `<section class="video-topic" data-video-topic>${topic ? '' : `<h3>${escapeHTML(t.title)}</h3>`}<p class="section-copy">${escapeHTML(videoResources.find(v => v.topic === t.number && v.highlights)?.highlights || '')}</p><div class="video-grid">${items.filter(v => v.topic === t.number).map(v => card(v,videoResources.indexOf(v))).join('')}</div></section>`).join('')}</div>
      <p class="video-no-results" hidden>No videos match. Try another ${topic ? 'platform' : 'keyword or platform'}.</p></section>`;
    return topic ? `<details class="condition-section condition-video-section" id="condition-videos"><summary><span class="objective-number" aria-hidden="true">17</span><h2 id="video-resources-title">Video resources</h2><span class="expand-icon" aria-hidden="true"></span></summary><div class="condition-body">${content}</div></details>` : content;
  }
  function mount(root) {
    const host = root.querySelector('.video-resources'); if (!host) return;
    const search = host.querySelector('[data-video-search]'), platform = host.querySelector('[data-video-platform]');
    const platformButtons = [...host.querySelectorAll('[data-video-platform-button]')];
    let selectedPlatform = platformButtons.find(button => button.getAttribute('aria-pressed') === 'true')?.dataset.videoPlatformButton || '';
    const reset = slot => { const v = videoResources[Number(slot.dataset.videoIndex)]; slot.classList.remove('video-slot-active','video-slot-vertical'); slot.innerHTML = `<button class="video-load" type="button">Watch here <span class="sr-only">${escapeHTML(v.title)}</span><span aria-hidden="true"> ▷</span></button>`; };
    function filter() {
      const query = search?.value.trim().toLowerCase() || '';
      const chosenPlatform = platform ? platform.value : selectedPlatform; let count = 0;
      host.querySelectorAll('.video-card').forEach(card => {
        card.hidden = Boolean((chosenPlatform && card.dataset.platform !== chosenPlatform) || (query && !card.dataset.search.includes(query)));
        if (!card.hidden) count++;
        else { const slot = card.querySelector('.video-slot'); if (slot.querySelector('iframe')) reset(slot); }
      });
      host.querySelectorAll('[data-video-topic]').forEach(group => { group.hidden = !Array.from(group.querySelectorAll('.video-card')).some(c => !c.hidden); });
      host.querySelector('.video-results').textContent = `${count} ${count === 1 ? 'video' : 'videos'} shown`;
      host.querySelector('.video-no-results').hidden = count > 0;
    }
    search?.addEventListener('input',filter); platform?.addEventListener('change',filter);
    platformButtons.forEach(button => button.addEventListener('click', () => {
      selectedPlatform = button.dataset.videoPlatformButton;
      platformButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      filter();
    }));
    const disclosure = host.closest('.condition-video-section');
    disclosure?.addEventListener('toggle', () => {
      if (!disclosure.open) host.querySelectorAll('.video-slot:has(iframe)').forEach(reset);
    });
    filter();
    host.addEventListener('click', e => {
      const button = e.target.closest('.video-load, .video-close'); if (!button) return;
      const slot = button.closest('.video-slot');
      if (button.classList.contains('video-close')) { reset(slot); slot.querySelector('button').focus(); return; }
      host.querySelectorAll('.video-slot:has(iframe)').forEach(reset);
      const v = videoResources[Number(slot.dataset.videoIndex)];
      const youtube = v.platform === 'YouTube';
      if (!(youtube ? /^[\w-]{11}$/ : /^\d+$/).test(v.id)) return;
      const iframe = document.createElement('iframe');
      iframe.src = youtube ? `https://www.youtube-nocookie.com/embed/${v.id}?playsinline=1&autoplay=0&rel=0` : `https://www.tiktok.com/player/v1/${v.id}?autoplay=0&rel=0&description=1&closed_caption=1`;
      iframe.title = `${v.platform}: ${v.title}`; iframe.allow = 'fullscreen; encrypted-media; picture-in-picture'; iframe.allowFullscreen = true; iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      slot.classList.add('video-slot-active'); slot.classList.toggle('video-slot-vertical', !youtube);
      slot.replaceChildren(iframe); slot.insertAdjacentHTML('beforeend','<button class="video-close" type="button">Close player</button>');
      iframe.focus();
    });
  }
  return { section, mount, available };
})();
