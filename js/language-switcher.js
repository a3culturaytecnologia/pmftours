// Sistema de traducción para PMF Tours
document.addEventListener('DOMContentLoaded', function() {
    // Configuración de traducciones
    const translations = {
        en: {
            welcomeTitle: "Your Gateway to Panama",
            welcomeSubtitle: "Private Transportation & Authentic Tours",
            aboutTitle: "About PMF Tours",
            servicesTitle: "Our Services",
            contactTitle: "Contact Us",
            // ...más traducciones
        },
        es: {
            welcomeTitle: "Tu puerta a Panamá",
            welcomeSubtitle: "Transporte & Tours Privados con experiencias auténticas",
            aboutTitle: "Sobre PMF Tours",
            servicesTitle: "Nuestros Servicios",
            contactTitle: "Contáctanos",
            // ...más traducciones
        }
    };

    let isProcessing = false;

    function initLanguageSwitcher() {
        const langBtn = document.querySelector('.lang-btn');
        const langDropdown = document.querySelector('.lang-dropdown');
        const currentLang = document.querySelector('.current-lang');

        if (!langBtn || !langDropdown || !currentLang) {
            console.warn('⚠️ Elementos del selector de idioma no encontrados');
            return;
        }

        function updateLanguage(lang) {
            if (isProcessing) return;
            isProcessing = true;

            try {
                document.querySelectorAll('[data-translate]').forEach(element => {
                    const key = element.getAttribute('data-translate');
                    element.textContent = translations[lang][key] || element.textContent;
                });

                currentLang.textContent = lang.toUpperCase();
                localStorage.setItem('preferredLanguage', lang);
                console.log(`✅ Idioma actualizado: ${lang}`);
            } catch (error) {
                console.error('❌ Error al cambiar idioma:', error);
            } finally {
                isProcessing = false;
            }
        }

        // Inicializar con idioma guardado
        const savedLang = localStorage.getItem('preferredLanguage') || 'es';
        updateLanguage(savedLang);

        // Eventos
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                updateLanguage(option.dataset.lang);
                langDropdown.classList.remove('active');
            });
        });
    }

    initLanguageSwitcher();
    console.log('✅ Sistema de traducción inicializado');
});