const mongoose = require('mongoose');

const subscribeSchema = new mongoose.Schema({
  endpoint: {
    type: String,
    required: true,
  },
  keys: {
    auth: {
      type: String,
      required: true,
    },
    p256dh: {
      type: String,
      required: true,
    },
  },
});

const Subscribe = mongoose.model('Subscribe', subscribeSchema);

module.exports = Subscribe;
