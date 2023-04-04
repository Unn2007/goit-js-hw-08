// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector(".gallery");
galleryList.innerHTML = createGalleryMarkup(galleryItems);
function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a></li>`;
    })
    .join("");
}

const instance = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
