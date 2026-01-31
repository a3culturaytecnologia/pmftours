import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, query, orderBy, limit, onSnapshot, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function getCurrentLanguage() {
  return localStorage.getItem('preferredLanguage') || 'es';
}

function buildTestimonialHTML(testimonio) {
  const nombre = testimonio.name || 'Viajero Anónimo';
  const pais = testimonio.country || '🌍 Internacional';
  const fecha = testimonio.date || new Date().toLocaleDateString();
  const estrellas = parseInt(testimonio.stars) || 5;
  const imagen = testimonio.imagen || './image/testimonios/default.jpg';
  const review = testimonio.review || '';

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
        <div style="width: 40px; height: 40px; background: #FFC107; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: white; font-size: 14px;">
          <img src="${imagen}"
               alt="${nombre}"
               width="40"
               height="40"
               loading="lazy"
               style="border-radius: 50%; width: 100%; height: 100%; object-fit: cover;"
               onerror="this.parentElement.textContent='${nombre.split(' ')[0][0]}'">
        </div>
        <div class="author-info">
          <strong>${nombre}</strong>
          <span>${pais} • ${fecha}</span>
        </div>
      </div>
    </div>
  `;
}

export function loadTestimonials() {
  const container = document.getElementById('testimonials-grid-container');

  if (!container) {
    console.warn('Contenedor de testimonios no encontrado');
    return;
  }

  try {
    const q = query(
      collection(db, 'reviews'),
      orderBy('timestamp', 'desc'),
      limit(6)
    );

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

      const testimonials = snapshot.docs
        .map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        .filter(t => t.featured !== true);

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

// ===== FORM HANDLING - UN SOLO LISTENER =====
document.addEventListener('DOMContentLoaded', () => {
  const reviewForm = document.getElementById('reviewForm');
  const reviewModal = document.getElementById('reviewModal');
  const closeBtn = document.getElementById('closeReviewModal');
  const modalOverlay = document.getElementById('modalOverlay');
  const reviewStars = document.getElementById('reviewStars');
  const charCount = document.getElementById('charCount');
  const reviewText = document.getElementById('reviewText');
  const successMessage = document.getElementById('successMessage');
  const submitBtn = document.getElementById('submitReview');

  if (!reviewForm) return;

  // ✅ Abrir modal
  const openReviewBtn = document.getElementById('reviewCTAButton');
  if (openReviewBtn) {
    openReviewBtn.addEventListener('click', (e) => {
      e.preventDefault();
      reviewModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  // ✅ Cerrar modal
  const closeModal = () => {
    reviewModal.classList.remove('active');
    document.body.style.overflow = '';
    reviewForm.reset();
    successMessage.style.display = 'none';
    reviewForm.style.display = 'block';
    reviewStars.value = 5;
    document.querySelectorAll('.star').forEach((s, i) => {
      s.classList.toggle('active', i < 5);
    });
  };

  closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // ✅ Estrellas
  document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
      const value = star.dataset.value;
      reviewStars.value = value;
      document.querySelectorAll('.star').forEach((s, i) => {
        s.classList.toggle('active', i < value);
      });
    });
  });

  // ✅ Contador caracteres
  reviewText.addEventListener('input', () => {
    charCount.textContent = reviewText.value.length;
  });

  // ✅ ÚNICO SUBMIT LISTENER - SIN DUPLICACIÓN
  reviewForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="bx bx-loader-circle"></i> Enviando...';

    try {
      const reviewData = {
        name: document.getElementById('reviewName').value.trim(),
        country: document.getElementById('reviewCountry').value,
        stars: parseInt(reviewStars.value),
        review: reviewText.value.trim(),
        date: new Date().toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        timestamp: Date.now(),
        featured: false,
        imagen: 'https://firebasestorage.googleapis.com/v0/b/pmftours-testimonios.appspot.com/o/avatars%2Favatar-default.png?alt=media'
      };

      await addDoc(collection(db, 'reviews'), reviewData);
      console.log('✅ Reseña guardada UNA SOLA VEZ');

      reviewForm.style.display = 'none';
      successMessage.style.display = 'block';

      setTimeout(() => {
        closeModal();
      }, 2000);
    } catch (error) {
      console.error('❌ Error al guardar:', error);
      alert('Error: ' + error.message);
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="bx bx-send"></i> Enviar reseña';
    }
  });

  // Cargar testimonios
  loadTestimonials();
});