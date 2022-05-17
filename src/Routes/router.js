const userRoute = require('./user');
const taskRoute = require('./task');
const authRoute = require('./auth');

const router = [].concat(authRoute, userRoute, taskRoute);

module.exports = router;
