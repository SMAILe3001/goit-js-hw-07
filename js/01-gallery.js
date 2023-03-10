import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("beforeend", galleryItemsGeneration(galleryItems));

function galleryItemsGeneration(galleryItems) {
	return galleryItems
		.map(
			({ preview, description, original }) => `
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
        	`,
		)
		.join("");
}

galleryEl.addEventListener("click", onClick);

function onClick(evt) {
	evt.preventDefault();

	if (evt.target.nodeName !== "IMG") {
		return;
	}

	const instance = basicLightbox.create(
		`
		<img src="${evt.target.dataset.source}">
	`,
	);

	instance.show();

	galleryEl.addEventListener("keydown", onEscKeyPress);

	function onEscKeyPress(evt) {
		if (evt.code !== "Escape") {
			return;
		}
		instance.close();
		galleryEl.removeEventListener("keydown", onEscKeyPress);
	}
}
