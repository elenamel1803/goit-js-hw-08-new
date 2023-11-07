import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const listEl = document.querySelector('.gallery');

const markupGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>`
  )
  .join('');
listEl.insertAdjacentHTML('beforeend', markupGallery);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(lightbox);
