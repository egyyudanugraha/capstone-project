const jwt = require('jsonwebtoken');
// const Boom = require('@hapi/boom');
const User = require('../Models/user');

const validate = async (request) => {
  const { token } = request;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findOne({ _id: decoded._id, token });

  if (!user) {
    return { credentials: null, isValid: false };
  }

  const isValid = true;
  const credentials = { user };
  return { isValid, credentials, token };
};

const auth = {
  keys: process.env.JWT_SECRET,
  verify: {
    aud: 'urn:audience:test',
    iss: 'urn:issuer:test',
    sub: false,
    nbf: true,
    exp: true,
    maxAgeSec: 3600,
    timeSkewSec: 15,
  },
  validate,
};

module.exports = auth;
