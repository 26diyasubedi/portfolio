document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const canvas = document.createElement('canvas');
  canvas.className = 'particle-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.position = 'fixed';
  canvas.style.inset = '0';
  canvas.style.zIndex = '-1';
  canvas.style.pointerEvents = 'none';
  document.body.appendChild(canvas);

  const context = canvas.getContext('2d');
  if (!context) return;

  let width = 0;
  let height = 0;
  let pointer = { x: 0, y: 0 };
  const particles = [];
  const total = Math.min(36, Math.max(22, Math.round(window.innerWidth / 42)));

  const resize = () => {
    width = canvas.width = window.innerWidth * window.devicePixelRatio;
    height = canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
  };

  const createParticle = () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: 0.6 + Math.random() * 1.8,
    vx: (-0.12 + Math.random() * 0.24) * window.devicePixelRatio,
    vy: (-0.16 + Math.random() * 0.22) * window.devicePixelRatio,
    alpha: 0.08 + Math.random() * 0.16
  });

  const initParticles = () => {
    particles.length = 0;
    for (let index = 0; index < total; index += 1) {
      particles.push(createParticle());
    }
  };

  const draw = () => {
    context.clearRect(0, 0, width, height);

    particles.forEach((particle) => {
      particle.x += particle.vx + (pointer.x - width / 2) * 0.00001;
      particle.y += particle.vy + (pointer.y - height / 2) * 0.00001;

      if (particle.x < -40) particle.x = width + 40;
      if (particle.x > width + 40) particle.x = -40;
      if (particle.y < -40) particle.y = height + 40;
      if (particle.y > height + 40) particle.y = -40;

      context.beginPath();
      context.fillStyle = `rgba(200, 154, 99, ${particle.alpha})`;
      context.arc(particle.x, particle.y, particle.radius * window.devicePixelRatio, 0, Math.PI * 2);
      context.fill();
    });

    requestAnimationFrame(draw);
  };

  window.addEventListener('resize', () => {
    resize();
    initParticles();
  }, { passive: true });

  window.addEventListener('pointermove', (event) => {
    pointer = { x: event.clientX * window.devicePixelRatio, y: event.clientY * window.devicePixelRatio };
  }, { passive: true });

  resize();
  initParticles();
  draw();
});
