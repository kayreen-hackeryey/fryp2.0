/* ==================================================
   GALLERY FILTER
================================================== */

const galleryFilters = document.querySelectorAll(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");

galleryFilters.forEach(button => {

    button.addEventListener("click", () => {

        galleryFilters.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const selectedCategory = button.dataset.filter;

        galleryItems.forEach(item => {

            const itemCategory = item.dataset.category;

            if (
                selectedCategory === "all" ||
                itemCategory === selectedCategory
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


/* ==================================================
   LIGHTBOX
================================================== */

const lightbox = document.getElementById("galleryLightbox");
const lightboxClose = document.getElementById("lightboxClose");

const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxCategory = document.getElementById("lightboxCategory");


galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const image = item.dataset.image;
        const title = item.dataset.title;
        const caption = item.dataset.caption;
        const category = item.dataset.categoryName;

        lightboxImage.src = image;
        lightboxImage.alt = title;

        lightboxTitle.textContent = title;
        lightboxCaption.textContent = caption;
        lightboxCategory.textContent = category;

        lightbox.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


/* ==================================================
   CLOSE LIGHTBOX
================================================== */

function closeLightbox() {

    lightbox.classList.remove("show");

    document.body.style.overflow = "";

}


lightboxClose.addEventListener("click", closeLightbox);


/* Click outside */

document.querySelector(".lightbox-backdrop")
    .addEventListener("click", closeLightbox);


/* Escape key */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeLightbox();
    }

});