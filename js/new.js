import srcGalery from "./app.js";
const gallery = document.querySelector(".js-gallery");
const modal = document.querySelector(".js-lightbox");
const modalImg = document.querySelector(".lightbox__image");
const closeModal = document.querySelector('[data-action="close-lightbox"]');

function createGallery(srcGalery) {
  return srcGalery
    .map(
      (img) => `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${img.original}"
    >
      <img
        class="gallery__image"
        src="${img.preview}"
        data-source="${img.original}"
        alt="${img.description}"
      />
    </a>
  </li>`
    )
    .join("");
}
gallery.insertAdjacentHTML("afterbegin", createGallery(srcGalery));

function openModal(e) {
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  e.preventDefault();
  modal.classList.add("is-open");

  modalImg.src = e.target.dataset.source;
  modalImg.alt = e.target.alt;
}
gallery.addEventListener("click", openModal);
