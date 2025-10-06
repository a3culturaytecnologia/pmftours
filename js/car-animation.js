/* Todo el código JavaScript de la animación */
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔄 Iniciando animación del carro...');
    
    const car = document.getElementById('pmfCar');
    if (!car) {
        console.warn('⚠️ Elemento del carro no encontrado');
        return;
    }
    console.log('✅ Elemento del carro encontrado');

    let ticking = false;
    let lastKnownScrollPosition = 0;

    function updateCarPosition(scrollPos) {
        const height = Math.max(
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight,
            document.documentElement.clientHeight
        );
        const windowHeight = window.innerHeight;
        const scrollPercent = (scrollPos / (height - windowHeight)) * 100;
        
        // Calcular posición horizontal
        const maxX = window.innerWidth - (car.offsetWidth || 100);
        const posX = (scrollPercent / 100) * maxX;
        
        // Aplicar transformación con suavizado
        car.style.transform = `translateX(${posX}px)`;
        car.style.opacity = '1';
    }

    window.addEventListener('scroll', function() {
        lastKnownScrollPosition = window.scrollY;
        
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateCarPosition(lastKnownScrollPosition);
                ticking = false;
            });
            ticking = true;
        }
    });

    // Posición inicial
    updateCarPosition(window.scrollY);
    console.log('🚗 Animación del carro inicializada');
});