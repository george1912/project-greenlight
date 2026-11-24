(() => {
  const sequence = ['up','up','down','down','left','right','left','right','b','a'];
  const status = document.querySelector('#status');
  let position = 0;
  function input(key) {
    if (key === 'start' || key === 'select') return;
    position = key === sequence[position] ? position + 1 : (key === sequence[0] ? 1 : 0);
    if (position === sequence.length) { window.location.assign('thank-you.html'); return; }
    status.textContent = position ? `${position} of ${sequence.length}` : 'Try again.';
  }
  document.querySelectorAll('[data-key]').forEach(button => button.addEventListener('click', () => input(button.dataset.key)));
  document.addEventListener('keydown', event => {
    if (event.repeat || event.altKey || event.ctrlKey || event.metaKey) return;
    const keys = {ArrowUp:'up',ArrowDown:'down',ArrowLeft:'left',ArrowRight:'right',a:'a',b:'b',A:'a',B:'b'};
    const key = keys[event.key];
    if (key) { event.preventDefault(); input(key); }
  });
})();
