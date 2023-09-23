// JavaScript para controlar a animação dos keyframes

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const slides = carousel.querySelectorAll(".slide");
    let currentIndex = 0;

    function nextSlide() {
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add("active");
    }

    // Inicia a animação a cada 5 segundos (5000ms)
    const interval = setInterval(nextSlide, 5000);
});
