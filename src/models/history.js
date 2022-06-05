const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  task: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
    required: true,
  },
  start_date: {
    type: Number,
    required: true,
  },
  end_date: {
    type: Number,
    required: true,
    default: Date.now,
  },
});

const History = mongoose.model('History', historySchema);

module.exports = History;
