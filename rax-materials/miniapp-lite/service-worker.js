"use strict";var precacheConfig=[["https://alibaba.github.io/rax-materials/miniapp-lite/favicon.png","0d4cca8dcc3deff70425210396f97a03"],["https://alibaba.github.io/rax-materials/miniapp-lite/images/icons/icon-128x128.png","b57be776006e9f6d03dd474a5056f1b1"],["https://alibaba.github.io/rax-materials/miniapp-lite/images/icons/icon-144x144.png","fb496b753a6e98c0b94c5bac70716243"],["https://alibaba.github.io/rax-materials/miniapp-lite/images/icons/icon-152x152.png","4b19f343321ef4252c1355055bd37e6b"],["https://alibaba.github.io/rax-materials/miniapp-lite/images/icons/icon-192x192.png","10e08149886fe7bab53a5129bb816d95"],["https://alibaba.github.io/rax-materials/miniapp-lite/images/icons/icon-384x384.png","1d47255a502d9817a71d3d87d8c9e1d7"],["https://alibaba.github.io/rax-materials/miniapp-lite/images/icons/icon-512x512.png","2a1f755aa55f24023788feb696cda025"],["https://alibaba.github.io/rax-materials/miniapp-lite/images/icons/icon-72x72.png","195ecd89be117baf5ceac2a97a5ed3b5"],["https://alibaba.github.io/rax-materials/miniapp-lite/images/icons/icon-96x96.png","31e0f34da6949ee21607d28b7b7acd2c"],["https://alibaba.github.io/rax-materials/miniapp-lite/images/not-found-4fc3e7d8.png","4fc3e7d83a32de31050d10727fefe786"],["https://alibaba.github.io/rax-materials/miniapp-lite/index.html","0faf0161c531ab17c6a7ce337ac8a09c"],["https://alibaba.github.io/rax-materials/miniapp-lite/js/atag.js","f1eecad912c3e8840d29e7c8b4ccead3"],["https://alibaba.github.io/rax-materials/miniapp-lite/js/index.min.js","af8fa7faa771552577a4a96ec0896511"],["https://alibaba.github.io/rax-materials/miniapp-lite/js/vendor.js","8b694936c6a68fb1d2d9f4016d775bfa"],["https://alibaba.github.io/rax-materials/miniapp-lite/manifest.json","1c5d0c0bfe2dc1e22c225c154b0fd2e1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,i){var n=new URL(e);return i&&n.pathname.match(i)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],i=new URL(a,self.location),n=createCacheKey(i,hashParamName,t,/\.\w{8}\./);return[i.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var i=new Request(t,{credentials:"same-origin"});return fetch(i).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});