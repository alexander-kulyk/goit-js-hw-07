import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML('beforeend',createGalleryItemsMarkup(galleryItems));

galleryContainer.addEventListener('click',onGalleryImagesClick);

//----Створення розмітки-------------------

function createGalleryItemsMarkup(gallery) {
    
    // const gallaryMarkup = gallary.map(({preview, original, description}) =>{
    //     return`
    //     <div class="gallery__item">
    //     <a class="gallery__link" href="${original}">
    //       <img 
    //       class="gallery__image"
    //       src="${preview}"
    //       data-source="${original}" 
    //       alt="${description}">
    //     </a>
      
    //   </div>`
    // }).join('');


    // інший варіант створення розмітки. Через reduce, не використовуємо .join('')

    const galleryMarkup = gallery.reduce((acc, {preview, original, description}) =>{
        return acc +`
         <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img 
                class="gallery__image"
                src="${preview}"
                data-source="${original}" 
                alt="${description}">
            </a>
      
        </div>`
    }, '');

    return galleryMarkup;
};


function onGalleryImagesClick(evt) {

    //--заборона стандартних дій браузера
    evt.preventDefault();

    //---перевіряю чи є IMG, якщо ні  - вихожу
    if (evt.target.nodeName !== 'IMG') {
        return; 
    };
    

    //--якщо так запускаю бібліотеку
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">`);
    
    instance.show();


    //-----Закриття зображення-------------
    window.addEventListener('keydown',onEscPress, {once: true});

    function onEscPress(evt) {
        if (evt.code === 'Escape') {
            
            instance.close();

            //  інший варіант видалити EventListener
            // window.removeEventListener('keydown',onEscPress);
        };
    };

};










