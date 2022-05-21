const Boom = require('@hapi/boom');

const matchRole = {
  name: 'matchRole',
  version: '1.0.0',
  register: async (server) => {
    server.ext({
      type: 'onPreHandler',
      method: async (request, h) => {
        const match = request.route.path.match(/\/article/);
        const admin = request.query.uid ? request.query.uid !== process.env.ADMIN_UID : true;
        const method = ['post', 'put', 'delete'].includes(request.route.method);

        if (match && admin && method) {
          throw Boom.badGateway('You are not authorized to access this route');
        }

        return h.continue;
      },
    });
  },
};

module.exports = matchRole;
