const POEMS_URL = 'data/poems.json';

async function loadPoems() {
  // Prefer fetching the canonical JSON when available (served over HTTP).
  // Use the inline `window.POEMS_DATA` only as a fallback (file:// previews).
  try {
    const response = await fetch(POEMS_URL, { cache: 'no-cache' });
    if (response.ok) {
      const data = await response.json();
      try { window.__poems_load_result = { source: 'fetch', count: Array.isArray(data) ? data.length : 0, slugs: Array.isArray(data) ? data.slice(0,10).map(p=>p.slug) : [] }; } catch(e){}
      console.info('Loaded poems from data/poems.json', window.__poems_load_result);
      return data;
    }
    // if fetch fails, fall through to fallback below
  } catch (e) {
    // network or CORS error — we'll try the fallback
  }

  if (window.POEMS_DATA && Array.isArray(window.POEMS_DATA)) {
    // mark debug state for fallback
    window.__poems_load_result = { source: 'fallback', count: window.POEMS_DATA.length, slugs: window.POEMS_DATA.slice(0,10).map(p=>p.slug) };
    return window.POEMS_DATA;
  }

  // If neither worked, throw to let caller handle the error.
  const err = new Error('Unable to load poems.json');
  window.__poems_load_result = { source: 'error', error: err.message };
  throw err;
}

// Small debug UI: shows where poems were loaded from and how many
function showPoemsDebugBanner() {
  try {
    const existing = document.getElementById('poems-debug-banner');
    if (existing) return;
    const info = window.__poems_load_result || { source: 'unknown' };
    const banner = document.createElement('div');
    banner.id = 'poems-debug-banner';
    banner.style.position = 'fixed';
    banner.style.left = '12px';
    banner.style.bottom = '12px';
    banner.style.zIndex = 9999;
    banner.style.padding = '8px 12px';
    banner.style.background = 'rgba(36,29,24,0.9)';
    banner.style.color = '#fff';
    banner.style.borderRadius = '8px';
    banner.style.fontSize = '13px';
    banner.style.boxShadow = '0 8px 28px rgba(0,0,0,0.4)';
    banner.textContent = `Poems source: ${info.source}` + (info.count ? ` — ${info.count} items` : info.error ? ` — ${info.error}` : '');
    document.body.appendChild(banner);
  } catch (e) {
    console.warn('Could not show poems debug banner', e);
  }
}

