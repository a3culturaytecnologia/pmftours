// ============================================
// PMF TOURS - JAVASCRIPT PRINCIPAL
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 PMF Tours cargado exitosamente');

    // Inicializar todos los componentes
    initializeApp();
});

// ============================================
// INICIALIZACIÓN PRINCIPAL
// ============================================

function initializeApp() {
    try {
        initMobileMenu();
        initScrollEffects();
        initBackToTop();
        initContactForm();
        initCarAnimation();
        initFAQ();
        initAOS();
        initServiceWorker();

        console.log('✅ Todos los componentes inicializados');
    } catch (error) {
        console.error('❌ Error al inicializar componentes:', error);
    }
}

// ============================================
// MENÚ MÓVIL
// ============================================

function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!menuToggle || !navLinks) {
        console.warn('⚠️ Elementos del menú móvil no encontrados');
        return;
    }

    // Crear overlay
    let overlay = document.querySelector('.menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
    }

    // Toggle menú
    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.contains('active');
        toggleMenu(!isOpen);
    });

    // Cerrar al hacer clic en overlay
    overlay.addEventListener('click', () => {
        toggleMenu(false);
    });

    // Cerrar al hacer clic en un enlace
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu(false);
        });
    });

    function toggleMenu(show) {
        if (show) {
            navLinks.classList.add('active');
            menuToggle.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    console.log('✅ Menú móvil inicializado');
}

// ============================================
// EFECTOS DE SCROLL
// ============================================

function initScrollEffects() {
    const header = document.querySelector('.header');

    if (!header) {
        console.warn('⚠️ Header no encontrado');
        return;
    }

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Header con efecto glass al hacer scroll
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Ocultar header al hacer scroll down, mostrar al hacer scroll up
        if (currentScroll > lastScroll && currentScroll > 500) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    console.log('✅ Efectos de scroll inicializados');
}

// ============================================
// BOTÓN "VOLVER ARRIBA"
// ============================================

function initBackToTop() {
    // Crear botón si no existe
    let backToTop = document.querySelector('.back-to-top');

    if (!backToTop) {
        backToTop = document.createElement('button');
        backToTop.className = 'back-to-top';
        backToTop.innerHTML = '<i class="bx bx-chevron-up"></i>';
        backToTop.setAttribute('aria-label', 'Volver arriba');
        document.body.appendChild(backToTop);
    }

    // Mostrar/ocultar según scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Scroll suave al hacer clic
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    console.log('✅ Botón "volver arriba" inicializado');
}

// ============================================
// FORMULARIO DE CONTACTO
// ============================================

function initContactForm() {
    const form = document.getElementById('contactForm');

    if (!form) {
        console.warn('⚠️ Formulario de contacto no encontrado');
        return;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Obtener campos
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const tourType = document.getElementById('tourType');
        const message = document.getElementById('message');

        // Validar que existan los campos
        if (!name || !email || !tourType) {
            showNotification('❌ Error: Campos del formulario no encontrados', 'error');
            return;
        }

        // Validar valores
        const formData = {
            name: name.value.trim(),
            email: email.value.trim(),
            tourType: tourType.value,
            message: message ? message.value.trim() : ''
        };

        if (!formData.name || !formData.email || !formData.tourType) {
            showNotification('⚠️ Por favor completa todos los campos requeridos', 'warning');
            return;
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showNotification('⚠️ Por favor ingresa un email válido', 'warning');
            return;
        }

        try {
            await sendToWhatsApp(formData);
            showNotification('✅ ¡Mensaje enviado! Te contactaremos pronto', 'success');
            form.reset();
        } catch (error) {
            console.error('Error al enviar formulario:', error);
            showNotification('❌ Hubo un problema. Por favor intenta nuevamente', 'error');
        }
    });

    console.log('✅ Formulario de contacto inicializado');
}

// Enviar mensaje a WhatsApp
async function sendToWhatsApp(data) {
    const tourNames = {
        'city-tour': 'Welcome City Tour',
        'beach': 'Beach Day Escape',
        'cultural': 'Cultural & History Tour',
        'airport': 'Traslado Aeropuerto',
        'custom': 'Tour Personalizado'
    };

    let message = `¡Hola! Mi nombre es *${data.name}*\n\n`;
    message += `📧 Email: ${data.email}\n`;
    message += `🗺️ Tour: ${tourNames[data.tourType] || data.tourType}\n`;

    if (data.message) {
        message += `\n💬 Mensaje:\n${data.message}`;
    }

    const phoneNumber = '50765347412';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');

    // Simular un pequeño delay para dar feedback
    return new Promise(resolve => setTimeout(resolve, 500));
}

// ============================================
// SISTEMA DE NOTIFICACIONES
// ============================================

