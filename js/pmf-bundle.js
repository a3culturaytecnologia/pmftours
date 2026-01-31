// ============================================
// PMF TOURS - OPTIMIZED JAVASCRIPT v2.4
// FEATURES: Servicios dinámicos, WhatsApp inteligente, Performance móvil
// ============================================

// ============================================
// 1. SISTEMA DE TRADUCCIONES
// ============================================

(function initTranslations() {
    'use strict';

    // ============================================
    // TRADUCCIONES COMPLETAS - PMF TOURS v3.0
    // ============================================

    globalThis.translations = {
        en: {
            // NAVEGACIÓN
            navHome: "Home",
            navAbout: "About Us",
            navServices: "Services",
            navGallery: "Gallery",
            navTestimonials: "Testimonials",

            // HERO
            heroTitle: "Your Gateway to Panama",
            heroSubtitle: "Private Transport & Tours with safety, punctuality and authentic experiences",
            heroBtn1: "Book Tour",
            heroBtn2: "View Packages",

            // HOW IT WORKS
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

            // ABOUT - COMPLETO CON TODAS LAS TRADUCCIONES
            aboutLabel: "Our Story",
            aboutTitle: "About PMF Tours",
            aboutHighlightText: "Founded by Pierre Flores, from the Land of the Canal, 100% Panamanian passionate about his country, its customs and culture.",
            aboutDesc: "We are a local company dedicated to private transport and personalized tours in Panama. We offer authentic experiences that connect you with the true essence of our country.",
            aboutCTA: "Contact Pierre",
            aboutBadge: "Panamanian at heart",
            aboutPierreTitle: "Founder",

            // VALORES - COMPLETOS
            valuesTitle: "Our Values",
            valueSecurity: "Security",
            valuePunctuality: "Punctuality",
            valueHonesty: "Honesty",
            valueTrust: "Trust",

            // SERVICIOS
            servicesLabel: "Our Packages",
            servicesTitle: "Experiences designed for you",
            servicesSubtitle: "Discover the best of Panama with comfort and security.",
            customTitle: "Looking for a unique experience?",
            customDesc: "We specialize in creating memorable experiences tailored to your interests.",
            customBtn: "Design Your Tour",

            // GALERÍA
            galleryLabel: "Our Gallery",
            galleryTitle: "Captured Moments",
            gallerySubtitle: "Discover the magic of Panama through our eyes.",

            // TESTIMONIOS - COMPLETO
            testimonialsLabel: "What They Say",
            testimonialsTitle: "Testimonials",
            testimonialsSubtitleReview: "Leave your comment about your experience with us",
            testimonial1: "\"Pierre took us to Playa Blanca. My daughter still talks about the starfish. Unforgettable family adventure!\"",
            testimonial2: "\"Knows every corner and tells stories not in the guides. Best ceviche ever. 100% authentic!\"",
            testimonial3: "\"Arrived at 11pm and Pierre was waiting. Impeccable Kia, cold water, 25 minutes to hotel. Luxury service at fair price.\"",

            // CTA TESTIMONIOS
            reviewCTATitle: "Did you travel with us?",
            reviewCTADesc: "Share your experience and help other travelers",
            reviewCTAButton: "Leave your review",

            // FAQ
            faqTitle: "Frequently Asked Questions",
            faqSubtitle: "Most useful answers for travelers like you",
            faqQ1: "How do I book?",
            faqA1: "Message us on WhatsApp, tell us which tour you want and your dates. We confirm in minutes. Pay cash on tour day.",
            faqQ2: "Can I cancel?",
            faqA2: "Yes. Cancel up to 24h before at no cost. Airport transfers: up to 2h before. If your flight is delayed, we wait free.",
            faqQ3: "Do you speak English?",
            faqA3: "Yes, Pierre is completely bilingual (Spanish/English). Clear and fluent communication guaranteed.",
            faqQ4: "What vehicle do you use?",
            faqA4: "Kia Sportage with A/C, luggage space, comfortable seats and cleaning after each service.",

            // CTA FINAL
            ctaFinalTitle: "Ready to discover Panama like a local?",
            ctaFinalDesc: "Book now and experience Panama authentically with a local guide who knows every corner of the country.",
            ctaFinalBtn: "Book Now via WhatsApp",

            // OTROS
            carTooltip: "Safe and reliable transport!",
            loadingTestimonials: "Loading testimonials...",
            featuredTestimonials: "Featured Reviews",
            recentTestimonials: "Recent Reviews",
        },

        es: {
            // NAVEGACIÓN
            navHome: "Inicio",
            navAbout: "Nosotros",
            navServices: "Servicios",
            navGallery: "Galería",
            navTestimonials: "Testimonios",

            // HERO
            heroTitle: "Tu puerta a Panamá",
            heroSubtitle: "Transporte & Tours Privados con seguridad, puntualidad y experiencias auténticas",
            heroBtn1: "Reservar Tour",
            heroBtn2: "Ver Paquetes",

            // CÓMO FUNCIONA
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

            // NOSOTROS - COMPLETO CON TODAS LAS TRADUCCIONES
            aboutLabel: "Nuestra Historia",
            aboutTitle: "Sobre PMF Tours",
            aboutHighlightText: "Fundada por Pierre Flores, de la Tierra del Canal, 100% Panameño apasionado por su país y sus costumbres y cultura.",
            aboutDesc: "Somos una empresa local dedicada al transporte privado y tours personalizados en Panamá. Ofrecemos experiencias auténticas que te conectan con la verdadera esencia de nuestro país.",
            aboutCTA: "Contactar a Pierre",
            aboutBadge: "Panameño de corazón",
            aboutPierreTitle: "Fundador",

            // VALORES - COMPLETOS
            valuesTitle: "Nuestros Valores",
            valueSecurity: "Seguridad",
            valuePunctuality: "Puntualidad",
            valueHonesty: "Honestidad",
            valueTrust: "Confianza",

            // SERVICIOS
            servicesLabel: "Nuestros Paquetes",
            servicesTitle: "Experiencias diseñadas para ti",
            servicesSubtitle: "Descubre lo mejor de Panamá con la comodidad y seguridad que mereces.",
            customTitle: "¿Buscas una experiencia única?",
            customDesc: "En PMF Tours nos especializamos en crear experiencias memorables adaptadas a tus intereses.",
            customBtn: "Diseña Tu Tour",

            // GALERÍA
            galleryLabel: "Nuestra Galería",
            galleryTitle: "Momentos Capturados",
            gallerySubtitle: "Descubre la magia de Panamá a través de nuestros ojos.",

            // TESTIMONIOS - COMPLETO
            testimonialsLabel: "Lo que dicen",
            testimonialsTitle: "Testimonios",
            testimonialsSubtitleReview: "Deja tu comentario de tu experiencia con nosotros",
            testimonial1: "\"Pierre nos llevó a Playa Blanca. Mi hija todavía habla de las estrellas de mar. ¡Aventura familiar inolvidable!\"",
            testimonial2: "\"Conoce cada rincón y cuenta historias que no están en las guías. El mejor ceviche de nuestras vidas. ¡100% auténtico!\"",
            testimonial3: "\"Llegué a las 11pm y Pierre estaba esperando. Kia impecable, agua fría, 25 minutos al hotel. Servicio de lujo a precio justo.\"",

            // CTA TESTIMONIOS
            reviewCTATitle: "¿Viajaste con nosotros?",
            reviewCTADesc: "Comparte tu experiencia y ayuda a otros viajeros",
            reviewCTAButton: "Dejar tu reseña",

            // FAQ
            faqTitle: "Preguntas Frecuentes",
            faqSubtitle: "Las respuestas más útiles para viajeros como tú",
            faqQ1: "¿Cómo hago la reserva?",
            faqA1: "Escríbenos por WhatsApp, dinos qué tour quieres y tus fechas. Confirmamos en minutos. Pagas en efectivo el día del tour.",
            faqQ2: "¿Puedo cancelar?",
            faqA2: "Sí. Cancela hasta 24h antes sin costo. Traslados aeropuerto: hasta 2h antes. Si tu vuelo se retrasa, te esperamos gratis.",
            faqQ3: "¿Hablan inglés?",
            faqA3: "Sí, Pierre es completamente bilingüe (español/inglés). Comunicación clara y fluida garantizada.",
            faqQ4: "¿Qué vehículo usan?",
            faqA4: "Kia Sportage con A/C, espacio para equipaje, asientos cómodos y limpieza después de cada servicio.",

            // CTA FINAL
            ctaFinalTitle: "¿Listo para descubrir Panamá como un local?",
            ctaFinalDesc: "Reserva ahora y vive Panamá de forma auténtica con un guía local que conoce cada rincón del país.",
            ctaFinalBtn: "Reservar Ahora por WhatsApp",

            // OTROS
            carTooltip: "¡Transporte seguro y confiable!",
            loadingTestimonials: "Cargando testimonios...",
            featuredTestimonials: "Testimonios Destacados",
            recentTestimonials: "Reseñas Recientes",
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
// 2. CARGA DE SERVICIOS DINÁMICOS
// ============================================

let pmfServiciosData = null;

async function loadServiciosData() {
    try {
        if (!pmfServiciosData) {
            const response = await fetch('./data/precios.json');
            pmfServiciosData = await response.json();
        }
        return pmfServiciosData;
    } catch (error) {
        console.error('Error loading services data:', error);
        return null;
    }
}

function buildServiceCard(service, currentLang, textos) {
    const nombre = typeof service.nombre === 'object' ? service.nombre[currentLang] : service.nombre;
    const descripcion = typeof service.descripcion === 'object' ? service.descripcion[currentLang] : service.descripcion;

    let badge = '';
    if (service.badge) {
        badge = typeof service.badge === 'object' ? service.badge[currentLang] : service.badge;
    }

    const incluye = typeof service.incluye === 'object' && Array.isArray(service.incluye[currentLang])
        ? service.incluye[currentLang]
        : service.incluye;

    const whatsappUrl = typeof service.whatsappUrl === 'object' ? service.whatsappUrl[currentLang] : service.whatsappUrl;

    const badgeHtml = badge ? `<div class="badge ${service.badgeClass}">${badge}</div>` : '';
    const featuresHtml = Array.isArray(incluye) ? incluye.map(item => `<li>✓ ${item}</li>`).join('') : '';
    const priceHtml = buildPriceHtml(service, textos);

    return `
        <div class="service-card">
            <div class="service-image">
                <img src="${service.imagen}" alt="${nombre}" loading="lazy" width="260" height="220">
                ${badgeHtml}
            </div>
            <div class="service-content">
                <h3>${nombre}</h3>
                <p>${descripcion}</p>
                <ul class="features">${featuresHtml}</ul>
                ${priceHtml}
                <a href="${whatsappUrl}" class="btn btn-service" target="_blank" rel="noopener noreferrer">
                    ${textos.reservar_ahora}
                </a>
            </div>
        </div>
    `;
}

function buildPriceHtml(service, textos) {
    const currentLang = localStorage.getItem('preferredLanguage') || 'es';

    // 1. RANGOS DE PRECIO (Beach, Airport, Interior Tours)
    if (service.precioDesde !== undefined && service.precioHasta !== undefined) {
        const precioDisplay = typeof service.precioDisplay === 'object'
            ? service.precioDisplay[currentLang]
            : `desde $${service.precioDesde} USD`;
        return `<div class="price">${precioDisplay}</div>`;
    }

    // 2. PRECIO FIJO (City Tour, Cultural Tour)
    if (service.precio !== undefined) {
        const precioDisplay = typeof service.precioDisplay === 'object'
            ? service.precioDisplay[currentLang]
            : `$${service.precio} USD`;
        return `<div class="price">${precioDisplay}</div>`;
    }

    // 3. PRECIO BASE CON PERSONAS ADICIONALES (si existe)
    if (service.precioBase !== undefined) {
        let priceDetails = '';
        if (service.personas) {
            priceDetails = `<span>${textos.precio_base} ${service.personas} ${textos.personas}</span>`;
            if (service.extra) {
                priceDetails += `<small>+$${service.extra} ${textos.persona_adicional}</small>`;
            }
        }
        return `
            <div class="price-container">
                <div class="price">$${service.precioBase}</div>
                ${priceDetails ? `<div class="price-details">${priceDetails}</div>` : ''}
            </div>
        `;
    }

    // 4. FALLBACK (nunca debería llegar aquí)
    return `<div class="price">Consultar</div>`;
}

async function renderServices() {
    try {
        const data = await loadServiciosData();
        if (!data) return;

        const currentLang = localStorage.getItem('preferredLanguage') || 'es';
        const textos = data.textos_interfaz[currentLang];
        const container = document.getElementById('servicesContainer');

        if (!container) return;

        container.innerHTML = data.servicios.map(service =>
            buildServiceCard(service, currentLang, textos)
        ).join('');
    } catch (error) {
        console.error('Error rendering services:', error);
    }
}

// ============================================
// 3. LANGUAGE SWITCHER
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

                // Actualizar servicios y WhatsApp
                renderServices();
                updateWhatsAppLinks();

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

        // Cargar servicios al inicio
        renderServices();
    });
})();

