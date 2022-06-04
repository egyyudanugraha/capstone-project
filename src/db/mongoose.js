const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/capstone-v3', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
