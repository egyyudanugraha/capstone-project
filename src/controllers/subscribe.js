const webpush = require('web-push');
const Subscribe = require('../models/subscribe');

const vapidKeys = {
  publicKey: process.env.VAPID_PUBLIC_KEY,
  privateKey: process.env.VAPID_PRIVATE_KEY,
};
webpush.setGCMAPIKey(process.env.GCM_API_KEY);
webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey,
);

module.exports = {
  subscribe: async (req, res) => {
    const subscribe = new Subscribe(req.body);
    try {
      await subscribe.save();
      res.status(200).send({
        message: 'Subscribe successfully',
        error: false,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  pushNotification: async (req, res) => {
    try {
      const subscriber = await Subscribe.find({}, { _id: 0, endpoint: 1, keys: 1 });
      subscriber.forEach(async (sub) => {
        webpush.sendNotification(sub, 'deadline').catch((error) => {
          console.error(error.stack);
        });
      });

      res.status(200).send({
        message: 'Push notification successfully',
        error: false,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
