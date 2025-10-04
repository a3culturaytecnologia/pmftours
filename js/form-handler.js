// ============================================
// FORM-HANDLER.JS - VERSIÓN CORREGIDA
// ============================================

;(function () {
  console.log('🔄 Cargando form handler sin Web3Forms...')

  const form = document.getElementById('contactForm')

  if (!form) {
    console.error('❌ Formulario no encontrado')
    return
  }

  console.log('✅ Formulario encontrado')

  form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log('📝 Formulario enviado - iniciando proceso')

    // Obtener valores
    const name = document.getElementById('name')?.value.trim()
    const email = document.getElementById('email')?.value.trim()
    const tourType = document.getElementById('tourType')?.value
    const message = document.getElementById('message')?.value.trim()

    // Validar campos requeridos
    if (!name || !email || !tourType) {
      console.error('❌ Faltan campos requeridos')
      showNotification('Por favor completa todos los campos requeridos', 'error')
      return
    }

    // Preparar mensaje de WhatsApp
    const tours = {
      'city-tour': 'Welcome City Tour',
      beach: 'Beach Day Escape',
      cultural: 'Cultural & History Tour',
      airport: 'Traslado Aeropuerto',
      custom: 'Tour Personalizado',
    }

    let whatsappMsg = `¡Hola! Mi nombre es ${name}\n\n`
    whatsappMsg += `📧 Email: ${email}\n`
    whatsappMsg += `🗺️ Tour: ${tours[tourType]}\n`
    if (message) whatsappMsg += `\n💬 Mensaje:\n${message}`

    // Número de WhatsApp de PMF Tours
    const phone = '50760762328'

    // Crear URL de WhatsApp
    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMsg)}`

    try {
      window.open(whatsappURL, '_blank')
      showNotification('¡Mensaje enviado! Te contactaremos pronto', 'success')
      form.reset()
    } catch (error) {
      console.error('❌ Error:', error)
      showNotification('Hubo un problema. Intenta contactarnos directamente por WhatsApp', 'error')
    }
  })

  console.log('✅ Form handler completamente inicializado (Sin Web3Forms)')
})()

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
  const notification = document.createElement('div')
  notification.className = `notification ${type}`
  notification.innerHTML = `
        <i class='bx ${type === 'success' ? 'bx-check' : 'bx-x'}'></i>
        <span>${message}</span>
    `

  Object.assign(notification.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '15px 25px',
    background: type === 'success' ? '#058600' : '#a70007',
    color: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    zIndex: '9999',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  })

  document.body.appendChild(notification)

  setTimeout(() => notification.remove(), 5000)
}

// ============================================
// FORM-HANDLER.JS - VERSIÓN CON WEB3FORMS
// ============================================

(function () {
  'use strict'

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }

  function init() {
    const form = document.getElementById('contactForm')
    if (!form) return

    const cleanForm = form.cloneNode(true)
    form.parentNode.replaceChild(cleanForm, form)
    cleanForm.addEventListener('submit', handleSubmit)
  }

  function handleSubmit(e) {
    e.preventDefault()

    // Obtener valores del formulario
    const formData = {
      name: document.getElementById('name')?.value.trim(),
      email: document.getElementById('email')?.value.trim(),
      tourType: document.getElementById('tourType')?.value,
      message: document.getElementById('message')?.value.trim() || '',
    }

    // Validaciones básicas
    if (!formData.name || !formData.email || !formData.tourType) {
      alert('Por favor completa todos los campos requeridos')
      return
    }

    // Mapeo de tipos de tour para el mensaje
    const tourNames = {
      'city-tour': 'Welcome City Tour',
      beach: 'Beach Day Escape',
      cultural: 'Cultural & History Tour',
      airport: 'Traslado Aeropuerto',
      custom: 'Tour Personalizado',
    }

    // Construir mensaje para WhatsApp
    let whatsappMessage = `¡Hola! Me interesa un tour con PMF Tours\n\n`
    whatsappMessage += `Nombre: ${formData.name}\n`
    whatsappMessage += `Email: ${formData.email}\n`
    whatsappMessage += `Tour seleccionado: ${tourNames[formData.tourType]}\n`
    if (formData.message) {
      whatsappMessage += `\nMensaje adicional:\n${formData.message}`
    }

    // Número de WhatsApp de PMF Tours
    const whatsappNumber = '50765347412'

    // Crear URL de WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    // Mostrar mensaje de éxito
    const successMessage = document.getElementById('successMessage')
    if (successMessage) {
      successMessage.classList.add('show')
      setTimeout(() => {
        successMessage.classList.remove('show')
      }, 3000)
    }

    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappUrl, '_blank')

    // Limpiar formulario
    e.target.reset()
  }
})()
