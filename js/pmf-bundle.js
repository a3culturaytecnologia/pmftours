// ============================================
// PMF TOURS - JAVASCRIPT BUNDLE FINAL
// Versión 2.1 - Optimizado sin warnings
// ============================================

// ============================================
// 1. SISTEMA DE TRADUCCIONES
// ============================================

(function initTranslations() {
    'use strict';

    // Definir traducciones globales usando globalThis
    globalThis.translations = {
        en: {
            // Navigation
            navHome: "Home",
            navAbout: "About Us",
            navServices: "Services",
            navValues: "Values",
            navGallery: "Gallery",
            navContact: "Contact",

            // Hero
            heroTitle: "Your Gateway to Panama",
            heroSubtitle: "Private Transport & Tours with safety, punctuality and authentic experiences",
            btnReserve: "Book Tour",
            btnPackages: "View Packages",

            // About
            aboutLabel: "Our Story",
            aboutTitle: "Much more than transportation",
            aboutDesc1: "We were born from a simple idea: to welcome travelers as you would welcome a friend. We're from here, we know every beach, every historic corner, and every secret of Panama.",
            aboutDesc2: "Our job is not just to take you from point A to B, but to open the door to a warm, cheerful and authentic country.",
            aboutDesc3: "Our commitment: safe transport, punctuality and experiences you'll remember fondly. Because every trip starts with a welcome, and yours begins with us.",

            // Services
            servicesLabel: "Our Packages",
            servicesTitle: "Experiences designed for you",

            // Custom Tour
            customTitle: "Looking for a unique experience?",
            customDesc: "At PMF Tours we specialize in creating memorable experiences tailored to your interests. Whether it's culture, gastronomy, nature or adventure, we'll design the perfect tour for you.",
            customBtn: "Design Your Tour",

            // Form
            formName: "Name",
            formEmail: "Email",
            formTour: "Select Tour",
            tourCityTour: "Welcome City Tour",
            tourBeach: "Beach Day Escape",
            tourCultural: "Cultural & History Tour",
            tourAirport: "Airport Transfer",
            tourCustom: "Custom Tour",
            formMessage: "Message",
            formSubmit: "Send Message",

            // Testimonials
            testimonial1: "Pierre took us to Playa Blanca in Isla Grande. My 8-year-old daughter still talks about the starfish we saw. It wasn't just transportation, it was a family adventure we'll never forget.",
            testimonial2: "We booked the Cultural Tour and Pierre took us to a local restaurant in Casco Viejo where we had the best seafood of our lives. He knows every corner and tells you stories that aren't in the guides. 100% authentic!",
            testimonial3: "I arrived at Tocumen at 11pm and Pierre was waiting for me with a sign and a smile. The Kia was impeccable, cold water ready, and he dropped me off at the hotel in 25 minutes. Luxury service at a fair price.",

            // FAQ
            faqLabel: "Frequently Asked Questions",
            faqTitle: "Have questions?",
            faqSubtitle: "Here we answer the most common questions from our travelers",
            faqQ1: "How does booking work?",
            faqA1: "It's simple: contact us on WhatsApp, tell us the tour and dates, we confirm availability and you can pay in cash on the day or via bank transfer."
        },
        es: {
            // Navegación
            navHome: "Inicio",
            navAbout: "Nosotros",
            navServices: "Servicios",
            navValues: "Valores",
            navGallery: "Galería",
            navContact: "Contacto",

            // Hero
            heroTitle: "Tu puerta a Panamá",
            heroSubtitle: "Transporte & Tours Privados con seguridad, puntualidad y experiencias auténticas",
            btnReserve: "Reservar Tour",
            btnPackages: "Ver Paquetes",

            // About
            aboutLabel: "Nuestra Historia",
            aboutTitle: "Mucho más que transporte",
            aboutDesc1: "Nacimos de una idea sencilla: recibir al viajero como se recibe a un amigo. Somos de aquí, conocemos cada playa, cada esquina histórica y cada secreto de Panamá.",
            aboutDesc2: "Nuestro trabajo no es solo llevarte del punto A al B, sino abrirte la puerta a un país cálido, alegre y auténtico.",
            aboutDesc3: "Nuestro compromiso: transporte seguro, puntualidad y experiencias que recordarás con cariño. Porque cada viaje empieza con una bienvenida, y la tuya comienza con nosotros.",

            // Services
            servicesLabel: "Nuestros Paquetes",
            servicesTitle: "Experiencias diseñadas para ti",

            // Custom Tour
            customTitle: "¿Buscas una experiencia única?",
            customDesc: "En PMF Tours nos especializamos en crear experiencias memorables adaptadas a tus intereses. Ya sea cultura, gastronomía, naturaleza o aventura, diseñaremos el tour perfecto para ti.",
            customBtn: "Diseña Tu Tour",

            // Formulario
            formName: "Nombre",
            formEmail: "Correo electrónico",
            formTour: "Seleccionar Tour",
            tourCityTour: "Welcome City Tour",
            tourBeach: "Beach Day Escape",
            tourCultural: "Cultural & History Tour",
            tourAirport: "Traslado Aeropuerto",
            tourCustom: "Tour Personalizado",
            formMessage: "Mensaje",
            formSubmit: "Enviar Mensaje",

            // Testimonials
            testimonial1: "Pierre nos llevó a Playa Blanca en Isla Grande. Mi hija de 8 años todavía habla de las estrellas de mar que vimos. No solo fue transporte, fue una aventura familiar que nunca olvidaremos.",
            testimonial2: "Reservamos el Cultural Tour y Pierre nos llevó a un restaurante local en Casco Viejo donde comimos el mejor ceviche de nuestras vidas. Conoce cada rincón y te cuenta historias que no están en las guías. ¡100% auténtico!",
            testimonial3: "Llegué a Tocumen a las 11pm y Pierre me estaba esperando con un cartel y una sonrisa. El Kia impecable, agua fría lista, y me dejó en el hotel en 25 minutos. Servicio de lujo a precio justo.",

            // FAQ
            faqLabel: "Preguntas Frecuentes",
            faqTitle: "¿Tienes preguntas?",
            faqSubtitle: "Aquí respondemos las dudas más comunes de nuestros viajeros",
            faqQ1: "¿Cómo funciona la reserva?",
            faqA1: "Es simple: contáctanos por WhatsApp, dinos el tour y las fechas, confirmamos disponibilidad y puedes pagar en efectivo el día o por transferencia bancaria."
        }
    };

    // Helper para obtener data-translate (usando dataset)
    globalThis.getDataTranslate = function(el) {
        if (!el) return null;
        return el.dataset?.translate || null;
    };

    // Función para actualizar textos
    globalThis.updateTexts = function(lang) {
        const dict = globalThis.translations[lang] || globalThis.translations.es;

        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = globalThis.getDataTranslate(el);
            const val = dict[key];

            if (!val) {
                console.warn(`⚠️ No translation for: ${key} in ${lang}`);
                return;
            }

            const tag = el.tagName.toUpperCase();

            if (tag === 'INPUT' || tag === 'TEXTAREA') {
                el.placeholder = val;
            } else if (tag === 'OPTION') {
                el.textContent = val;
            } else if (tag === 'META') {
                el.setAttribute('content', val);
            } else {
                // Preservar elementos hijos (iconos, etc) usando .at()
                const textNodes = Array.from(el.childNodes).filter(n => n.nodeType === Node.TEXT_NODE);
                if (textNodes.length > 0) {
                    textNodes.at(-1).nodeValue = ' ' + val;
                } else {
                    el.textContent = val;
                }
            }
        });

        console.log('✅ Texts updated to:', lang);
    };

    console.log('✅ Translation system loaded');
})();

