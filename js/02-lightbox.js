import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

function galleryItem() {
    const markup = galleryItems
    .map(
        ({ original, preview, description }) => 
          `<a class="gallery__item" href="${original}">
             <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
          </a>`)
    .join('');
    return markup;
};

gallery.insertAdjacentHTML("beforeend", galleryItem());

gallery.addEventListener("click", (ev) => {
  ev.preventDefault();
});


const lightbox = new SimpleLightbox('.gallery a', { 
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);

