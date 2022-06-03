import { Workbox } from 'workbox-window';

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/sw.js');
    wb.register();
  }
}

export default registerServiceWorker;
