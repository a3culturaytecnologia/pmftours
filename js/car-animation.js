/* Todo el código JavaScript de la animación */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🔄 Iniciando animación del carro...');

    // Obtener elemento del carro
    const carElement = document.getElementById('pmfCar');
    
    // Verificar si existe
    if (!carElement) {
        console.warn('⚠️ No se encontró el elemento del carro (#pmfCar)');
        return;
    }

    console.log('✅ Elemento del carro encontrado');

    // Variables de estado
    let lastScrollTop = 0;
    let scrollVelocity = 0;
    let direction = 'down';
    let isScrolling;
    let introComplete = false;
    
    function playIntro() {
        carElement.classList.add('intro', 'moving');
        
        setTimeout(() => {
            carElement.classList.remove('intro');
            introComplete = true;
            console.log('🚗 PMF Tours: Kia listo para el tour');
        }, 2500);
    }
    
    // Iniciar animación
    setTimeout(() => {
        carElement.classList.add('driving');
    }, 1000);

    // Reiniciar animación cuando termine
    carElement.addEventListener('animationend', () => {
        carElement.style.left = '-150px';
        setTimeout(() => {
            carElement.classList.remove('driving');
            requestAnimationFrame(() => {
                carElement.classList.add('driving');
            });
        }, 100);
    });

    // Click en el carro
    carElement.addEventListener('click', () => {
        window.location.href = '#servicios';
    });
    
    // Event Listeners
    window.addEventListener('load', () => {
        setTimeout(playIntro, 1000);
    });
    
    function updateCarPosition() {
        if (!carElement || !introComplete) return;

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        // Calcular posición horizontal
        const carWidth = 150;
        const maxPosition = window.innerWidth - carWidth;
        const carPosition = Math.max(0, (scrollPercent / 100) * maxPosition);
        
        // Actualizar posición
        carElement.style.left = carPosition + 'px';
        
        // Actualizar animación basada en velocidad
        scrollVelocity = Math.abs(scrollTop - lastScrollTop);
        
        carElement.classList.remove('idle', 'fast', 'moving');
        
        if (scrollVelocity > 30) {
            carElement.classList.add('moving', 'fast');
        } else if (scrollVelocity < 2) {
            carElement.classList.add('idle');
        } else {
            carElement.classList.add('moving');
        }
        
        // Actualizar dirección
        if (scrollTop > lastScrollTop && direction !== 'down') {
            direction = 'down';
            carElement.style.transform = 'scaleX(1)';
        } else if (scrollTop < lastScrollTop && direction !== 'up') {
            direction = 'up';
            carElement.style.transform = 'scaleX(-1)';
        }
        
        lastScrollTop = scrollTop;
    }

    // Event Listeners para scroll
    window.addEventListener('scroll', () => {
        requestAnimationFrame(updateCarPosition);
    }, { passive: true });
    
    // Soporte para dispositivos táctiles
    if ('ontouchstart' in window) {
        window.addEventListener('touchmove', () => {
            requestAnimationFrame(updateCarPosition);
        }, { passive: true });
    }
    
    // Actualizar en cambios de tamaño
    window.addEventListener('resize', () => {
        requestAnimationFrame(updateCarPosition);
    });
    
    console.log('🚗 Animación del carro inicializada');
});