// ============================================
// 2. LANGUAGE SWITCHER
// ============================================

(function initLanguageSwitcher() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        const langBtn = document.querySelector('.lang-btn');
        const langDropdown = document.querySelector('.lang-dropdown');
        const currentLangEls = document.querySelectorAll('.current-lang');
        const langOptions = document.querySelectorAll('.lang-option');

        // Crear overlay si no existe
        let langOverlay = document.querySelector('.lang-overlay');
        if (!langOverlay) {
            langOverlay = document.createElement('div');
            langOverlay.className = 'lang-overlay';
            document.body.appendChild(langOverlay);
        }

        if (!langBtn || !langDropdown) {
            console.warn('⚠️ Language switcher elements not found');
            return;
        }

        // Función para cerrar dropdown
        function closeDropdown() {
            langDropdown.classList.remove('active');
            langOverlay.classList.remove('active');
        }

        // Función para abrir dropdown
        function openDropdown() {
            langDropdown.classList.add('active');
            langOverlay.classList.add('active');
        }

        // Toggle dropdown
        langBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const isActive = langDropdown.classList.contains('active');

            if (isActive) {
                closeDropdown();
            } else {
                openDropdown();
            }
        });

        // Cerrar al hacer clic en overlay
        langOverlay.addEventListener('click', closeDropdown);

        // Cerrar al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.language-switcher')) {
                closeDropdown();
            }
        });

        // Cambiar idioma
        langOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                const lang = this.dataset.lang;
                if (!lang) return;

                // Actualizar UI
                currentLangEls.forEach(el => el.textContent = lang.toUpperCase());

                // Actualizar textos
                if (typeof globalThis.updateTexts === 'function') {
                    globalThis.updateTexts(lang);
                }

                // Guardar preferencia
                localStorage.setItem('preferredLanguage', lang);
                document.documentElement.lang = lang;

                // Cerrar dropdown
                closeDropdown();

                // Disparar evento
                const event = new CustomEvent('languageChanged', { detail: { language: lang } });
                document.dispatchEvent(event);

                console.log('🌍 Language changed to:', lang);
            });
        });

        // Inicializar con idioma guardado
        const savedLang = localStorage.getItem('preferredLanguage') || 'es';
        currentLangEls.forEach(el => el.textContent = savedLang.toUpperCase());

        if (typeof globalThis.updateTexts === 'function') {
            globalThis.updateTexts(savedLang);
        }

        console.log('✅ Language switcher initialized');
    });
})();

