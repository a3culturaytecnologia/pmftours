// Sistema de traducción para PMF Tours
document.addEventListener('DOMContentLoaded', function() {
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

    // Click en las opciones de idioma
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const lang = option.dataset.lang;
            currentLang.textContent = lang.toUpperCase();
            
            // Cambiar idioma
            document.documentElement.lang = lang;
            localStorage.setItem('preferredLanguage', lang);
            
            // Actualizar textos
            updateTexts(lang);
            
            toggleDropdown(false);
        });
    });

    // Cargar idioma guardado
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    currentLang.textContent = savedLang.toUpperCase();
    document.documentElement.lang = savedLang;
    updateTexts(savedLang);
});

function updateTexts(lang) {
    const translations = {
        en: {
            navHome: "Home",
            navAbout: "About Us",
            navServices: "Services",
            navGallery: "Gallery",
            navContact: "Contact",
            // ... más traducciones
        },
        es: {
            navHome: "Inicio",
            navAbout: "Nosotros",
            navServices: "Servicios",
            navGallery: "Galería",
            navContact: "Contacto",
            // ... más traducciones
        }
    };

    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang]?.[key]) {
            element.textContent = translations[lang][key];
        }
    });
}