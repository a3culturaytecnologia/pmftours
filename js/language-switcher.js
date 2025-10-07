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
            
            // About Section
            aboutLabel: "Our Story",
            aboutTitle: "More Than Transportation",
            aboutDesc1: "We were born from a simple idea: to welcome travelers as friends.",
            
            // Services Section
            servicesLabel: "Our Packages",
            servicesTitle: "Experiences Designed for You",
            
            // Contact Form
            formName: "Name",
            formEmail: "Email",
            formTour: "Select Tour",
            tourCityTour: "Welcome City Tour",
            tourBeach: "Beach Day Escape",
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
            
            // About Section
            aboutLabel: "Nuestra Historia",
            aboutTitle: "Más Que Transporte",
            aboutDesc1: "Nacimos de una idea simple: recibir a los viajeros como amigos.",
            
            // Services Section
            servicesLabel: "Nuestros Paquetes",
            servicesTitle: "Experiencias Diseñadas Para Ti",
            
            // Contact Form
            formName: "Nombre",
            formEmail: "Correo",
            formTour: "Seleccionar Tour",
            tourCityTour: "Tour de Bienvenida a la Ciudad",
            tourBeach: "Escapada de Playa",
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

    // Función mejorada para actualizar textos
    function updateTexts(lang) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang]?.[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else if (element.tagName === 'SELECT') {
                    element.options[0].text = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }

    // Manejar cambio de idioma
    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            
            // Actualizar idioma actual
            if (currentLang) {
                currentLang.textContent = lang.toUpperCase();
            }
            
            // Actualizar textos
            updateTexts(lang);
            
            // Guardar preferencia
            localStorage.setItem('preferredLanguage', lang);
            
            // Cerrar dropdown
            if (langDropdown) {
                langDropdown.classList.remove('active');
            }
            
            console.log('🌍 Idioma cambiado a:', lang);
        });
    });

    // Inicializar con el idioma guardado
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    if (currentLang) {
        currentLang.textContent = savedLang.toUpperCase();
    }
    updateTexts(savedLang);

    console.log('✅ Sistema de traducción inicializado');
});