// ============================================
// 3. HERO SLIDER
// ============================================

(function initHeroSlider() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        const slides = document.querySelectorAll('.hero-slide');

        if (!slides.length) {
            console.warn('⚠️ No hero slides found');
            return;
        }

        let currentSlide = 0;
        const slideInterval = 5000;

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        // Iniciar slider automático
        const intervalId = setInterval(nextSlide, slideInterval);

        // Preload images
        slides.forEach((slide, index) => {
            if (index > 0) {
                const img = slide.querySelector('img');
                if (img?.src) {
                    const preloadImg = new Image();
                    preloadImg.src = img.src;
                }
            }
        });

        // Cleanup
        globalThis.addEventListener('beforeunload', () => {
            clearInterval(intervalId);
        });

        console.log('✅ Hero slider initialized');
    });
})();

// ============================================
// 4. MOBILE MENU
// ============================================

(function initMobileMenu() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        if (!menuToggle || !navLinks) {
            console.warn('⚠️ Mobile menu elements not found');
            return;
        }

        // Crear overlay si no existe
        let overlay = document.querySelector('.menu-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'menu-overlay';
            document.body.appendChild(overlay);
        }

        function toggleMenu(show) {
            const actions = show ? 'add' : 'remove';
            menuToggle.classList[actions]('active');
            navLinks.classList[actions]('active');
            overlay.classList[actions]('active');
            document.body.style.overflow = show ? 'hidden' : '';
        }

        // Click en botón de menú
        menuToggle.addEventListener('click', function() {
            const isActive = navLinks.classList.contains('active');
            toggleMenu(!isActive);
        });

        // Click en overlay
        overlay.addEventListener('click', () => toggleMenu(false));

        // Click en enlaces
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                // No cerrar si es el botón de idioma
                if (!this.classList.contains('lang-option') &&
                    !this.closest('.language-switcher')) {
                    toggleMenu(false);
                }
            });
        });

        // Cerrar en resize
        globalThis.addEventListener('resize', function() {
            if (globalThis.innerWidth > 768 && navLinks.classList.contains('active')) {
                toggleMenu(false);
            }
        });

        console.log('✅ Mobile menu initialized');
    });
})();

