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

    // Obtener elementos
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');
    const currentLang = document.querySelector('.current-lang');
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

    // Función para actualizar textos
    function updateTexts(lang) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang]?.[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }

    // Click en las opciones de idioma
    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            
            // Actualizar idioma actual
            currentLang.textContent = lang.toUpperCase();
            
            // Actualizar textos
            updateTexts(lang);
            
            // Guardar preferencia
            localStorage.setItem('preferredLanguage', lang);
            
            // Cerrar dropdown
            langDropdown.classList.remove('active');
            
            console.log('🌍 Idioma cambiado a:', lang);
        });
    });

    // Cargar idioma guardado al iniciar
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    currentLang.textContent = savedLang.toUpperCase();
    updateTexts(savedLang);

    console.log('✅ Sistema de traducción inicializado');
});