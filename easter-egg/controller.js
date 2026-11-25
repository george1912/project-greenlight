(() => {
  const sequence = ['up','up','down','down','left','right','left','right','b','a'];
  const status = document.querySelector('#status');
  const feedback = document.querySelector('.feedback');
  const dots = document.querySelectorAll('.progress span');
  let position = 0;
  let complete = false;
  function input(key) {
    if (complete || key === 'start' || key === 'select') return;
    position = key === sequence[position] ? position + 1 : (key === sequence[0] ? 1 : 0);
    dots.forEach((dot, index) => dot.classList.toggle('filled', index < position));
    if (position === sequence.length) {
      complete = true;
      feedback.classList.add('complete');
      status.textContent = 'Code complete.';
      window.setTimeout(() => window.location.assign('thank-you.html'), 1000);
      return;
    }
    status.textContent = position ? `${position} of ${sequence.length} correct.` : 'Try again.';
  }
  document.querySelectorAll('[data-key]').forEach(button => button.addEventListener('click', () => input(button.dataset.key)));
  document.addEventListener('keydown', event => {
    if (event.repeat || event.altKey || event.ctrlKey || event.metaKey) return;
    const keys = {ArrowUp:'up',ArrowDown:'down',ArrowLeft:'left',ArrowRight:'right',a:'a',b:'b',A:'a',B:'b'};
    const key = keys[event.key];
    if (key) { event.preventDefault(); input(key); }
  });
})();
