import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

function galleryItem() {
    const markup = galleryItems
    .map(
        ({ original, preview, description }) => 
      `<div class="gallery__item">
         <a class="gallery__link" href="${original}">
             <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
          </a>
       </div>`)
        .join('');
    return markup;
    
};
gallery.insertAdjacentHTML("beforeend", galleryItem());

let instance = null;

gallery.addEventListener("click", ev => {
    ev.preventDefault();
    if (ev.target.nodeName !== "IMG") {
        return;
    }
    instance = basicLightbox.create(
        `<img src="${ev.target.dataset.source}" alt="${ev.target.alt}">`);
    instance.show();
    document.addEventListener('keydown', modalClose);
});

function modalClose ( ev ) {
    if (ev.code === "Escape" && instance.visible()) {
        instance.close();}
    document.removeEventListener('keydown', modalClose);
};