document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.querySelector('[data-gallery-open]');
  const dialog = document.querySelector('[data-gallery-dialog]');
  const closeButton = dialog?.querySelector('[data-gallery-close]');
  const previousButton = dialog?.querySelector('[data-gallery-previous]');
  const nextButton = dialog?.querySelector('[data-gallery-next]');
  const image = dialog?.querySelector('[data-gallery-image]');
  const count = dialog?.querySelector('[data-gallery-count]');
  const thumbnails = dialog?.querySelector('[data-gallery-thumbnails]');
  const galleryItems = [
    'diya.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg',
    '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '55.jpg', '66.jpg',
    'video1.mp4', 'video2.mp4'
  ].map((file) => ({
    type: file.endsWith('.mp4') ? 'video' : 'image',
    source: `assets/galary/${file}`
  }));
  let currentIndex = 0;
  const galleryVideo = dialog?.querySelector('[data-gallery-video]');

  if (!openButton || !dialog || !closeButton || !previousButton || !nextButton || !image || !galleryVideo || !count || !thumbnails) return;

  galleryItems.forEach((item, index) => {
    const thumbnail = document.createElement('button');
    thumbnail.type = 'button';
    thumbnail.className = 'gallery-thumb';
    thumbnail.setAttribute('aria-label', `Show gallery moment ${index + 1}`);
    thumbnail.dataset.galleryIndex = String(index);

    if (item.type === 'video') {
      const thumbnailVideo = document.createElement('video');
      thumbnailVideo.src = item.source;
      thumbnailVideo.muted = true;
      thumbnailVideo.preload = 'metadata';
      thumbnailVideo.setAttribute('aria-hidden', 'true');
      thumbnail.appendChild(thumbnailVideo);
    } else {
      const thumbnailImage = document.createElement('img');
      thumbnailImage.src = item.source;
      thumbnailImage.alt = '';
      thumbnailImage.loading = 'lazy';
      thumbnail.appendChild(thumbnailImage);
    }
    thumbnails.appendChild(thumbnail);
  });

  const updateGallery = (index) => {
    currentIndex = (index + galleryItems.length) % galleryItems.length;
    const item = galleryItems[currentIndex];
    const total = galleryItems.length;
    image.hidden = item.type === 'video';
    galleryVideo.hidden = item.type !== 'video';
    galleryVideo.pause();
    if (item.type === 'video') {
      galleryVideo.src = item.source;
      galleryVideo.load();
    } else {
      image.src = item.source;
      image.alt = `Gallery photo ${currentIndex + 1} of ${total}`;
    }
    count.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
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
