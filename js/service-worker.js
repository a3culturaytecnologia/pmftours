const CACHE_NAME = 'pmf-tours-v1';
const ASSETS = [
    './',
    './index.html',
    './css/styles.css',
    './css/kia-animation.css',
    './js/main.js',
    './image/logo.png',
    './image/logo-blanco.png',
    './image/favicon/favicon.svg'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});