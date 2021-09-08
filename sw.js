/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","dd47f8c40f68e305404d919c9db7ffb8"],["/archives/2020/03/index.html","eff720f67a0a603d2d4d3392603c5af3"],["/archives/2020/04/index.html","ef24b73e8fb7eb97ecdf09e7d2da1854"],["/archives/2020/07/index.html","c559b7a20de35cb26f82cd65bf97e1d1"],["/archives/2020/index.html","c1af9819e43eaa9bbc16891d54996a4f"],["/archives/2021/02/index.html","9b35bfb4e51a46a3b0bc45685cbc21f9"],["/archives/2021/index.html","be3e833cdd9ed7e86b84922b62b2f016"],["/archives/index.html","b61a27c773c96c6b2369867ded6ca274"],["/assets/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/assets/weather/01d.png","401e66803935b7035675d2b71e49ab91"],["/assets/weather/01n.png","44c6f1ba041fe91a6ae4163b38139cd1"],["/assets/weather/02d.png","b1fac6b809a3b0904d10489e490d8959"],["/assets/weather/02n.png","af1c78e11ba987fb7bd105e535e5b071"],["/assets/weather/03d.png","988ec2e80f00b7416979a3991b255e9b"],["/assets/weather/03n.png","988ec2e80f00b7416979a3991b255e9b"],["/assets/weather/04d.png","6d64f09619af982e81997c72b42f4b16"],["/assets/weather/04n.png","6d64f09619af982e81997c72b42f4b16"],["/assets/weather/09d.png","353840d24a6212e62afd2925a1fe8e47"],["/assets/weather/09n.png","353840d24a6212e62afd2925a1fe8e47"],["/assets/weather/10d.png","a80420158756c8841c58ef0af68d1ceb"],["/assets/weather/10n.png","a2c315e3c04072f33aa8b60f466b79d9"],["/assets/weather/11d.png","479324978fd9afe7c281efba79210e13"],["/assets/weather/11n.png","479324978fd9afe7c281efba79210e13"],["/assets/weather/13d.png","ca0f0747e18b9f5a8f646c780aa53620"],["/assets/weather/13n.png","ca0f0747e18b9f5a8f646c780aa53620"],["/assets/weather/50d.png","18ea6a4ca6604ae4c29ce6053c4c4819"],["/assets/weather/50n.png","18ea6a4ca6604ae4c29ce6053c4c4819"],["/assets/weather/hu.png","3754a3ea92275cc8158606e544b132a7"],["/assets/weather/loading.gif","b8c45314a21e9b46abcd38a3a69bd07d"],["/bangumis/index.html","a96f7845c6edfa3ca14886f68cf3249e"],["/categories/Git/index.html","cc6a99a75a4076224401dab67eb870c3"],["/categories/Hexo/index.html","374e4dc994e73f2aa8df7e0024c2b076"],["/categories/RSS/index.html","b851f9e3a1dff9511bc57e42d2addf20"],["/categories/index.html","590ee287421f8debc141c65a08357ae6"],["/categories/日记/index.html","9b7a0499782345f2023caf0c01bce1fc"],["/categories/服务器/index.html","76088339024932c99933786d9ac1e27d"],["/categories/笔记/index.html","de8450845ec1aea4a3ecfc1634fd1cef"],["/css/background.css","72ee255dcc8e893408e4016b390c6c8e"],["/css/hbe.style.css","0e364acc009058cdc3674b3f6c7e89e5"],["/css/index.css","b3fb3139ca6f7787230e0e7293e24dad"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","586ed8e94af9755584fc99b078a758fe"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","3665be944abde5706a3abc7b1729cabc"],["/img/favicon (3).png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon.png","f70f847702a45107760a04dc0a597bc1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/movie.gif","327093e9dd15fd0bc7446c2c7502c45e"],["/img/siteicon/README.html","09d47d704d6d5f909fc2ed29f170d119"],["/img/siteicon/android-chrome-144x144.png","ce85813a6dceb7f22c2b2b3ec792da9d"],["/img/siteicon/android-chrome-192x192.png","4422f7c2cdb98f422eb79dd549e22787"],["/img/siteicon/android-chrome-256x256 - Copy.png","15c4b1cb1b9729bb74d58802432f19b7"],["/img/siteicon/android-chrome-256x256.png","15c4b1cb1b9729bb74d58802432f19b7"],["/img/siteicon/android-chrome-36x36.png","1d2c2d4e70b2994a76be053e7034999e"],["/img/siteicon/android-chrome-384x384.png","d2530a49644b7471a69d5a2c2df86b16"],["/img/siteicon/android-chrome-48x48.png","e5dd8aac3e7e49f8f6b239d22bb8a211"],["/img/siteicon/android-chrome-512x512.png","92aa712f5a347e2c3a53e08ffae1d6a7"],["/img/siteicon/android-chrome-72x72.png","e2533454866100234307967c11ed3bc2"],["/img/siteicon/android-chrome-96x96.png","9a92f4c789bc05ffd549429149faa543"],["/img/siteicon/apple-touch-icon.png","e4f1a1235171e5b2962bb510a425ed41"],["/img/siteicon/favicon-16x16.png","cc2840bef66db858486e353fe269d899"],["/img/siteicon/favicon-32x32.png","36238305ab04c27f15e2bc49ed6455a1"],["/img/siteicon/favicon.png","f70f847702a45107760a04dc0a597bc1"],["/img/siteicon/mstile-150x150.png","dfa665717c827127912bd57cf2c96932"],["/img/siteicon/safari-pinned-tab.svg","b3aae41d39e7e23421e5eac20f47d057"],["/img/wallpaper.jpg","f83038e43622d79426c29ed6b577d59a"],["/index.html","9efdaa741d092205c9609ed7ec1c8ad0"],["/js/background.js","dca71cb2a5b0835181137198baa12877"],["/js/main.js","a80ce0bae4995c5b4d57e72e8c710bc9"],["/js/modify.js","5acc626a86a41071e5ac2181a38e7cf8"],["/js/search/algolia.js","d4ca891c702c547a356f6edbbfdc1e0f"],["/js/search/local-search.js","de25bf0fd67bcc6c161201f99c8f7f29"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","5d617e1a33f31aa82474eb7f4b07717d"],["/lib/hbe.js","86e3420d3c285d0931fca4a0c90a182d"],["/link/index.html","513572f10a889e0e1ec54cc35e670113"],["/messageboard/index.html","356bbf5e27c3de0c424c9dd0c57ad47d"],["/music/index.html","13134f830b9b01d07537910f33d1ca79"],["/photos/index.html","17017d29d23bc600e8e1e2a12c23b344"],["/posts/3b49ac76/index.html","4fdfc3ec6495c740822eacb48165c60e"],["/posts/4d0299b9/index.html","2fa9621e949cb13fe87f7fc55468ce09"],["/posts/50bac2e6/index.html","07996e388514a1be62e50d1650ba8644"],["/posts/5cf5b17a/index.html","dfd16a78ed1ec0892f10cab814ad9ce2"],["/posts/68ae36ec/index.html","b105d59a3f85b8783f1b75c35bd6b1c3"],["/posts/95736992/index.html","79acade65c491dc4221075fc0e40ebb6"],["/posts/b6ef4fe0/index.html","b77b1f1b09fa5e59ad8ce096a98d8c64"],["/posts/cb24ed77/index.html","a770406a1e9f2049ba76c3b3072d669e"],["/sw-register.js","34a957739049d9b73b89e0618e0f16f9"],["/tags/Diary/index.html","095fec64da5771fa4fe187ec1b129fe1"],["/tags/Git/index.html","7e2a0b70f23e90ab62b9b7d0321cf505"],["/tags/index.html","c182470f67414dde45743c974c6a7f85"],["/tags/笔记/index.html","82532c0ec50a5da976d9b9beda0c0686"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
