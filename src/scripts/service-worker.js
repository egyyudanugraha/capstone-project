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
  ({ request, url }) => request.destination === 'image' || url.origin === 'https://i.postimg.cc',
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

self.addEventListener('push', async (event) => {
  const showDeadline = (title, body, actTitle, silent = false, timeout = 60) => self.registration.showNotification(title, {
    body,
    icon: './favicon.png',
    actions: [
      {
        action: 'home',
        title: actTitle,
      },
    ],
    silent,
  })
    .then(() => self.registration.getNotifications())
    .then((notifications) => {
      setTimeout(() => {
        notifications.forEach((notification) => notification.close());
      }, 60000 * timeout);
    });

  event.waitUntil(
    ApptivityApi.getAllTask('completed=false').then((tasks) => {
      if (tasks === undefined) return showDeadline('Apptivity', 'Please login to see your tasks deadline.', 'Login', true, 1);

      const deadline = tasks.filter((item) => differenceInMinutes(new Date(item.deadline), new Date(), { roundingMethod: 'ceil' }) <= 60 && isToday(new Date(item.deadline)));
      if (deadline.length === 0) return showDeadline('Apptivity', 'You have no tasks with deadline in next 60 minutes.', 'OK', true, 1);
      return showDeadline('Deadline! - Apptivity', `${deadline.length} ${deadline.length > 1 ? 'tasks' : 'task'} to be done in the next 60 minutes.`, 'View tasks');
    }),
  );
});

self.addEventListener('notificationclick', (event) => {
  async function matchTab(path) {
    const allClients = await clients.matchAll({
      includeUncontrolled: true,
    });

    let tabsClient;
    for (const client of allClients) {
      const url = new URL(client.url);
      if (url.hash === path) {
        client.focus();
        tabsClient = client;
        break;
      }
    }

    if (!tabsClient) {
      await clients.openWindow(`/${path}`);
    }

    event.notification.close();
  }

  if (event.action === 'home') {
    event.waitUntil(matchTab('#/home'));
  }

  if (event.action === 'pomodoro') {
    event.waitUntil(matchTab('#/pomodoro'));
  }

  event.waitUntil(matchTab(`#/${event.notification.actions[0].action}`));
});
