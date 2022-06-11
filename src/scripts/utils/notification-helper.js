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
    await Notification.requestPermission();
  },

  async _showNotification({ title, options }) {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
    serviceWorkerRegistration.showNotification(title, options);
  },
};

export default NotificationHelper;
