const CACHE_VERSION = '{{ CACHE_VERSION }}'
const CONTENT_TO_CACHE = {{ CONTENT_TO_CACHE }}
const CACHE_NAME = 'offline_cache_' + CACHE_VERSION;

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(CONTENT_TO_CACHE);
    self.skipWaiting();
  })());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (CACHE_NAME !== cacheName && cacheName.startsWith("offline_cache_")) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const r = await cache.match(e.request);
    if (r) { return r; }
    try {
      return await fetch(e.request);
    } catch (error) {
      if (e.request.mode === 'navigate')
        return await cache.match('{{OFFLINE_PAGE}}');
    }
  })());
});