// Keeps the app working offline: the app files are cached on first visit.
// Your surah recordings are stored separately on the device (IndexedDB) and never leave it.
const VERSION = "hifz-v1";
const APP = ["./", "index.html", "manifest.webmanifest", "fonts/hamdullah.woff2",
  "icons/icon-180.png", "icons/icon-192.png", "icons/icon-512.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(APP)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || req.url.startsWith("blob:") || req.url.startsWith("data:")) return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    // App files: use the network when online (so updates arrive), fall back to the cache offline.
    e.respondWith(fetch(req).then(res => {
      const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return res;
    }).catch(() => caches.match(req).then(r => r || caches.match("index.html"))));
  } else if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => {
      const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return res;
    })));
  }
});