// === BROWSER LANGUAGE DETECTION ===
function detectUserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('es') ? 'es' : 'en';
}

function initLanguagePreference() {
    const savedLang = localStorage.getItem('preferredLanguage');

    if (!savedLang) {
        const detectedLang = detectUserLanguage();
        localStorage.setItem('preferredLanguage', detectedLang);

        // Actualizar UI
        const currentLangEl = document.getElementById('currentLang');
        if (currentLangEl) {
            currentLangEl.textContent = detectedLang.toUpperCase();
        }

        // Aplicar traducciones detectadas
        if (typeof globalThis.updateTexts === 'function') {
            globalThis.updateTexts(detectedLang);
        }

        console.log(`🌍 Auto-detected browser language: ${detectedLang}`);
    }
}

// ============================================
// 4. WHATSAPP LINKS MANAGER
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

    // Actualizar todos los enlaces de WhatsApp
    const linksToUpdate = [
        { selector: '.hero-buttons .btn-primary', key: 'hero_reservar' },
        { selector: '.btn-whatsapp-nav', key: 'footer_contacto' },
        { selector: '.about-text .btn-primary', key: 'about_contactar' },
        { selector: '.custom-tour-cta .btn-primary', key: 'custom_tour' },
        { selector: '.final-cta .btn-primary', key: 'cta_final' },
        { selector: '.footer-social a[href*="wa.me"]', key: 'footer_contacto' },
        { selector: '.floating-whatsapp', key: 'footer_contacto' }
    ];

    linksToUpdate.forEach(({ selector, key }) => {
        const element = document.querySelector(selector);
        if (element && mensajes[key]) {
            element.href = mensajes[key];
        }
    });
}

