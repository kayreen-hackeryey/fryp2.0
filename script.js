/* ==================================================
   FRYPULSE HERO SLIDESHOW
================================================== */

const slides = document.querySelectorAll(".hero-slide");
const slideNumber = document.querySelector(".slide-number");
const progress = document.querySelector(".indicator-progress");

let currentSlide = 0;

function changeSlide() {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");

    slideNumber.textContent =
        String(currentSlide + 1).padStart(2, "0");

    progress.style.width =
        `${((currentSlide + 1) / slides.length) * 100}%`;
}


/*
   Change image every 4 seconds
*/

setInterval(changeSlide, 4000);