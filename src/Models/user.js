const Boom = require('@hapi/boom');
const bcryptjs = require('bcryptjs');
const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const Task = require('./task');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw Boom.badRequest('Email is invalid');
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw Boom.badRequest('Password cannot contain "password"');
      }

      if (value.length < 8) {
        throw Boom.badRequest('Password must be at least 8 characters');
      }
    },
  },
  role: {
    type: String,
    required: true,
    enum: ['user', 'admin'],
    default: 'user',
  },
  token: {
    type: String,
    default: null,
  },
}, {
  timestamps: true,
});

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.token;

  return userObject;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({
    _id: user._id.toString(),
    aud: 'urn:audience:test',
    iss: 'urn:issuer:test',
    sub: false,
    maxAgeSec: 3600,
    timeSkewSec: 15,
  }, process.env.JWT_SECRET);

  user.token = token;

  return token;
};

userSchema.statics.findByCredentials = async function (email, password) {
  const user = await this.findOne({ email });
  const isMatch = user ? await bcryptjs.compare(password, user.password) : null;

  if (!user || !isMatch) {
    throw Boom.unauthorized('Invalid email or password');
  }

  return user;
};

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcryptjs.hash(user.password, 8);
  }
  next();
});

userSchema.pre('remove', async function (next) {
  const user = this;
  await Task.deleteMany({ owner: user._id });
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
