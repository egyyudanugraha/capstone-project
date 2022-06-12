import 'regenerator-runtime/runtime';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import {
  NetworkFirst, StaleWhileRevalidate, CacheFirst, NetworkOnly,
} from 'workbox-strategies';
import { BackgroundSyncPlugin } from 'workbox-background-sync';
import { isThisHour, isToday } from 'date-fns';
import ApptivityApi from './data/apptivity-api';
import API_ENDPOINT from './globals/api-endpoint';
import CONFIG from './globals/config';

const { CacheableResponse } = require('workbox-cacheable-response');
const { clientsClaim } = require('workbox-core');

clientsClaim();

self.skipWaiting();

precacheAndRoute(self.__WB_MANIFEST);

const bgSyncPlugin = new BackgroundSyncPlugin(CONFIG.QUEUE_TASK, {
  maxRetentionTime: 24 * 60,
});

const statusPlugin = {
  fetchDidSucceed: ({ response }) => {
    if (response.status >= 500) {
      // Throwing anything here will trigger fetchDidFail.
      throw new Error('Server error.');
    }
    // If it's not 5xx, use the response as-is.
    return response;
  },
};

registerRoute(
  ({ url }) => url.pathname.startsWith('/task'),
  new NetworkOnly({
    plugins: [bgSyncPlugin, statusPlugin],
  }),
  'POST',
);

registerRoute(
  ({ url }) => url.pathname.startsWith('/task'),
  new NetworkOnly({
    plugins: [bgSyncPlugin, statusPlugin],
  }),
  'PUT',
);

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: CONFIG.CACHE_IMAGE,
    plugins: [
      new CacheableResponse({
        statuses: [200],
      }),
    ],
  }),
);

registerRoute(
  ({ request }) => request.destination === 'audio',
  new CacheFirst({
    cacheName: CONFIG.CACHE_SOUND,
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
    cacheName: CONFIG.CACHE_TASK,
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
    cacheName: CONFIG.CACHE_MATRIX,
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
    cacheName: CONFIG.CACHE_USER,
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
    cacheName: CONFIG.CACHE_FONT,
    plugins: [
      new CacheableResponse({
        statuses: [200],
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://gnews.io',
  new StaleWhileRevalidate({
    cacheName: CONFIG.CACHE_ARTICLE,
    plugins: [
      new CacheableResponse({
        statuses: [200],
      }),
    ],
  }),
);

self.addEventListener('activate', async () => {
  try {
    const applicationServerKey = process.env.PUBLIC_KEY_SERVER;
    const options = { applicationServerKey, userVisibleOnly: true };
    const subscription = await self.registration.pushManager.subscribe(options);
    await fetch(API_ENDPOINT.SUBSCRIBE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscription),
    });
  } catch (err) {
    console.error('Error', err);
  }
});

self.addEventListener('push', async (event) => {
  const msg = event.data.text();
  if (msg === 'deadline') {
    const tasks = await ApptivityApi.getAllTask('completed=false');
    if (tasks === undefined) return;
    const deadline = tasks.filter((item) => isThisHour(new Date(item.deadline)) && isToday(new Date(item.deadline)));
    if (deadline.length > 0) {
      const promiseChain = self.registration.showNotification('Deadline - Apptivity!', {
        body: `${deadline.length} ${deadline.length > 1 ? 'tasks' : 'task'} to be done in the next 1 hour`,
        icon: './favicon.png',
        actions: [
          {
            action: 'view',
            title: 'View tasks',
          },
        ],
      });

      event.waitUntil(promiseChain);
    }
  }
});

self.addEventListener('notificationclick', (event) => {
  if (event.action === 'view') {
    event.notification.close();
    event.waitUntil(clients.openWindow('/'));
  }

  event.notification.close();
});
