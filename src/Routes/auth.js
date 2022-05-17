const { register, login, logout } = require('../Controllers/auth');

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
];

module.exports = authRoute;
