/* ThetaNote worker-app prototype -- service worker.
   NETWORK-FIRST: every launch fetches the latest file from the network so the installed
   home-screen app always shows the newest build. Falls back to cache only when offline.
   skipWaiting + clients.claim => a new SW takes control immediately (one reload on first seat).
   This file rarely changes; the b.html it serves changes freely and is always fetched fresh. */
'use strict';
var CACHE = 'tna-proto';

self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(event.request, copy); });
        return res;
      })
      .catch(function () { return caches.match(event.request); })
  );
});
