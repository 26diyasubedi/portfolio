document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('theme-dark');
  }

  toggle?.addEventListener('click', () => {
    document.body.classList.toggle('theme-dark');
    const isDark = document.body.classList.contains('theme-dark');
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    toggle.textContent = isDark ? '☀ Light' : '☾ Dark';
  });
});
