import 'regenerator-runtime/runtime';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst, StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';

const { CacheableResponse } = require('workbox-cacheable-response');
const { clientsClaim } = require('workbox-core');

clientsClaim();

self.skipWaiting();

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new CacheableResponse({
        statuses: [200],
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.pathname.startsWith('/task'),
  new NetworkFirst({
    cacheName: 'task-cache',
    plugins: [
      new CacheableResponse({
        statuses: [200],
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.pathname.startsWith('/matrix'),
  new NetworkFirst({
    cacheName: 'matrix-cache',
    plugins: [
      new CacheableResponse({
        statuses: [200],
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.pathname.startsWith('/user'),
  new NetworkFirst({
    cacheName: 'user-cache',
    plugins: [
      new CacheableResponse({
        statuses: [200],
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com',
  new CacheFirst({
    cacheName: 'google-fonts-stylesheets',
    plugins: [
      new CacheableResponse({
        statuses: [200],
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://newsapi.org',
  new StaleWhileRevalidate({
    cacheName: 'articles-cache',
    plugins: [
      new CacheableResponse({
        statuses: [200],
      }),
    ],
  }),
);
