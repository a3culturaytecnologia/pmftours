// ============================================
// PMF TOURS - OPTIMIZED JAVASCRIPT v2.3
// PERFORMANCE: Lazy loading, debouncing, mobile optimization
// ============================================

// ============================================
// 1. SISTEMA DE TRADUCCIONES
// ============================================

(function initTranslations() {
    'use strict';

    globalThis.translations = {
        en: {
            navHome: "Home",
            navAbout: "About Us",
            navServices: "Services",
            navGallery: "Gallery",
            navTestimonials: "Testimonials",
            heroTitle: "Your Gateway to Panama",
            heroSubtitle: "Private Transport & Tours with safety, punctuality and authentic experiences",
            heroBtn1: "Book Tour",
            heroBtn2: "View Packages",
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
            aboutLabel: "Our Story",
            aboutTitle: "About PMF Tours",
            aboutDesc: "We are a local company dedicated to private transport and personalized tours in Panama.",
            aboutDesc2: "Founded by Pierre, a Panamanian passionate about his land.",
            aboutHighlight1: "Guaranteed Safety",
            aboutHighlight2: "24/7 Punctuality",
            aboutHighlight3: "Bilingual Guide",
            aboutCTA: "Contact Pierre",
            aboutBadge: "Panamanian at heart",
            aboutPierreTitle: "Founder & Local Guide",
            servicesLabel: "Our Packages",
            servicesTitle: "Experiences designed for you",
            servicesSubtitle: "Discover the best of Panama.",
            customTitle: "Looking for a unique experience?",
            customDesc: "Tell us your interests and we'll create the perfect experience for you.",
            customBtn: "Design Your Tour",
            galleryLabel: "Our Gallery",
            galleryTitle: "Gallery",
            gallerySubtitle: "Discover the magic of Panama through our eyes.",
            testimonialsLabel: "What They Say",
            testimonialsTitle: "Testimonials",
            testimonial1: "\"Pierre took us to Playa Blanca. Unforgettable family adventure!\"",
            testimonial2: "\"The best ceviche of our lives. 100% authentic!\"",
            testimonial3: "\"Luxury service at fair price.\"",
            faqTitle: "Frequently Asked Questions",
            faqQ1: "How do I book?",
            faqA1: "Message us on WhatsApp, tell us which tour you want and your dates.",
            faqQ2: "Can I cancel?",
            faqA2: "Yes. Cancel up to 24h before at no cost.",
            faqQ3: "Do you speak English?",
            faqA3: "Yes, Pierre is completely bilingual.",
            faqQ4: "What vehicle do you use?",
            faqA4: "Kia Sportage 2023/2024 with A/C.",
            ctaFinalTitle: "Ready to discover Panama like a local?",
            ctaFinalDesc: "Book now and experience Panama authentically.",
            ctaFinalBtn: "Book Now via WhatsApp",
            carTooltip: "Safe and reliable transport!"
        },
        es: {
            navHome: "Inicio",
            navAbout: "Nosotros",
            navServices: "Servicios",
            navGallery: "Galería",
            navTestimonials: "Testimonios",
            heroTitle: "Tu puerta a Panamá",
            heroSubtitle: "Transporte & Tours Privados con seguridad, puntualidad y experiencias auténticas",
            heroBtn1: "Reservar Tour",
            heroBtn2: "Ver Paquetes",
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
            aboutLabel: "Nuestra Historia",
            aboutTitle: "Sobre PMF Tours",
            aboutDesc: "Somos una empresa local dedicada al transporte privado y tours personalizados en Panamá.",
            aboutDesc2: "Fundado por Pierre, un panameño apasionado por su tierra.",
            aboutHighlight1: "Seguridad garantizada",
            aboutHighlight2: "Puntualidad 24/7",
            aboutHighlight3: "Guía bilingüe",
            aboutCTA: "Contactar a Pierre",
            aboutBadge: "Panameño de corazón",
            aboutPierreTitle: "Fundador & Guía Local",
            servicesLabel: "Nuestros Paquetes",
            servicesTitle: "Experiencias diseñadas para ti",
            servicesSubtitle: "Descubre lo mejor de Panamá.",
            customTitle: "¿Buscas una experiencia única?",
            customDesc: "Cuéntanos tus intereses y te armamos la experiencia perfecta.",
            customBtn: "Diseña Tu Tour",
            galleryLabel: "Nuestra Galería",
            galleryTitle: "Galería",
            gallerySubtitle: "Descubre la magia de Panamá a través de nuestros ojos.",
            testimonialsLabel: "Lo que dicen",
            testimonialsTitle: "Testimonios",
            testimonial1: "\"Pierre nos llevó a Playa Blanca. ¡Aventura familiar inolvidable!\"",
            testimonial2: "\"El mejor ceviche de nuestras vidas. ¡100% auténtico!\"",
            testimonial3: "\"Servicio de lujo a precio justo.\"",
            faqTitle: "Preguntas Frecuentes",
            faqQ1: "¿Cómo hago la reserva?",
            faqA1: "Escríbenos por WhatsApp, dinos qué tour quieres y tus fechas.",
            faqQ2: "¿Puedo cancelar?",
            faqA2: "Sí. Cancela hasta 24h antes sin costo.",
            faqQ3: "¿Hablan inglés?",
            faqA3: "Sí, Pierre es completamente bilingüe.",
            faqQ4: "¿Qué vehículo usan?",
            faqA4: "Kia Sportage 2023/2024 con A/C.",
            ctaFinalTitle: "¿Listo para descubrir Panamá como un local?",
            ctaFinalDesc: "Reserva ahora y vive Panamá de forma auténtica.",
            ctaFinalBtn: "Reservar Ahora por WhatsApp",
            carTooltip: "¡Transporte seguro y confiable!"
        }
    };

    globalThis.updateTexts = function(lang) {
        const dict = globalThis.translations[lang] || globalThis.translations.es;

        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.dataset.translate;
            const val = dict[key];

            if (!val) return;

            const tag = el.tagName.toUpperCase();

            if (tag === 'INPUT' || tag === 'TEXTAREA') {
                el.placeholder = val;
            } else if (tag === 'OPTION') {
                el.textContent = val;
            } else if (tag === 'META') {
                el.setAttribute('content', val);
            } else {
                const textNodes = Array.from(el.childNodes).filter(n => n.nodeType === Node.TEXT_NODE);
                if (textNodes.length > 0) {
                    textNodes[textNodes.length - 1].nodeValue = ' ' + val;
                } else {
                    el.textContent = val;
                }
            }
        });
    };
})();

