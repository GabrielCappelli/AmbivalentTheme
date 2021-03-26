const APP_SHELL = {{ APP_SHELL }}
const APP_VERSION = '{{ APP_VERSION }}'
const APP_CACHE_PREFIX = 'app_shell_cache_'
const APP_SHELL_CACHE = APP_CACHE_PREFIX + APP_VERSION;
const NAV_CACHE = 'nav_cache';

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(APP_SHELL_CACHE);
    await cache.addAll(APP_SHELL);
    self.skipWaiting();
  })());
});

self.addEventListener("activate", function (e) {
  e.waitUntil(clients.claim());
  e.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (APP_SHELL_CACHE !== cacheName && cacheName.startsWith(APP_CACHE_PREFIX)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.mode === 'navigate') {
    e.respondWith((async () => {
      const cache = await caches.open(NAV_CACHE);
      try {
        const response = await fetch(e.request);
        await cache.put(e.request, response.clone());
        return response;
      } catch (error) {
        const r = await cache.match(e.request);
        if (r) { return r; }
        const theme_cache = await caches.open(APP_SHELL_CACHE);
        return await theme_cache.match('{{OFFLINE_URL}}');
      }
    })());
  }
});

self.addEventListener('fetch', (e) => {
  if (e.request.mode !== 'navigate') {
    e.respondWith((async () => {
      const cache = await caches.open(APP_SHELL_CACHE);
      const r = await cache.match(e.request);
      if (r) { return r; }
      return await fetch(e.request);
    })());
  }
});