/* Listening controls use the official, visible YouTube player. No media is extracted. */
const PodcastPlayer = (() => {
  const episode = {
    id: '7pSK_zxd2WU', title: 'MS3 Final Examination Study Guide',
    creator: 'Next Stop Nursing', url: 'https://www.youtube.com/watch?v=7pSK_zxd2WU',
    duration: 4909
  };
  function time(seconds) {
    const n = Math.max(0, Math.floor(Number(seconds) || 0));
    const hours = Math.floor(n / 3600), minutes = Math.floor(n % 3600 / 60);
    return `${hours ? hours + ':' + String(minutes).padStart(2, '0') : minutes}:${String(n % 60).padStart(2, '0')}`;
  }
  function section() {
    return `<section class="podcast-window" aria-labelledby="podcast-title">
      <div class="window-bar"><span>PRESS PLAY / STUDY AT YOUR PACE</span><span aria-hidden="true">♫</span></div>
      <div class="podcast-content"><p class="podcast-thanks">Special thanks to Alessia.</p><h2 id="podcast-title">${escapeHTML(episode.title)}</h2><p class="podcast-credit">${escapeHTML(episode.creator)} · YouTube · ${time(episode.duration)}</p>
        <div class="podcast-stage" data-podcast-stage><div class="podcast-cover"><svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true"><path d="M10 36V28a22 22 0 0 1 44 0v8M10 32H6v20h12V32h-8m44 0h4v20H46V32h8" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="miter"/></svg><span>Listen. Pause. Review.</span><small>Press play to load the podcast.</small></div></div>
        <div class="podcast-controls" role="group" aria-label="Podcast playback controls">
          <div class="podcast-transport"><button type="button" data-podcast-action="back" aria-label="Back 10 seconds" disabled><span aria-hidden="true">↶</span><span>10 sec</span></button><button type="button" class="podcast-play" data-podcast-action="toggle" aria-label="Play podcast"><span data-podcast-play-label>▶ Play</span></button><button type="button" data-podcast-action="forward" aria-label="Forward 10 seconds" disabled><span aria-hidden="true">↷</span><span>10 sec</span></button></div>
          <label class="sr-only" for="podcast-position">Podcast position</label><input id="podcast-position" class="podcast-position" type="range" min="0" max="${episode.duration}" step="1" value="0" aria-valuetext="0:00 of ${time(episode.duration)}" disabled>
          <div class="podcast-details"><div class="podcast-time" aria-label="Playback time"><span data-podcast-elapsed>0:00</span><span aria-hidden="true"> / </span><span data-podcast-duration>${time(episode.duration)}</span></div><label class="podcast-speed">Speed<select data-podcast-speed disabled aria-label="Playback speed"><option value="0.75">0.75×</option><option value="1" selected>1×</option><option value="1.25">1.25×</option><option value="1.5">1.5×</option><option value="2">2×</option></select></label></div>
        </div>
        <p class="podcast-status" role="status" aria-live="polite">Ready when you are.</p><p class="podcast-source"><a class="text-link" href="${episode.url}" target="_blank" rel="noopener noreferrer">Open on YouTube ↗</a></p>
      </div></section>`;
  }
  function mount(root) {
    const host = root.querySelector('.podcast-window'); if (!host) return () => {};
    const stage = host.querySelector('[data-podcast-stage]');
    const toggle = host.querySelector('[data-podcast-action="toggle"]');
    const label = host.querySelector('[data-podcast-play-label]');
    const back = host.querySelector('[data-podcast-action="back"]');
    const forward = host.querySelector('[data-podcast-action="forward"]');
    const seek = host.querySelector('#podcast-position');
    const speed = host.querySelector('[data-podcast-speed]');
    const elapsed = host.querySelector('[data-podcast-elapsed]');
    const total = host.querySelector('[data-podcast-duration]');
    const status = host.querySelector('.podcast-status');
    let player = null, ready = false, disposed = false, attempt = 0, poll = null, timeout = null, seeking = false;
    let duration = episode.duration, pendingPosition = null, seekIssuedAt = 0;
    const current = token => !disposed && token === attempt;
    function setToggle(playing) {
      label.textContent = playing ? 'Ⅱ Pause' : '▶ Play';
      toggle.setAttribute('aria-label', playing ? 'Pause podcast' : 'Play podcast');
    }
    function update() {
      if (!ready || !player) return;
      const length = Number(player.getDuration());
      if (length > 0) { duration = length; seek.max = String(Math.floor(length)); total.textContent = time(length); }
      let position = Math.max(0, Math.min(duration, Number(player.getCurrentTime()) || 0));
      if (pendingPosition !== null) {
        if (Math.abs(position - pendingPosition) < 1 || Date.now() - seekIssuedAt > 2000) pendingPosition = null;
        else position = pendingPosition;
      }
      if (!seeking) { seek.value = String(Math.floor(position)); elapsed.textContent = time(position); seek.setAttribute('aria-valuetext', `${time(position)} of ${time(duration)}`); }
    }
    function resetPlayer() {
      ready = false; pendingPosition = null; clearInterval(poll); clearTimeout(timeout); poll = null; timeout = null;
      const previous = player; player = null; previous?.destroy();
      back.disabled = forward.disabled = seek.disabled = speed.disabled = true;
    }
    function fail(token, message) {
      if (!current(token)) return;
      attempt++; resetPlayer(); stage.replaceChildren();
      const notice = document.createElement('p'); notice.className = 'podcast-unavailable';
      notice.textContent = 'The podcast is still available through the YouTube link below.'; stage.append(notice);
      toggle.disabled = false; label.textContent = '↻ Try again'; toggle.setAttribute('aria-label','Retry podcast'); status.textContent = message;
    }
    async function load() {
      const token = ++attempt;
      resetPlayer(); toggle.disabled = true; label.textContent = 'Connecting…'; status.textContent = 'Loading the YouTube podcast…';
      if (navigator.onLine === false) { fail(token,'You’re offline. Try again when your connection returns.'); return; }
      const iframe = document.createElement('iframe');
      iframe.title = `YouTube podcast: ${episode.title}`;
      iframe.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture'; iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      iframe.src = `https://www.youtube-nocookie.com/embed/${episode.id}?${new URLSearchParams({enablejsapi:'1',playsinline:'1',autoplay:'0',rel:'0',origin:location.origin})}`;
      iframe.addEventListener('error',()=>fail(token,'The player couldn’t load. Try again or open it on YouTube.'));
      stage.replaceChildren(iframe);
      timeout = setTimeout(()=>fail(token,'The player is taking too long to connect. Try again or open it on YouTube.'),20000);
      try {
        const YT = await VideoLibrary.loadYouTubeAPI();
        if (!current(token)) return;
        player = new YT.Player(iframe,{events:{
          onReady: event => {
            if (!current(token)) return;
            clearTimeout(timeout); player = event.target; ready = true; toggle.disabled = false;
            back.disabled = forward.disabled = seek.disabled = false;
            const rates = player.getAvailablePlaybackRates();
            [...speed.options].forEach(option=>{option.disabled=!rates.includes(Number(option.value));});
            speed.disabled = rates.length < 2; speed.value = String(player.getPlaybackRate());
            setToggle(false); update(); poll = setInterval(update,500);
            status.textContent = 'Press play to listen.';
            // Loading followed an explicit Play action; browsers can still require another tap.
            if (!document.hidden) player.playVideo();
          },
          onStateChange: event => {
            if (!current(token) || !ready) return;
            setToggle(event.data === 1);
            status.textContent = ({0:'Finished. Play again whenever you like.',1:'Playing.',2:'Paused.',3:'Buffering…',5:'Press play to listen.'})[event.data] || 'Press play to listen.';
            update();
          },
          onPlaybackRateChange: event => { if (current(token)) speed.value = String(event.data); },
          onAutoplayBlocked: () => { if (current(token)) { setToggle(false); status.textContent='Press play to listen.'; } },
          onError: () => fail(token,'This podcast can’t play here right now. Try again or open it on YouTube.')
        }});
      } catch { fail(token,'The player couldn’t connect. Try again or open it on YouTube.'); }
    }
    toggle.addEventListener('click',()=>{
      if (!ready) { load(); return; }
      if (player.getPlayerState() === 1) player.pauseVideo();
      else player.playVideo();
    });
    function setPosition(position) {
      if (!ready) return;
      pendingPosition = Math.max(0,Math.min(duration,position)); seekIssuedAt = Date.now();
      player.seekTo(pendingPosition,true); update();
    }
    function jump(delta) {
      if (!ready) return;
      setPosition((pendingPosition ?? (Number(player.getCurrentTime())||0)) + delta);
    }
    back.addEventListener('click',()=>jump(-10)); forward.addEventListener('click',()=>jump(10));
    seek.addEventListener('input',()=>{seeking=true; elapsed.textContent=time(seek.value); seek.setAttribute('aria-valuetext',`${time(seek.value)} of ${time(duration)}`);});
    seek.addEventListener('change',()=>{seeking=false;setPosition(Number(seek.value));});
    seek.addEventListener('blur',()=>{seeking=false;update();});
    speed.addEventListener('change',()=>{if(ready)player.setPlaybackRate(Number(speed.value));});
    const onHidden = ()=>{if(document.hidden&&ready)player.pauseVideo();};
    const onOffline = ()=>{if(!ready&&timeout)fail(attempt,'You’re offline. Try again when your connection returns.');};
    document.addEventListener('visibilitychange',onHidden); window.addEventListener('offline',onOffline);
    return ()=>{disposed=true;attempt++;resetPlayer();document.removeEventListener('visibilitychange',onHidden);window.removeEventListener('offline',onOffline);};
  }
  return {section,mount};
})();