// ============================================
// 2. LANGUAGE SWITCHER
// ============================================

(function initLanguageSwitcher() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        const langBtn = document.querySelector('.lang-btn');
        const langDropdown = document.querySelector('.lang-dropdown');
        const currentLangEl = document.getElementById('currentLang');
        const langOptions = document.querySelectorAll('.lang-option');

        if (!langBtn || !langDropdown) return;

        function toggleDropdown(e) {
            e.stopPropagation();
            const isVisible = langDropdown.style.display === 'block';
            langDropdown.style.display = isVisible ? 'none' : 'block';
        }

        function closeDropdown() {
            langDropdown.style.display = 'none';
        }

        langBtn.addEventListener('click', toggleDropdown);

        document.addEventListener('click', function(e) {
            if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
                closeDropdown();
            }
        });

        langOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                const lang = this.dataset.lang;
                if (!lang) return;

                if (currentLangEl) {
                    currentLangEl.textContent = lang.toUpperCase();
                }

                if (typeof globalThis.updateTexts === 'function') {
                    globalThis.updateTexts(lang);
                }

                localStorage.setItem('preferredLanguage', lang);
                document.documentElement.lang = lang;

                closeDropdown();

                const event = new CustomEvent('languageChanged', {
                    detail: { language: lang }
                });
                document.dispatchEvent(event);
            });
        });

        const savedLang = localStorage.getItem('preferredLanguage') || 'es';
        if (currentLangEl) {
            currentLangEl.textContent = savedLang.toUpperCase();
        }

        if (typeof globalThis.updateTexts === 'function') {
            globalThis.updateTexts(savedLang);
        }
    });
})();

// ============================================
// 3. HERO SLIDER - OPTIMIZADO
// ============================================

