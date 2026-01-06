// PMF Tours - JavaScript Principal
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 PMF Tours cargado exitosamente');

    // Registro del Service Worker con manejo de errores mejorado
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./service-worker.js')
                .then(registration => {
                    console.log('✅ Service Worker registrado:', registration);
                })
                .catch(error => {
                    console.error('❌ Error al registrar Service Worker:', error);
                });
        });
    }

    // Inicialización segura de componentes
    const initializeComponents = () => {
        try {
            initMobileMenu();
            initScrollEffects();
            initBackToTop();
            initContactForm();
            initCarAnimation(); // Agregar inicialización del carro
            initFAQ(); // Agregar esta línea
        } catch (error) {
            console.error('❌ Error al inicializar componentes:', error);
        }
    };

    // Inicializar componentes al cargar
    initializeComponents();
});

// Menú móvil
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    const overlay = document.getElementById('menuOverlay');

    if (!mobileMenuToggle || !navLinks) return;

    // Crear overlay si no existe
    if (!overlay) {
        const newOverlay = document.createElement('div');
        newOverlay.id = 'menuOverlay';
        newOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 998;
            display: none;
            transition: opacity 0.3s ease;
        `;
        document.body.appendChild(newOverlay);
    }

    function toggleMenu(show) {
        const overlay = document.getElementById('menuOverlay');
        if (show) {
            navLinks.classList.add('active');
            mobileMenuToggle.classList.add('active');
            if (overlay) overlay.style.display = 'block';
        } else {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            if (overlay) overlay.style.display = 'none';
        }
    }

    mobileMenuToggle.addEventListener('click', function() {
        const isOpening = !navLinks.classList.contains('active');
        toggleMenu(isOpening);
    });

    // Cerrar menú al hacer clic en un enlace o en el overlay
    document.addEventListener('click', (e) => {
        if (e.target.closest('#navLinks a') || e.target.id === 'menuOverlay') {
            toggleMenu(false);
        }
    });
}

// Efectos de scroll
function initScrollEffects() {
    const header = document.getElementById('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '';
            header.style.backdropFilter = '';
        }
    });
}

// Botón "Volver arriba"
function initBackToTop() {
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.id = 'backToTop';
    backToTopButton.setAttribute('aria-label', 'Volver arriba');
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: #a70007;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.pointerEvents = 'auto';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.pointerEvents = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// FORMULARIO DE CONTACTO - VERSIÓN CORREGIDA
// ============================================

function initContactForm() {
    const form = document.getElementById('contactForm');

    if (!form) {
        console.warn('⚠️ Formulario no encontrado');
        return;
    }

    console.log('🔄 Cargando form handler...');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Validación de campos
        const formFields = {
            name: document.getElementById('name'),
            email: document.getElementById('email'),
            tourType: document.getElementById('tourType'),
            message: document.getElementById('message')
        };

        // Verificar que existan todos los campos
        for (const [key, field] of Object.entries(formFields)) {
            if (!field) {
                console.error(`❌ Campo ${key} no encontrado`);
                showNotification('⚠️ Error en el formulario. Contacta al administrador', 'error');
                return;
            }
        }

        // Obtener y validar valores
        const formData = {
            name: formFields.name.value.trim(),
            email: formFields.email.value.trim(),
            tourType: formFields.tourType.value,
            message: formFields.message.value.trim()
        };

        // Validaciones
        if (!formData.name || !formData.email || !formData.tourType) {
            showNotification('⚠️ Por favor completa todos los campos requeridos', 'error');
            return;
        }

        try {
            // Procesar formulario
            await processContactForm(formData);
            showNotification('✅ ¡Mensaje enviado! Te contactaremos pronto', 'success');
            form.reset();
        } catch (error) {
            console.error('❌ Error al procesar formulario:', error);
            showNotification('❌ Hubo un problema. Intenta nuevamente', 'error');
        }
    });

    console.log('✅ Form handler inicializado');
}

// Función para procesar el formulario
async function processContactForm(formData) {
    const tourNames = {
        'city-tour': 'Welcome City Tour',
        'beach': 'Beach Day Escape',
        'cultural': 'Cultural & History Tour',
        'airport': 'Traslado Aeropuerto',
        'custom': 'Tour Personalizado'
    };

    let whatsappMessage = `¡Hola! Mi nombre es ${formData.name}\n\n`;
    whatsappMessage += `📧 Email: ${formData.email}\n`;
    whatsappMessage += `🗺️ Tour: ${tourNames[formData.tourType]}\n`;

    if (formData.message) {
        whatsappMessage += `\n💬 Mensaje:\n${formData.message}\n`;
    }

    const phoneNumber = '50765347412';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank');
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Estilos
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 25px',
        borderRadius: '8px',
        backgroundColor: type === 'error' ? '#a70007' : '#058600',
        color: 'white',
        zIndex: 1000,
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    });

    document.body.appendChild(notification);

    // Remover después de 5 segundos
    setTimeout(() => notification.remove(), 5000);
}

// Animación del carro
function initCarAnimation() {
    const car = document.getElementById('movingCar');
    if (!car) {
        console.warn('⚠️ Elemento del carro no encontrado');
        return;
    }

    let lastKnownScrollPosition = 0;
    let ticking = false;

    const updateCarPosition = () => {
        try {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const documentHeight = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
            );

            // Calcular progreso del scroll
            const maxScroll = documentHeight - windowHeight;
            const scrollProgress = Math.max(0, Math.min(1, scrollTop / maxScroll));

            // Calcular nueva posición
            const carWidth = car.offsetWidth || 100; // Valor por defecto si no está disponible
            const maxX = window.innerWidth - carWidth;
            const newX = scrollProgress * maxX;

            // Aplicar transformación
            car.style.transform = `translateX(${newX}px)`;
            car.style.opacity = '1'; // Asegurar visibilidad

        } catch (error) {
            console.error('❌ Error en animación del carro:', error);
        }
    };

    // Optimizar eventos de scroll
    window.addEventListener('scroll', () => {
        lastKnownScrollPosition = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateCarPosition();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Inicializar posición
    updateCarPosition();
    console.log('✅ Animación del carro inicializada');
}

// Inicializar FAQ
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    if (!faqItems.length) {
        console.warn('⚠️ No se encontraron elementos FAQ');
        return;
    }

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (!question || !answer) return;

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Cerrar todos los items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
                const otherAnswer = faq.querySelector('.faq-answer');
                if (otherAnswer) otherAnswer.style.maxHeight = null;
            });

            // Abrir el clickeado si estaba cerrado
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = `${answer.scrollHeight}px`;
            }
        });
    });

    console.log('✅ FAQ inicializado con animaciones mejoradas');
}
