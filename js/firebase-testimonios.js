import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, query, where, orderBy, limit, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

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
        <img src="${imagen}"
             alt="${nombre}"
             width="40"
             height="40"
             loading="lazy"
             onerror="this.src='./image/testimonios/default.jpg'">
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
    // Query: últimos 6 testimonios NO destacados
    const q = query(
      collection(db, 'reviews'),
      where('featured', '!=', true),
      orderBy('featured'),
      orderBy('timestamp', 'desc'),
      limit(6)
    );

    // Escuchar cambios en tiempo real
    onSnapshot(q, (snapshot) => {
      if (snapshot.empty) {
        console.log('No hay testimonios recientes');
        const lang = getCurrentLanguage();
        const emptyMessage = lang === 'es'
          ? 'Aún no hay reseñas recientes. ¡Sé el primero!'
          : 'No recent reviews yet. Be the first!';

        container.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--gris);">
            <i class="bx bx-comment-dots" style="font-size: 48px; opacity: 0.3; margin-bottom: 15px;"></i>
            <p>${emptyMessage}</p>
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

      console.log(`✅ ${testimonials.length} testimonios recientes cargados`);
    }, (error) => {
      console.error('❌ Error cargando testimonios:', error);
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; color: #e74c3c; padding: 20px;">
          <i class="bx bx-error-circle" style="font-size: 40px; margin-bottom: 10px;"></i>
          <p>Error al cargar los testimonios</p>
        </div>
      `;
    });
  } catch (error) {
    console.error('❌ Error crítico en loadTestimonials:', error);
  }
}

// REVIEW FORM MODAL SCRIPT
document.addEventListener('DOMContentLoaded', () => {
  const reviewModal = document.getElementById('reviewModal');
  const reviewForm = document.getElementById('reviewForm');
  const closeBtn = document.getElementById('closeReviewModal');
  const modalOverlay = document.getElementById('modalOverlay');
  const starRating = document.getElementById('starRating');
  const reviewStars = document.getElementById('reviewStars');
  const starLabel = document.getElementById('starLabel');
  const charCount = document.getElementById('charCount');
  const reviewText = document.getElementById('reviewText');
  const successMessage = document.getElementById('successMessage');

  const starLabels = {
    1: '⭐ Pobre',
    2: '⭐⭐ Aceptable',
    3: '⭐⭐⭐ Bueno',
    4: '⭐⭐⭐⭐ Muy bueno',
    5: '⭐⭐⭐⭐⭐ Excelente'
  };

  // Abrir modal
  const openReviewBtn = document.querySelector('[data-translate="reviewCTAButton"]')?.closest('.btn');
  if (openReviewBtn) {
    openReviewBtn.addEventListener('click', (e) => {
      e.preventDefault();
      reviewModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  // Cerrar modal
  const closeModal = () => {
    reviewModal.classList.remove('active');
    document.body.style.overflow = '';
    reviewForm.reset();
    successMessage.style.display = 'none';
    reviewForm.style.display = 'block';
    resetStars();
  };

  closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);

  // Estrellas
  document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
      const value = star.dataset.value;
      reviewStars.value = value;
      document.querySelectorAll('.star').forEach((s, i) => {
        s.classList.toggle('active', i < value);
      });
      starLabel.textContent = starLabels[value];
    });
  });

  function resetStars() {
    document.querySelectorAll('.star').forEach((s, i) => {
      s.classList.toggle('active', i < 5);
    });
    starLabel.textContent = starLabels[5];
  }

  // Contador de caracteres
  reviewText.addEventListener('input', () => {
    charCount.textContent = reviewText.value.length;
  });

  // Enviar formulario
  reviewForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById('submitReview');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="bx bx-loader-circle"></i> Enviando...';

    const data = {
      name: document.getElementById('reviewName').value,
      country: document.getElementById('reviewCountry').value,
      stars: parseInt(reviewStars.value),
      review: reviewText.value,
      date: new Date().toLocaleDateString('es-ES'),
      timestamp: new Date().getTime(),
      featured: false,
      imagen: 'https://firebasestorage.googleapis.com/v0/b/pmftours-testimonios.appspot.com/o/avatars%2Favatar-default.png?alt=media'
    };

    try {
      // Aquí irá el código de Firebase
      // Por ahora simulamos éxito
      console.log('Reseña enviada:', data);

      // Mostrar éxito
      reviewForm.style.display = 'none';
      successMessage.style.display = 'block';

      setTimeout(() => {
        closeModal();
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar la reseña');
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="bx bx-send"></i> Enviar reseña';
    }
  });
});

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadTestimonials);
} else {
  loadTestimonials();
}