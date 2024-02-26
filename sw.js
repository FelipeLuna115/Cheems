const cacheName = "Cheems-App-Li-v2";
const assetsToCache = [
    "index.html",
    "game.html",
    "images/icon-192x192.png",
    "closet.html",
    "comming_soon.html",
    "dev.html",
    "menu.html",
    "settings.html",
    "css/index.css",
    "js/buttons.js",
    "js/functions.js",
    "js/index.js",
    "js/main.js",
    "js/SoundDefinitions.js",
    "img/hit/normal.png",
    "img/cheems/normal.png",
    "img/hit/kid.png",
    "img/cheems/kid.png",
    "fonts/Kalam-Regular.ttf"
];

// Install Event
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => cache.addAll(assetsToCache))
            .catch(err => console.error("Error caching assets:", err))
    );
});

// Fetch Event
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