(function initHeroSlider() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        const slides = document.querySelectorAll('.hero-slide');
        if (!slides.length) return;

        let currentSlide = 0;
        const slideInterval = 5000;
        let intervalId;

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        // Solo iniciar si no es móvil (performance)
        const isMobile = window.innerWidth <= 768;

        if (!isMobile) {
            intervalId = setInterval(nextSlide, slideInterval);

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
        }

        globalThis.addEventListener('beforeunload', () => {
            if (intervalId) clearInterval(intervalId);
        });
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

        if (!menuToggle || !navLinks) return;

        let overlay = document.querySelector('.menu-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'menu-overlay';
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                z-index: 998;
                display: none;
            `;
            document.body.appendChild(overlay);
        }

        function toggleMenu(show) {
            const actions = show ? 'add' : 'remove';
            menuToggle.classList[actions]('active');
            navLinks.classList[actions]('active');
            overlay.style.display = show ? 'block' : 'none';
            document.body.style.overflow = show ? 'hidden' : '';
        }

        menuToggle.addEventListener('click', function() {
            const isActive = navLinks.classList.contains('active');
            toggleMenu(!isActive);
        });

        overlay.addEventListener('click', () => toggleMenu(false));

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (!this.classList.contains('lang-option') &&
                    !this.closest('.language-switcher')) {
                    toggleMenu(false);
                }
            });
        });

        globalThis.addEventListener('resize', function() {
            if (globalThis.innerWidth > 768 && navLinks.classList.contains('active')) {
                toggleMenu(false);
            }
        });
    });
})();

// ============================================
// 5. CAR ANIMATION - OPTIMIZADO CON THROTTLE
// ============================================

(function initCarAnimation() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        const car = document.getElementById('pmfCar');
        const progressBar = document.getElementById('tourProgress');

        // Desactivar en móvil para mejor performance
        const isMobile = window.innerWidth <= 768;

        if (!car || isMobile) {
            console.info('ℹ️ Car animation disabled on mobile for performance');
            return;
        }

        let ticking = false;
        let lastScrollY = 0;

        function updateCarPosition() {
            const scrollTop = window.pageYOffset;

            // Solo actualizar si hay cambio significativo
            if (Math.abs(scrollTop - lastScrollY) < 10) {
                ticking = false;
                return;
            }

            lastScrollY = scrollTop;

            const windowHeight = window.innerHeight;
            const documentHeight = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
            );

            const maxScroll = documentHeight - windowHeight;
            const scrollProgress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);

            const viewportWidth = window.innerWidth;
            const carWidth = car.offsetWidth || 120;
            const maxX = Math.max(0, viewportWidth - carWidth - 20);
            const newX = scrollProgress * maxX;

            requestAnimationFrame(() => {
                car.style.transform = `translateX(${newX}px)`;
                car.style.opacity = '1';
            });

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

        // Throttle scroll events
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(updateCarPosition);
                ticking = true;
            }
        }, { passive: true });

        updateCarPosition();
    });
})();

// ============================================
// 6. MAIN FUNCTIONALITY - OPTIMIZADO
// ============================================

(function initMain() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        initScrollEffects();
        initBackToTop();
        initFAQ();
        initSmoothScroll();
        console.log('✅ All components initialized');
    });

    // Debounce helper
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function initScrollEffects() {
        const header = document.querySelector('.header');
        if (!header) return;

        let lastScroll = 0;

        const handleScroll = debounce(function() {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            if (currentScroll > lastScroll && currentScroll > 500) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }

            lastScroll = currentScroll;
        }, 10);

        window.addEventListener('scroll', handleScroll, { passive: true });
    }

    function initBackToTop() {
        let backToTop = document.querySelector('.back-to-top');

        if (!backToTop) {
            backToTop = document.createElement('button');
            backToTop.className = 'back-to-top';
            backToTop.innerHTML = '<i class="bx bx-chevron-up"></i>';
            backToTop.setAttribute('aria-label', 'Volver arriba');
            backToTop.style.cssText = `
                position: fixed;
                bottom: 90px;
                right: 20px;
                width: 50px;
                height: 50px;
                background: var(--pmf-rojo);
                color: white;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                z-index: 999998;
                box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            `;
            document.body.appendChild(backToTop);
        }

        const handleScroll = debounce(function() {
            if (window.pageYOffset > 500) {
                backToTop.style.opacity = '1';
                backToTop.style.visibility = 'visible';
            } else {
                backToTop.style.opacity = '0';
                backToTop.style.visibility = 'hidden';
            }
        }, 100);

        window.addEventListener('scroll', handleScroll, { passive: true });

        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    function initFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        if (!faqItems.length) return;

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (!question) return;

            question.addEventListener('click', function() {
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });

                item.classList.toggle('active');
            });
        });
    }

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
    }
})();

// ============================================
// 7. WHATSAPP LINKS MANAGER
// ============================================

let pmfWhatsAppData = null;

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

async function updateWhatsAppLinks() {
    const data = await loadWhatsAppData();
    if (!data) return;

    const currentLang = localStorage.getItem('preferredLanguage') || 'es';
    const mensajes = data[currentLang];

    const heroReservar = document.querySelector('.hero-buttons .btn-primary');
    if (heroReservar) heroReservar.href = mensajes.hero_reservar;

    const navWhatsApp = document.querySelector('.btn-whatsapp-nav');
    if (navWhatsApp) navWhatsApp.href = mensajes.footer_contacto;

    const aboutBtn = document.querySelector('.about-text .btn-primary');
    if (aboutBtn) aboutBtn.href = mensajes.about_contactar;

    const customTourBtn = document.querySelector('.custom-tour-cta .btn-primary');
    if (customTourBtn) customTourBtn.href = mensajes.custom_tour;

    const finalCtaBtn = document.querySelector('.final-cta .btn-primary');
    if (finalCtaBtn) finalCtaBtn.href = mensajes.cta_final;

    const footerWhatsApp = document.querySelector('.footer-social a[href*="wa.me"]');
    if (footerWhatsApp) footerWhatsApp.href = mensajes.footer_contacto;

    const floatingWhatsApp = document.querySelector('.floating-whatsapp');
    if (floatingWhatsApp) floatingWhatsApp.href = mensajes.footer_contacto;
}

document.addEventListener('DOMContentLoaded', updateWhatsAppLinks);
document.addEventListener('languageChanged', updateWhatsAppLinks);

window.pmfWhatsApp = {
    update: updateWhatsAppLinks,
    getData: loadWhatsAppData
};

console.log(`
╔═══════════════════════════════════════╗
║  PMF TOURS OPTIMIZED v2.3             ║
╠═══════════════════════════════════════╣
║ ✅ Mobile Performance Boost           ║
║ ✅ WhatsApp Button Fixed              ║
║ ✅ Lazy Loading                       ║
║ ✅ Debounced Events                   ║
║ ✅ Reduced Animations on Mobile       ║
╚═══════════════════════════════════════╝
`);