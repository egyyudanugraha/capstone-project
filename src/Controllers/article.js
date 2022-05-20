const Boom = require('@hapi/boom');
const Article = require('../Models/article');
const User = require('../Models/user');

module.exports = {
  createArticle: async (request, h) => {
    try {
      const { title, content, tags } = request.payload;
      const article = new Article({
        writer: request.auth.credentials.user._id,
        title,
        content,
        tags,
      });
      await article.save();
      return h.response({
        message: 'Article created successfully',
        data: article,
      }).code(201);
    } catch (error) {
      throw Boom.badRequest(error);
    }
  },
  showAllArticle: async (request, h) => {
    const { tag, sort = 'asc' } = request.query;
    try {
      const articles = await Article.find({});
      let filteredArticles = [].concat(articles);

      if (tag) {
        filteredArticles = articles.filter((article) => article.tags.includes(tag));
      }

      if (sort) {
        filteredArticles = filteredArticles.sort((a, b) => {
          if (sort !== 'asc') {
            return b.date - a.date;
          }
          return a.date - b.date;
        });
      }

      return h.response({
        message: 'All articles',
        data: filteredArticles,
      });
    } catch (error) {
      throw Boom.badRequest(error);
    }
  },
  showOneArticle: async (request, h) => {
    try {
      const { id } = request.params;
      const article = await Article.findOne({ _id: id });
      const writer = await User.findOne({ _id: article.writer });

      const data = {
        ...article._doc,
        writer: `${writer.firstName} ${writer.lastName}`,
      };

      return h.response({
        message: 'Get detail article successfully',
        data,
      });
    } catch (error) {
      throw Boom.badRequest(error);
    }
  },
  updateArticle: async (request, h) => {
    const updates = Object.keys(request.payload);
    const allowedUpdates = ['title', 'content', 'tags'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
      throw Boom.badRequest('Invalid updates!');
    }

    try {
      const { id } = request.params;
      const article = await Article.findOne({ _id: id });

      if (!article) {
        throw Boom.notFound('Article not found');
      }

      updates.forEach((update) => article[update] = request.payload[update]);

      await article.save();

      return h.response({
        message: 'Article updated successfully',
        data: article,
      });
    } catch (error) {
      throw Boom.badRequest(error);
    }
  },
  deleteArticle: async (request, h) => {
    try {
      const { id } = request.params;
      const article = await Article.findOne({ _id: id });
      await article.remove();
      return h.response({
        message: 'Article deleted successfully',
        data: article,
      });
    } catch (error) {
      throw Boom.badRequest(error);
    }
  },
};
