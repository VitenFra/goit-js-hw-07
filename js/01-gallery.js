import { galleryItems } from './gallery-items.js';


console.log(galleryItems);

const galleryContRef = document.querySelector(".gallery");
const imgMod = createItmMod(galleryItems);
galleryContRef.insertAdjacentHTML("beforeend", imgMod);

function createItmMod(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original.value}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}

const containerCatch = (evn) => {
  evn.preventDefault();

  if (evn.target.classList.contains("gallery")) return;
  const source = evn.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`);
    instance.show();
    
};

galleryContRef.addEventListener("click", containerCatch);