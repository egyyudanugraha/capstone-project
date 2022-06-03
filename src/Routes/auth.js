const {
  register, login, logout, checkAuth,
} = require('../Controllers/auth');

const authRoute = [
  {
    method: 'POST',
    path: '/register',
    config: {
      auth: false,
      handler: register,
    },
  },
  {
    method: 'POST',
    path: '/login',
    config: {
      auth: false,
      handler: login,
    },
  },
  {
    method: 'GET',
    path: '/logout',
    handler: logout,
  },
  {
    method: 'GET',
    path: '/checkauth',
    handler: checkAuth,
  },
];

module.exports = authRoute;
