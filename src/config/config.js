require('dotenv').config('../.env');

const CONFIG = {
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  KEY_PUSH: process.env.KEY_PUSH,
  VAPID_PUBLIC_KEY: process.env.VAPID_PUBLIC_KEY,
  VAPID_PRIVATE_KEY: process.env.VAPID_PRIVATE_KEY,
  GCM_API_KEY: process.env.GCM_API_KEY,
  MONGODB_URI: process.env.MONGODB_URI,
};

module.exports = CONFIG;
