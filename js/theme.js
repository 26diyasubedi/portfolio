document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('portfolio-theme');
  const body = document.body;

  const applyTheme = (isDark) => {
    body.classList.toggle('theme-dark', isDark);
    if (toggle) {
      toggle.textContent = isDark ? '☀ Light' : '☾ Dark';
      toggle.setAttribute('aria-pressed', String(isDark));
    }
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  };

  applyTheme(savedTheme === 'dark');

  toggle?.addEventListener('click', () => {
    applyTheme(!body.classList.contains('theme-dark'));
  });
});
