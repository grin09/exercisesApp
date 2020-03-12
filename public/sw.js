const filesToCache = [
  "/",
  "/css/app.9d5e28d4.css",
  "/css/chunk-4f5d95b6.3995caf3.css",
  "/css/chunk-0639cda1.bae20778.css",
  "/css/chunk-vendors.d11f382a.css",
  "/js/app.8567ba24.js",
  "/js/app.8567ba24.js.map",
  "/js/chunk-01d128aa.eeb26921.js",
  "/js/chunk-01d128aa.eeb26921.js.map",
  "/js/chunk-4f5d95b6.d42aa966.js",
  "/js/chunk-4f5d95b6.d42aa966.js.map",
  "/js/chunk-26ae4c7b.13784b3e.js",
  "/js/chunk-26ae4c7b.13784b3e.js.map",
  "/js/chunk-0639cda1.d6c67f5e.js",
  "/js/chunk-0639cda1.d6c67f5e.js.map",
  "/js/chunk-vendors.30444ce8.js",
  "/js/chunk-vendors.30444ce8.js.map",
  "/fonts/AvenirNextCyr-Bold.2dcf2324.woff",
  "/fonts/AvenirNextCyr-Demi.fe6d7419.woff",
  "/fonts/AvenirNextCyr-Medium.241293dd.woff",
  "/fonts/AvenirNextCyr-Regular.a81229c8.woff",
  "/index.html",
  "/kettlebell_icon.png",
  "/kettlebell.png",
  "/manifest.json",
  "/sw.js"
];

var staticCacheName = "pages-cache-v3.1.07";

this.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

this.addEventListener("fetch", function(event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function(response) {
        if (response) {
          console.log("Found ", event.request.url, " in cache");
          return response;
        }
        //console.log('Network request for ', event.request.url);
        return fetch(event.request);

        // TODO 4 - Add fetched files to the cache
      })
      .catch(function(error) {
        // TODO 6 - Respond with custom offline page
      })
  );
});

this.addEventListener("activate", function(event) {
  var cacheWhitelist = [staticCacheName];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
