// Importa a biblioteca do Firestore offline
import { firestore } from 'firestore-offline';

// Inicializa o Firestore offline
firestore();

// Adiciona os arquivos que devem ser cacheados
const cacheFiles = ['/offline'];

// Configura o Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open('offline-cache')
      .then(cache => cache.addAll(cacheFiles))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(keyList =>
        Promise.all(
          keyList.map(key => {
            if (key !== 'offline-cache') {
              return caches.delete(key);
            }
          })
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }

      const fetchRequest = event.request.clone();

      return fetch(fetchRequest)
        .then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          const responseToCache = response.clone();

          caches.open('offline-cache').then(cache => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          return caches.match('/offline');
        });
    })
  );
});
