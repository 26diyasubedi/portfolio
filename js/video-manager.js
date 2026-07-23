// Simple singleton VideoManager to ensure only one video plays at a time
class VideoManager {
  constructor() {
    this.current = null;
  }

  play(videoEl) {
    if (!videoEl) return;
    if (this.current && this.current !== videoEl) {
      try { this.current.pause(); } catch (e) {}
    }
    this.current = videoEl;
    videoEl.play().catch(() => {});
  }

  pause(videoEl) {
    if (!videoEl) return;
    try { videoEl.pause(); } catch (e) {}
    if (this.current === videoEl) this.current = null;
  }

  pauseAll() {
    if (this.current) {
      try { this.current.pause(); } catch (e) {}
      this.current = null;
    }
  }
}

window.VideoManager = new VideoManager();

// Attach delegated handlers for play-in-card buttons
document.addEventListener('click', (event) => {
  const btn = event.target.closest && event.target.closest('.play-in-card');
  if (!btn) return;
  const container = btn.closest('.poem-card');
  if (!container) return;

  // If card already expanded and contains an existing video, toggle play/pause
  let video = container.querySelector('video.card-video');
  if (!video) {
    const src = btn.dataset.videoSrc;
    if (!src) return;
    // build a wrapper that contains video + controls
    const wrapper = document.createElement('div');
    wrapper.className = 'card-video-wrapper';

    video = document.createElement('video');
    video.className = 'card-video';
    video.src = src;
    video.setAttribute('playsinline', '');
    video.setAttribute('preload', 'none');
    video.setAttribute('poster', btn.dataset.poster || '');
    video.muted = false;

    // controls overlay
    const controls = document.createElement('div');
    controls.className = 'card-video-controls';
    const muteBtn = document.createElement('button');
    muteBtn.className = 'mute-toggle';
    muteBtn.type = 'button';
    muteBtn.textContent = video.muted ? '🔇' : '🔊';
    const vol = document.createElement('input');
    vol.type = 'range'; vol.min = 0; vol.max = 1; vol.step = 0.01; vol.value = video.volume || 1;
    vol.className = 'volume-range';
    controls.appendChild(muteBtn);
    controls.appendChild(vol);

    const replayBtn = document.createElement('button');
    replayBtn.className = 'video-replay-btn';
    replayBtn.type = 'button';
    replayBtn.setAttribute('aria-label', 'Replay video');
    replayBtn.textContent = 'Replay';
    replayBtn.hidden = true;

    wrapper.appendChild(video);
    wrapper.appendChild(controls);
    wrapper.appendChild(replayBtn);

    // Keep the play button in the card so it remains available as a pause toggle.
    const thumbWrap = container.querySelector('.thumb-wrap');
    const thumbnail = thumbWrap.querySelector('.thumb');
    try {
      thumbnail?.remove();
    } catch (e) {}
    thumbWrap.appendChild(wrapper);
    wrapper.appendChild(btn);

    // Smooth expand
    container.style.transition = 'all 260ms ease';
    container.style.transform = 'translateY(-4px)';

    let controlsTimer = null;
    const hideCardControls = () => {
      if (!video.paused) {
        wrapper.classList.add('is-controls-hidden');
      }
    };
    const showCardControls = () => {
      wrapper.classList.remove('is-controls-hidden');
      if (controlsTimer) window.clearTimeout(controlsTimer);
      if (!video.paused) {
        controlsTimer = window.setTimeout(hideCardControls, 1500);
      }
    };

    wrapper.addEventListener('mouseenter', showCardControls);
    wrapper.addEventListener('mousemove', showCardControls);
    wrapper.addEventListener('mouseleave', hideCardControls);

    // wire controls
    muteBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      muteBtn.textContent = video.muted ? '🔇' : '🔊';
    });

    vol.addEventListener('input', () => {
      const v = parseFloat(vol.value);
      video.volume = v;
      if (v > 0 && video.muted) { video.muted = false; muteBtn.textContent = '🔊'; }
      if (v === 0) { video.muted = true; muteBtn.textContent = '🔇'; }
    });

    replayBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      try { video.currentTime = 0; } catch (e) {}
      video.play().catch(() => {});
      replayBtn.hidden = true;
      btn.textContent = '⏸';
      window.VideoManager.play(video);
    });

    video.addEventListener('ended', () => {
      replayBtn.hidden = false;
      btn.textContent = '▶';
    });

    video.addEventListener('play', () => {
      replayBtn.hidden = true;
      btn.textContent = '⏸';
      showCardControls();
    });

    video.addEventListener('click', (event) => {
      event.stopPropagation();
      if (video.paused) {
        if (video.ended) {
          try { video.currentTime = 0; } catch (e) {}
        }
        window.VideoManager.play(video);
      } else {
        window.VideoManager.pause(video);
      }
    });

    video.addEventListener('pause', () => {
      if (controlsTimer) window.clearTimeout(controlsTimer);
      wrapper.classList.remove('is-controls-hidden');
      if (!video.ended) {
        btn.textContent = '▶';
      }
    });
  }

  if (video.paused) {
    // ensure audio is enabled when the user initiates playback
    try { video.muted = false; video.volume = typeof video.volume === 'number' ? video.volume : 1; } catch (e) {}
    if (video.ended) {
      try { video.currentTime = 0; } catch (e) {}
    }
    window.VideoManager.play(video);
    btn.textContent = '⏸';
  } else {
    window.VideoManager.pause(video);
    btn.textContent = '▶';
  }
});

// Pause videos when they leave viewport
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (!video.pause) return;
      if (!entry.isIntersecting) {
        try { video.pause(); } catch (e) {}
      }
    });
  }, { threshold: 0.25 });

  // Observe dynamically added videos
  const mo = new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      m.addedNodes && m.addedNodes.forEach((node) => {
        if (node.nodeType === 1 && node.tagName === 'VIDEO') io.observe(node);
      });
    });
  });
  mo.observe(document.body, { childList: true, subtree: true });
}
