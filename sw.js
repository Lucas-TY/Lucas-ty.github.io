"use strict";var precacheConfig=[["/about/index.html","03e454a44483424dcfea933cb2271d5d"],["/archives/2020/03/index.html","973e8969db3c1824d8edd140c97f2bf2"],["/archives/2020/04/index.html","823470660e47fe9b5d751d2289d73411"],["/archives/2020/07/index.html","7f9ac317ae70f2b0d8f0ad22153d0cb9"],["/archives/2020/index.html","2408e23e8b1d015179af86fe342143e8"],["/archives/2021/02/index.html","eb249acaba52803530e019b7e4d5e68e"],["/archives/2021/index.html","8e598aff127e18c943bfe254636f27e9"],["/archives/index.html","a3360584b1c5cffc77654ae7f88b0f2a"],["/assets/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/assets/weather/01d.png","401e66803935b7035675d2b71e49ab91"],["/assets/weather/01n.png","44c6f1ba041fe91a6ae4163b38139cd1"],["/assets/weather/02d.png","b1fac6b809a3b0904d10489e490d8959"],["/assets/weather/02n.png","af1c78e11ba987fb7bd105e535e5b071"],["/assets/weather/03d.png","988ec2e80f00b7416979a3991b255e9b"],["/assets/weather/03n.png","988ec2e80f00b7416979a3991b255e9b"],["/assets/weather/04d.png","6d64f09619af982e81997c72b42f4b16"],["/assets/weather/04n.png","6d64f09619af982e81997c72b42f4b16"],["/assets/weather/09d.png","353840d24a6212e62afd2925a1fe8e47"],["/assets/weather/09n.png","353840d24a6212e62afd2925a1fe8e47"],["/assets/weather/10d.png","a80420158756c8841c58ef0af68d1ceb"],["/assets/weather/10n.png","a2c315e3c04072f33aa8b60f466b79d9"],["/assets/weather/11d.png","479324978fd9afe7c281efba79210e13"],["/assets/weather/11n.png","479324978fd9afe7c281efba79210e13"],["/assets/weather/13d.png","ca0f0747e18b9f5a8f646c780aa53620"],["/assets/weather/13n.png","ca0f0747e18b9f5a8f646c780aa53620"],["/assets/weather/50d.png","18ea6a4ca6604ae4c29ce6053c4c4819"],["/assets/weather/50n.png","18ea6a4ca6604ae4c29ce6053c4c4819"],["/assets/weather/hu.png","3754a3ea92275cc8158606e544b132a7"],["/assets/weather/loading.gif","b8c45314a21e9b46abcd38a3a69bd07d"],["/bangumis/index.html","3696d85303bd039df35ef1545f01c70d"],["/categories/Git/index.html","79e2b0ac7b651820eea848275c0fd071"],["/categories/Hexo/index.html","fc3deb164248a1de59c93501ca303629"],["/categories/RSS/index.html","39f9e9c106061522b9a29cfbe0ae3626"],["/categories/index.html","e9ba6fc5e7aedf897e4572898275da56"],["/categories/日记/index.html","0727d4d4d8d2acaa29ec03339d07ae30"],["/categories/服务器/index.html","1a9b9508953dc2d03ea9f0fe10007fe3"],["/categories/笔记/index.html","7d7ec760e16b4759d8518be9f3a60099"],["/css/background.css","6faa569072e635938900354a5360416d"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","d7a41009d4e3936a6fd6d842089f2e61"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","87f175ceaa048465f2a19b5f1711d946"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","3665be944abde5706a3abc7b1729cabc"],["/img/favicon (3).png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon.png","f70f847702a45107760a04dc0a597bc1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/movie.gif","327093e9dd15fd0bc7446c2c7502c45e"],["/img/siteicon/README.html","be29105454edb73b3dfb9db37d7d4b70"],["/img/siteicon/android-chrome-144x144.png","ce85813a6dceb7f22c2b2b3ec792da9d"],["/img/siteicon/android-chrome-192x192.png","4422f7c2cdb98f422eb79dd549e22787"],["/img/siteicon/android-chrome-256x256 - Copy.png","15c4b1cb1b9729bb74d58802432f19b7"],["/img/siteicon/android-chrome-256x256.png","15c4b1cb1b9729bb74d58802432f19b7"],["/img/siteicon/android-chrome-36x36.png","1d2c2d4e70b2994a76be053e7034999e"],["/img/siteicon/android-chrome-384x384.png","d2530a49644b7471a69d5a2c2df86b16"],["/img/siteicon/android-chrome-48x48.png","e5dd8aac3e7e49f8f6b239d22bb8a211"],["/img/siteicon/android-chrome-512x512.png","92aa712f5a347e2c3a53e08ffae1d6a7"],["/img/siteicon/android-chrome-72x72.png","e2533454866100234307967c11ed3bc2"],["/img/siteicon/android-chrome-96x96.png","9a92f4c789bc05ffd549429149faa543"],["/img/siteicon/apple-touch-icon.png","e4f1a1235171e5b2962bb510a425ed41"],["/img/siteicon/favicon-16x16.png","cc2840bef66db858486e353fe269d899"],["/img/siteicon/favicon-32x32.png","36238305ab04c27f15e2bc49ed6455a1"],["/img/siteicon/favicon.png","f70f847702a45107760a04dc0a597bc1"],["/img/siteicon/mstile-150x150.png","dfa665717c827127912bd57cf2c96932"],["/img/siteicon/safari-pinned-tab.svg","b3aae41d39e7e23421e5eac20f47d057"],["/img/wallpaper.jpg","f83038e43622d79426c29ed6b577d59a"],["/index.html","2afbf7da2b4697edcbd62d3862a11409"],["/js/background.js","7b370436ecd2d0f43b614d374894ab0d"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/modify.js","d641573a0547cac694092962bdd1e253"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","4b8a1094cef7bec8f0e910e5508b0156"],["/messageboard/index.html","884cb8d15013078b57c5bdb953b2592a"],["/music/index.html","0d96c856babba51933cb08db517ed06e"],["/photos/index.html","6878b441a4514c89e909f60a3532a505"],["/posts/3b49ac76/index.html","19927938f5a6748db03ade22e8495e81"],["/posts/4d0299b9/index.html","6454b36325a0c0cc85abd7178f1201c5"],["/posts/50bac2e6/index.html","2bd6cc869f7bb0ee33fd029f25dae72d"],["/posts/5cf5b17a/index.html","3a0c7bce7a98973e84f7a6a9b138a2d6"],["/posts/68ae36ec/index.html","fe70b5ec1892e8b30a6ca93f44841c85"],["/posts/95736992/index.html","f1e653a355415b480475de92a5d628f4"],["/posts/b6ef4fe0/index.html","54b34dfcf58d9ecc9d39d7e1309c5086"],["/posts/cb24ed77/index.html","1fad6feaea32ec5986ac30ad8449c0a6"],["/sw-register.js","71162307eaff8f3be93712fc234ca635"],["/tags/Diary/index.html","14267ca9c846528a8be3e6c1bfaf7ecd"],["/tags/Git/index.html","af2cfec9a0c1b941dc5bbe6c65e285f5"],["/tags/index.html","310a725b27b67b23f83d2bdb81bb0a20"],["/tags/笔记/index.html","f80917e596f7a0eb467cdd066b5dcd8b"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some((function(e){return c.match(e)}))},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return a.every((function(a){return!a.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),c.toString()},hashParamName=(addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},"_sw-precache"),urlsToCacheKeys=new Map(precacheConfig.map((function(e){var a=e[0],c=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,c,!1);return[t.toString(),n]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e&&e.length>0&&(firstRegister=0),e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then((function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then((function(a){return e.put(c,a)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(c){return Promise.all(c.map((function(c){if(!a.has(c.url))return e.delete(c)})))}))})).then((function(){return self.clients.claim()})).then((function(){if(!firstRegister)return self.clients.matchAll().then((function(e){e&&e.length&&e.forEach((function(e){e.postMessage("sw.update")}))}))})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),t="index.html";(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),a=urlsToCacheKeys.has(c));0,a&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(c)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)})))}}));