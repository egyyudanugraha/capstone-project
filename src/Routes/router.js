const userRoute = require('./user');
const taskRoute = require('./task');
const authRoute = require('./auth');
const historyRoute = require('./history');

const router = [].concat(authRoute, userRoute, taskRoute, historyRoute);

module.exports = router;