// ============================================
// 5. FORM HANDLER
// ============================================

(function initFormHandler() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('contactForm');

        if (!form) {
            console.info('ℹ️ Contact form not found (may be on another page)');
            return;
        }

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Obtener valores
            const name = document.getElementById('name')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const tourType = document.getElementById('tourType')?.value;
            const message = document.getElementById('message')?.value.trim() || '';

            // Validar
            if (!name || !email || !tourType) {
                showNotification('Por favor completa todos los campos requeridos', 'warning');
                return;
            }

            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Por favor ingresa un email válido', 'warning');
                return;
            }

            // Preparar mensaje
            const tourNames = {
                'city-tour': 'Welcome City Tour',
                'beach': 'Beach Day Escape',
                'cultural': 'Cultural & History Tour',
                'airport': 'Traslado Aeropuerto',
                'custom': 'Tour Personalizado'
            };

            let whatsappMsg = `¡Hola! Mi nombre es *${name}*\n\n`;
            whatsappMsg += `📧 Email: ${email}\n`;
            whatsappMsg += `🗺️ Tour: ${tourNames[tourType]}\n`;
            if (message) {
                whatsappMsg += `\n💬 Mensaje:\n${message}`;
            }

            // Enviar a WhatsApp
            const phone = '50765347412';
            const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMsg)}`;

            globalThis.open(whatsappURL, '_blank');

            // Mostrar éxito
            showNotification('¡Mensaje enviado! Te contactaremos pronto', 'success');

            // Limpiar formulario
            form.reset();
        });

        console.log('✅ Form handler initialized');
    });

    function showNotification(message, type) {
        if (typeof globalThis.showNotification === 'function') {
            globalThis.showNotification(message, type);
        }
    }
})();

// ============================================
// 6. CAR ANIMATION
// ============================================

(function initCarAnimation() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        const car = document.getElementById('pmfCar');
        const progressBar = document.getElementById('tourProgress');

        if (!car) {
            console.info('ℹ️ Car element not found (may be on another page)');
            return;
        }

        let ticking = false;

        function updateCarPosition() {
            const scrollTop = globalThis.pageYOffset;
            const windowHeight = globalThis.innerHeight;
            const documentHeight = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                document.documentElement.clientHeight
            );

            const maxScroll = documentHeight - windowHeight;
            const scrollProgress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);

            // Posición del carro
            const viewportWidth = globalThis.innerWidth;
            const carWidth = car.offsetWidth || 120;
            const maxX = Math.max(0, viewportWidth - carWidth - 20);
            const newX = scrollProgress * maxX;

            requestAnimationFrame(() => {
                car.style.transform = `translateX(${newX}px)`;
                car.style.opacity = '1';
            });

            // Barra de progreso
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

        // Scroll event con throttling
        globalThis.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(updateCarPosition);
                ticking = true;
            }
        });

        // Resize event
        globalThis.addEventListener('resize', updateCarPosition);

        // Posición inicial
        updateCarPosition();

        console.log('✅ Car animation initialized');
    });
})();

// ============================================
// 7. MAIN FUNCTIONALITY
// ============================================

(function initMain() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        console.log('🚀 PMF Tours loaded successfully');

        initScrollEffects();
        initBackToTop();
        initFAQ();
        initSmoothScroll();
        initServiceWorker();

        console.log('✅ All components initialized');
    });

    // Efectos de scroll en header
    function initScrollEffects() {
        const header = document.querySelector('.header');
        if (!header) return;

        let lastScroll = 0;

        globalThis.addEventListener('scroll', function() {
            const currentScroll = globalThis.pageYOffset;

            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Ocultar/mostrar header
            if (currentScroll > lastScroll && currentScroll > 500) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }

            lastScroll = currentScroll;
        });

        console.log('✅ Scroll effects initialized');
    }

    // Botón volver arriba
    function initBackToTop() {
        let backToTop = document.querySelector('.back-to-top');

        if (!backToTop) {
            backToTop = document.createElement('button');
            backToTop.className = 'back-to-top';
            backToTop.innerHTML = '<i class="bx bx-chevron-up"></i>';
            backToTop.setAttribute('aria-label', 'Volver arriba');
            document.body.appendChild(backToTop);
        }

        globalThis.addEventListener('scroll', function() {
            if (globalThis.pageYOffset > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', function() {
            globalThis.scrollTo({ top: 0, behavior: 'smooth' });
        });

        console.log('✅ Back to top initialized');
    }

    // FAQ
    function initFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        if (!faqItems.length) {
            console.info('ℹ️ FAQ items not found (may be on another page)');
            return;
        }

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');

            if (!question || !answer) return;

            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');

                // Cerrar otros
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        if (otherAnswer) otherAnswer.style.maxHeight = '0';
                    }
                });

                // Toggle actual
                if (isActive) {
                    item.classList.remove('active');
                    answer.style.maxHeight = '0';
                } else {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        });

        console.log('✅ FAQ initialized');
    }

    // Smooth scroll
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                if (href === '#' ||
                    this.classList.contains('lang-option') ||
                    this.closest('.language-switcher')) {
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

        console.log('✅ Smooth scroll initialized');
    }

    // Service Worker
    function initServiceWorker() {
        if (!('serviceWorker' in navigator)) return;

        globalThis.addEventListener('load', function() {
            navigator.serviceWorker.register('/service-worker.js')
                .then(reg => {
                    console.log('✅ Service Worker registered:', reg.scope);

                    // Notificar que el SW se registró
                    if (typeof globalThis.showNotification === 'function') {
                        globalThis.showNotification('Service Worker registrado — Recursos en caché para offline', 'info');
                    }

                    // Detectar cuando se encuentra una nueva versión
                    reg.addEventListener('updatefound', () => {
                        const newWorker = reg.installing;
                        if (!newWorker) return;

                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed') {
                                if (navigator.serviceWorker.controller) {
                                    // Nueva versión disponible (hay un SW controlador previo)
                                    if (typeof globalThis.showNotification === 'function') {
                                        globalThis.showNotification('Nueva versión disponible. Actualiza la página para ver los cambios.', 'warning');
                                    }
                                } else {
                                    // Primer cacheo completado
                                    if (typeof globalThis.showNotification === 'function') {
                                        globalThis.showNotification('Contenido cacheado para uso offline', 'info');
                                    }
                                }
                            }
                        });
                    });
                })
                .catch(err => console.warn('⚠️ SW registration failed:', err));
        });
    }
})();

// ============================================
// 8. NOTIFICATION SYSTEM
// ============================================

globalThis.showNotification = function(message, type = 'info') {
    // Remover notificaciones anteriores
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;

    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };

    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${icons[type] || icons.info}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 10);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
};

// Helper para pruebas rápidas desde la consola
globalThis.testNotifications = function() {
    const types = ['success', 'error', 'warning', 'info'];
    types.forEach((t, i) => {
        setTimeout(() => {
            if (typeof globalThis.showNotification === 'function') {
                globalThis.showNotification(`Prueba de notificación: ${t}`, t);
            }
        }, i * 700);
    });
    console.log('🔔 testNotifications ejecutado');
};

// ============================================
// LOG FINAL
// ============================================

console.log(`
╔═══════════════════════════════════════╗
║     PMF TOURS INITIALIZED v2.1        ║
╠═══════════════════════════════════════╣
║ ✅ Translations System                ║
║ ✅ Language Switcher                  ║
║ ✅ Hero Slider                        ║
║ ✅ Mobile Menu                        ║
║ ✅ Form Handler                       ║
║ ✅ Car Animation                      ║
║ ✅ Scroll Effects                     ║
║ ✅ FAQ System                         ║
╚═══════════════════════════════════════╝
`);