function formatDate(value) {
  return new Date(value).toLocaleDateString('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

function normalize(value) {
  return String(value || '').trim().toLowerCase();
}

function poemSearchIndex(poem) {
  return [
    poem.title,
    poem.subtitle,
    poem.caption,
    poem.category,
    poem.mood,
    poem.language,
    poem.fullPoem,
    poem.meaning,
    poem.inspiration,
    poem.tags.join(' ')
  ].join(' ').toLowerCase();
}

function createPoemCard(poem) {
  const article = document.createElement('article');
  article.className = 'poem-card reveal';
  article.dataset.category = poem.category;
  article.dataset.mood = poem.mood;
  // Card now includes an inline play button that integrates with VideoManager
  article.innerHTML = `
    <div class="card-link">
      <div class="thumb-wrap">
        <img class="thumb" src="${poem.thumbnail}" alt="${poem.altText}" loading="lazy" />
        ${poem.video ? `<button class="play-in-card" data-video-src="${poem.video}" aria-label="Play ${poem.title}">▶</button>` : ''}
      </div>
      <div class="meta-row">
        <span class="pill">${formatDate(poem.publishDate)}</span>
        <span class="pill">${poem.readingTime || poem.duration}</span>
        <span class="pill">${poem.category}</span>
      </div>
      <h3>${poem.title}</h3>
      <p class="caption">${poem.caption}</p>
      <div class="actions">
        <a class="ghost-btn" href="poem.html?slug=${poem.slug}">Read</a>
      </div>
    </div>
  `;
  return article;
}

function renderPoems(poems, container) {
  container.innerHTML = '';
  if (!poems.length) {
    container.innerHTML = '<p class="section-card">No poems match this search yet.</p>';
    return;
  }

  const fragment = document.createDocumentFragment();
  poems.forEach((poem) => fragment.appendChild(createPoemCard(poem)));
  container.appendChild(fragment);
  // Ensure reveal animations are visible even if the IntersectionObserver was not yet attached
  try {
    container.querySelectorAll('.reveal').forEach((node) => node.classList.add('visible'));
  } catch (e) {}
}

function filterPoems(poems, query, activeFilter) {
  const normalizedQuery = normalize(query);
  const normalizedFilter = normalize(activeFilter);

  return poems.filter((poem) => {
    const matchesQuery = !normalizedQuery || poemSearchIndex(poem).includes(normalizedQuery);
    const matchesFilter = normalizedFilter === 'all' || normalize(poem.category) === normalizedFilter || normalize(poem.mood) === normalizedFilter;
    return matchesQuery && matchesFilter;
  });
}

function setMetricValue(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function renderMetrics(poems, categories) {
  setMetricValue('[data-metric="poem-count"]', poems.length);
  setMetricValue('[data-metric="featured-count"]', poems.filter((poem) => poem.featured).length);
}

async function initPoemLibrary() {
  const container = document.getElementById('poemLibrary');
  const featuredContainer = document.getElementById('featuredPoems');

  if (!container && !featuredContainer) return;

  try {
    const rawPoems = await loadPoems();
    
    const poems = rawPoems
      .filter((poem) => !poem.draft && poem.visibility === 'published')
      .sort((a, b) => a.id - b.id);
    const homeSelectionIds = [1, 2, 3, 4];
    const homeSelection = poems
      .filter((poem) => homeSelectionIds.includes(poem.id))
      .sort((a, b) => homeSelectionIds.indexOf(a.id) - homeSelectionIds.indexOf(b.id));
    const featured = poems.filter((poem) => poem.featured).slice(0, 4);
    const isHomePage = !!featuredContainer && !container;

    if (featuredContainer) {
      const renderList = isHomePage ? homeSelection : featured;
      renderPoems(renderList, featuredContainer);
    }
    renderMetrics(poems);

    if (container) {
      renderPoems(filterPoems(poems, '', 'all'), container);
    }

    // Wire play-in-card buttons: ensure any dynamically added play buttons are accessible
    container.querySelectorAll && container.querySelectorAll('.play-in-card').forEach((btn) => {
      btn.setAttribute('type', 'button');
    });
    // show debug banner when library is initialized
    showPoemsDebugBanner();
  } catch (error) {
    if (container) {
      container.innerHTML = '<p class="section-card">The poetry archive could not be loaded right now.</p>';
    }
    console.error(error);
  }
}

function createShareUrl(poem) {
  return poem.shareUrl || `${window.location.origin}${window.location.pathname}?slug=${poem.slug}`;
}

function renderShareButtons(poem) {
  const shareUrl = createShareUrl(poem);
  const shareText = `${poem.title} | ${poem.caption}`;

  return `
    <div class="sharing-row">
      <button class="ghost-btn" type="button" data-share-native data-share-url="${shareUrl}" data-share-text="${shareText}">Share</button>
      <button class="ghost-btn" type="button" data-copy-link data-share-url="${shareUrl}">Copy link</button>
      <a class="ghost-btn" href="${poem.instagramUrl}" target="_blank" rel="noreferrer">Open Instagram</a>
    </div>
  `;
}

async function initPoemDetail() {
  const detailRoot = document.getElementById('poemDetail');
  if (!detailRoot) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const poems = (await loadPoems()).filter((poem) => !poem.draft && poem.visibility === 'published');
  const poem = poems.find((entry) => entry.slug === slug);

  if (!poem) {
    detailRoot.innerHTML = '<p class="section-card">This poem could not be found.</p>';
    return;
  }

  document.title = poem.seoTitle || `${poem.title} | Diya Subedi`;
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta && poem.colorTheme) themeMeta.setAttribute('content', poem.colorTheme);

  const related = poems.filter((entry) => poem.relatedPoems.includes(entry.id));
  const playerOptions = window.DIYA_VIDEO_OPTIONS || { SPEED_OPTIONS: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2], BOOST_OPTIONS: [{ label: 'Normal', value: 1 }, { label: '125%', value: 1.25 }, { label: '150%', value: 1.5 }, { label: '200%', value: 2 }, { label: '300%', value: 3 }] };
  const heroMedia = poem.video && !poem.audioOnly
    ? `
      <div class="custom-video-player" data-player>
        <video class="detail-video" src="${poem.video}" poster="${poem.poster || poem.heroImage}" playsinline preload="metadata"></video>
        <div class="video-top-bar" aria-label="Video title">
          <div>
            <p class="video-top-title">${poem.title}</p>
            <p class="video-top-subtitle">${poem.caption}</p>
          </div>
        </div>
        <div class="video-loading" aria-hidden="true" hidden>
          <div class="video-spinner"></div>
        </div>
        <div class="video-center-play" aria-hidden="true">▶</div>
        <div class="video-seek-indicator is-hidden" aria-hidden="true"></div>
        <div class="video-error" hidden></div>
        <div class="video-controls is-visible" role="group" aria-label="Video player controls">
          <div class="video-controls-left">
            <button class="video-control-btn" data-play-pause type="button" aria-label="Play or pause">▶</button>
            <button class="video-control-btn" data-restart type="button" aria-label="Restart">↺</button>
            <button class="video-control-btn" data-mute type="button" aria-label="Mute">🔊</button>
            <input class="video-volume" type="range" min="0" max="1" step="0.01" value="1" aria-label="Volume" />
            <span class="video-time video-time-current">00:00</span>
            <span class="video-time-separator">/</span>
            <span class="video-time video-time-duration">00:00</span>
          </div>
          <div class="video-controls-right">
            <button class="video-control-btn" data-menu-toggle type="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu">⋯</button>
            <button class="video-control-btn" data-pip type="button" aria-label="Picture in picture">⧉</button>
            <button class="video-control-btn" data-fullscreen type="button" aria-label="Fullscreen">⛶</button>
          </div>
        </div>
        <div class="video-progress" aria-label="Seek bar">
          <div class="video-progress-buffered"></div>
          <div class="video-progress-played"></div>
          <div class="video-progress-thumb"></div>
          <div class="video-preview" hidden></div>
        </div>
        <div class="video-menu is-hidden" role="menu" aria-label="Video menu">
          <a class="video-menu-item" href="${poem.video}" download aria-label="Download video" data-download>⬇ Download</a>
          <div class="video-menu-group">
            <span class="video-menu-label">Playback speed</span>
            <div class="video-menu-list">
              ${playerOptions.SPEED_OPTIONS.map((speed) => `<button class="video-menu-item video-menu-item--small" type="button" data-speed-option="${speed}">${speed.toFixed(2).replace(/\.00$/, '')}x</button>`).join('')}
            </div>
          </div>
          <div class="video-menu-group">
            <span class="video-menu-label">Audio boost</span>
            <div class="video-menu-list">
              ${playerOptions.BOOST_OPTIONS.map((option) => `<button class="video-menu-item video-menu-item--small" type="button" data-boost="${option.value}">${option.label}</button>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `
    : `<img src="${poem.heroImage}" alt="${poem.altText}" loading="eager" />`;

  detailRoot.innerHTML = `
    <div class="reading-progress"><div class="reading-progress__bar"></div></div>
    <div class="detail-shell reveal">
      <div class="detail-hero">
        ${heroMedia}
        <div class="detail-sidebar">
          <div>
            <p class="eyebrow">${poem.category}</p>
            <h1 class="detail-title">${poem.title}</h1>
            <p class="page-intro">${poem.caption}</p>
            <div class="meta-row">
              <span class="pill">${formatDate(poem.publishDate)}</span>
              <span class="pill">${poem.readingTime || poem.duration}</span>
              <span class="pill">${poem.language}</span>
            </div>
            <div class="detail-actions">
              <a class="primary-btn" href="poems.html">Back to library</a>
              <a class="ghost-btn" href="#poem-body">Read poem</a>
            </div>
          </div>
          <div class="info-panel">
            <h2>Poem notes</h2>
            <div class="info-list">
              <span>Meaning: ${poem.meaning}</span>
              <span>Author note: ${poem.authorNotes}</span>
              <span>Inspiration: ${poem.inspiration}</span>
            </div>
          </div>
          ${renderShareButtons(poem)}
        </div>
      </div>
      <div class="quote-card reveal">
        <strong>“${poem.quote}”</strong>
      </div>
      <div class="section-card reveal" id="poem-body">
        <h2>Full poem</h2>
        <p class="poem-body">${poem.fullPoem}</p>
      </div>
      <div class="section-card reveal">
        <div class="section-title">
          <h2>Related poems</h2>
        </div>
        <div class="related-grid">
          ${related.map((entry) => `
            <a class="related-card" href="poem.html?slug=${entry.slug}">
              <strong>${entry.title}</strong>
              <p>${entry.caption}</p>
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  detailRoot.querySelectorAll('.reveal').forEach((node) => node.classList.add('visible'));
  if (window.initCustomVideoPlayer) {
    window.initCustomVideoPlayer(detailRoot);
  }

  const progressBar = detailRoot.querySelector('.reading-progress__bar');
  const updateReadingProgress = () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = `${progress}%`;
  };

  updateReadingProgress();
  window.addEventListener('scroll', updateReadingProgress, { passive: true });

  detailRoot.querySelector('[data-share-native]')?.addEventListener('click', async (event) => {
    const button = event.currentTarget;
    const url = button.dataset.shareUrl;
    const text = button.dataset.shareText;
    if (navigator.share) {
      try {
        await navigator.share({ title: poem.title, text, url });
      } catch (error) {
        console.warn(error);
      }
    }
  });

  detailRoot.querySelector('[data-copy-link]')?.addEventListener('click', async (event) => {
    const button = event.currentTarget;
    try {
      await navigator.clipboard.writeText(button.dataset.shareUrl);
      button.textContent = 'Link copied';
      setTimeout(() => {
        button.textContent = 'Copy link';
      }, 1500);
    } catch (error) {
      console.warn(error);
    }
  });

}

const startPoemViews = () => {
  if (document.getElementById('poemLibrary') || document.getElementById('featuredPoems')) {
    initPoemLibrary();
  }
  if (document.getElementById('poemDetail')) {
    initPoemDetail();
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startPoemViews, { once: true });
} else {
  startPoemViews();
}
