(function () {
  const STORAGE_KEYS = {
    volume: 'diya-custom-video-volume',
    speed: 'diya-custom-video-speed',
    audioBoost: 'diya-custom-video-audio-boost'
  };

  const SPEED_OPTIONS = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
  const BOOST_OPTIONS = [
    { label: 'Normal', value: 1 },
    { label: '125%', value: 1.25 },
    { label: '150%', value: 1.5 },
    { label: '200%', value: 2 },
    { label: '300%', value: 3 }
  ];

  function formatTime(seconds) {
    if (!Number.isFinite(seconds)) return '00:00';
    const safeSeconds = Math.max(0, Math.floor(seconds));
    const mins = Math.floor(safeSeconds / 60);
    const secs = safeSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function getStoredValue(key, fallback) {
    try {
      const stored = localStorage.getItem(key);
      return stored === null ? fallback : stored;
    } catch (error) {
      return fallback;
    }
  }

  function setStoredValue(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.warn('Unable to save player preference', error);
    }
  }

  function createPlayer(root) {
    if (!root) return;

    const video = root.querySelector('video');
    if (!video) return;

    const controls = root.querySelector('.video-controls');
    const playPauseBtn = root.querySelector('[data-play-pause]');
    const restartBtn = root.querySelector('[data-restart]');
    const muteBtn = root.querySelector('[data-mute]');
    const volumeSlider = root.querySelector('.video-volume');
    const currentTimeEl = root.querySelector('.video-time-current');
    const durationEl = root.querySelector('.video-time-duration');
    const progressWrap = root.querySelector('.video-progress');
    const playedBar = root.querySelector('.video-progress-played');
    const bufferedBar = root.querySelector('.video-progress-buffered');
    const thumb = root.querySelector('.video-progress-thumb');
    const previewTooltip = root.querySelector('.video-preview');
    const centerPlay = root.querySelector('.video-center-play');
    const loadingSpinner = root.querySelector('.video-loading');
    const errorState = root.querySelector('.video-error');
    const menuButton = root.querySelector('[data-menu-toggle]');
    const menu = root.querySelector('.video-menu');
    const fullscreenButton = root.querySelector('[data-fullscreen]');
    const pipButton = root.querySelector('[data-pip]');
    const speedButton = root.querySelector('[data-speed]');
    const boostButton = root.querySelector('[data-audio-boost]');
    const downloadLink = root.querySelector('[data-download]');
    const titleWrap = root.querySelector('.video-top-bar');

    if (!controls || !playPauseBtn || !restartBtn || !muteBtn || !volumeSlider || !currentTimeEl || !durationEl || !progressWrap || !playedBar || !bufferedBar || !thumb) return;

    let hideTimer = null;
    let isDragging = false;
    let dragPreviewTime = 0;
    let audioContext = null;
    let gainNode = null;
    let audioSource = null;
    let activeBoost = Number(getStoredValue(STORAGE_KEYS.audioBoost, '1')) || 1;

    const showControls = (force = false) => {
      root.classList.add('is-visible');
      if (hideTimer) clearTimeout(hideTimer);
      if (force || video.paused) return;
      hideTimer = setTimeout(() => {
        root.classList.remove('is-visible');
      }, 2500);
    };

    const hideControls = () => {
      if (hideTimer) clearTimeout(hideTimer);
      root.classList.remove('is-visible');
    };

    const updatePlayButton = () => {
      playPauseBtn.innerHTML = video.paused ? '▶' : '❚❚';
      playPauseBtn.setAttribute('aria-label', video.paused ? 'Play video' : 'Pause video');
      centerPlay.hidden = !video.paused;
      if (!video.paused) {
        centerPlay.classList.remove('is-visible');
      }
    };

    const updateMuteButton = () => {
      muteBtn.innerHTML = video.muted ? '🔇' : '🔊';
      muteBtn.setAttribute('aria-pressed', video.muted ? 'true' : 'false');
    };

    const updateTimeDisplay = () => {
      currentTimeEl.textContent = formatTime(video.currentTime);
      durationEl.textContent = formatTime(video.duration || 0);
      const percent = video.duration ? (video.currentTime / video.duration) * 100 : 0;
      playedBar.style.width = `${Math.min(100, Math.max(0, percent))}%`;
      thumb.style.left = `${Math.min(100, Math.max(0, percent))}%`;
    };

    const updateBuffered = () => {
      const buffered = video.buffered && video.buffered.length ? video.buffered.end(video.buffered.length - 1) : 0;
      const duration = video.duration || 0;
      const percent = duration ? (buffered / duration) * 100 : 0;
      bufferedBar.style.width = `${Math.min(100, Math.max(0, percent))}%`;
    };

    const updateVolumeUi = () => {
      volumeSlider.value = String(video.muted ? 0 : video.volume);
      updateMuteButton();
      setStoredValue(STORAGE_KEYS.volume, String(video.volume));
    };

    const ensureAudioRouting = () => {
      if (audioContext) return;
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      audioContext = new AudioContextClass();
      audioSource = audioContext.createMediaElementSource(video);
      gainNode = audioContext.createGain();
      audioSource.connect(gainNode);
      gainNode.connect(audioContext.destination);
      gainNode.gain.value = activeBoost;
    };

    const setAudioBoost = (boost) => {
      activeBoost = boost;
      setStoredValue(STORAGE_KEYS.audioBoost, String(boost));
      if (gainNode) gainNode.gain.value = boost;
      root.querySelectorAll('.video-menu [data-boost]').forEach((item) => {
        item.classList.toggle('is-active', Number(item.dataset.boost) === boost);
      });
      boostButton.textContent = BOOST_OPTIONS.find((option) => option.value === boost)?.label || 'Normal';
    };

    const setPlaybackRate = (rate) => {
      video.playbackRate = rate;
      setStoredValue(STORAGE_KEYS.speed, String(rate));
      root.querySelectorAll('.video-menu [data-speed-option]').forEach((item) => {
        item.classList.toggle('is-active', Number(item.dataset.speedOption) === rate);
      });
      speedButton.textContent = `${rate.toFixed(2).replace(/\.00$/, '')}x`;
      if (rate === 1) speedButton.textContent = '1x';
    };

    const togglePlay = async () => {
      if (video.paused) {
        try {
          await video.play();
        } catch (error) {
          console.warn('Playback failed', error);
        }
      } else {
        video.pause();
      }
      updatePlayButton();
    };

    const seekTo = (nextTime) => {
      if (!Number.isFinite(video.duration)) return;
      const safeTime = Math.min(video.duration, Math.max(0, nextTime));
      video.currentTime = safeTime;
      updateTimeDisplay();
    };

    const updatePreview = (clientX) => {
      const rect = progressWrap.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const previewTime = (ratio * (video.duration || 0));
      dragPreviewTime = previewTime;
      previewTooltip.style.left = `${ratio * 100}%`;
      previewTooltip.textContent = formatTime(previewTime);
      previewTooltip.hidden = false;
    };

    const beginSeek = (clientX) => {
      isDragging = true;
      root.classList.add('is-seeking');
      updatePreview(clientX);
      seekTo(((clientX - progressWrap.getBoundingClientRect().left) / progressWrap.getBoundingClientRect().width) * (video.duration || 0));
      progressWrap.setPointerCapture?.(event.pointerId);
    };

    const endSeek = () => {
      if (!isDragging) return;
      isDragging = false;
      root.classList.remove('is-seeking');
      previewTooltip.hidden = true;
    };

    const maybeToggleMenu = (shouldOpen) => {
      if (!menu) return;
      const open = typeof shouldOpen === 'boolean' ? shouldOpen : menu.classList.contains('is-hidden');
      menu.classList.toggle('is-hidden', !open);
      menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    // Event wiring
    video.addEventListener('loadedmetadata', () => {
      updateTimeDisplay();
      updateBuffered();
      durationEl.textContent = formatTime(video.duration || 0);
      loadingSpinner.hidden = true;
      errorState.hidden = true;
      if (video.paused) {
        centerPlay.hidden = false;
      }
    });

    video.addEventListener('timeupdate', () => {
      updateTimeDisplay();
      updateBuffered();
    });

    video.addEventListener('progress', updateBuffered);
    video.addEventListener('waiting', () => {
      loadingSpinner.hidden = false;
    });

    video.addEventListener('canplay', () => {
      loadingSpinner.hidden = true;
    });

    video.addEventListener('playing', () => {
      loadingSpinner.hidden = true;
    });

    video.addEventListener('play', () => {
      updatePlayButton();
      showControls(true);
      centerPlay.classList.remove('is-visible');
      loadingSpinner.hidden = true;
    });

    video.addEventListener('pause', () => {
      updatePlayButton();
      showControls(true);
      loadingSpinner.hidden = true;
    });

    video.addEventListener('ended', () => {
      updatePlayButton();
      showControls(true);
      centerPlay.hidden = false;
      centerPlay.classList.add('is-visible');
      loadingSpinner.hidden = true;
    });

    video.addEventListener('volumechange', updateVolumeUi);
    video.addEventListener('error', () => {
      loadingSpinner.hidden = true;
      errorState.hidden = false;
      errorState.textContent = 'This video could not be loaded.';
    });

    playPauseBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      togglePlay();
    });

    restartBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      seekTo(0);
      if (video.paused) {
        togglePlay();
      }
    });

    muteBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      video.muted = !video.muted;
      if (!video.muted && video.volume === 0) {
        video.volume = 0.8;
      }
      updateVolumeUi();
      showControls(true);
    });

    volumeSlider.addEventListener('input', (event) => {
      const nextVolume = Number(event.target.value);
      video.volume = nextVolume;
      if (nextVolume > 0) {
        video.muted = false;
      } else {
        video.muted = true;
      }
      updateVolumeUi();
      showControls(true);
    });

    volumeSlider.addEventListener('wheel', (event) => {
      event.preventDefault();
      const nextVolume = Math.min(1, Math.max(0, video.volume + (event.deltaY < 0 ? 0.05 : -0.05)));
      video.volume = nextVolume;
      video.muted = nextVolume === 0;
      volumeSlider.value = String(nextVolume);
      updateVolumeUi();
    }, { passive: false });

    progressWrap.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      beginSeek(event.clientX);
    });

    progressWrap.addEventListener('pointermove', (event) => {
      if (!isDragging) {
        updatePreview(event.clientX);
        return;
      }
      updatePreview(event.clientX);
      seekTo(dragPreviewTime);
    });

    progressWrap.addEventListener('pointerup', endSeek);
    progressWrap.addEventListener('pointerleave', () => {
      if (!isDragging) previewTooltip.hidden = true;
    });

    progressWrap.addEventListener('click', (event) => {
      updatePreview(event.clientX);
      seekTo(dragPreviewTime);
      showControls(true);
    });

    progressWrap.addEventListener('mousemove', (event) => {
      updatePreview(event.clientX);
    });

    progressWrap.addEventListener('mouseleave', () => {
      previewTooltip.hidden = true;
    });

    root.addEventListener('click', (event) => {
      if (event.target.closest('button, input, a, .video-menu')) return;
      togglePlay();
      showControls(true);
    });

    root.addEventListener('dblclick', (event) => {
      if (!video.duration) return;
      const rect = root.getBoundingClientRect();
      const isLeft = event.clientX < rect.left + rect.width / 2;
      const delta = isLeft ? -10 : 10;
      seekTo(video.currentTime + delta);
      const indicator = root.querySelector('.video-seek-indicator');
      if (indicator) {
        indicator.textContent = `${delta > 0 ? '10 »' : '« 10'}`;
        indicator.classList.remove('is-hidden');
        setTimeout(() => indicator.classList.add('is-hidden'), 700);
      }
    });

    root.addEventListener('mousemove', () => showControls(false));
    root.addEventListener('touchstart', () => showControls(false));
    root.addEventListener('keydown', () => showControls(false));

    document.addEventListener('keydown', (event) => {
      if (!root.contains(document.activeElement) && document.activeElement !== document.body) return;
      const activeTag = document.activeElement && document.activeElement.tagName;
      if (activeTag && ['INPUT', 'TEXTAREA', 'SELECT'].includes(activeTag)) return;

      switch (event.key) {
        case ' ':
          event.preventDefault();
          togglePlay();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          seekTo(video.currentTime - 5);
          break;
        case 'ArrowRight':
          event.preventDefault();
          seekTo(video.currentTime + 5);
          break;
        case 'j':
        case 'J':
          event.preventDefault();
          seekTo(video.currentTime - 10);
          break;
        case 'l':
        case 'L':
          event.preventDefault();
          seekTo(video.currentTime + 10);
          break;
        case 'm':
        case 'M':
          event.preventDefault();
          video.muted = !video.muted;
          updateVolumeUi();
          break;
        case 'ArrowUp':
          event.preventDefault();
          video.volume = Math.min(1, video.volume + 0.05);
          video.muted = false;
          updateVolumeUi();
          break;
        case 'ArrowDown':
          event.preventDefault();
          video.volume = Math.max(0, video.volume - 0.05);
          video.muted = video.volume === 0;
          updateVolumeUi();
          break;
        case 'f':
        case 'F':
          event.preventDefault();
          toggleFullscreen();
          break;
        case '0':
          event.preventDefault();
          seekTo(0);
          break;
        default:
          break;
      }
    });

    const toggleFullscreen = async () => {
      try {
        if (!document.fullscreenElement) {
          await root.requestFullscreen();
        } else {
          await document.exitFullscreen();
        }
      } catch (error) {
        console.warn('Fullscreen failed', error);
      }
    };

    fullscreenButton?.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleFullscreen();
      showControls(true);
    });

    pipButton?.addEventListener('click', async (event) => {
      event.stopPropagation();
      if ('requestPictureInPicture' in video && document.pictureInPictureElement !== video) {
        try {
          await video.requestPictureInPicture();
        } catch (error) {
          console.warn('PiP failed', error);
        }
      } else if ('exitPictureInPicture' in document) {
        try {
          await document.exitPictureInPicture();
        } catch (error) {
          console.warn('PiP exit failed', error);
        }
      }
    });

    menuButton?.addEventListener('click', (event) => {
      event.stopPropagation();
      maybeToggleMenu();
      showControls(true);
    });

    document.addEventListener('click', () => maybeToggleMenu(false));

    root.querySelectorAll('.video-menu [data-speed-option]').forEach((item) => {
      item.addEventListener('click', (event) => {
        event.stopPropagation();
        setPlaybackRate(Number(item.dataset.speedOption));
        maybeToggleMenu(false);
      });
    });

    root.querySelectorAll('.video-menu [data-boost]').forEach((item) => {
      item.addEventListener('click', (event) => {
        event.stopPropagation();
        setAudioBoost(Number(item.dataset.boost));
        maybeToggleMenu(false);
      });
    });

    downloadLink?.addEventListener('click', (event) => {
      event.stopPropagation();
      if (!downloadLink.href) {
        downloadLink.href = video.currentSrc || video.src;
      }
    });

    // Initialize state
    const storedVolume = Number(getStoredValue(STORAGE_KEYS.volume, '1'));
    if (Number.isFinite(storedVolume)) {
      video.volume = Math.min(1, Math.max(0, storedVolume));
    }
    const storedSpeed = Number(getStoredValue(STORAGE_KEYS.speed, '1'));
    if (SPEED_OPTIONS.includes(storedSpeed)) {
      setPlaybackRate(storedSpeed);
    } else {
      setPlaybackRate(1);
    }
    if (BOOST_OPTIONS.some((option) => option.value === activeBoost)) {
      setAudioBoost(activeBoost);
    } else {
      setAudioBoost(1);
    }

    ensureAudioRouting();
    updateVolumeUi();
    updatePlayButton();
    updateTimeDisplay();
    updateBuffered();
    showControls(true);
    loadingSpinner.hidden = true;

    if (titleWrap) {
      titleWrap.classList.add('is-visible');
    }
  }

  window.DIYA_VIDEO_OPTIONS = { SPEED_OPTIONS, BOOST_OPTIONS };

  window.initCustomVideoPlayer = function (root) {
    const players = root ? root.querySelectorAll('.custom-video-player') : document.querySelectorAll('.custom-video-player');
    players.forEach(createPlayer);
  };
})();
