/* Todo el código JavaScript de la animación */
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔄 Iniciando animación del carro...');
    
    const car = document.querySelector('#pmfCar');
    if (!car) {
        console.warn('⚠️ Elemento del carro no encontrado');
        return;
    }
    console.log('✅ Elemento del carro encontrado');

    let ticking = false;
    let lastKnownScrollPosition = 0;

    function updateCarPosition(scrollPos) {
        try {
            const height = Math.max(
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight,
                document.documentElement.clientHeight
            );
            const windowHeight = window.innerHeight;
            const scrollPercent = (scrollPos / (height - windowHeight)) * 100;
            
            // Calcular posición horizontal con límites seguros
            const carWidth = car.offsetWidth || 100;
            const maxX = Math.max(0, window.innerWidth - carWidth);
            const posX = Math.min(maxX, (scrollPercent / 100) * maxX);
            
            // Aplicar transformación con suavizado
            requestAnimationFrame(() => {
                car.style.transform = `translateX(${posX}px)`;
                car.style.opacity = '1';
            });
        } catch (error) {
            console.error('❌ Error en animación:', error);
        }
    }

    // Optimizar evento de scroll con throttling
    window.addEventListener('scroll', function() {
        lastKnownScrollPosition = window.scrollY;
        
        if (!ticking) {
            requestAnimationFrame(() => {
                updateCarPosition(lastKnownScrollPosition);
                ticking = false;
            });
            ticking = true;
        }
    });

    // Posición inicial y resize handler
    updateCarPosition(window.scrollY);
    window.addEventListener('resize', () => updateCarPosition(window.scrollY));
    console.log('🚗 Animación del carro inicializada');
});