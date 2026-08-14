/* ================= HERO SLIDESHOW ================= */

const heroSlides = document.querySelectorAll(".hero-slide");

let currentSlide = 0;

function nextHeroSlide() {

    if (!heroSlides.length) {
        return;
    }

    heroSlides[currentSlide].classList.remove("active");

    currentSlide =
        (currentSlide + 1) % heroSlides.length;

    heroSlides[currentSlide].classList.add("active");
}

setInterval(nextHeroSlide, 4500);


/* ================= MOBILE MENU ================= */

const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileMenuButton && mobileMenu) {

    mobileMenuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("show");

        if (mobileMenu.classList.contains("show")) {
            mobileMenuButton.textContent = "×";
        } else {
            mobileMenuButton.textContent = "☰";
        }

    });

    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("show");
            mobileMenuButton.textContent = "☰";

        });

    });
}