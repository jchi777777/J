const staticDevCoffee = "dev-coffee-site-v1"
const fileToCache = [
    "../J/image/test_512.png",
    "../J/image/test_96.png"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
      caches.open(staticDevCoffee).then(cache => {
        cache.addAll(assets)
      })
    )
  })

  self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
 