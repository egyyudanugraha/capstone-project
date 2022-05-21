const taskRoute = require('./task');
const historyRoute = require('./history');
const articleRoute = require('./article');

const router = [].concat(taskRoute, historyRoute, articleRoute);

module.exports = router;
