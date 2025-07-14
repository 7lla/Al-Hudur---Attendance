
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("attendance-cache").then(cache => {
      return cache.addAll(["index.html", "style.css", "manifest.json", "logo.png"]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
