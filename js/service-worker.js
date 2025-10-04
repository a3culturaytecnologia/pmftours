const CACHE_NAME = 'pmf-tours-v1';
const urlsToCache = [
    './',
    './index.html',
    './css/styles.css',
    './css/kia-animation.css',
    './js/main.js',
    './js/car-animation.js',
    './js/form-handler.js',
    './js/hero-slider.js',
    './js/language-switcher.js',
    './js/mobile-menu.js',
    './image/logo.png',
    './image/logo-blanco.png'
];

// Instalación del SW
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// Estrategia de cache: Network First, fallback to cache
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .catch(() => {
                return caches.match(event.request);
            })
    );
});