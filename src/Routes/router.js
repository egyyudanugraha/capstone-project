const userRoute = require('./user');
const taskRoute = require('./task');
const authRoute = require('./auth');
const historyRoute = require('./history');
const articleRoute = require('./article');

const router = [].concat(authRoute, userRoute, taskRoute, historyRoute, articleRoute);

module.exports = router;
