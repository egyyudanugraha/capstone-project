require('dotenv').config();
require('./DB/mongoose');
const Hapi = require('@hapi/hapi');
const matchRole = require('./Middleware/plugin');
const router = require('./Routes/router');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register({
    plugin: matchRole,
  });

  await server.register(require('@hapi/inert'));
  server.route(router);

  await server.start();
  console.log('Server running on', server.info.uri);
};

init();
