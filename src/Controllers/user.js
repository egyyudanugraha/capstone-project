const Boom = require('@hapi/boom');
const bcryptjs = require('bcryptjs');
const User = require('../Models/user');

module.exports = {
  getProfile: async (request, h) => {
    const { user } = request.auth.credentials;
    return h.response({
      message: 'User profile',
      data: user,
      error: false,
    });
  },
  updateProfile: async (request, h) => {
    const updates = Object.keys(request.payload);
    const allowedUpdates = ['firstName', 'lastName'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
      throw Boom.badRequest('Invalid updates!');
    }

    try {
      const { user } = request.auth.credentials;
      const updateUser = await User.findOne({ _id: user._id });

      updates.forEach((update) => updateUser[update] = request.payload[update]);
      await updateUser.save();

      return h.response({
        message: 'Profile update successfully',
        data: updateUser,
        error: false,
      });
    } catch (error) {
      throw Boom.badRequest(error);
    }
  },
  updatePassword: async (request, h) => {
    const { password, newPassword } = request.payload;
    try {
      const { user } = request.auth.credentials;

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
    } catch (error) {
      throw Boom.badRequest(error);
    }
  },
  deleteProfile: async (request, h) => {
    try {
      const { user } = request.auth.credentials;
      const deleteUser = await User.findOne({ _id: user._id });

      if (!deleteUser) {
        throw Boom.notFound('User not found');
      }

      await deleteUser.remove();

      return h.response({
        message: 'User deleted successfully',
        data: deleteUser,
        error: false,
      });
    } catch (error) {
      throw Boom.badRequest(error);
    }
  },
};
