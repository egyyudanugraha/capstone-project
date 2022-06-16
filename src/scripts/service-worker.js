import 'regenerator-runtime/runtime';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import {
  NetworkFirst, StaleWhileRevalidate, CacheFirst, NetworkOnly,
} from 'workbox-strategies';
import { BackgroundSyncPlugin } from 'workbox-background-sync';
import { differenceInMinutes, isToday } from 'date-fns';
import ApptivityApi from './data/apptivity-api';
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
    if (response.status >= 400) {
      throw new Error('Server error.');
    }
    return response;
  },
};

registerRoute(
  ({ url }) => url.pathname.startsWith('/task') || url.pathname.startsWith('/history'),
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
  ({ url }) => url.pathname.startsWith('/task'),
  new NetworkOnly({
    plugins: [bgSyncPlugin, statusPlugin],
  }),
  'DELETE',
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

self.addEventListener('push', (event) => {
  const msg = event.data.text();
  let promiseChain = null;
  if (msg === 'deadline') {
    const tasksPromise = ApptivityApi.getAllTask('completed=false').then((tasks) => {
      if (tasks === undefined) return;
      const deadline = tasks.filter((item) => differenceInMinutes(new Date(item.deadline), new Date(), { roundingMethod: 'ceil' }) <= 60 && isToday(new Date(item.deadline)));
      if (deadline.length <= 0) {
        return;
      }

      return self.registration.showNotification('Deadline!', {
        body: `${deadline.length} ${deadline.length > 1 ? 'tasks' : 'task'} to be done in the next 1 hour`,
        icon: './favicon.png',
        actions: [
          {
            action: 'view',
            title: 'View tasks',
          },
        ],
      });
    });
    promiseChain = Promise.all([tasksPromise]);
  }
  event.waitUntil(promiseChain);
});

self.addEventListener('notificationclick', (event) => {
  if (event.action === 'view') {
    event.notification.close();
    event.waitUntil(clients.openWindow('/#/home'));
  }

  event.notification.close();
});
