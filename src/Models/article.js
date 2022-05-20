const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    default: Date.now(),
  },
  tags: {
    type: [String],
    required: true,
  },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
