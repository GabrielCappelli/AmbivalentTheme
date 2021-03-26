const APP_SHELL = ['/offline.html', '/app.webmanifest', '/favicon.ico', '/icon-192x192.png', '/icon-256x256.png', '/icon-384x384.png', '/icon-512x512.png', '/theme/css/pygment.css', '/theme/css/site.css', '/theme/img/ambivalent.png', '/theme/img/calendar.svg', '/theme/img/author.svg', '/theme/img/clock.svg', '/images/helloworld.webp', '/theme/img/lkdin.svg', '/theme/img/stackoverflow.svg', '/theme/img/github.svg', '/theme/img/rss.svg', '/theme/js/app.js']
const APP_VERSION = '966e4564-f8f7-4937-ab3b-e4e06df202f6'
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
        return await theme_cache.match('offline.html');
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