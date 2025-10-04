// PMF Tours - JavaScript Principal
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 PMF Tours cargado exitosamente');
    
    initMobileMenu();
    initScrollEffects();
    initBackToTop();
    initContactForm(); // Inicializar formulario de contacto

    // Animación del coche que sigue el scroll
    const car = document.getElementById('movingCar');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const progress = Math.max(0, Math.min(1, scrollTop / maxScroll));
        
        // Mover coche de izquierda a derecha
        const maxX = window.innerWidth - car.offsetWidth;
        const newX = progress * (maxX * 1.5);
        
        car.style.left = `${newX}px`;
        car.style.transform = `rotate(${progress * 5}deg)`;
    });
});

// Menú móvil
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (!mobileMenuToggle || !navLinks) return;
    
    mobileMenuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    });
    
    // Cerrar menú al hacer clic en un enlace
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        });
    });
}

// Efectos de scroll
function initScrollEffects() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '';
            header.style.backdropFilter = '';
        }
    });
}

// Botón "Volver arriba"
function initBackToTop() {
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.id = 'backToTop';
    backToTopButton.setAttribute('aria-label', 'Volver arriba');
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: #a70007;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.pointerEvents = 'auto';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.pointerEvents = 'none';
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// FORMULARIO DE CONTACTO - VERSIÓN CORREGIDA
// ============================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) {
        console.log('⚠️ Formulario no encontrado');
        return;
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        console.log('📝 Procesando formulario...');
        
        // Obtener valores
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const tourType = document.getElementById('tourType').value;
        const message = document.getElementById('message').value.trim();
        
        // Validaciones
        if (!name || !email || !tourType) {
            showNotification('⚠️ Por favor completa todos los campos requeridos', 'error');
            return;
        }
        
        // Construir mensaje WhatsApp
        const tourNames = {
            'city-tour': 'Welcome City Tour',
            'beach': 'Beach Day Escape',
            'cultural': 'Cultural & History Tour',
            'airport': 'Traslado Aeropuerto',
            'custom': 'Tour Personalizado'
        };
        
        let whatsappMessage = `¡Hola! Mi nombre es ${name}\n\n`;
        whatsappMessage += `📧 Email: ${email}\n`;
        whatsappMessage += `🗺️ Tour: ${tourNames[tourType]}\n`;
        
        if (message) {
            whatsappMessage += `\n💬 Mensaje:\n${message}\n`;
        }
        
        // Número de WhatsApp de PMF Tours
        const phoneNumber = '50765347412'; // Actualiza este número
        
        // URL de WhatsApp
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        try {
            // Abrir WhatsApp
            window.open(whatsappURL, '_blank');
            
            // Mostrar confirmación
            showNotification('✅ ¡Mensaje enviado! Te contactaremos pronto', 'success');
            
            // Limpiar formulario
            form.reset();
            
        } catch (error) {
            console.error('❌ Error:', error);
            showNotification('❌ Hubo un problema. Intenta contactarnos directamente por WhatsApp', 'error');
        }
    });
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Estilos
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 25px',
        borderRadius: '8px',
        backgroundColor: type === 'error' ? '#a70007' : '#058600',
        color: 'white',
        zIndex: 1000,
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    });
    
    document.body.appendChild(notification);
    
    // Remover después de 5 segundos
    setTimeout(() => notification.remove(), 5000);
}

// Registrar Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(registration => {
                console.log('✅ Service Worker registrado:', registration);
            })
            .catch(error => {
                console.error('❌ Error al registrar Service Worker:', error);
            });
    });
}