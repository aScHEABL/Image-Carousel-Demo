let newIndex = 0;

function autoSlider() {
    newIndex++;
    if (newIndex === 3) newIndex = 0;
    const activeSlide = document.querySelector("[data-active]");
    const slides = document
    .querySelector("[data-carousel]")
    .querySelector("[data-slides]");

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
}

setInterval(autoSlider, 3000);