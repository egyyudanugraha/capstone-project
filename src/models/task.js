const mongoose = require('mongoose');
const History = require('./history');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    default: '',
  },
  completed: {
    type: Boolean,
    default: false,
  },
  urgency: {
    type: Number,
    default: 0,
    max: 5,
  },
  important: {
    type: Boolean,
    default: false,
  },
  deadline: {
    type: Number,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
}, {
  timestamps: true,
});

taskSchema.pre('save', async function (next) {
  const task = this;
  if (task.isModified('completed') && task.completed === false) {
    await History.findOneAndDelete({ task: task._id });
  }
  next();
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
