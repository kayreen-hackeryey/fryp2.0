/* ==================================================
   FROCALS FILTER
================================================== */

const filterButtons = document.querySelectorAll(".filter-btn");
const frocalCards = document.querySelectorAll(".frocal-profile-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove active state */

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        /* Get selected category */

        const filter = button.dataset.filter;


        /* Show / hide cards */

        frocalCards.forEach(card => {

            const category = card.dataset.category;

            if (filter === "all" || category === filter) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* ==================================================
   FROCAL MODAL
================================================== */

const modal = document.getElementById("frocalModal");
const modalClose = document.getElementById("modalClose");

const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalLocation = document.getElementById("modalLocation");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");
const modalStory = document.getElementById("modalStory");
const modalProducts = document.getElementById("modalProducts");
const modalContact = document.getElementById("modalContact");


/* CLICK CARD */

frocalCards.forEach(card => {

    card.addEventListener("click", () => {

        /* Get information from card */

        const name = card.dataset.name;
        const location = card.dataset.location;
        const category = card.dataset.categoryName;
        const description = card.dataset.description;
        const story = card.dataset.story;
        const products = card.dataset.products;
        const contact = card.dataset.contact;
        const image = card.dataset.image;


        /* Put information into modal */

        modalName.textContent = name;

        modalLocation.textContent =
            "📍 " + location;

        modalCategory.textContent =
            category.toUpperCase();

        modalDescription.textContent =
            description;

        modalStory.textContent =
            story;

        modalProducts.textContent =
            products;

        modalContact.textContent =
            contact;

        modalImage.src =
            image;


        /* Show modal */

        modal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


/* CLOSE MODAL */

function closeModal() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


modalClose.addEventListener("click", closeModal);


/* CLICK OUTSIDE MODAL */

document.querySelector(".modal-overlay").addEventListener(
    "click",
    closeModal
);


/* ESC KEY */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeModal();

    }

});