require('dotenv').config();
require('./DB/mongoose');
const Hapi = require('@hapi/hapi');
const JWT = require('@hapi/jwt');
const auth = require('./Middleware/middleware');
const router = require('./Routes/router');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: 'localhost',
  });

  await server.register(JWT);
  server.auth.strategy('jwt_strategy', 'jwt', auth);
  server.auth.default('jwt_strategy');

  server.route(router);

  await server.start();
  console.log('Server running on', server.info.uri);
};

init();
