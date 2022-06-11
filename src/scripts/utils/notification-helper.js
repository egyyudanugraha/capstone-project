const NotificationHelper = {
  init() {
    if (!this._checkAvailability()) {
      return;
    }

    if (!this._checkPermission()) {
      this._requestPermission();
    }
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
};

export default NotificationHelper;
