// Sistema de traducción para PMF Tours
document.addEventListener('DOMContentLoaded', () => {
    // Configuración inicial
    const DEFAULT_LANG = 'es';
    let currentLang = localStorage.getItem('pmf_lang') || DEFAULT_LANG;

    // Elementos del DOM
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');
    const currentLangSpan = document.querySelector('.current-lang');
    const langOptions = document.querySelectorAll('.lang-option');
    const menuOverlay = document.createElement('div');
    
    // Configurar overlay
    menuOverlay.className = 'menu-overlay';
    document.body.appendChild(menuOverlay);

    // Diccionario completo de traducciones
    const translations = {
        'es': {
            // Navegación
            'nav_inicio': 'Inicio',
            'nav_nosotros': 'Nosotros',
            'nav_servicios': 'Servicios',
            'nav_valores': 'Valores',
            'nav_galeria': 'Galería',
            'nav_contacto': 'Contacto',
            
            // Hero
            'hero_title': 'Tu puerta a Panamá',
            'hero_subtitle': 'Transporte & Tours Privados con seguridad, puntualidad y experiencias auténticas',
            'btn_reservar': 'Reservar Tour',
            'btn_paquetes': 'Ver Paquetes',
            
            // Nosotros
            'about_label': 'Nuestra Historia',
            'about_title': 'Mucho más que transporte',
            'about_text1': 'Nacimos de una idea sencilla: recibir al viajero como se recibe a un amigo. Somos de aquí, conocemos cada playa, cada esquina histórica y cada secreto de Panamá.',
            'about_text2': 'Nuestro trabajo no es solo llevarte del punto A al B, sino abrirte la puerta a un país cálido, alegre y auténtico.',
            'about_text3': 'Nuestro compromiso: transporte seguro, puntualidad y experiencias que recordarás con cariño. Porque cada viaje empieza con una bienvenida, y la tuya comienza con nosotros.',
            'panama_badge': 'Panameño de corazón',
            
            // Valores
            'valores_label': 'Nuestros Valores',
            'valores_title': 'Lo que nos define',
            'valor1': 'Cercanía y trato humano',
            'valor2': 'Puntualidad y confianza',
            'valor3': 'Experiencias auténticas',
            'valor4': 'Comunicación bilingüe',
            'valor5': 'Seguridad total',
            'valor6': 'Calidad premium',
            
            // Tours
            'welcome_tour_title': 'Welcome City Tour',
            'welcome_tour_desc': 'Pickup aeropuerto + City tour express (2h)',
            'welcome_tour_feature1': '✓ Pickup en aeropuerto Tocumen',
            'welcome_tour_feature2': '✓ Tour por Ciudad de Panamá',
            'welcome_tour_feature3': '✓ Paradas fotográficas',
            'welcome_tour_feature4': '✓ Drop-off en hotel',
            
            'beach_tour_title': 'Beach Day Escape',
            'beach_tour_desc': 'Playa a elección + transporte privado (8h)',
            'beach_feature1': '✓ Playa a tu elección',
            'beach_feature2': '✓ Tiempo flexible en playa',
            'beach_feature3': '✓ Recomendaciones gastronómicas',
            'beach_feature4': '✓ Asistencia con equipaje',
            
            // Contacto
            'contact_label': 'Contáctanos',
            'contact_title': 'Estamos aquí para ayudarte',
            'contact_info': 'Información de Contacto',
            'form_name': 'Tu nombre',
            'form_email': 'Tu email',
            'form_tour': 'Selecciona un tour',
            'form_message': 'Tu mensaje (opcional)',
            'btn_enviar': 'Enviar Mensaje',
            'msg_success': '¡Mensaje enviado con éxito! Te contactaremos pronto.'
        },
        'en': {
            // Navigation
            'nav_inicio': 'Home',
            'nav_nosotros': 'About Us',
            'nav_servicios': 'Services',
            'nav_valores': 'Values',
            'nav_galeria': 'Gallery',
            'nav_contacto': 'Contact',
            
            // Hero
            'hero_title': 'Your Gateway to Panama',
            'hero_subtitle': 'Private Transport & Tours with safety, punctuality and authentic experiences',
            'btn_reservar': 'Book Now',
            'btn_paquetes': 'View Packages',
            
            // About
            'about_label': 'Our Story',
            'about_title': 'More than transportation',
            'about_text1': 'We were born from a simple idea: to welcome travelers as friends. We are locals, we know every beach, every historic corner and every secret of Panama.',
            'about_text2': 'Our job is not just to take you from point A to B, but to open the door to a warm, cheerful and authentic country.',
            'about_text3': 'Our commitment: safe transport, punctuality and experiences you will remember fondly. Because every journey begins with a welcome, and yours begins with us.',
            'panama_badge': 'Panamanian at heart',
            
            // Values
            'valores_label': 'Our Values',
            'valores_title': 'What defines us',
            'valor1': 'Closeness and human touch',
            'valor2': 'Punctuality and trust',
            'valor3': 'Authentic experiences',
            'valor4': 'Bilingual communication',
            'valor5': 'Total security',
            'valor6': 'Premium quality',
            
            // Tours
            'welcome_tour_title': 'Welcome City Tour',
            'welcome_tour_desc': 'Airport pickup + Express city tour (2h)',
            'welcome_tour_feature1': '✓ Tocumen Airport pickup',
            'welcome_tour_feature2': '✓ Panama City Tour',
            'welcome_tour_feature3': '✓ Photo stops',
            'welcome_tour_feature4': '✓ Hotel drop-off',
            
            'beach_tour_title': 'Beach Day Escape',
            'beach_tour_desc': 'Beach of your choice + private transport (8h)',
            'beach_feature1': '✓ Beach of your choice',
            'beach_feature2': '✓ Flexible beach time',
            'beach_feature3': '✓ Dining recommendations',
            'beach_feature4': '✓ Luggage assistance',
            
            // Contact
            'contact_label': 'Contact Us',
            'contact_title': 'We are here to help',
            'contact_info': 'Contact Information',
            'form_name': 'Your name',
            'form_email': 'Your email',
            'form_tour': 'Select a tour',
            'form_message': 'Your message (optional)',
            'btn_enviar': 'Send Message',
            'msg_success': 'Message sent successfully! We will contact you soon.'
        }
    };

    // Función mejorada de traducción
    function translatePage(lang) {
        // 1. Elementos con data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // 2. Placeholders
        document.querySelectorAll('[data-placeholder]').forEach(element => {
            const key = element.getAttribute('data-placeholder');
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        // 3. Atributos alt de imágenes
        document.querySelectorAll('[data-alt]').forEach(element => {
            const key = element.getAttribute('data-alt');
            if (translations[lang][key]) {
                element.alt = translations[lang][key];
            }
        });

        // 4. Actualizar el idioma actual
        if (currentLangSpan) {
            currentLangSpan.textContent = lang.toUpperCase();
        }

        // 5. Guardar preferencia
        localStorage.setItem('pmf_lang', lang);
    }

    // Event Listeners
    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('show');
            menuOverlay.style.display = langDropdown.classList.contains('show') ? 'block' : 'none';
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-switcher')) {
                langDropdown.classList.remove('show');
                menuOverlay.style.display = 'none';
            }
        });

        langDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = option.getAttribute('data-lang');
                
                if (currentLangSpan) {
                    currentLangSpan.textContent = lang.toUpperCase();
                }
                
                // Guardar preferencia
                localStorage.setItem('pmf_lang', lang);
                
                // Cerrar dropdown
                langDropdown.classList.remove('show');
                menuOverlay.style.display = 'none';
                
                // Aquí iría la lógica de traducción
                console.log('🌍 Cambiando idioma a:', lang);
            });
        });
    }

    // Inicializar traducción
    translatePage(currentLang);
});