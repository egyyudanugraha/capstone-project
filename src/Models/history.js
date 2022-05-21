const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true,
  },
  task: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
    required: true,
  },
  finishedIn: {
    type: String,
    required: true,
  },
  finishedAt: {
    type: Number,
    required: true,
  },
});

const History = mongoose.model('History', historySchema);

module.exports = History;
