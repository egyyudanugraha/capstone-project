const mongoose = require('mongoose');
const CONFIG = require('../config/config');

mongoose.connect(CONFIG.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
