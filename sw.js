var fileToCache = [
    "../J/image/test_512.png",
    "../J/image/test_512.png"
  ]
  const cacheName = 'demo-pwa-static' //命名一個快取
  self.addEventListener('install', event => {
    console.log('installing…');
    event.waitUntil(
      // 打開這個名稱的cacheStroage，沒有的話就開一個空的cacheStroage
      caches.open('demo-pwa-static').then(cache=>{
      //fileToCache裡的路徑指向的檔案都加進快取
        return cache.addAll(fileToCache)
      })
    )
  });

  self.addEventListener('activate', event => {
    console.log('now ready to handle fetches!');
    event.waitUntil(
      // 取得這個 application 下的所有 cacheStorage 名稱
      caches.keys().then(function(cacheNames) {
        console.log(cacheNames);
        var promiseArr = cacheNames.map(function(item) {
              if (item !== cacheName) {
              // Delete that cached file
                return caches.delete(item);
              }
        })
        return Promise.all(promiseArr);
      })
    );
  });

  self.addEventListener('fetch', event => {
    console.log('now fetch!');
    console.log(event.request);
    event.respondWith(
    //當有重複的請求時，就直接拿cache裡的response當回應，沒有的話就送出請求，並且把回應存到cache裡
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request).then(res =>
        // 存 caches 之前，要先打開 caches.open(dataCacheName)
          caches.open(dataCacheName).then(function(cache) {
          // cache.put(key, value)
          // 下一次 caches.match 會對應到 event.request
            cache.put(event.request, res.clone());
            return res;
          })
        );
      })
    );
  });