// === WHATSAPP DYNAMIC LINKS MANAGER ===
async function updateWhatsAppMessages() {
    try {
        const response = await fetch('./data/precios.json');
        const data = await response.json();
        const currentLang = localStorage.getItem('preferredLanguage') || 'es';
        const messages = data.whatsapp_mensajes[currentLang];

        if (!messages) {
            console.error('WhatsApp messages not found for language:', currentLang);
            return;
        }

        // Mapeo de IDs a claves de mensaje
        const linkMap = {
            'headerWhatsApp': messages.header,
            'heroReservar': messages.hero_reservar,
            'aboutContactar': messages.about_contactar,
            'customTour': messages.custom_tour,
            'ctaFinal': messages.cta_final,
            'footerContacto': messages.footer_contacto,
            'reviewWhatsApp': messages.review_whatsapp  // ← AGREGADO
        };

        // Actualizar cada enlace
        Object.entries(linkMap).forEach(([elementId, url]) => {
            const element = document.getElementById(elementId);
            if (element && url) {
                element.href = url;
            }
        });

        console.log('✅ WhatsApp messages updated for language:', currentLang);
    } catch (error) {
        console.error('Error loading WhatsApp messages:', error);
    }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', updateWhatsAppMessages);

// Actualizar cuando cambie el idioma
document.addEventListener('languageChanged', updateWhatsAppMessages);

// ============================================
// 5. HERO SLIDER - OPTIMIZADO
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
// 6. MOBILE MENU
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
// 7. CAR ANIMATION - OPTIMIZADO CON THROTTLE
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
                    // Mensajes dinámicos multiidioma
                    const messages = {
                        es: ["¡Preparando tu aventura!", "Panamá te espera", "Descubriendo lo auténtico", "¡Casi llegamos!"],
                        en: ["Getting ready for adventure!", "Panama awaits you", "Discovering authenticity", "Almost there!"]
                    };

                    const currentLang = localStorage.getItem('preferredLanguage') || 'es';
                    const messageIndex = Math.min(3, Math.floor(percentage / 25));
                    progressText.textContent = messages[currentLang][messageIndex];
                    progressText.style.display = percentage > 5 ? 'block' : 'none';
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
// 8. MAIN FUNCTIONALITY - OPTIMIZADO
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
// 9. GOOGLE ANALYTICS INTEGRATION
// ============================================

(function initAnalytics() {
    'use strict';

    // Función para trackear eventos de WhatsApp
    function trackWhatsAppClick(label) {
        if (typeof gtag === 'function') {
            gtag('event', 'click', {
                'event_category': 'WhatsApp',
                'event_label': label
            });
        }
    }

    // Trackear clics en botones de WhatsApp
    document.addEventListener('DOMContentLoaded', function() {
        const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
        whatsappButtons.forEach(button => {
            button.addEventListener('click', function() {
                const href = this.getAttribute('href');
                let label = 'Generic WhatsApp Click';

                if (href.includes('Reservar%20Tour')) label = 'Hero - Reservar Tour';
                else if (href.includes('Header%20Button')) label = 'Header Button';
                else if (href.includes('About%20-%20Contact')) label = 'About - Contact Pierre';
                else if (href.includes('Custom%20Tour')) label = 'Custom Tour';
                else if (href.includes('CTA%20Final')) label = 'CTA Final';
                else if (href.includes('Dejar%20tu%20rese%C3%B1a')) label = 'Dejar Reseña';

                trackWhatsAppClick(label);
            });
        });
    });
})();

// ============================================
// 10. FINAL INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar preferencia de idioma (detectar si es primera vez)
    initLanguagePreference();

    // Cargar datos iniciales
    Promise.all([
        loadServiciosData(),
        loadWhatsAppData()
    ]).then(() => {
        updateWhatsAppMessages();
        renderServices();
        console.log('✅ PMF Tours v2.4 fully loaded with auto-detected language');
    }).catch(error => {
        console.error('Error initializing PMF Tours:', error);
    });
});

