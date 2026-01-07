/***const CACHE_NAME = 'pmf-cache-v3';
const OFFLINE_URL = '/offline.html';

// Assets críticos para cachear (solo locales)
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/css/kia-animation.css',
  '/js/pmf-bundle.js',   // ✅ Un solo archivo JS
  '/image/logo.png',
  '/image/Hero.png',
  OFFLINE_URL
];

// Instalación del Service Worker
globalThis.addEventListener('install', event => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch(err => {
        console.error('[SW] Installation failed:', err);
      })
  );
  globalThis.skipWaiting();
});

// Activación del Service Worker
globalThis.addEventListener('activate', event => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys()
      .then(keys => {
        return Promise.all(
          keys
            .filter(key => key !== CACHE_NAME)
            .map(key => {
              console.log('[SW] Deleting old cache:', key);
              return caches.delete(key);
            })
        );
      })
      .then(() => globalThis.clients.claim())
  );
});

// Interceptar peticiones
globalThis.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;

  const isExternal = !event.request.url.startsWith(globalThis.location.origin);

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          console.log('[SW] Serving from cache:', event.request.url);
          return cachedResponse;
        }

        return fetch(event.request)
          .then(response => {
            // 🔧 Usar optional chaining y consolidar la devolución
            const shouldCache = response?.status === 200 && response?.type === 'basic' && !isExternal;

            if (shouldCache) {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then(cache => cache.put(event.request, responseToCache))
                .catch(err => console.warn('[SW] Failed to cache:', event.request.url, err));
            }

            return response;
          })
          .catch(err => {
            console.error('[SW] Fetch failed:', event.request.url, err);

            // Fallback offline
            return caches.match(OFFLINE_URL)
              .then(offlinePage => {
                if (offlinePage) return offlinePage;
                return new Response('Sin conexión a internet', {
                  status: 503,
                  statusText: 'Service Unavailable',
                  headers: new Headers({
                    'Content-Type': 'text/html; charset=utf-8'
                  })
                });
              });
          });
      })
  );
});

// Mensajes del Service Worker
globalThis.addEventListener('message', event => {
  // Verificar origen confiable
  if (event.origin !== globalThis.location.origin) {
    console.warn('[SW] Ignored message from untrusted origin:', event.origin);
    return;
  }

  // ✅ Optional chaining aplicado
  if (event.data?.type === 'SKIP_WAITING') {
    globalThis.skipWaiting();
  }
});///*** */