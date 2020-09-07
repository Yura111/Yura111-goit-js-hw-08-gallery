import images from "./gallery-items";

const refs = {
    gallery: document.querySelector(".js-gallery"),
    image: document.createElement("img"),
    lightbox: document.querySelector(".lightbox"),
    bth: document.querySelector('[data-action="close-lightbox"]'),
    modal: document.querySelector(".lightbox_image"),
};

const createGalleryItem = ({preview, original, description}) => `
<li class="gallery_item">
<a class= "gallery_link"
href=${original}>
<img class="gallery_image"
src=${preview}
data-source=${original}
alt=${description}/>
</a>
</li>`;
const galleryMarkup = images.reduce((acc, item) => acc + createGalleryItem(item),
"");
refs.gallery.insertAdjacentHTML("afterbegin", galleryMarkup);
refs.image.classList.add("gallery_image");
refs.gallery.addEventListener("click", onGalleryClick);
refs.btn.addEventListener("click", onClickHandlerClose);
refs.modal.addEventListener("click", closeLightbox);

function onGalleryClick(e){
    e.preventDefault();
    if (e.target.nodeName !=='IMG'){
        return;
    }
    if (e.target.nodeName === "IMG") {
        refs.lightbox.classList.add("is-open");
        refs.lightbox_image.src = e.target.getAttribute("data-source");
        refs.lightbox_image.alt = e.target.alt;
    }
    window.addEventListener("keyup", clickKey);
}

function onClickHandlerClose(e){
    e.preventDefault();
    refs.lightbox.classList.remove("is-open");
    refs.lightbox_image.src = '';
    refs.lightbox-image.alt = '';
    window.removeEventListener("keyup", clickKey);
}

function closeLightbox(event) {
    if (event.target === event.currentTarget){
        onClickHandlerClose()
    }
}

function clickKey(event){
    if (event.code === "Escape"){
        onClickHandlerClose();
    }
}

