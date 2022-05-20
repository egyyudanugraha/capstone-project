const {
  createArticle, showAllArticle, showOneArticle, updateArticle,
} = require('../Controllers/article');

const articleRoute = [
  {
    method: 'POST',
    path: '/article',
    handler: createArticle,
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
];

module.exports = articleRoute;
