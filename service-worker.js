const cacheName = 'meu-site-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/contato.html',
  '/primeiro-story.html',
  '/privacidade.html',
  'assets/web/assets/mobirise-icons2/mobirise2.css',
  'assets/bootstrap/css/bootstrap-reboot.min.css',
  'assets/animatecss/animate.css',
  'assets/dropdown/css/style.css',
  'assets/socicon/css/styles.css',
  'assets/mobirise/css/mbr-additional.css',
  'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css',
  'assets/theme/css/style.css',
  'assets/bootstrap/css/bootstrap.min.css',
  'https://fonts.googleapis.com/css?family=Tinos:400,400i,700,700i&display=swap',
  'assets/bootstrap/css/bootstrap-grid.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
