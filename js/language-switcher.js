// Sistema de traducción para PMF Tours
document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        /* ... tus objetos en: en, es ... (sin cambios) ... */
        en: { /* ... */ },
        es: { /* ... */ }
    };

    // Helper para leer la clave data-translate de un elemento (seguro)
    function getDataTranslate(el) {
      if (!el) return null;
      return (el.dataset && el.dataset.translate) || el.getAttribute('data-translate') || null;
    }
    window.getDataTranslate = getDataTranslate;

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

    // Exponer traducciones y la función para uso externo
    window.translations = window.translations || translations;
    window.updateTexts = updateTexts;

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
