'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "542b6fc742f90194c2e3c2d487d42ae6",
"assets/AssetManifest.bin.json": "c256f467ac2de8bc001f34c308a545c5",
"assets/AssetManifest.json": "c4a1343ea43872c9baa4435d2a386972",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/images/al.png": "3062c6e4ab2cf629f78c26828bfc036e",
"assets/assets/images/ar.png": "2c22b6adcc1f43f424b1a5cea3ae2826",
"assets/assets/images/at.png": "a426959eaf65ca8ed2df7e93f574a191",
"assets/assets/images/au.png": "9a3e9cf111f1b9841daa51bceba8c68d",
"assets/assets/images/ba.png": "4672d25535b8e3f517c11ec93a322ffe",
"assets/assets/images/be.png": "8bd95e88fb81eb4e3251a5f8869acc8b",
"assets/assets/images/br.png": "2d0d0422d29af4c7a45fb55021e44cc9",
"assets/assets/images/ca.png": "7434f1f158075641be1478fc0f9cc9bd",
"assets/assets/images/cd.png": "f6eaf2796e11ed9463ff63cc2310747b",
"assets/assets/images/ch.png": "e79db9838ec2411d59099e8fc04e6e40",
"assets/assets/images/ci.png": "62ef28a3a13c13512fe109ff1e97beb0",
"assets/assets/images/co.png": "cf5f2f4b722addbd5a6327b020139aae",
"assets/assets/images/cv.png": "c4f56f73e43ff6c6251bad2d9b349653",
"assets/assets/images/cw.png": "2ab032735bf91a15b3604e93e4f174fb",
"assets/assets/images/cz.png": "ea4aff73d884fabf696f44286c91b813",
"assets/assets/images/de.png": "c1ba806b6d0653cc9f965a20fa0a989a",
"assets/assets/images/dk.png": "5b7de9c76789e614b45db92a941b6b0c",
"assets/assets/images/dz.png": "b59c58096a777a22d263bad631d653b4",
"assets/assets/images/ec.png": "aafc5d0f762e7e6f3935b160163d4565",
"assets/assets/images/eg.png": "46ca726622dc2fbd4f574135300de9b0",
"assets/assets/images/es.png": "ff6ae7ce44895f25686ce34014d545b9",
"assets/assets/images/fr.png": "cd1b684e02967719e124fd05d44438b3",
"assets/assets/images/gb-eng.png": "e7efce4aa9634d75d334ed84f86ebaec",
"assets/assets/images/gb-sct.png": "ddc9bf137c30860808945e0dc37846dc",
"assets/assets/images/gb_eng.png": "e7efce4aa9634d75d334ed84f86ebaec",
"assets/assets/images/gb_sct.png": "ddc9bf137c30860808945e0dc37846dc",
"assets/assets/images/gh.png": "ae4556f087376dbf4964b0b2ab08a182",
"assets/assets/images/hr.png": "1ab540ea6b8bb631f91f01a05492ae4b",
"assets/assets/images/ht.png": "7dd63612a843136ec9ac7be252cc1f91",
"assets/assets/images/hu.png": "c9f3773e9f4f516103ad9c27cd89865a",
"assets/assets/images/iq.png": "3b9b11e422034b461929cbab57f1251c",
"assets/assets/images/ir.png": "f9708c73ece1ab08964d3d7e230e8835",
"assets/assets/images/it.png": "b3dd9931cecca2f9312b0b5b386f03bc",
"assets/assets/images/jo.png": "d007ea9000fd59e84836419aa0e3ebf3",
"assets/assets/images/jp.png": "188ecde5adad7fa89bb8b10cf1781b95",
"assets/assets/images/kr.png": "288c96c0606665c44fde96577c75cd12",
"assets/assets/images/ma.png": "bbc3a6e059a215a3f997cafbce1042a7",
"assets/assets/images/mx.png": "57494ba9907827d9c9dcdc900156ab8b",
"assets/assets/images/nl.png": "e89dd1a7a3726f8d5d918fdb50530979",
"assets/assets/images/no.png": "f7b596ec932141fab6347135964bd7c9",
"assets/assets/images/nz.png": "98af45f343f777b6ced5f223e6fa64f5",
"assets/assets/images/pa.png": "9bd0eab3bfad1c8fb1e0a86a5d642ac6",
"assets/assets/images/pt.png": "8fbe39e231050b747799382e4992e16b",
"assets/assets/images/py.png": "c6b48a7d64aee245072b4370cc679680",
"assets/assets/images/qa.png": "9d2fc43f9c06132c33e9f2987fb6961b",
"assets/assets/images/ro.png": "061871e7872c13ef652676b857ef2eaa",
"assets/assets/images/rs.png": "f1e82bcd206c0b80ed79c0b9e6bf56dd",
"assets/assets/images/sa.png": "852fb25cfe2707ae29ec266f0d57a564",
"assets/assets/images/se.png": "508af24ff7b551038cf115b2a95df047",
"assets/assets/images/si.png": "ef5717f688b98f830380d357aa982992",
"assets/assets/images/sk.png": "c1fb96ceee8fc1c98c197929ba2d499f",
"assets/assets/images/sn.png": "e419c9c570df73521495781fbccbab78",
"assets/assets/images/tn.png": "c3490b83e6e5edffc263b00f2bdb5d60",
"assets/assets/images/tr.png": "234cfcef6df761e4fb07e935d05cf60a",
"assets/assets/images/us.png": "b5c6d573743a1972b2d09969a711fccd",
"assets/assets/images/uy.png": "54f32d98df47d7ce31a6e950f0845913",
"assets/assets/images/uz.png": "ea7147b7c73fdb2c266ad9cd63808145",
"assets/assets/images/za.png": "c75c80c81f2e851fe65480b9a8be1f14",
"assets/FontManifest.json": "9931b4073c41d8a0dc587991ed84044e",
"assets/fonts/MaterialIcons-Regular.otf": "7a25590f38fe190f7db8c097f2241991",
"assets/NOTICES": "7a5079f72c84caffc29315b1d5c3ba57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "69d6e350c2971c4e6d269105735b796e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b9d354963ea6fde708e483726bc712e4",
"/": "b9d354963ea6fde708e483726bc712e4",
"main.dart.js": "e7f76fc3a7ec6743fefadce7a7853ac0",
"manifest.json": "e0b0a832c8455ca3f805dbc77586810b",
"version.json": "38891c81105ae553aa2a1918d06969ac"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
