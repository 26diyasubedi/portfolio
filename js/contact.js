document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('.contact-page-shell');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.letter-paper time').forEach((date) => { date.textContent = new Intl.DateTimeFormat('en', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date()); });

  if (page && !reducedMotion) {
    page.classList.add('contact-motion-ready');
    const elements = page.querySelectorAll('.contact-hero-copy, .contact-image, .letter-section, .direct-section, .contact-close');
    const show = (entries, observer) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(show, { threshold: 0.12, rootMargin: '0px 0px -40px' });
      elements.forEach((element) => observer.observe(element));
    } else elements.forEach((element) => element.classList.add('is-visible'));
  }

  document.querySelectorAll('[data-copy-email]').forEach((button) => {
    button.addEventListener('click', async () => {
      const email = button.dataset.copyEmail;
      try {
        await navigator.clipboard.writeText(email);
        const action = button.querySelector('b');
        if (action) {
          action.textContent = 'Copied';
          window.setTimeout(() => { action.textContent = 'Copy'; }, 1600);
        }
      } catch (error) {
        window.location.href = `mailto:${email}`;
      }
    });
  });

  document.querySelectorAll('[data-letter-form]').forEach((form) => {
    const prefix = form.dataset.letterForm === 'contact' ? 'contact' : '';
    const field = (name) => document.getElementById(prefix ? `contact${name}` : `${name.charAt(0).toLowerCase()}${name.slice(1)}`);
    const message = field('MessageField');
    const counter = document.getElementById(prefix ? 'contactCharCounter' : 'charCounter');
    const success = document.getElementById(prefix ? 'contactSuccess' : 'letterSuccess');
    const button = document.getElementById(prefix ? 'contactSendBtn' : 'sendBtn');
    const newLetter = document.getElementById(prefix ? 'newContactButton' : 'newLetterButton');
    const fields = [[field('NameField'), document.getElementById(prefix ? 'contactNameError' : 'nameError'), (value) => value.length > 0], [field('EmailField'), document.getElementById(prefix ? 'contactEmailError' : 'emailError'), (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)], [message, document.getElementById(prefix ? 'contactMessageError' : 'messageError'), (value) => value.length > 0]];
    message?.addEventListener('input', () => { if (counter) counter.textContent = `${message.value.length} / ${message.maxLength}`; });
    const validate = () => fields.every(([input, error, check]) => { const valid = check(input.value.trim()); error?.classList.toggle('is-visible', !valid); input?.setAttribute('aria-invalid', String(!valid)); return valid; });
    form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!validate()) return;
    const label = button.querySelector('span');
    button.disabled = true;
    label.textContent = 'Sending...';
    try {
      const response = await fetch(form.action, { method: form.method, body: new FormData(form), headers: { Accept: 'application/json' } });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || 'Unable to send your message.');
      form.hidden = true;
      success.classList.add('is-visible');
    } catch (error) {
      label.textContent = 'Try again';
      button.disabled = false;
      window.alert(error.message || 'Unable to send your message.');
    }
    });
    newLetter?.addEventListener('click', () => { form.reset(); form.hidden = false; success.classList.remove('is-visible'); if (counter) counter.textContent = `0 / ${message?.maxLength || 1000}`; field('NameField')?.focus(); });
  });
});
