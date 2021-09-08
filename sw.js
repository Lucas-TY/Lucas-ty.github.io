/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","8d9689e5d209205e90014d0e8234d800"],["/archives/2020/03/index.html","d86a387da1e2a51f08193139705590bc"],["/archives/2020/04/index.html","399ae015bfb763ac0f69806982633518"],["/archives/2020/07/index.html","9ed57ea69e7366403bd1418dd27874d5"],["/archives/2020/index.html","348d628c9f9ded110d38acbc22d4cda3"],["/archives/2021/02/index.html","192142e8a56bcfb4d4578f0f974446c3"],["/archives/2021/index.html","980b8cd2cdb21e2a859217666742f6ef"],["/archives/index.html","1f2d6458a456f979536d46295280decb"],["/assets/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/assets/weather/01d.png","401e66803935b7035675d2b71e49ab91"],["/assets/weather/01n.png","44c6f1ba041fe91a6ae4163b38139cd1"],["/assets/weather/02d.png","b1fac6b809a3b0904d10489e490d8959"],["/assets/weather/02n.png","af1c78e11ba987fb7bd105e535e5b071"],["/assets/weather/03d.png","988ec2e80f00b7416979a3991b255e9b"],["/assets/weather/03n.png","988ec2e80f00b7416979a3991b255e9b"],["/assets/weather/04d.png","6d64f09619af982e81997c72b42f4b16"],["/assets/weather/04n.png","6d64f09619af982e81997c72b42f4b16"],["/assets/weather/09d.png","353840d24a6212e62afd2925a1fe8e47"],["/assets/weather/09n.png","353840d24a6212e62afd2925a1fe8e47"],["/assets/weather/10d.png","a80420158756c8841c58ef0af68d1ceb"],["/assets/weather/10n.png","a2c315e3c04072f33aa8b60f466b79d9"],["/assets/weather/11d.png","479324978fd9afe7c281efba79210e13"],["/assets/weather/11n.png","479324978fd9afe7c281efba79210e13"],["/assets/weather/13d.png","ca0f0747e18b9f5a8f646c780aa53620"],["/assets/weather/13n.png","ca0f0747e18b9f5a8f646c780aa53620"],["/assets/weather/50d.png","18ea6a4ca6604ae4c29ce6053c4c4819"],["/assets/weather/50n.png","18ea6a4ca6604ae4c29ce6053c4c4819"],["/assets/weather/hu.png","3754a3ea92275cc8158606e544b132a7"],["/assets/weather/loading.gif","b8c45314a21e9b46abcd38a3a69bd07d"],["/bangumis/index.html","d9fbfeb6b9d8da766d558afa673a7728"],["/categories/Git/index.html","0429558f793dfe303d8115e0e858af58"],["/categories/Hexo/index.html","c4c74df471c161d952cc91ea5d84b034"],["/categories/RSS/index.html","e6150170639c6661936ea7a5a44d07ff"],["/categories/index.html","8a0250d910fee7eec1fb9751c0a683af"],["/categories/日记/index.html","28e938db65f41110b45f2f79f420b8d7"],["/categories/服务器/index.html","2e286a28fa8262caca032a4540f27ce9"],["/categories/笔记/index.html","daca66e5b208e55d765c73d138ed37b4"],["/css/background.css","6faa569072e635938900354a5360416d"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7e8e23f007dfd05ac165239325a9c8c8"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","6d3d5a5ff70f96416806277d61ebfbd6"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","3665be944abde5706a3abc7b1729cabc"],["/img/favicon (3).png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon.png","f70f847702a45107760a04dc0a597bc1"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/movie.gif","327093e9dd15fd0bc7446c2c7502c45e"],["/img/siteicon/README.html","3b127d0382b32995650fa1e035532248"],["/img/siteicon/android-chrome-144x144.png","ce85813a6dceb7f22c2b2b3ec792da9d"],["/img/siteicon/android-chrome-192x192.png","4422f7c2cdb98f422eb79dd549e22787"],["/img/siteicon/android-chrome-256x256 - Copy.png","15c4b1cb1b9729bb74d58802432f19b7"],["/img/siteicon/android-chrome-256x256.png","15c4b1cb1b9729bb74d58802432f19b7"],["/img/siteicon/android-chrome-36x36.png","1d2c2d4e70b2994a76be053e7034999e"],["/img/siteicon/android-chrome-384x384.png","d2530a49644b7471a69d5a2c2df86b16"],["/img/siteicon/android-chrome-48x48.png","e5dd8aac3e7e49f8f6b239d22bb8a211"],["/img/siteicon/android-chrome-512x512.png","92aa712f5a347e2c3a53e08ffae1d6a7"],["/img/siteicon/android-chrome-72x72.png","e2533454866100234307967c11ed3bc2"],["/img/siteicon/android-chrome-96x96.png","9a92f4c789bc05ffd549429149faa543"],["/img/siteicon/apple-touch-icon.png","e4f1a1235171e5b2962bb510a425ed41"],["/img/siteicon/favicon-16x16.png","cc2840bef66db858486e353fe269d899"],["/img/siteicon/favicon-32x32.png","36238305ab04c27f15e2bc49ed6455a1"],["/img/siteicon/favicon.png","f70f847702a45107760a04dc0a597bc1"],["/img/siteicon/mstile-150x150.png","dfa665717c827127912bd57cf2c96932"],["/img/siteicon/safari-pinned-tab.svg","b3aae41d39e7e23421e5eac20f47d057"],["/img/wallpaper.jpg","f83038e43622d79426c29ed6b577d59a"],["/index.html","4575e2f7d52f71fd8355f2515bb2d03b"],["/js/background.js","7b370436ecd2d0f43b614d374894ab0d"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/modify.js","d641573a0547cac694092962bdd1e253"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","753cd046d6c15294f5c5f275933dbc21"],["/messageboard/index.html","7f7f97525de2565802ad91905d075505"],["/music/index.html","36534f068a44952704f4f46b056d876f"],["/photos/index.html","0df2b383c0b1a34354a04b71d51f5540"],["/posts/3b49ac76/index.html","f3f2da9cd20a639eff8c7397dcc58dcd"],["/posts/4d0299b9/index.html","5e1f44d47188c2799a24af6c31878867"],["/posts/50bac2e6/index.html","4c9abc3868709a862e0e342edb0b31a0"],["/posts/5cf5b17a/index.html","1a4e5e77bc1e71b71e21cd010fbaf340"],["/posts/68ae36ec/index.html","2a6897ebb6f7ba5344c9070a9f292060"],["/posts/95736992/index.html","f381b2161271e26996be3910dae9b483"],["/posts/b6ef4fe0/index.html","d15f97f7451b9bb4d28563fc08187911"],["/posts/cb24ed77/index.html","c9cdd19c6502367744825fa870a0de73"],["/sw-register.js","d9b533c2e2e7926c22c5fde96bec3616"],["/tags/Diary/index.html","6565bf8525bf03c496e7cdc95fac36b6"],["/tags/Git/index.html","f4a99172f8d2a575150a0eb713a87c42"],["/tags/index.html","fc89cc502a917dd7784d5bd65dca405e"],["/tags/笔记/index.html","92e30906f72aae1a5878345a1de5b0ee"]];
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
