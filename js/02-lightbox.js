import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = createGalleryItemsMarkup(galleryItems);


//----Створення розмітки-------------------

function createGalleryItemsMarkup(gallery) {

    const galleryMarkup = gallery.map(({preview, original, description}) =>{
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    }).join('');
    
    return galleryMarkup;
};

//---галерея SimpleLightbox---------------

var lightbox = new SimpleLightbox('.gallery .gallery__item', {captionsData:'alt',captionDelay: 250});
