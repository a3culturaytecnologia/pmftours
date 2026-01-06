const CACHE_NAME = 'pmf-tours-v2.1';
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
    './image/logo.png',
    './image/kia.png',
    './image/Hero.png'
];

// Instalación mejorada
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

// Activación mejorada
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            ))
            .then(() => self.clients.claim())
    );
});

// Estrategia de caché mejorada
self.addEventListener('fetch', (event) => {
    // Ignorar peticiones de chrome-extension
    if (event.request.url.startsWith('chrome-extension://')) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then((cached) => {
                return fetch(event.request)
                    .then((response) => {
                        // Solo cachear peticiones GET y recursos locales
                        if (event.request.method === 'GET' &&
                            event.request.url.startsWith(self.location.origin)) {
                            const cacheCopy = response.clone();
                            caches.open(CACHE_NAME)
                                .then(cache => cache.put(event.request, cacheCopy));
                        }
                        return response;
                    })
                    .catch(() => cached);
            })
    );
});
