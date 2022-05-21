const {
  createArticle,
  showAllArticle,
  showOneArticle,
  updateArticle,
  deleteArticle,
  showImageLarge,
  showImageSmall,
  showImageMedium,
} = require('../Controllers/article');

const articleRoute = [
  {
    method: 'POST',
    path: '/article',
    config: {
      payload: {
        maxBytes: 209715200,
        output: 'stream',
        parse: true,
        multipart: true,
      },
      handler: createArticle,
    },
  },
  {
    method: 'GET',
    path: '/article',
    handler: showAllArticle,
  },
  {
    method: 'GET',
    path: '/article/{id}',
    handler: showOneArticle,
  },
  {
    method: 'PUT',
    path: '/article/{id}',
    handler: updateArticle,
  },
  {
    method: 'DELETE',
    path: '/article/{id}',
    handler: deleteArticle,
  },
  {
    method: 'GET',
    path: '/article/image/large/{file*}',
    handler: showImageLarge(),
  },
  {
    method: 'GET',
    path: '/article/image/medium/{file*}',
    handler: showImageMedium(),
  },
  {
    method: 'GET',
    path: '/article/image/small/{file*}',
    handler: showImageSmall(),
  },
];

module.exports = articleRoute;
