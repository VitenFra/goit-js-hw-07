import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContRef = document.querySelector(".gallery");
const imgMod = createItmMod(galleryItems);
galleryContRef.insertAdjacentHTML("beforeend", imgMod);

function createItmMod(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<ul class="gallery">
      <li>
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"          
          alt="${description}"
        />
      </a>
      </li>
     
    </ul>`;
    })
    .join("");
}

const lightBoxLib = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
});