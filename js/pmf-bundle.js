// ============================================
// PMF TOURS - JAVASCRIPT BUNDLE v2.2
// FIX: Language switcher completamente funcional
// ============================================

// ============================================
// 1. SISTEMA DE TRADUCCIONES
// ============================================

(function initTranslations() {
    'use strict';

    // Definir traducciones globales
    globalThis.translations = {
        en: {
            // Navigation
            navHome: "Home",
            navAbout: "About Us",
            navServices: "Services",
            navGallery: "Gallery",
            navTestimonials: "Testimonials",

            // Hero
            heroTitle: "Your Gateway to Panama",
            heroSubtitle: "Private Transport & Tours with safety, punctuality and authentic experiences",
            heroBtn1: "Book Tour",
            heroBtn2: "View Packages",

            // How It Works
            howItWorksLabel: "Simple Process",
            howItWorksTitle: "How Does PMF Tours Work?",
            step1Title: "Message Us on WhatsApp",
            step1Desc: "Tell us your plans, dates and what you're looking for. We're available 24/7.",
            step2Title: "We Confirm and Customize",
            step2Desc: "We'll send you details, route, schedule and fixed price in minutes.",
            step3Title: "We Pick You Up On Time",
            step3Desc: "Punctual, with sign and smile. Even if your flight is delayed.",
            step4Title: "Enjoy Without Worries",
            step4Desc: "Comfortable transport, local guide and total flexibility during your tour.",

            // About
            aboutLabel: "Our Story",
            aboutTitle: "About PMF Tours",
            aboutDesc: "We are a local company dedicated to private transport and personalized tours in Panama. Our goal is for you to experience the country authentically, safely and stress-free.",
            aboutDesc2: "Founded by Pierre, a Panamanian passionate about his land, PMF Tours was born from the desire to offer real experiences, away from mass tourism.",
            aboutHighlight1: "Guaranteed Safety",
            aboutHighlight2: "24/7 Punctuality",
            aboutHighlight3: "Bilingual Guide",
            aboutCTA: "Contact Pierre",
            aboutBadge: "Panamanian at heart",
            aboutPierreTitle: "Founder & Local Guide",

            // Services
            servicesLabel: "Our Packages",
            servicesTitle: "Experiences designed for you",
            servicesSubtitle: "Discover the best of Panama with the comfort and safety you deserve.",

            // Custom Tour
            customTitle: "Looking for a unique experience?",
            customDesc: "Tell us your interests and we'll create the perfect experience for you.",
            customBtn: "Design Your Tour",

            // Gallery
            galleryLabel: "Our Gallery",
            galleryTitle: "Gallery",
            gallerySubtitle: "Discover the magic of Panama through our eyes.",

            // Testimonials
            testimonialsLabel: "What They Say",
            testimonialsTitle: "Testimonials",
            testimonial1: "\"Pierre took us to Playa Blanca. My daughter still talks about the starfish. Unforgettable family adventure!\"",
            testimonial2: "\"He knows every corner and tells stories that aren't in the guides. The best ceviche of our lives. 100% authentic!\"",
            testimonial3: "\"I arrived at 11pm and Pierre was waiting. Impeccable Kia, cold water, 25 minutes to hotel. Luxury service at fair price.\"",

            // FAQ
            faqTitle: "Frequently Asked Questions",
            faqQ1: "How do I book?",
            faqA1: "Message us on WhatsApp, tell us which tour you want and your dates. We confirm in minutes. Pay cash on tour day.",
            faqQ2: "Can I cancel?",
            faqA2: "Yes. Cancel up to 24h before at no cost. Airport transfers: up to 2h before. If your flight is delayed, we wait for free.",
            faqQ3: "Do you speak English?",
            faqA3: "Yes, Pierre is completely bilingual (Spanish/English). Clear and smooth communication guaranteed.",
            faqQ4: "What vehicle do you use?",
            faqA4: "Kia Sportage 2023/2024 with A/C, luggage space, comfortable seats and cleaning after each service. Child seats available.",

            // Final CTA
            ctaFinalTitle: "Ready to discover Panama like a local?",
            ctaFinalDesc: "Book now and experience Panama authentically with a local guide who knows every corner of the country.",
            ctaFinalBtn: "Book Now via WhatsApp",

            // Car Animation
            carTooltip: "Safe and reliable transport!"
        },
        es: {
            // Navegación
            navHome: "Inicio",
            navAbout: "Nosotros",
            navServices: "Servicios",
            navGallery: "Galería",
            navTestimonials: "Testimonios",

            // Hero
            heroTitle: "Tu puerta a Panamá",
            heroSubtitle: "Transporte & Tours Privados con seguridad, puntualidad y experiencias auténticas",
            heroBtn1: "Reservar Tour",
            heroBtn2: "Ver Paquetes",

            // Cómo Funciona
            howItWorksLabel: "Proceso Simple",
            howItWorksTitle: "¿Cómo funciona PMF Tours?",
            step1Title: "Escríbenos por WhatsApp",
            step1Desc: "Cuéntanos tus planes, fechas y lo que buscas. Estamos 24/7.",
            step2Title: "Confirmamos y personalizamos",
            step2Desc: "Te enviamos detalles, ruta, horarios y precio fijo en minutos.",
            step3Title: "Te recogemos a tiempo",
            step3Desc: "Puntual, con cartel y sonrisa. Incluso si tu vuelo se retrasa.",
            step4Title: "Disfruta sin preocupaciones",
            step4Desc: "Transporte cómodo, guía local y flexibilidad total durante tu tour.",

            // About
            aboutLabel: "Nuestra Historia",
            aboutTitle: "Sobre PMF Tours",
            aboutDesc: "Somos una empresa local dedicada al transporte privado y tours personalizados en Panamá. Nuestro objetivo es que vivas el país de forma auténtica, segura y sin estrés.",
            aboutDesc2: "Fundado por Pierre, un panameño apasionado por su tierra, PMF Tours nace del deseo de ofrecer experiencias reales, lejos del turismo masivo.",
            aboutHighlight1: "Seguridad garantizada",
            aboutHighlight2: "Puntualidad 24/7",
            aboutHighlight3: "Guía bilingüe",
            aboutCTA: "Contactar a Pierre",
            aboutBadge: "Panameño de corazón",
            aboutPierreTitle: "Fundador & Guía Local",

            // Services
            servicesLabel: "Nuestros Paquetes",
            servicesTitle: "Experiencias diseñadas para ti",
            servicesSubtitle: "Descubre lo mejor de Panamá con la comodidad y seguridad que mereces.",

            // Custom Tour
            customTitle: "¿Buscas una experiencia única?",
            customDesc: "Cuéntanos tus intereses y te armamos la experiencia perfecta.",
            customBtn: "Diseña Tu Tour",

            // Gallery
            galleryLabel: "Nuestra Galería",
            galleryTitle: "Galería",
            gallerySubtitle: "Descubre la magia de Panamá a través de nuestros ojos.",

            // Testimonials
            testimonialsLabel: "Lo que dicen",
            testimonialsTitle: "Testimonios",
            testimonial1: "\"Pierre nos llevó a Playa Blanca. Mi hija todavía habla de las estrellas de mar. ¡Aventura familiar inolvidable!\"",
            testimonial2: "\"Conoce cada rincón y cuenta historias que no están en las guías. El mejor ceviche de nuestras vidas. ¡100% auténtico!\"",
            testimonial3: "\"Llegué a las 11pm y Pierre estaba esperando. Kia impecable, agua fría, 25 minutos al hotel. Servicio de lujo a precio justo.\"",

            // FAQ
            faqTitle: "Preguntas Frecuentes",
            faqQ1: "¿Cómo hago la reserva?",
            faqA1: "Escríbenos por WhatsApp, dinos qué tour quieres y tus fechas. Confirmamos en minutos. Pagas en efectivo el día del tour.",
            faqQ2: "¿Puedo cancelar?",
            faqA2: "Sí. Cancela hasta 24h antes sin costo. Traslados aeropuerto: hasta 2h antes. Si tu vuelo se retrasa, te esperamos gratis.",
            faqQ3: "¿Hablan inglés?",
            faqA3: "Sí, Pierre es completamente bilingüe (español/inglés). Comunicación clara y fluida garantizada.",
            faqQ4: "¿Qué vehículo usan?",
            faqA4: "Kia Sportage 2023/2024 con A/C, espacio para equipaje, asientos cómodos y limpieza después de cada servicio. Asientos para niños disponibles.",

            // Final CTA
            ctaFinalTitle: "¿Listo para descubrir Panamá como un local?",
            ctaFinalDesc: "Reserva ahora y vive Panamá de forma auténtica con un guía local que conoce cada rincón del país.",
            ctaFinalBtn: "Reservar Ahora por WhatsApp",

            // Car Animation
            carTooltip: "¡Transporte seguro y confiable!"
        }
    };

    // Función para actualizar textos
    globalThis.updateTexts = function(lang) {
        const dict = globalThis.translations[lang] || globalThis.translations.es;

        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.dataset.translate;
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
                // Preservar elementos hijos (iconos, etc)
                const textNodes = Array.from(el.childNodes).filter(n => n.nodeType === Node.TEXT_NODE);
                if (textNodes.length > 0) {
                    textNodes[textNodes.length - 1].nodeValue = ' ' + val;
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
// 2. LANGUAGE SWITCHER - FIXED
// ============================================

(function initLanguageSwitcher() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        const langBtn = document.querySelector('.lang-btn');
        const langDropdown = document.querySelector('.lang-dropdown');
        const currentLangEl = document.getElementById('currentLang');
        const langOptions = document.querySelectorAll('.lang-option');

        if (!langBtn || !langDropdown) {
            console.warn('⚠️ Language switcher elements not found');
            return;
        }

        // Función para mostrar/ocultar dropdown
        function toggleDropdown(e) {
            e.stopPropagation();
            const isVisible = langDropdown.style.display === 'block';
            langDropdown.style.display = isVisible ? 'none' : 'block';
        }

        // Función para cerrar dropdown
        function closeDropdown() {
            langDropdown.style.display = 'none';
        }

        // Click en botón de idioma
        langBtn.addEventListener('click', toggleDropdown);

        // Cerrar al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
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

                console.log('🌍 Changing language to:', lang);

                // Actualizar UI del botón
                if (currentLangEl) {
                    currentLangEl.textContent = lang.toUpperCase();
                }

                // Actualizar textos en la página
                if (typeof globalThis.updateTexts === 'function') {
                    globalThis.updateTexts(lang);
                }

                // Guardar preferencia
                localStorage.setItem('preferredLanguage', lang);
                document.documentElement.lang = lang;

                // Cerrar dropdown
                closeDropdown();

                // Disparar evento personalizado
                const event = new CustomEvent('languageChanged', {
                    detail: { language: lang }
                });
                document.dispatchEvent(event);

                console.log('✅ Language changed successfully to:', lang);
            });
        });

        // Inicializar con idioma guardado
        const savedLang = localStorage.getItem('preferredLanguage') || 'es';
        if (currentLangEl) {
            currentLangEl.textContent = savedLang.toUpperCase();
        }

        if (typeof globalThis.updateTexts === 'function') {
            globalThis.updateTexts(savedLang);
        }

        console.log('✅ Language switcher initialized with language:', savedLang);
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
// 5. CAR ANIMATION
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
// 6. MAIN FUNCTIONALITY
// ============================================

(function initMain() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        console.log('🚀 PMF Tours loaded successfully');

        initScrollEffects();
        initBackToTop();
        initFAQ();
        initSmoothScroll();

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
                    }
                });

                // Toggle actual
                item.classList.toggle('active');
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
})();

