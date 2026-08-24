document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('.about-page-shell');
  if (!page || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  page.classList.add('about-motion-ready');
  const animated = page.querySelectorAll('.about-hero-copy, .about-portrait, .about-section');
  const reveal = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  };

  if (!('IntersectionObserver' in window)) {
    animated.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(reveal, { threshold: 0.14, rootMargin: '0px 0px -48px' });
  animated.forEach((element) => observer.observe(element));
});
