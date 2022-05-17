const { profile, update, updatePassword } = require('../Controllers/user');

const userRoute = [
  {
    method: 'GET',
    path: '/user',
    handler: profile,
  },
  {
    method: 'PUT',
    path: '/user',
    handler: update,
  },
  {
    method: 'PUT',
    path: '/user/password',
    handler: updatePassword,
  },
];

module.exports = userRoute;
