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
            formSubmit: "Send Message",

            // Meta datos
            siteTitle: "PMF Tours - Your Gateway to Panama",
            metaDescription: "Discover Panama with PMF Tours. We offer private transportation and authentic tours to make your visit unforgettable."
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
            formSubmit: "Enviar Mensaje",

            // Meta datos
            siteTitle: "PMF Tours - Tu puerta a Panamá",
            metaDescription: "Descubre Panamá con PMF Tours. Ofrecemos transporte privado y tours auténticos para hacer de tu visita algo inolvidable."
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

    function setElementTextPreserveChildren(el, val) {
      const textNodes = [...el.childNodes].filter(n => n.nodeType === Node.TEXT_NODE);
      if (textNodes.length) {
        textNodes[textNodes.length - 1].nodeValue = ' ' + val;
      } else {
        el.appendChild(document.createTextNode(' ' + val));
      }
    }

    // Función mejorada para actualizar textos
    function updateTexts(lang) {
      const dict = window.translations && window.translations[lang] ? window.translations[lang] : (translations && translations[lang] ? translations[lang] : {});
      document.querySelectorAll('[data-translate]').forEach(el => {
        const key = (el.dataset && el.dataset.translate) || (el.dataset && el.dataset.translate) || el.getAttribute('data-translate');
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

    // Mejorar el manejo del cambio de idioma
    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const lang = this.getAttribute('data-lang');
            if (!lang) return;

            // Actualizar interfaz
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

            // Disparar evento personalizado
            const event = new CustomEvent('languageChanged', { detail: { language: lang } });
            document.dispatchEvent(event);

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

// Asegura que translations esté en window (si translations es una variable local)
window.translations = window.translations || (typeof translations !== 'undefined' ? translations : { es: {}, en: {} });

// Expone updateTexts para poder invocarlo desde la consola o desde otras partes
if (typeof updateTexts === 'function') {
  window.updateTexts = updateTexts;
}

// Inicializa el idioma guardado al cargar
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('preferredLanguage') || 'es';
  if (typeof window.updateTexts === 'function') window.updateTexts(saved);
});
