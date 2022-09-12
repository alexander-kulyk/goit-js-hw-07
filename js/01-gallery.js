import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML('beforeend',createGalleryItemsMarkup(galleryItems));

galleryContainer.addEventListener('click',onGalleryImagesClick);

//----Створення розмітки-------------------

function createGalleryItemsMarkup(gallary) {
    
    const gallaryMarkup = gallary.map(({preview, original, description}) =>{
        return`
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img 
          class="gallery__image"
          src="${preview}"
          data-source="${original}" 
          alt="${description}">
        </a>
      
      </div>`
    }).join('');
    return gallaryMarkup;
};


function onGalleryImagesClick(evt) {

    //--заборона стандартних дій браузера
    evt.preventDefault();

    //---перевіряю чи елемент має клас gallery__image, якщо ні  - вихожу
    if (!evt.target.classList.contains('gallery__image')) {
        return; 
    };
    

    //--якщо так запускаю бібліотеку
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">`);
    
    instance.show();


    //-----Закриття модалки-------------
    window.addEventListener('keydown', (evt) =>{
        if (evt.code === 'Escape') {
            instance.close();
        };
    });
};









