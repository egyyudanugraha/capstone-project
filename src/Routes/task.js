const {
  showAllTask, createTask, showOneTask, updateTask, deleteTask,
} = require('../Controllers/task');

const taskRoute = [
  {
    method: 'POST',
    path: '/task',
    handler: createTask,
  },
  {
    method: 'GET',
    path: '/task',
    handler: showAllTask,
  },
  {
    method: 'GET',
    path: '/task/{id}',
    handler: showOneTask,
  },
  {
    method: 'PUT',
    path: '/task/{id}',
    handler: updateTask,
  },
  {
    method: 'DELETE',
    path: '/task/{id}',
    handler: deleteTask,
  },
];

module.exports = taskRoute;
