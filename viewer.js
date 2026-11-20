/* One-page-at-a-time reader for faithful previews of the original PDF pages. */
const PresentationViewer = {
  mount(root, deck) {
    const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
    const sourceLinks = deck.showSourceLinks !== false;
    const contextLabel = deck.contextLabel || `STUDENT PRESENTATION${deck.week ? ` / WEEK ${deck.week}` : ' / ADDITIONAL'}`;
    root.innerHTML = `
      <div class="reader-heading"><div><p class="eyebrow">${escape(contextLabel)}</p><h1>${escape(deck.title)}</h1></div></div>
      <div class="reader-window">
        <div class="reader-toolbar" aria-label="Slide display controls">
          <div class="zoom-controls"><button class="reader-button" type="button" data-action="zoom-out" aria-label="Zoom out" disabled>−</button><button class="reader-button fullscreen-button" type="button" data-action="expand" aria-pressed="false">⛶ Full screen</button><button class="reader-button" type="button" data-action="zoom-in" aria-label="Zoom in" disabled>+</button><button class="reader-button zoom-label" type="button" data-action="fit" aria-label="Reset zoom to fit slide" title="Reset zoom to fit slide" disabled>100%</button></div>
          ${sourceLinks ? `<a class="reader-pdf-link" href="${escape(deck.pdf)}" target="_blank" rel="noopener">Open original PDF ↗</a>` : ''}
        </div>
        <div class="slide-stage" tabindex="0" role="region" aria-label="Presentation slide. Use left and right arrow keys to change pages."><div class="slide-layout"><img class="slide-image" hidden alt="" draggable="false"><p class="slide-message">Loading presentation…</p></div></div>
        <p class="reader-status" role="status" aria-live="polite">Loading presentation…</p>
        <div class="reader-controls" aria-label="Page controls">
          <button class="reader-button reader-direction" type="button" data-action="previous" disabled>← Previous</button>
          <label class="page-jump">Page <input aria-label="Page number" type="number" min="1" value="1" inputmode="numeric" disabled> <span class="page-total">of —</span></label>
          <button class="reader-button reader-direction" type="button" data-action="next" disabled>Next →</button>
          <div class="auto-controls"><button class="reader-button auto-button" type="button" data-action="auto" aria-pressed="false" disabled>▶ Auto</button><label>Every <select aria-label="Automatic page interval"><option value="5">5 sec</option><option value="10">10 sec</option><option value="15" selected>15 sec</option><option value="30">30 sec</option><option value="60">60 sec</option></select></label></div>
        </div>
      </div>
      <div class="reader-bottom"><span class="reader-hint">Use the arrows to read at your own pace. Auto pauses at the last page.</span>${sourceLinks ? `<a class="text-link" href="${escape(deck.pdf)}" download>Download PDF ↓</a>` : ''}</div>
      <details class="slide-text"><summary>Slide text</summary><p class="slide-transcript">Loading…</p></details>`;

    const abort = new AbortController();
    const signal = abort.signal;
    const image = root.querySelector('.slide-image');
    const stage = root.querySelector('.slide-stage');
    const message = root.querySelector('.slide-message');
    const status = root.querySelector('.reader-status');
    const input = root.querySelector('input');
    const interval = root.querySelector('select');
    const button = action => root.querySelector(`[data-action="${action}"]`);
    let pages = [], pageIndex = 0, zoom = 1, auto = false, timer = null, version = 0, loading = false, alive = true;
    let dialog = null, restoreMarker = null, enteredNativeFullscreen = false;

    function controls() {
      const ready = pages.length > 0;
      button('previous').disabled = !ready || pageIndex === 0;
      button('next').disabled = !ready || pageIndex === pages.length - 1;
      button('auto').disabled = !ready || pages.length < 2;
      for (const name of ['zoom-out','fit','zoom-in']) button(name).disabled = !ready;
      if (ready) { button('zoom-out').disabled = zoom <= 1; button('zoom-in').disabled = zoom >= 4; }
      button('auto').textContent = auto ? 'Ⅱ Pause' : '▶ Auto';
      button('auto').setAttribute('aria-pressed', String(auto));
      input.disabled = !ready;
      input.value = String(pageIndex + 1);
      input.max = String(pages.length);
      root.querySelector('.page-total').textContent = `of ${ready ? pages.length : '—'}`;
      root.querySelector('.zoom-label').textContent = `${Math.round(zoom * 100)}%`;
    }
    function pause() { clearTimeout(timer); timer = null; auto = false; controls(); }
    function schedule() {
      clearTimeout(timer);
      if (!alive || !auto || loading || document.hidden) return;
      if (pageIndex >= pages.length - 1) { pause(); return; }
      timer = setTimeout(() => show(pageIndex + 1), Number(interval.value) * 1000);
    }
    function sizeImage() {
      if (!pages.length || image.hidden) return;
      const current = pages[pageIndex];
      if (window.matchMedia('(max-width: 720px)').matches && !dialog) {
        stage.style.height = zoom === 1 ? `${Math.max(180, (stage.clientWidth - 24) * current.height / current.width + 24)}px` : '55svh';
      } else stage.style.height = '';
      const padding = dialog ? 0 : 24;
      const scale = Math.min((stage.clientWidth - padding) / current.width, (stage.clientHeight - padding) / current.height);
      image.style.width = `${Math.max(1, current.width * scale * zoom)}px`;
      image.style.height = 'auto';
    }
    function show(index) {
      if (!alive || !pages.length) return;
      pageIndex = Math.max(0, Math.min(pages.length - 1, index));
      const current = pages[pageIndex];
      const request = ++version;
      clearTimeout(timer);
      loading = true;
      image.hidden = true;
      message.hidden = false;
      message.textContent = 'Loading slide…';
      stage.setAttribute('aria-busy','true');
      status.textContent = `Loading page ${pageIndex + 1} of ${pages.length}…`;
      controls();
      const url = new URL(current.image, new URL(deck.manifest, document.baseURI)).href;
      const loader = new Image();
      loader.onload = () => {
        if (!alive || request !== version) return;
        image.src = url;
        image.alt = `${deck.title} — page ${pageIndex + 1} of ${pages.length}`;
        image.hidden = false;
        message.hidden = true;
        loading = false;
        sizeImage();
        stage.scrollTo(0,0);
        stage.setAttribute('aria-busy','false');
        status.textContent = `Page ${pageIndex + 1} of ${pages.length}${auto ? ' · Auto on' : ''}`;
        root.querySelector('.slide-transcript').textContent = current.text?.trim() || (sourceLinks ? 'No selectable text is available for this slide. The original PDF is available above.' : 'No selectable text is available for this page. Read the page image above.');
        if (pageIndex === pages.length - 1 && auto) { pause(); status.textContent = `Page ${pages.length} of ${pages.length} · End of presentation`; }
        else schedule();
        // Only prefetch the next page, keeping large decks light on mobile.
        if (pages[pageIndex + 1]) { const next = new Image(); next.src = new URL(pages[pageIndex + 1].image, new URL(deck.manifest, document.baseURI)).href; }
      };
      loader.onerror = () => {
        if (!alive || request !== version) return;
        loading = false;
        pause();
        stage.setAttribute('aria-busy','false');
        message.textContent = sourceLinks ? 'This slide could not load. Try another page or open the original PDF.' : 'This page could not load. Try another page or reload this presentation.';
        status.textContent = `Page ${pageIndex + 1} could not load.`;
        root.querySelector('.slide-transcript').textContent = current.text || (sourceLinks ? 'Open the original PDF to read this page.' : 'Reload this presentation to try loading the page again.');
      };
      loader.src = url;
    }
    function move(delta) { pause(); show(pageIndex + delta); }
    function toggleExpanded() {
      pause();
      if (dialog) { dialog.close(); return; }
      restoreMarker = document.createComment('presentation reader');
      root.before(restoreMarker);
      dialog = document.createElement('dialog');
      dialog.className = 'reader-dialog';
      dialog.setAttribute('aria-label', deck.title);
      document.body.append(dialog);
      dialog.append(root);
      button('expand').textContent = '⛶ Exit full screen';
      button('expand').setAttribute('aria-pressed', 'true');
      document.body.classList.add('reader-modal-open');
      dialog.addEventListener('close', () => {
        pause();
        enteredNativeFullscreen = false;
        if (document.fullscreenElement === root) document.exitFullscreen().catch(() => {});
        if (restoreMarker.isConnected) restoreMarker.replaceWith(root);
        restoreMarker = null;
        dialog.remove(); dialog = null;
        document.body.classList.remove('reader-modal-open');
        button('expand').textContent = '⛶ Full screen';
        button('expand').setAttribute('aria-pressed', 'false');
        if (alive && root.isConnected) button('expand').focus();
        sizeImage();
      }, { once: true });
      dialog.showModal();
      sizeImage();
      // Keep the full-window dialog as the fallback on browsers without this API.
      if (document.fullscreenEnabled && root.requestFullscreen) {
        root.requestFullscreen({ navigationUI: 'hide' }).catch(() => {});
      }
    }
    root.addEventListener('click', event => {
      const action = event.target.closest('[data-action]')?.dataset.action;
      if (!action) return;
      if (action === 'previous') move(-1);
      if (action === 'next') move(1);
      if (action === 'auto') {
        if (auto) { pause(); status.textContent = `Page ${pageIndex + 1} of ${pages.length} · Paused`; }
        else { auto = true; controls(); if (pageIndex === pages.length - 1) show(0); else { status.textContent = `Page ${pageIndex + 1} of ${pages.length} · Auto on`; schedule(); } }
      }
      if (['zoom-out','zoom-in','fit'].includes(action)) {
        pause();
        zoom = action === 'fit' ? 1 : Math.max(1,Math.min(4,zoom + (action === 'zoom-in' ? .5 : -.5)));
        controls(); sizeImage();
      }
      if (action === 'expand') toggleExpanded();
    }, { signal });
    function jump() { const number = Number(input.value); pause(); show(Number.isFinite(number) ? Math.round(number) - 1 : pageIndex); }
    input.addEventListener('change', jump, { signal });
    input.addEventListener('keydown', event => { if (event.key === 'Enter') { event.preventDefault(); jump(); } }, { signal });
    interval.addEventListener('change', schedule, { signal });
    root.addEventListener('keydown', event => {
      if (event.key === 'Escape' && dialog) {
        event.preventDefault();
        dialog.close();
        return;
      }
      if (event.target.matches('input, select, textarea') || event.altKey || event.ctrlKey || event.metaKey) return;
      if (!pages.length) return;
      if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
      if (event.key === 'Home') { event.preventDefault(); pause(); show(0); }
      if (event.key === 'End') { event.preventDefault(); pause(); show(pages.length - 1); }
    }, { signal });
    document.addEventListener('fullscreenchange', () => {
      if (!dialog) return;
      if (document.fullscreenElement === root) { enteredNativeFullscreen = true; sizeImage(); }
      else if (enteredNativeFullscreen) dialog.close();
    }, { signal });
    document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); }, { signal });
    const observer = new ResizeObserver(sizeImage);
    observer.observe(stage);
    fetch(deck.manifest, { signal }).then(response => {
      if (!response.ok) throw Error('Manifest unavailable');
      return response.json();
    }).then(data => {
      if (!alive) return;
      if (!Array.isArray(data.pages) || !data.pages.length) throw Error('No pages');
      pages = data.pages;
      show(Number.isInteger(deck.initialPage) ? deck.initialPage - 1 : 0);
    }).catch(error => {
      if (!alive || error.name === 'AbortError') return;
      message.textContent = sourceLinks ? 'The presentation viewer could not load. You can still open or download the original PDF.' : 'The presentation viewer could not load. Reload this page to try again.';
      status.textContent = 'Viewer unavailable.';
      root.querySelector('.slide-transcript').textContent = sourceLinks ? 'Open the original PDF to read the slides.' : 'The page text is unavailable until the presentation loads.';
    });
    return () => {
      alive = false; ++version;
      clearTimeout(timer); abort.abort(); observer.disconnect();
      if (dialog) { dialog.close(); }
    };
  }
};
