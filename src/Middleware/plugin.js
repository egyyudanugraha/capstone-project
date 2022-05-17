const Boom = require('@hapi/boom');
const admin = require('../Config/firebase-config');

const matchToken = {
  name: 'matchToken',
  version: '1.0.0',
  register: async (server) => {
    server.ext({
      type: 'onPreHandler',
      method: async (request, h) => {
        try {
          const { headers } = request;
          const { authorization } = headers;
          const token = authorization.split(' ')[1];
          const decodedValue = await admin.auth().verifyIdToken(token);
          if (decodedValue) {
            request.user = decodedValue;
            return h.continue;
          }
          throw Boom.badRequest();
        } catch (err) {
          throw Boom.unauthorized('Invalid token! Please login again.');
        }
      },
    });
  },
};

module.exports = matchToken;
