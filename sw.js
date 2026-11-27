// Legt die Seite im Gerät ab, damit sie auch ohne Internet öffnet.
// Mit Internet wird immer zuerst die neueste Version geholt, ohne Internet gilt die abgelegte.
// Nach jeder Änderung an index.html den Namen unten hochzählen (v2, v3 ...).
const CACHE = "ebike-ladeplaner-v88";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(FILES.map((f) =>
    fetch(new Request(f, { cache: "reload" })).then((r) => (r.ok ? c.put(f, r) : null))
  ))));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Zuerst das Netz (höchstens 4 Sekunden), sonst die abgelegte Version
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;
  e.respondWith(
    new Promise((resolve) => {
      let done = false;
      const fallback = () => caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request));
      const t = setTimeout(() => { if (!done) { done = true; fallback().then(resolve, () => resolve(Response.error())); } }, 4000);
      fetch(e.request, { cache: "no-store" }).then((r) => {
        if (done) return;
        clearTimeout(t); done = true;
        if (r && r.ok) { const copy = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); resolve(r); }
        else fallback().then(resolve, () => resolve(r));
      }, () => {
        if (done) return;
        clearTimeout(t); done = true;
        fallback().then(resolve, () => resolve(Response.error()));
      });
    })
  );
});
