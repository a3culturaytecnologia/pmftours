// Sistema de traducción para PMF Tours
document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        en: {
            // Navegación
            navHome: "Home",
            navAbout: "About Us",
            navServices: "Services",
            navValues: "Values",
            navGallery: "Gallery",
            navContact: "Contact",
            
            // Hero Section
            heroTitle: "Your Gateway to Panama",
            heroSubtitle: "Private Transportation & Authentic Tours with safety, punctuality, and authentic experiences.",
            heroBookBtn: "Book Tour",
            heroViewBtn: "View Packages",
            
            // Botones y CTA
            ctaBook: "Book Now",
            ctaWhatsapp: "WhatsApp",
            
            // Secciones Principales
            aboutTitle: "About PMF Tours",
            aboutDesc: "Your trusted partner for exploring Panama",
            servicesTitle: "Our Services",
            servicesDesc: "Discover what we offer",
            valuesTitle: "Our Values",
            galleryTitle: "Gallery",
            contactTitle: "Contact Us",
            
            // Formulario
            formName: "Name",
            formEmail: "Email",
            formTour: "Select Tour",
            formMessage: "Message",
            formSubmit: "Send Message"
        },
        es: {
            // Navegación
            navHome: "Inicio",
            navAbout: "Nosotros",
            navServices: "Servicios",
            navValues: "Valores",
            navGallery: "Galería",
            navContact: "Contacto",
            
            // Hero Section
            heroTitle: "Tu puerta a Panamá",
            heroSubtitle: "Transporte & Tours Privados con seguridad, puntualidad y experiencias auténticas.",
            heroBookBtn: "Reservar Tour",
            heroViewBtn: "Ver Paquetes",
            
            // Botones y CTA
            ctaBook: "Reservar Ahora",
            ctaWhatsapp: "WhatsApp",
            
            // Secciones Principales
            aboutTitle: "Sobre PMF Tours",
            aboutDesc: "Tu socio de confianza para explorar Panamá",
            servicesTitle: "Nuestros Servicios",
            servicesDesc: "Descubre lo que ofrecemos",
            valuesTitle: "Nuestros Valores",
            galleryTitle: "Galería",
            contactTitle: "Contáctanos",
            
            // Formulario
            formName: "Nombre",
            formEmail: "Correo",
            formTour: "Seleccionar Tour",
            formMessage: "Mensaje",
            formSubmit: "Enviar Mensaje"
        }
    };

    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');
    const currentLang = document.querySelector('.current-lang');
    const langOverlay = document.querySelector('.lang-overlay');
    
    function toggleDropdown(show) {
        if (show) {
            langDropdown.classList.add('active');
            langOverlay.classList.add('active');
        } else {
            langDropdown.classList.remove('active');
            langOverlay.classList.remove('active');
        }
    }

    // Click en el botón de idioma
    langBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = langDropdown.classList.contains('active');
        toggleDropdown(!isActive);
    });

    // Click en el overlay o fuera del dropdown
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-switcher')) {
            toggleDropdown(false);
        }
    });

    function updateLanguage(lang) {
        // Update text content
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update current language display
        if (currentLang) {
            currentLang.textContent = lang.toUpperCase();
        }

        // Save preference
        localStorage.setItem('preferredLanguage', lang);
        console.log(`🌍 Idioma actualizado: ${lang}`);
    }

    // Click en las opciones de idioma
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const lang = option.dataset.lang;
            updateLanguage(lang);
            toggleDropdown(false);
        });
    });

    // Cargar idioma guardado
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    updateLanguage(savedLang);
});