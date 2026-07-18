document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const body = document.body;
  const loading = document.querySelector('.page-loading');
  const progressBar = document.querySelector('.scroll-progress__bar');
  const backToTop = document.querySelector('[data-back-to-top]');

  if (header) {
    const setHeaderState = () => header.classList.toggle('scrolled', window.scrollY > 10);
    setHeaderState();
    window.addEventListener('scroll', setHeaderState, { passive: true });
  }

  const updateProgress = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = `${progress}%`;
    if (backToTop) backToTop.classList.toggle('is-visible', scrollTop > 300);
  };

  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });

  // Pointer-following cursor removed for a cleaner, simpler UX.

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach((link) => {
    const href = link.getAttribute('href') || '';
    const isActive = href.includes(currentPath) || (currentPath === 'index.html' && href === 'index.html');
    if (isActive) link.classList.add('active');
  });

  document.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute('href') || '';
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || link.target === '_blank') return;
    link.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const destination = new URL(href, window.location.href);
      if (destination.origin !== window.location.origin) return;
      if (destination.pathname === window.location.pathname && destination.hash) return;
      body.classList.add('is-transitioning');
    });
  });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      const searchField = document.getElementById('poemSearch');
      if (searchField) {
        event.preventDefault();
        searchField.focus();
      }
    }

    if (event.key === 'Escape' && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  });

  if (loading) {
    window.requestAnimationFrame(() => loading.classList.add('is-hidden'));
  }
});
