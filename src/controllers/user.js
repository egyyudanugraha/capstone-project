const bcryptjs = require('bcryptjs');
const User = require('../models/user');

module.exports = {
  register: async (req, res) => {
    const user = new User(req.body);
    try {
      const token = await user.generateAuthToken();

      await user.save();
      res.status(201).send({
        message: 'User created successfully',
        user,
        token,
        error: false,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findByCredentials(email, password);
      if (!user) {
        return res.status(401).send({
          message: 'User not found',
          error: true,
        });
      }

      const token = await user.generateAuthToken();

      res.status(200).send({
        message: 'Login successfully',
        user,
        token,
        error: false,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  logout: async (req, res) => {
    try {
      req.user.tokens = req.user.tokens.filter((tokenObject) => tokenObject.token !== req.token);

      await req.user.save();

      res.status(200).send({
        message: 'Logout successfully',
        error: false,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  logoutAll: async (req, res) => {
    try {
      req.user.tokens = [];

      await req.user.save();

      res.status(200).send({
        message: 'Logout all successfully',
        error: false,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  profile: async (req, res) => {
    res.send({
      message: 'User profile',
      user: req.user,
      error: false,
    });
  },
  updateUser: async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['firstName', 'lastName'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
      return res.status(400).send({
        message: 'Invalid updates',
        error: true,
      });
    }

    try {
      updates.forEach((update) => req.user[update] = req.body[update]);
      await req.user.save();

      res.status(200).send({
        message: 'User updated successfully',
        user: req.user,
        error: false,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  updatePassword: async (req, res) => {
    const { password, newPassword } = req.body;
    try {
      const user = await User.findOne({ _id: req.user._id });
      if (!user) {
        return res.status(401).send({
          message: 'User not found',
          error: true,
        });
      }

      const isMatch = await bcryptjs.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send({
          message: 'Wrong password',
          error: true,
        });
      }

      user.password = newPassword;
      await user.save();

      res.status(200).send({
        message: 'Password updated successfully',
        error: false,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      await req.user.remove();

      res.status(200).send({
        message: 'User deleted successfully',
        error: false,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
