const CACHE_NAME = 'Vegeta Ipsum-cache-v0.1';
// Add all paths that you want to cache
const urlsToCache = [
  // '/',
  // '/index.html',
  // '/favicon.ico',
  // '/manifest.json',
  // '/css/styles.css',
  // '/js/script.js',
  // '/images/apple-touch-icon.png',
  // '/images/icon-512x512.png',
  // '/images/icon-192x192.png',
  // '/images/twitter-card.png',
  // '/images/og-card.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Open cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});


self.addEventListener('activate', function(event) {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
