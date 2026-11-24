(() => {
  const video = document.querySelector('video');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!reduce.matches) video.play().catch(() => {});
  reduce.addEventListener('change', () => { if (reduce.matches) video.pause(); });
  let resume = false;
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { resume = !video.paused; video.pause(); }
    else if (resume && !reduce.matches) { resume = false; video.play().catch(() => {}); }
  });
})();
