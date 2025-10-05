const CACHE_NAME = 'pmf-tours-v1';
const ASSETS = [
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
    './image/kia.png',
    './image/Pierre.png',
    './image/testimonios/Usuario1.jpg',
    './image/testimonios/Usuario2.jpg',
    './image/testimonios/Usuario3.jpg'
];

// Instalación
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS))
    );
    self.skipWaiting();
});

// Activación
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        })
    );
});

// Estrategia de caché
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cached) => {
                const networked = fetch(event.request)
                    .then((response) => {
                        const cacheCopy = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => cache.put(event.request, cacheCopy));
                        return response;
                    })
                    .catch(() => cached);
                return cached || networked;
            })
    );
});