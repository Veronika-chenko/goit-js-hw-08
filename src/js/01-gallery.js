import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox"; 
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));
galleryEl.addEventListener('click', setModal);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image"
            src="${preview}" alt="${description}" title="${description}"/>
        </a>`;
    })
    .join('');
}

function setModal(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
    
  let gallery = new SimpleLightbox(".gallery a");

  gallery.on("show.simplelightbox", function () {
    gallery.defaultOptions.captionDelay = 250;
  });
}

