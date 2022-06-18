const webpush = require('web-push');
const CONFIG = require('../config/config');
const Subscribe = require('../models/subscribe');

const vapidKeys = {
  publicKey: CONFIG.VAPID_PUBLIC_KEY,
  privateKey: CONFIG.VAPID_PRIVATE_KEY,
};
webpush.setGCMAPIKey(CONFIG.GCM_API_KEY);
webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey,
);

module.exports = {
  subscribe: async (req, res) => {
    const subscribe = new Subscribe(req.body);
    try {
      const checkSub = await Subscribe.findOne({ endpoint: req.body.endpoint });
      if (checkSub) {
        return res.status(400).json({
          message: 'You are already subscribed to this website.',
          error: true,
        });
      }

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
      const { key } = req.query;
      if (key !== CONFIG.KEY_PUSH) {
        return res.status(400).send({
          message: 'Invalid key',
          error: true,
        });
      }

      const subscriber = await Subscribe.find({}, { _id: 0, endpoint: 1, keys: 1 });
      subscriber.forEach(async (sub) => {
        await webpush.sendNotification(sub, 'deadline').catch(async (error) => {
          if (error.statusCode === 410 || error.statusCode === 404) {
            await Subscribe.deleteOne({ endpoint: sub.endpoint });
          } else {
            throw error;
          }
        });
      });

      res.status(200).send({
        message: `Push notification successfully to ${subscriber.length} subscribers`,
        error: false,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  intervalNotification: () => {
    setInterval(async () => {
      try {
        const subscriber = await Subscribe.find({}, { _id: 0, endpoint: 1, keys: 1 });
        subscriber.forEach(async (sub) => {
          await webpush.sendNotification(sub, 'deadline').catch(async (error) => {
            if (error.statusCode === 410 || error.statusCode === 404) {
              await Subscribe.deleteOne({ endpoint: sub.endpoint });
            } else {
              throw error;
            }
          });
        });
      } catch (error) {
        console.error(error.stack);
      }
    }, 60000 * CONFIG.INTERVAL);
  },
};
