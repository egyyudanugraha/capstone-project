import API_ENDPOINT from '../globals/api-endpoint';

const NotificationHelper = {
  init() {
    if (!this._checkAvailability()) {
      return;
    }

    if (!this._checkPermission()) {
      this._requestPermission();
    }
  },

  sendNotification({ title, options }) {
    this.init();
    this._showNotification({ title, options });
  },

  _checkAvailability() {
    return !!('Notification' in window);
  },

  _checkPermission() {
    return Notification.permission === 'granted';
  },

  async _requestPermission() {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        await this._subscribeNotification();
      }
    } catch (err) {
      console.error('Error', err);
    }
  },

  async _subscribeNotification() {
    const applicationServerKey = process.env.PUBLIC_KEY_SERVER;
    const options = { applicationServerKey, userVisibleOnly: true };
    const serviceWorker = await navigator.serviceWorker.ready;
    const subscription = await serviceWorker.pushManager.subscribe(options);
    await fetch(API_ENDPOINT.SUBSCRIBE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscription),
    });
  },

  async _showNotification({ title, options }) {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
    serviceWorkerRegistration.showNotification(title, options);
  },
};

export default NotificationHelper;
