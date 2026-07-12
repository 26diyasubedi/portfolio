document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  if (header) {
    const setHeaderState = () => header.classList.toggle('scrolled', window.scrollY > 10);
    setHeaderState();
    window.addEventListener('scroll', setHeaderState, { passive: true });
  }

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach((link) => {
    const href = link.getAttribute('href') || '';
    const isActive = href.includes(currentPath) || (currentPath === 'index.html' && href === 'index.html');
    if (isActive) link.classList.add('active');
  });
});
