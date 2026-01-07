window.translations = window.translations || {};
window.translations.en = Object.assign({}, window.translations.en || {}, {
  navHome: "Home",
  navAbout: "About Us",
  navServices: "Services",
  navValues: "Values",
  navGallery: "Gallery",
  navContact: "Contact",

  heroTitle: "Your Gateway to Panama",
  heroSubtitle: "Private transportation & authentic tours with safety, punctuality and authentic experiences.",
  btnReserve: "Book Tour",
  btnPackages: "View Packages",

  aboutLabel: "Our Story",
  aboutTitle: "More Than Transportation",
  aboutDesc1: "We were born from a simple idea: to welcome travelers as friends.",
  aboutDesc2: "Our work is not just to take you from A to B, but to open the door to a warm and authentic country.",
  aboutDesc3: "Our commitment: safe transport, punctuality, and experiences you'll remember.",

  servicesLabel: "Our Packages",
  servicesTitle: "Experiences Designed for You",

  customTitle: "Looking for a unique experience?",
  customDesc: "At PMF Tours we specialize in creating memorable experiences tailored to your interests.",
  customBtn: "Design Your Tour",

  testimonial1: "Pierre took us to Playa Blanca...",
  testimonial2: "We booked the Cultural Tour and...",
  testimonial3: "I arrived at Tocumen at 11pm and Pierre...",

  formName: "Name",
  formEmail: "Email",
  formTour: "Select Tour",
  tourCityTour: "Welcome City Tour",
  tourBeach: "Beach Day Escape",
  tourCultural: "Cultural & History Tour",
  tourAirport: "Airport Transfer",
  tourCustom: "Custom Tour",
  formMessage: "Message",
  formSubmit: "Send Message",

  faqLabel: "Frequently Asked Questions",
  faqTitle: "Have questions?",
  faqSubtitle: "Here we answer the most common questions from our travelers",
  faqQ1: "How does booking work?",
  faqA1: "Contact us on WhatsApp, tell us the tour and dates; we confirm availability. You can pay in cash or by bank transfer."
});

// Guard: define savedLang si no existe
const savedLang = (typeof savedLang !== 'undefined')
  ? savedLang
  : (localStorage.getItem('preferredLanguage') || 'es'); // 'es' por defecto si quieres

const currentLang = localStorage.getItem('preferredLanguage') || 'es';

// usa currentLang en lugar de savedLang
const currentLangEls = document.querySelectorAll('.current-lang');
currentLangEls.forEach(el => el.textContent = currentLang.toUpperCase());
