/* GoatCounter: shared owner dashboard, separate Green Light page/event paths.
   Only published routes and fixed activity names are sent. Never answers or scores. */
const SiteAnalytics = (() => {
  const endpoint = 'https://george1912.goatcounter.com/count';
  const prefix = '/project-greenlight';
  const eventNames = {quiz_submitted: 'Quiz submitted', answer_checked: 'Section practice checked'};
  let started = false, failed = false, lastPath = '';
  const queue = [];
  function enabled() {
    return location.protocol === 'https:' && location.hostname === 'george1912.github.io'
      && location.pathname.startsWith(prefix + '/')
      && navigator.doNotTrack !== '1' && window.doNotTrack !== '1';
  }
  function routePath(route) {
    if (!route || route === '#' || route === '#/') return prefix + '/';
    if (typeof obCourse !== 'undefined') {
      if (route === '#/ob-final' || route === '#/ob-final/study-guide' || route === '#/ob-final/podcast'
        || obCourse.weeks.some(week => route === `#/ob-final/${week.id}`)
        || obCourse.topics.some(topic => route === `#/ob-final/topic/${topic.id}`)) return prefix + route.slice(1);
    }
    if (typeof obPresentationDecks !== 'undefined') {
      const valid = Object.values(obPresentationDecks).some(deck => route === `#/ob-final/presentation/${deck.id}`
        || deck.focus.some(focus => route === `#/ob-final/presentation/${deck.id}/${focus.id}`));
      if (valid) return prefix + route.slice(1);
    }
    const simple = ['#/final/focused-review', '#/final', '#/final/study-guide', '#/final/quiz', '#/final/nclex', '#/final/podcast', '#/final/videos', '#/final/presentations'];
    if (simple.includes(route) || /^#\/final\/week-(7|8|9|12)$/.test(route)) return prefix + route.slice(1);
    if (route.startsWith('#/final/condition/') && examTopics.some(topic => topic.id === route.slice('#/final/condition/'.length))) return prefix + route.slice(1);
    for (const type of ['presentation', 'nclex']) {
      if (route.startsWith(`#/final/${type}/`) && Object.prototype.hasOwnProperty.call(presentationDecks, route.slice(`#/final/${type}/`.length))) return prefix + route.slice(1);
    }
    return null;
  }
  function referrer() {
    try {
      const source = new URL(document.referrer);
      return ['https:', 'http:'].includes(source.protocol) && source.hostname !== location.hostname ? source.origin : '';
    } catch { return ''; }
  }
  function flush() {
    if (failed || typeof window.goatcounter?.count !== 'function') return;
    while (queue.length) {
      const item = queue.shift();
      try { window.goatcounter.count(item); } catch { /* Analytics never interrupts studying. */ }
    }
  }
  function send(item) {
    if (!enabled() || failed) return;
    if (queue.length < 30) queue.push(item);
    if (!started) {
      started = true;
      window.goatcounter = {no_onload: true, no_events: true, endpoint};
      const script = document.createElement('script');
      script.async = true; script.src = 'https://gc.zgo.at/count.js';
      script.dataset.goatcounter = endpoint;
      script.addEventListener('load', flush);
      script.addEventListener('error', () => { failed = true; queue.length = 0; });
      document.head.appendChild(script);
    }
    flush();
  }
  function page(route, title) {
    const path = routePath(route);
    if (!enabled() || !path || path === lastPath) return;
    lastPath = path;
    send({path, title: String(title).slice(0, 200), referrer: referrer()});
  }
  function event(name) {
    const path = routePath(location.hash), title = eventNames[name];
    if (!path || !title) return;
    send({path: `${path}/events/${name}`, title: `Green Light · ${title}`, event: true, referrer: referrer()});
  }
  return {page, event};
})();
