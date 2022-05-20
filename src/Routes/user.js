const {
  getProfile, updateProfile, updatePassword, deleteProfile,
} = require('../Controllers/user');

const userRoute = [
  {
    method: 'GET',
    path: '/user',
    handler: getProfile,
  },
  {
    method: 'PUT',
    path: '/user',
    handler: updateProfile,
  },
  {
    method: 'PUT',
    path: '/user/password',
    handler: updatePassword,
  },
  {
    method: 'DELETE',
    path: '/user',
    handler: deleteProfile,
  },
];

module.exports = userRoute;