function showNotification(message, type = 'info') {
    // Remover notificaciones anteriores
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${getNotificationIcon(type)}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    // Animar entrada
    setTimeout(() => notification.classList.add('show'), 10);

    // Remover después de 5 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };
    return icons[type] || icons.info;
}

// ============================================
// ANIMACIÓN DEL CARRO
// ============================================

function initCarAnimation() {
    const car = document.getElementById('pmfCar');
    const progressBar = document.getElementById('tourProgress');

    if (!car) {
        console.warn('⚠️ Elemento del carro no encontrado');
        return;
    }

    let ticking = false;

    function updateCarPosition() {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const documentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );

        // Calcular progreso (0 a 1)
        const maxScroll = documentHeight - windowHeight;
        const scrollProgress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);

        // Actualizar posición del carro
        const viewportWidth = window.innerWidth;
        const carWidth = car.offsetWidth || 150;
        const maxX = viewportWidth - carWidth - 20; // 20px de margen
        const newX = scrollProgress * maxX;

        car.style.transform = `translateX(${newX}px)`;

        // Actualizar barra de progreso si existe
        if (progressBar) {
            const percentage = Math.round(scrollProgress * 100);
            progressBar.style.width = `${percentage}%`;

            const progressText = progressBar.querySelector('.progress-text');
            if (progressText) {
                progressText.textContent = `${percentage}%`;
            }
        }

        ticking = false;
    }

    // Optimizar con requestAnimationFrame
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateCarPosition);
            ticking = true;
        }
    });

    // Actualizar en resize
    window.addEventListener('resize', updateCarPosition);

    // Posición inicial
    updateCarPosition();

    console.log('✅ Animación del carro inicializada');
}

// ============================================
// FAQ (PREGUNTAS FRECUENTES)
// ============================================

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    if (!faqItems.length) {
        console.warn('⚠️ No se encontraron elementos FAQ');
        return;
    }

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        if (!question || !answer) return;

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Cerrar todos los demás items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.faq-icon');
                    if (otherAnswer) otherAnswer.style.maxHeight = '0';
                    if (otherIcon) otherIcon.classList.remove('bx-minus');
                    if (otherIcon) otherIcon.classList.add('bx-plus');
                }
            });

            // Toggle del item actual
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = `${answer.scrollHeight}px`;
                if (icon) {
                    icon.classList.remove('bx-plus');
                    icon.classList.add('bx-minus');
                }
            } else {
                item.classList.remove('active');
                answer.style.maxHeight = '0';
                if (icon) {
                    icon.classList.remove('bx-minus');
                    icon.classList.add('bx-plus');
                }
            }
        });
    });

    console.log('✅ FAQ inicializado');
}

// ============================================
// INICIALIZAR AOS (ANIMATE ON SCROLL)
// ============================================

function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
        console.log('✅ AOS inicializado');
    }
}

// ============================================
// SERVICE WORKER
// ============================================

function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register('/service-worker.js')
                .then(registration => {
                    console.log('✅ Service Worker registrado:', registration.scope);

                    // Verificar actualizaciones cada hora
                    setInterval(() => {
                        registration.update();
                    }, 60 * 60 * 1000);

                    // Escuchar nuevas versiones
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        console.log('🔄 Nueva versión del Service Worker encontrada');

                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                // Hay nueva versión disponible
                                if (confirm('¡Nueva versión disponible! ¿Deseas actualizar?')) {
                                    newWorker.postMessage({ type: 'SKIP_WAITING' });
                                    window.location.reload();
                                }
                            }
                        });
                    });
                })
                .catch(error => {
                    console.error('❌ Error al registrar Service Worker:', error);
                });

            // Recargar cuando el nuevo SW tome control
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                window.location.reload();
            });
        });

        // Detectar conexión
        window.addEventListener('online', () => {
            console.log('🌐 Conexión restaurada');
            showNotification('🌐 Conexión a internet restaurada', 'success');
        });

        window.addEventListener('offline', () => {
            console.log('📡 Sin conexión a internet');
            showNotification('📡 Sin conexión a internet', 'warning');
        });
    }
}

// ============================================
// UTILIDADES
// ============================================

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Ignorar el enlace del selector de idioma
        if (href === '#' || this.classList.contains('lang-option')) {
            return;
        }

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Log de información del sistema
console.log(`
╔════════════════════════════════════════╗
║        PMF TOURS INITIALIZED          ║
╠════════════════════════════════════════╣
║ Version: 2.0.0                         ║
║ Service Worker: ${'serviceWorker' in navigator ? 'Enabled' : 'Disabled'}           ║
║ Online Status: ${navigator.onLine ? 'Online' : 'Offline'}              ║
╚════════════════════════════════════════╝
`);