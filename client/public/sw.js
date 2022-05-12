if (caches) {
  const CACHE_NAME = "ppl-cache";
  const VENDOR_RESOURCES = ["/bootstrap.bundle.min.js", "/bootstrap.min.css"];
  const RESOURCES = [...VENDOR_RESOURCES];

  /**
   * @event Install
   */
  self.addEventListener("install", (e) =>
    e.waitUntil(
      caches.open(CACHE_NAME).then((cache) => cache.addAll(RESOURCES))
    )
  );

  /**
   * @event Fetch
   */
  self.addEventListener("fetch", (e) =>
    e.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache
          .match(e.request)
          .then((res) => res || fetch(e.request))
          .then((res) => {
            cache.put(e.request, res.clone());
            return res;
          })
      )
    )
  );
}
