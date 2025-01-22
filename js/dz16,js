// 1. Створення і рендер розмітки
function createGalleryItemsMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `
    )
    .join('');
}

const galleryContainer = document.querySelector('.js-gallery');
galleryContainer.innerHTML = createGalleryItemsMarkup(galleryItems);

// 2. Делегування і відкриття модального вікна
galleryContainer.addEventListener('click', onGalleryClick);

const modal = document.querySelector('.lightbox');
const modalImage = modal.querySelector('.lightbox__image');
const closeButton = modal.querySelector('button[data-action="close-lightbox"]');

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;

  const largeImageURL = event.target.dataset.source;
  openModal(largeImageURL);
}

// 3. Відкриття модального вікна
function openModal(url) {
  modal.classList.add('is-open');
  modalImage.src = url;
}

// 4. Закриття модального вікна
closeButton.addEventListener('click', closeModal);

function closeModal() {
  modal.classList.remove('is-open');
  modalImage.src = '';
}
