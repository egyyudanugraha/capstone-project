const Boom = require('@hapi/boom');
const mongoose = require('mongoose');
const { handleImageDelete } = require('../Utils/upload');

const articleSchema = new mongoose.Schema({
  writer: {
    type: String,
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
  cover: {
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

articleSchema.pre('remove', function (next) {
  const article = this;
  const response = handleImageDelete(article.cover);
  if (!response) {
    throw Boom.badRequest('Error deleting image');
  }

  next();
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
