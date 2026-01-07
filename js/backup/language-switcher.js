# pega aquí el código JS completo que compartiste (desde "document.addEventListener('DOMContentLoaded'..." hasta la última "});")
// Sistema de traducción para PMF Tours
document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        en: {
            // Navigation
            navHome: "Home",
            navAbout: "About Us",
            navServices: "Services",
            navTours: "Tours",
            navValues: "Values",
            navGallery: "Gallery",
            navContact: "Contact",

            // Hero
            heroTitle: "Your Gateway to Panama",
            heroSubtitle: "Private Transport & Tours with safety, punctuality and authentic experiences",
            heroBtn: "View Tours",
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
            customDesc: "At PMF Tours we specialize in creating memorable experiences tailored to your interests. Whether it's culture, gastronomy, nature or adventure, we'll design the perfect tour for you. Let us surprise you with the best of Panama.",
            customBtn: "Design Your Tour",

            // Contact Form / Tours
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
            testimonial2: "We booked the Cultural Tour and Pierre took us to a local restaurant in Casco Viejo where we had the best ceviche of our lives. He knows every corner and tells you stories that aren't in the guides. 100% authentic!",
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
            navTours: "Tours",
            navValues: "Valores",
            navGallery: "Galería",
            navContact: "Contacto",

            // Hero
            heroTitle: "Tu puerta a Panamá",
            heroSubtitle: "Transporte & Tours Privados con seguridad, puntualidad y experiencias auténticas",
            heroBtn: "Ver Tours",
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
            customDesc: "En PMF Tours nos especializamos en crear experiencias memorables adaptadas a tus intereses. Ya sea cultura, gastronomía, naturaleza o aventura, diseñaremos el tour perfecto para ti. Déjanos sorprenderte con lo mejor de Panamá.",
            customBtn: "Diseña Tu Tour",

            // Formulario de Contacto / Tours
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

    // Helper para leer la clave data-translate de un elemento (seguro)
    function getDataTranslate(el) {
        if (!el) return null;
        return el.dataset?.translate || null;
    }
    globalThis.getDataTranslate = getDataTranslate;

    // Obtener elementos
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');
    const currentLangEls = document.querySelectorAll('.current-lang');
    const langOptions = document.querySelectorAll('.lang-option');

    function toggleDropdown(show) {
        if (show) {
            langDropdown.classList.add('active');
        } else {
            langDropdown.classList.remove('active');
        }
    }

    // Toggle dropdown
    langBtn?.addEventListener('click', function(e) {
        e.stopPropagation();
        langDropdown?.classList.toggle('active');
    });

    // Cerrar dropdown al hacer click fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.language-switcher')) {
            langDropdown?.classList.remove('active');
        }
    });

    function setElementTextPreserveChildren(el, val) {
        const textNodes = [...el.childNodes].filter(n => n.nodeType === Node.TEXT_NODE);
        if (textNodes.length) {
            textNodes.at(-1).nodeValue = ' ' + val;
        } else {
            el.appendChild(document.createTextNode(' ' + val));
        }
    }

    // Función mejorada para actualizar textos
    function updateTexts(lang) {
        const dict = globalThis.translations?.[lang] ?? translations[lang] ?? {};
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = getDataTranslate(el);
            const val = dict[key];
            if (!val) {
                console.warn(`⚠️ No se encontró traducción para: ${key} en ${lang}`);
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
                setElementTextPreserveChildren(el, val);
            }
        });
        console.log('✅ Textos actualizados a:', lang);
    }

    // Exponer / fusionar traducciones de forma segura
    globalThis.translations = globalThis.translations || {};
    globalThis.translations.en = { ...translations.en, ...globalThis.translations.en };
    globalThis.translations.es = { ...translations.es, ...globalThis.translations.es };
    globalThis.updateTexts = updateTexts;

    // Mejorar el manejo del cambio de idioma
    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const lang = this.getAttribute('data-lang');
            if (!lang) return;

            // Actualizar interfaz
            currentLangEls.forEach(el => el.textContent = lang.toUpperCase());

            // Actualizar textos
            updateTexts(lang);

            // Guardar preferencia
            localStorage.setItem('preferredLanguage', lang);

            // Cerrar dropdown
            if (langDropdown) {
                langDropdown.classList.remove('active');
            }

            // Disparar evento personalizado
            const event = new CustomEvent('languageChanged', { detail: { language: lang } });
            document.dispatchEvent(event);

            console.log('🌍 Idioma cambiado a:', lang);
        });
    });

    // Inicializar con el idioma guardado
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    currentLangEls.forEach(el => el.textContent = savedLang.toUpperCase());
    updateTexts(savedLang);

    console.log('✅ Sistema de traducción inicializado');
});