// ============================================
// PMF TOURS - WhatsApp Links Manager
// ============================================

/**
 * Sincroniza todos los enlaces de WhatsApp con el idioma activo
 */

let pmfWhatsAppData = null;

// Cargar datos de WhatsApp desde precios.json
async function loadWhatsAppData() {
  try {
    if (!pmfWhatsAppData) {
      const response = await fetch('./data/precios.json');
      const data = await response.json();
      pmfWhatsAppData = data.whatsapp_mensajes;
    }
    return pmfWhatsAppData;
  } catch (error) {
    console.error('Error loading WhatsApp data:', error);
    return null;
  }
}

// Actualizar todos los enlaces de WhatsApp según idioma
async function updateWhatsAppLinks() {
  const data = await loadWhatsAppData();
  if (!data) return;

  const currentLang = localStorage.getItem('preferredLanguage') || 'es';
  const mensajes = data[currentLang];

  // Hero - Reservar Tour
  const heroReservar = document.querySelector('.hero-buttons .btn-primary');
  if (heroReservar) {
    heroReservar.href = mensajes.hero_reservar;
  }

  // Nav Header - WhatsApp
  const navWhatsApp = document.querySelector('.btn-whatsapp-nav');
  if (navWhatsApp) {
    navWhatsApp.href = mensajes.footer_contacto;
  }

  // About - Contactar a Pierre
  const aboutBtn = document.querySelector('.about-text .btn-primary');
  if (aboutBtn) {
    aboutBtn.href = mensajes.about_contactar;
  }

  // Custom Tour CTA
  const customTourBtn = document.querySelector('.custom-tour-cta .btn-primary');
  if (customTourBtn) {
    customTourBtn.href = mensajes.custom_tour;
  }

  // Final CTA
  const finalCtaBtn = document.querySelector('.final-cta .btn-primary');
  if (finalCtaBtn) {
    finalCtaBtn.href = mensajes.cta_final;
  }

  // Footer WhatsApp (en footer-social)
  const footerWhatsApp = document.querySelector('.footer-social a[href*="wa.me"]');
  if (footerWhatsApp) {
    footerWhatsApp.href = mensajes.footer_contacto;
  }

  // Floating WhatsApp Button
  const floatingWhatsApp = document.querySelector('.floating-whatsapp');
  if (floatingWhatsApp) {
    floatingWhatsApp.href = mensajes.footer_contacto;
  }

  console.log(`✅ WhatsApp links updated to: ${currentLang.toUpperCase()}`);
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', updateWhatsAppLinks);

// Ejecutar cuando cambie el idioma
document.addEventListener('languageChanged', updateWhatsAppLinks);

// Export para uso global
window.pmfWhatsApp = {
  update: updateWhatsAppLinks,
  getData: loadWhatsAppData
};

// ============================================
// LOG FINAL
// ============================================

console.log(`
╔═══════════════════════════════════════╗
║     PMF TOURS INITIALIZED v2.2        ║
╠═══════════════════════════════════════╣
║ ✅ Translations System                ║
║ ✅ Language Switcher (FIXED)          ║
║ ✅ Hero Slider                        ║
║ ✅ Mobile Menu                        ║
║ ✅ Car Animation                      ║
║ ✅ Scroll Effects                     ║
║ ✅ FAQ System                         ║
╚═══════════════════════════════════════╝
`);