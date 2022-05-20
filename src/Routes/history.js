const {
  createHistory, showAllHistory, showOneHistory, deleteHistory,
} = require('../Controllers/history');

const historyRoute = [
  {
    method: 'POST',
    path: '/history',
    handler: createHistory,
  },
  {
    method: 'GET',
    path: '/history',
    handler: showAllHistory,
  },
  {
    method: 'GET',
    path: '/history/{id}',
    handler: showOneHistory,
  },
  {
    method: 'DELETE',
    path: '/history/{id}',
    handler: deleteHistory,
  },
];

module.exports = historyRoute;
