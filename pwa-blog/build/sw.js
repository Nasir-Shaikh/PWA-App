let cacheData="appV1";

this.addEventListener("install", (event)=>{
    event.waitUntill(
        caches.open(cacheData).then((cache)=>{
        cache.addAll([
            "static/js/bundle.js",
            "manifest.json",
            "logo192.png",
            "favicon.ico",
            "Users.js",
            "/"
        ])
        })
    )
})

this.addEventListener("fetch",(event)=>{
    if(!navigator.onLine)
    {
    event.respondWith(
        caches.match(event.request).then((result)=>{
            if(result){
                return result;
            }
            let requestUrl = event.request.clone();
            return fetch(requestUrl)
        })
    )
    }
})
