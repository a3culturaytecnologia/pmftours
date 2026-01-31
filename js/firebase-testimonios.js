import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, query, orderBy, limit, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Configuración Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCs6gwEEq47A0AI9cUnlQrgSEGrfH1EDcM",
  authDomain: "pmftours-testimonios.firebaseapp.com",
  projectId: "pmftours-testimonios",
  storageBucket: "pmftours-testimonios.firebasestorage.app",
  messagingSenderId: "365743560919",
  appId: "1:365743560919:web:c645f5930ade6205c37892",
  measurementId: "G-JHZYTEX7LX"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtener idioma actual
function getCurrentLanguage() {
  return localStorage.getItem('preferredLanguage') || 'es';
}

// Construir HTML de testimonio
function buildTestimonialHTML(testimonio) {
  const nombre = testimonio.name || 'Viajero Anónimo';
  const pais = testimonio.country || '🌍 Internacional';
  const fecha = testimonio.date || new Date().toLocaleDateString();
  const estrellas = parseInt(testimonio.stars) || 5;
  const imagen = testimonio.imagen || './image/testimonios/default.jpg';
  const review = testimonio.review || '';

  // Convertir número a estrellas
  const estrellasHTML = '⭐'.repeat(Math.min(estrellas, 5));

  return `
    <div class="testimonial-item">
      <div class="testimonial-stars">
        <span class="stars-display">${estrellasHTML}</span>
      </div>
      <div class="testimonial-content">
        <p>"${review}"</p>
      </div>
      <div class="testimonial-author">
        <img src="${imagen}" alt="${nombre}" width="40" height="40" loading="lazy" onerror="this.src='./image/testimonios/default.jpg'">
        <div class="author-info">
          <strong>${nombre}</strong>
          <span>${pais} • ${fecha}</span>
        </div>
      </div>
    </div>
  `;
}

// Cargar testimonios desde Firestore
export function loadTestimonials() {
  const container = document.getElementById('testimonials-grid-container');

  if (!container) {
    console.warn('Contenedor de testimonios no encontrado');
    return;
  }

  try {
    // Query: últimos 6 testimonios, ordenados por fecha descendente
    const q = query(
      collection(db, 'reviews'),
      orderBy('date', 'desc'),
      limit(6)
    );

    // Escuchar cambios en tiempo real
    onSnapshot(q, (snapshot) => {
      if (snapshot.empty) {
        console.log('No hay testimonios aún');
        container.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
            <p>Sé el primero en compartir tu experiencia</p>
          </div>
        `;
        return;
      }

      // Mapear documentos
      const testimonials = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      // Renderizar
      container.innerHTML = testimonials
        .map(testimonio => buildTestimonialHTML(testimonio))
        .join('');

      console.log(`${testimonials.length} testimonios cargados`);
    }, (error) => {
      console.error('Error cargando testimonios:', error);
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; color: #e74c3c; padding: 20px;">
          <p>Error al cargar los testimonios</p>
        </div>
      `;
    });
  } catch (error) {
    console.error('Error en loadTestimonials:', error);
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadTestimonials);