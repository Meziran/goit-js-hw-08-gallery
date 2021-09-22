import galerySRC from "./app.js";

const galeryEl = document.querySelector(".js-gallery");
const modal = document.querySelector(".lightbox");
const modalImg = document.querySelector(".lightbox__image");
const modalOveray = document.querySelector("lightbox__overlay");

const imgArray = galerySRC.reduce(
  (acc, image) =>
    acc +
    `<li class = 'gallery__item'> 

   <a    class="gallery__link"
   href = "${image.original}">

    <img class = 'gallery__image' 
    src = "${image.preview}"
    data-source = "${image.original}"
    alt = "${image.description}"
    >`,
  ""
);

const imagesRef = galeryEl.insertAdjacentHTML("afterbegin", imgArray);
// galeryEl.forEach((element) => {
//   element.addEventListener("click", function (e) {
//     modalRef.classList.add("is-open");
//     modalContentRef.src = element.dataset.source;
//   });
// });

const openModal = (e) => {
  const imgTarget = e.target;
  if (!imgTarget.classList.contains("gallery__image")) {
    return;
  }
  e.preventDefault();
  // window.addEventListener("keydown", onEscKeyPress);
  // window.addEventListener("keydown", onArrowKeyPress);
  modal.classList.add("is-open");
  modalImg.src = imgTarget.dataset.source;
  modalImg.alt = imgTarget.alt;
};
galeryEl.addEventListener("click", openModal);
