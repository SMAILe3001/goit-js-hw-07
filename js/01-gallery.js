import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', galleryItemsGeneration(galleryItems));

function galleryItemsGeneration(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `
				<div class="gallery__item">
					<a class="gallery__link" href="${original}">
						<img
						class="gallery__image"
						src="${preview}"
						data-source="${original}"
						alt="${description}"
						/>
					</a>
				</div>
        	`;
    })
    .join('');
}
