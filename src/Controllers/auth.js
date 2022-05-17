const Boom = require('@hapi/boom');
const User = require('../Models/user');

module.exports = {
  register: async (request, h) => {
    const user = new User(request.payload);

    try {
      const checkUser = await User.findOne({ email: user.email });
      if (checkUser) {
        return Boom.unauthorized('User already exists');
      }

      const token = await user.generateAuthToken();
      await user.save();

      return h.response({
        message: 'Registration success, please login!',
        data: user,
        token,
        error: false,
      }).code(201);
    } catch (error) {
      throw Boom.boomify(error);
    }
  },
  login: async (request, h) => {
    const { email, password } = request.payload;

    try {
      const user = await User.findByCredentials(email, password);
      const token = await user.generateAuthToken();
      await user.save(); // save new token

      return h.response({
        message: 'Login success',
        data: user,
        token,
        error: false,
      }).code(200);
    } catch (error) {
      throw Boom.boomify(error);
    }
  },
  logout: async (request, h) => {
    const { user } = request.auth.credentials;

    try {
      const account = await User.findOne({ _id: user._id });
      account.token = null;
      await account.save();

      return h.response({ message: 'Logout success' }).code(200);
    } catch (error) {
      throw Boom.boomify(error);
    }
  },
};
