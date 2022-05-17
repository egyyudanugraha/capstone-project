const Boom = require('@hapi/boom');
const bcryptjs = require('bcryptjs');
const User = require('../Models/user');

module.exports = {
  profile: async (request, h) => {
    const { user } = request.auth.credentials;
    return h.response({
      data: user,
    });
  },
  update: async (request, h) => {
    const { user } = request.auth.credentials;
    const { firstName, lastName } = request.payload;

    if (!firstName || !lastName) {
      throw Boom.badRequest('Please fill all the fields');
    }

    const updateUser = await User.findOne({ _id: user._id });
    updateUser.firstName = firstName;
    updateUser.lastName = lastName;
    await updateUser.save();

    return h.response({
      message: 'Profile update successfully',
      data: updateUser,
      error: false,
    });
  },
  updatePassword: async (request, h) => {
    const { user } = request.auth.credentials;
    const { password, newPassword } = request.payload;

    if (!password || !newPassword) {
      throw Boom.badRequest('Please fill all the fields');
    }

    const checkUser = await User.findOne({ _id: user._id });
    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      throw Boom.badRequest('Wrong password');
    }

    checkUser.password = newPassword;
    await checkUser.save();

    return h.response({
      message: 'Password update successfully!',
      data: checkUser,
      error: false,
    });
  },
};
