document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  const body = document.body;
  const themeMeta = document.querySelector('meta[name="theme-color"]');

  const applyTheme = (isDark) => {
    document.documentElement.classList.toggle('theme-dark', isDark);
    body.classList.toggle('theme-dark', isDark);
    if (toggle) {
      toggle.textContent = isDark ? '☀ Light' : '☾ Dark';
      toggle.setAttribute('aria-pressed', String(isDark));
    }
    if (themeMeta) themeMeta.setAttribute('content', isDark ? '#0b0b0d' : '#f5efe6');
    try {
      localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    } catch (error) {
      // Storage unavailable (private mode, etc.) — theme still applies for this page.
    }
  };

  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem('portfolio-theme');
  } catch (error) {
    savedTheme = null;
  }
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(savedTheme ? savedTheme === 'dark' : prefersDark);

  toggle?.addEventListener('click', () => {
    applyTheme(!body.classList.contains('theme-dark'));
  });
});
