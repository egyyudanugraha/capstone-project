const taskRoute = [
  {
    method: 'GET',
    path: '/tasks',
    handler: (request, h) => h.response('ini Task'),
  },
  {
    method: 'GET',
    path: '/tasks/id',
    handler: (request, h) => h.response('ini Task id'),
  },
];

module.exports = taskRoute;