// ===== FIREBASE TESTIMONIOS =====
// Cargar testimonios dinámicos desde Firestore
document.addEventListener('DOMContentLoaded', () => {
  // Importar dinámicamente el módulo de Firebase
  import('./firebase-testimonios.js').then(module => {
    module.loadTestimonials();
  }).catch(error => {
    console.error('Error loading Firebase testimonials:', error);
  });
});

window.pmfTours = {
    updateTexts: globalThis.updateTexts,
    renderServices: renderServices,
    updateWhatsAppLinks: updateWhatsAppLinks,
    reloadAll: function() {
        renderServices();
        updateWhatsAppLinks();
        const currentLang = localStorage.getItem('preferredLanguage') || 'es';
        globalThis.updateTexts(currentLang);
    }
};

console.log(`
╔═══════════════════════════════════════╗
║  PMF TOURS OPTIMIZED v2.4             ║
╠═══════════════════════════════════════╣
║ ✅ Servicios Dinámicos Integrados      ║
║ ✅ Traducciones Actualizadas           ║
║ ✅ WhatsApp Inteligente                ║
║ ✅ Performance Móvil Mejorado         ║
║ ✅ Google Analytics Tracking           ║
║ ✅ Código Limpio y Mantenible         ║
╚═══════════════════════════════════════╝
`);