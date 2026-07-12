const POEMS_URL = 'data/poems.json';

async function loadPoems() {
  const response = await fetch(POEMS_URL);
  if (!response.ok) throw new Error('Unable to load poems');
  return response.json();
}

function createPoemCard(poem) {
  const article = document.createElement('article');
  article.className = 'poem-card reveal';
  article.innerHTML = `
    <img class="thumb" src="${poem.thumbnail}" alt="${poem.altText}" loading="lazy" />
    <div class="meta-row">
      <span class="pill">📅 ${new Date(poem.publishDate).getFullYear()}</span>
      <span class="pill">⏱ ${poem.duration}</span>
      <span class="pill">✦ ${poem.category}</span>
    </div>
    <h3>${poem.title}</h3>
    <p class="caption">${poem.caption}</p>
    <div class="actions">
      <a class="ghost-btn" href="poem.html?slug=${poem.slug}">Read more</a>
      <a class="primary-btn" href="poem.html?slug=${poem.slug}">Play</a>
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
}

function filterPoems(poems, query, activeFilter) {
  const normalizedQuery = query.trim().toLowerCase();
  return poems.filter((poem) => {
    const matchesQuery = !normalizedQuery || [
      poem.title,
      poem.caption,
      poem.category,
      poem.mood,
      poem.language,
      poem.tags.join(' ')
    ].join(' ').toLowerCase().includes(normalizedQuery);
    const matchesFilter = activeFilter === 'all' || poem.category.toLowerCase() === activeFilter.toLowerCase() || poem.mood.toLowerCase() === activeFilter.toLowerCase();
    return matchesQuery && matchesFilter;
  });
}

async function initPoemLibrary() {
  const container = document.getElementById('poemLibrary');
  const searchInput = document.getElementById('poemSearch');
  const chips = Array.from(document.querySelectorAll('.filter-chip'));
  const featuredContainer = document.getElementById('featuredPoems');
  if (!container) return;

  try {
    const poems = await loadPoems();
    const featured = poems.filter((poem) => poem.featured).slice(0, 4);
    const published = poems.filter((poem) => !poem.draft && poem.visibility === 'published');

    if (featuredContainer) {
      renderPoems(featured, featuredContainer);
    }

    let activeFilter = 'all';
    let currentQuery = '';

    const refresh = () => {
      const visible = filterPoems(published, currentQuery, activeFilter);
      renderPoems(visible, container);
    };

    searchInput?.addEventListener('input', (event) => {
      currentQuery = event.target.value;
      refresh();
    });

    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        chips.forEach((item) => item.classList.remove('active'));
        chip.classList.add('active');
        activeFilter = chip.dataset.filter || 'all';
        refresh();
      });
    });

    refresh();
  } catch (error) {
    container.innerHTML = '<p class="section-card">The poetry archive could not be loaded right now.</p>';
    console.error(error);
  }
}

async function initPoemDetail() {
  const detailRoot = document.getElementById('poemDetail');
  if (!detailRoot) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const poems = await loadPoems();
  const poem = poems.find((entry) => entry.slug === slug);

  if (!poem) {
    detailRoot.innerHTML = '<p class="section-card">This poem could not be found.</p>';
    return;
  }

  document.title = `${poem.title} | Diya Subedi`;
  detailRoot.innerHTML = `
    <div class="detail-shell reveal">
      <div class="detail-hero">
        <img src="${poem.heroImage}" alt="${poem.altText}" />
        <div>
          <p class="eyebrow">${poem.category}</p>
          <h1>${poem.title}</h1>
          <p class="page-intro">${poem.caption}</p>
          <div class="meta-row">
            <span class="pill">📅 ${new Date(poem.publishDate).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span class="pill">⏱ ${poem.duration}</span>
            <span class="pill">🗣 ${poem.language}</span>
          </div>
          <div class="actions">
            <a class="primary-btn" href="poems.html">Explore all poems</a>
            <a class="ghost-btn" href="${poem.instagramUrl}" target="_blank" rel="noreferrer">Instagram reel</a>
          </div>
        </div>
      </div>
      <div class="quote-card reveal">
        <strong>“${poem.quote}”</strong>
      </div>
      <div class="section-card reveal">
        <h2>About this poem</h2>
        <p>${poem.meaning}</p>
        <p><strong>Author’s note:</strong> ${poem.authorNotes}</p>
        <p><strong>Inspiration:</strong> ${poem.inspiration}</p>
      </div>
      <div class="section-card reveal">
        <h2>Full poem</h2>
        <p class="poem-body">${poem.fullPoem}</p>
      </div>
      <div class="section-card reveal">
        <h2>Related poems</h2>
        <div class="related-grid">
          ${poems.filter((entry) => poem.relatedPoems.includes(entry.id)).map((entry) => `
            <a class="related-card" href="poem.html?slug=${entry.slug}">
              <strong>${entry.title}</strong>
              <p>${entry.caption}</p>
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('poemLibrary') || document.getElementById('featuredPoems')) {
    initPoemLibrary();
  }
  if (document.getElementById('poemDetail')) {
    initPoemDetail();
  }
});
