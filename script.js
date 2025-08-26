// Mobile menu toggle
const openBtn = document.getElementById('openMenu');
const flyout = document.getElementById('flyout');
if (openBtn && flyout){
  const close = () => { flyout.classList.remove('open'); flyout.setAttribute('aria-hidden','true'); };
  openBtn.addEventListener('click', () => { flyout.classList.add('open'); flyout.setAttribute('aria-hidden','false'); });
  flyout.addEventListener('click', (e) => { if (e.target === flyout) close(); });
  document.querySelectorAll('.fly').forEach(a => a.addEventListener('click', close));
}
// Active link highlight
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.menu a').forEach(a => {
  if (a.getAttribute('href') === path) a.classList.add('active');
});
document.querySelectorAll('.sheet a').forEach(a => {
  if (a.getAttribute('href') === path) a.classList.add('active');
});
// Footer year
const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();