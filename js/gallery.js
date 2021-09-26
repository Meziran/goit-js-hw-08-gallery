import galerySRC from "./app.js";

const galeryEl = document.querySelector(".js-gallery");
const modal = document.querySelector(".lightbox");
const modalImg = document.querySelector(".lightbox__image");
// const modalOveray = document.querySelector("lightbox__overlay");
const closeBtn = document.querySelector('[data-action="close-lightbox"]');

// створити галерею
function imgArray(galerySRC) {
  return galerySRC
    .map(
      (img) =>
        `<li class = 'gallery__item'> 

 <a    class="gallery__link"
href = "${img.original}">

    <img class = 'gallery__image' 
    src = "${img.preview}"
    data-source = "${img.original}"
    alt = "${img.description}"
    />
    </a>
    </li>`
    )
    .join("");
}

galeryEl.insertAdjacentHTML("afterbegin", imgArray(galerySRC));

// відкрити модалку
const openModal = (e) => {
  const imgTarget = e.target;
  if (!imgTarget.classList.contains("gallery__image")) {
    return;
  }
  e.preventDefault();

  modal.classList.add("is-open");
  modalImg.src = imgTarget.dataset.source;
  modalImg.alt = imgTarget.alt;
};
galeryEl.addEventListener("click", openModal);

// закрити модалку
const closeModal = () => {
  window.removeEventListener("keydown", onEscPres);
  modal.classList.remove("is-open");
  modalImg.src = "";
  modalImg.alt = "";
};
const onEscPres = (e) => {
  if (e.code === "Escape") {
    closeModal();
  }
};

closeBtn.addEventListener("click", closeModal);
