/* Player URLs are constructed from validated IDs, never supplied HTML. */
const VideoLibrary = (() => {
  const available = topic => videoResources.filter(v => !v.pending && (!topic || v.topic === topic));
  let youtubeAPI;
  function loadYouTubeAPI() {
    if (window.YT?.Player) return Promise.resolve(window.YT);
    if (!youtubeAPI) youtubeAPI = new Promise((resolve, reject) => {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => { previous?.(); resolve(window.YT); };
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api'; script.async = true;
      script.onerror = () => { youtubeAPI = null; script.remove(); reject(new Error('Player API unavailable')); };
      document.head.append(script);
    });
    return youtubeAPI;
  }
  function preview(v) {
    const youtube = v.platform === 'YouTube';
    return `<button class="video-load video-preview ${youtube ? 'video-preview-youtube' : 'video-preview-tiktok'}" type="button" aria-label="Watch here ${escapeHTML(v.title)}">
      <span class="video-preview-fallback"><span>${v.platform}</span><strong>${escapeHTML(v.title)}</strong><small>${escapeHTML(v.creator)}</small></span>
      ${youtube ? `<img class="video-thumbnail" data-src="https://i.ytimg.com/vi/${v.id}/mqdefault.jpg" width="320" height="180" loading="lazy" decoding="async" alt="">` : ''}
      <span class="video-preview-action"><span aria-hidden="true">▷</span> Watch here${v.duration ? ` · ${escapeHTML(v.duration)}` : ''}</span>
    </button>`;
  }
  function card(v, index) {
    return `<article class="video-card" data-platform="${v.platform}" data-search="${escapeHTML(`${v.title} ${v.creator} ${v.description}`.toLowerCase())}">
      <div class="video-slot" data-video-index="${index}">${preview(v)}</div>
      <div class="video-meta">${v.platform}${v.duration ? ` · ${escapeHTML(v.duration)}` : ''}</div>
      <h3>${escapeHTML(v.title)}</h3><p class="video-creator">${escapeHTML(v.creator)}</p><p>${escapeHTML(v.description)}</p>
      <a class="video-source" href="${escapeHTML(v.url)}" target="_blank" rel="noopener noreferrer">Open on ${v.platform} ↗</a>
    </article>`;
  }
  function section(topic) {
    const items = available(topic);
    const platforms = ['YouTube', 'TikTok'];
    const selected = platforms.find(platform => items.some(v => v.platform === platform)) || 'YouTube';
    const controls = topic ? `<div class="video-platform-buttons" role="group" aria-label="Video platform">${platforms.map(platform => `<button type="button" data-video-platform-button="${platform}" aria-pressed="${platform === selected}">${platform} <span>(${items.filter(v => v.platform === platform).length})</span></button>`).join('')}</div>` : `<div class="video-filters"><label>Search videos<input type="search" data-video-search placeholder="Title, creator, or keyword"></label><label>Platform<select data-video-platform><option value="">All platforms</option><option>YouTube</option><option>TikTok</option></select></label></div>`;
    const content = `<section class="video-resources${topic ? ' video-resources-inline' : ''}" ${topic ? 'aria-label="Topic videos"' : 'aria-labelledby="video-resources-title"'}>${topic ? '' : `<div class="section-heading"><h2 id="video-resources-title">Video resources</h2><span>${items.length} videos</span></div>`}
      <p class="quiz-thanks">Special thanks to Jamie.</p>
      <p class="section-copy">Watch here, at your own pace. Players load when you choose a video. If a player is unavailable, use its source link.</p>
      <p class="video-context">Creator videos supplement your course materials. Descriptions are supplied resource summaries; coverage and accuracy may vary.</p>
      ${controls}
      <p class="video-results" role="status" aria-live="polite"></p>
      <div class="video-groups">${examTopics.filter(t => (!topic || t.number === topic) && available(t.number).length).map(t => `<section class="video-topic" data-video-topic>${topic ? '' : `<h3>${escapeHTML(t.title)}</h3>`}<p class="section-copy">${escapeHTML(videoResources.find(v => v.topic === t.number && v.highlights)?.highlights || '')}</p><div class="video-grid">${items.filter(v => v.topic === t.number).map(v => card(v,videoResources.indexOf(v))).join('')}</div></section>`).join('')}</div>
      <p class="video-no-results" hidden>No videos match. Try another ${topic ? 'platform' : 'keyword or platform'}.</p></section>`;
    return topic ? `<details class="condition-section condition-video-section" id="condition-videos"><summary><span class="objective-number" aria-hidden="true">17</span><h2 id="video-resources-title">Video resources</h2><span class="expand-icon" aria-hidden="true"></span></summary><div class="condition-body">${content}</div></details>` : content;
  }
  function mount(root) {
    const host = root.querySelector('.video-resources'); if (!host) return () => {};
    let active = null;
    const search = host.querySelector('[data-video-search]'), platform = host.querySelector('[data-video-platform]');
    const platformButtons = [...host.querySelectorAll('[data-video-platform-button]')];
    let selectedPlatform = platformButtons.find(button => button.getAttribute('aria-pressed') === 'true')?.dataset.videoPlatformButton || '';
    const thumbnailObserver = typeof IntersectionObserver === 'function' ? new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { loadThumbnail(entry.target); thumbnailObserver.unobserve(entry.target); } });
    }, { rootMargin: '150px' }) : null;
    function loadThumbnail(img) {
      if (!img.dataset.src) return;
      img.addEventListener('error', () => { img.hidden = true; }, { once: true });
      img.src = img.dataset.src; delete img.dataset.src;
    }
    function thumbnails() {
      host.querySelectorAll('img[data-src]').forEach(img => {
        if (thumbnailObserver) thumbnailObserver.observe(img);
        else if (!img.closest('.video-card').hidden && (!disclosure || disclosure.open)) loadThumbnail(img);
      });
    }
    function stop() {
      if (!active) return;
      clearTimeout(active.timer);
      window.removeEventListener('message', active.message);
      window.removeEventListener('offline', active.offline);
      const previousPlayer = active.player;
      active = null;
      previousPlayer?.destroy();
    }
    const reset = slot => {
      if (active?.slot === slot) stop();
      const v = videoResources[Number(slot.dataset.videoIndex)];
      slot.classList.remove('video-slot-active','video-slot-vertical');
      slot.innerHTML = preview(v); thumbnails();
    };
    function filter() {
      const query = search?.value.trim().toLowerCase() || '';
      const chosenPlatform = platform ? platform.value : selectedPlatform; let count = 0;
      host.querySelectorAll('.video-card').forEach(card => {
        card.hidden = Boolean((chosenPlatform && card.dataset.platform !== chosenPlatform) || (query && !card.dataset.search.includes(query)));
        if (!card.hidden) count++;
        else { const slot = card.querySelector('.video-slot'); if (slot.classList.contains('video-slot-active')) reset(slot); }
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
      if (!disclosure.open && active) reset(active.slot);
      else thumbnails();
    });
    filter(); thumbnails();
    host.addEventListener('click', e => {
      const button = e.target.closest('.video-load, .video-close, .video-retry'); if (!button) return;
      const slot = button.closest('.video-slot');
      if (button.classList.contains('video-close')) { reset(slot); slot.querySelector('button').focus(); return; }
      if (active) reset(active.slot);
      const v = videoResources[Number(slot.dataset.videoIndex)];
      const youtube = v.platform === 'YouTube';
      if (!(youtube ? /^[\w-]{11}$/ : /^\d+$/).test(v.id)) return;
      slot.classList.add('video-slot-active');
      slot.innerHTML = `<div class="video-stage">${preview(v)}<div class="video-frame-mount"></div><div class="video-loading" role="status"><span class="video-spinner" aria-hidden="true"></span>Loading ${v.platform} player…</div></div><div class="video-player-help"><p class="video-connection-message" role="status">Connecting… On a slow connection this may take a moment.</p><button class="video-retry" type="button" hidden>Try again</button><button class="video-close" type="button">Close player</button></div>`;
      // Keep the lightweight poster visible until the provider reports ready.
      const poster = slot.querySelector('.video-preview'); poster.disabled = true;
      const frameMount = slot.querySelector('.video-frame-mount');
      const connection = slot.querySelector('.video-connection-message');
      const attempt = {slot, timer:null, player:null, message:()=>{}, offline:()=>{}};
      active = attempt;
      const current = () => active === attempt && slot.isConnected;
      function fail(message) {
        if (!current()) return;
        stop(); frameMount.replaceChildren();
        slot.querySelector('.video-loading').hidden = true;
        slot.querySelector('.video-retry').hidden = false;
        connection.textContent = message;
      }
      function ready() {
        if (!current()) return;
        clearTimeout(attempt.timer);
        slot.querySelector('.video-stage').classList.add('video-stage-ready');
        slot.querySelector('.video-loading').hidden = true;
        connection.textContent = 'Player ready. Press play to watch here.';
      }
      attempt.offline = () => fail('You’re offline. Your video details are still here. Try again when your connection returns.');
      window.addEventListener('offline', attempt.offline);
      attempt.timer = setTimeout(() => fail('The player is taking too long to load. Check your connection and try again, or use the source link below.'), 15000);
      if (navigator.onLine === false) { attempt.offline(); return; }
      const iframe = document.createElement('iframe');
      iframe.title = `${v.platform}: ${v.title}`;
      iframe.allow = 'fullscreen; encrypted-media; picture-in-picture'; iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      iframe.addEventListener('error', () => fail('The player couldn’t load. Try again or use the source link below.'));
      if (youtube) {
        const params = new URLSearchParams({playsinline:'1',autoplay:'0',rel:'0',enablejsapi:'1',origin:location.origin});
        iframe.src = `https://www.youtube-nocookie.com/embed/${v.id}?${params}`;
        frameMount.append(iframe);
        loadYouTubeAPI().then(YT => {
          if (!current()) return;
          attempt.player = new YT.Player(iframe, {events:{onReady:ready,onError:() => fail('This video can’t play here right now. Try again or use the source link below.')}});
        }).catch(() => fail('The player couldn’t connect. Try again or use the source link below.'));
      } else {
        slot.classList.add('video-slot-vertical');
        iframe.src = `https://www.tiktok.com/player/v1/${v.id}?autoplay=0&rel=0&description=1&closed_caption=1`;
        attempt.message = event => {
          if (!current() || event.origin !== 'https://www.tiktok.com' || event.source !== iframe.contentWindow || event.data?.['x-tiktok-player'] !== true) return;
          if (event.data.type === 'onPlayerReady') ready();
          if (['onPlayerError','onError'].includes(event.data.type)) fail('This video can’t play here right now. Try again or use the source link below.');
        };
        window.addEventListener('message', attempt.message);
        frameMount.append(iframe);
      }
      thumbnails();

    });
    return () => { stop(); thumbnailObserver?.disconnect(); };
  }
  return { section, mount, available, loadYouTubeAPI };
})();
