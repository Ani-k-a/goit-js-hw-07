import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
galleryItem();

function galleryItem() {
    const markup = galleryItems
    .map(
        ({ original, preview, description }) => 
      `<div class="gallery__item">
         <a class="gallery__link" href="${original}">
             <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
          </a>
       </div>`,)
    .join('');
    
    gallery.innerHTML = markup;
};

gallery.insertAdjacentHTML("beforeend", galleryItem(galleryItems));




let instance = null;
galleryItem.addEventListener("click", ev => {
    ev.preventDefault();
    if (ev.target.nodeName !== "IMG") {
        return;
    }
    instance = basicLightbox.create(
        `<img src="${ev.target.dataset.source}" alt="${evt.target.alt}">`);
    instance.show();
    document.addEventListener('keydown', modalClose);
});



window.addEventListener('click', ev => {
    if (ev.code === "Escape" && instance.visible()) {
        instance.close();}
    document.removeEventListener('keydown', modalClose);
});
