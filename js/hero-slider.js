document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    if (!slides.length) return;

    let currentSlide = 0;
    const slideInterval = 5000; // Cambiar cada 5 segundos

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Iniciar slider automático
    setInterval(nextSlide, slideInterval);

    // Precargar siguiente imagen
    slides.forEach((slide, index) => {
        if (index > 0) {
            const img = slide.querySelector('img');
            if (img) {
                const newImg = new Image();
                newImg.src = img.src;
            }
        }
    });
});
