// Sistema de traducción para PMF Tours
document.addEventListener('DOMContentLoaded', function() {
    // Configuración de traducciones completa
    const translations = {
        en: {
            welcomeTitle: "Your Gateway to Panama",
            welcomeSubtitle: "Private Transportation & Authentic Tours",
            aboutTitle: "About PMF Tours",
            aboutDescription: "Experience Panama with comfort and authenticity",
            servicesTitle: "Our Services",
            contactTitle: "Contact Us",
            navHome: "Home",
            navAbout: "About Us",
            navServices: "Services",
            navGallery: "Gallery",
            navContact: "Contact",
            bookNow: "Book Now",
            viewPackages: "View Packages",
            formName: "Name",
            formEmail: "Email",
            formMessage: "Message",
            formSubmit: "Send Message"
        },
        es: {
            welcomeTitle: "Tu puerta a Panamá",
            welcomeSubtitle: "Transporte & Tours Privados con experiencias auténticas",
            aboutTitle: "Sobre PMF Tours",
            aboutDescription: "Experimenta Panamá con comodidad y autenticidad",
            servicesTitle: "Nuestros Servicios",
            contactTitle: "Contáctanos",
            navHome: "Inicio",
            navAbout: "Nosotros",
            navServices: "Servicios",
            navGallery: "Galería",
            navContact: "Contacto",
            bookNow: "Reservar Ahora",
            viewPackages: "Ver Paquetes",
            formName: "Nombre",
            formEmail: "Correo",
            formMessage: "Mensaje",
            formSubmit: "Enviar Mensaje"
        }
    };

    function initLanguageSwitcher() {
        const langBtn = document.querySelector('.lang-btn');
        const langDropdown = document.querySelector('.lang-dropdown');
        const currentLang = document.querySelector('.current-lang');
        const menuOverlay = document.querySelector('.menu-overlay') || createOverlay();

        function createOverlay() {
            const overlay = document.createElement('div');
            overlay.className = 'menu-overlay';
            document.body.appendChild(overlay);
            return overlay;
        }

        function toggleDropdown(show) {
            if (show) {
                langDropdown?.classList.add('active');
                menuOverlay.style.display = 'block';
            } else {
                langDropdown?.classList.remove('active');
                menuOverlay.style.display = 'none';
            }
        }

        function updateLanguage(lang) {
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[lang]?.[key]) {
                    element.textContent = translations[lang][key];
                }
            });

            document.documentElement.lang = lang;
            currentLang.textContent = lang.toUpperCase();
            localStorage.setItem('preferredLanguage', lang);
            console.log(`🌍 Idioma actualizado: ${lang}`);
        }

        // Click en el botón de idioma
        langBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = langDropdown?.classList.contains('active');
            toggleDropdown(!isActive);
        });

        // Cerrar al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-switcher')) {
                toggleDropdown(false);
            }
        });

        // Click en las opciones de idioma
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                updateLanguage(option.dataset.lang);
                toggleDropdown(false);
            });
        });

        // Cargar idioma guardado
        const savedLang = localStorage.getItem('preferredLanguage') || 'es';
        updateLanguage(savedLang);
    }

    initLanguageSwitcher();
    console.log('✅ Sistema de traducción inicializado');
});