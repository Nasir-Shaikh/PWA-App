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
    console.warn("url", event.request.url)

    if(!navigator.onLine)
    {
        if(event.request.url === "http://localhost:3000/static/js/main.chunk.js"){
            event.waitUntill(
                this.ServiceWorkerRegistration.showMotification("Noti",{
                    body:'Internet is not working',
                    icon:"https://avatars2.githubusercontent.com/u/39895671?s=400&v=4"
                })
            );
        }
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