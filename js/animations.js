document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -4% 0px' });

  document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));

  if (!reduceMotion) {
    document.querySelectorAll('[data-parallax]').forEach((node) => {
      window.addEventListener('scroll', () => {
        const offset = Math.min(window.scrollY * 0.08, 26);
        node.style.transform = `translateY(${offset * -1}px)`;
      }, { passive: true });
    });
  }
});
