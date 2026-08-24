document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.querySelector('[data-gallery-open]');
  const dialog = document.querySelector('[data-gallery-dialog]');
  const closeButton = dialog?.querySelector('[data-gallery-close]');
  const previousButton = dialog?.querySelector('[data-gallery-previous]');
  const nextButton = dialog?.querySelector('[data-gallery-next]');
  const image = dialog?.querySelector('[data-gallery-image]');
  const count = dialog?.querySelector('[data-gallery-count]');
  const thumbnails = dialog?.querySelector('[data-gallery-thumbnails]');
  const images = Array.from({ length: 5 }, (_, index) => `assets/galary/${index + 1}.jpg`);
  let currentIndex = 0;

  if (!openButton || !dialog || !closeButton || !previousButton || !nextButton || !image || !count || !thumbnails) return;

  images.forEach((source, index) => {
    const thumbnail = document.createElement('button');
    thumbnail.type = 'button';
    thumbnail.className = 'gallery-thumb';
    thumbnail.setAttribute('aria-label', `Show gallery photo ${index + 1}`);
    thumbnail.dataset.galleryIndex = String(index);

    const thumbnailImage = document.createElement('img');
    thumbnailImage.src = source;
    thumbnailImage.alt = '';
    thumbnailImage.loading = 'lazy';
    thumbnail.appendChild(thumbnailImage);
    thumbnails.appendChild(thumbnail);
  });

  const updateGallery = (index) => {
    currentIndex = (index + images.length) % images.length;
    image.src = images[currentIndex];
    image.alt = `Gallery photo ${currentIndex + 1} of ${images.length}`;
    count.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}`;
    thumbnails.querySelectorAll('.gallery-thumb').forEach((thumbnail, thumbnailIndex) => {
      const active = thumbnailIndex === currentIndex;
      thumbnail.classList.toggle('is-active', active);
      thumbnail.setAttribute('aria-current', active ? 'true' : 'false');
    });
  };

  const closeGallery = () => {
    dialog.close();
    openButton.focus();
  };

  openButton.addEventListener('click', () => {
    updateGallery(currentIndex);
    dialog.showModal();
  });
  closeButton.addEventListener('click', closeGallery);
  previousButton.addEventListener('click', () => updateGallery(currentIndex - 1));
  nextButton.addEventListener('click', () => updateGallery(currentIndex + 1));
  thumbnails.addEventListener('click', (event) => {
    const thumbnail = event.target.closest('[data-gallery-index]');
    if (thumbnail) updateGallery(Number(thumbnail.dataset.galleryIndex));
  });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeGallery();
  });
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') updateGallery(currentIndex - 1);
    if (event.key === 'ArrowRight') updateGallery(currentIndex + 1);
  });

  updateGallery(0);
});
