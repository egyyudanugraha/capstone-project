const Boom = require('@hapi/boom');
const Task = require('../Models/task');

module.exports = {
  createTask: async (request, h) => {
    try {
      const { payload } = request;
      const { user } = request.auth.credentials;

      const task = new Task({
        ...payload,
        owner: user._id,
      });

      await task.save();

      return h.response({
        message: 'Task created successfully',
        data: task,
        error: false,
      });
    } catch (error) {
      throw Boom.badRequest(error);
    }
  },
  showAllTask: async (request, h) => {
    const { priority, completed } = request.query;

    try {
      const { user } = request.auth.credentials;
      const tasks = await Task.find({ owner: user._id });
      let filteredTask = [].concat(tasks);

      if (priority === 'high') {
        filteredTask = tasks.sort((a, b) => b.urgency - a.urgency);
      } else if (priority === 'low') {
        filteredTask = tasks.sort((a, b) => a.urgency - b.urgency);
      }

      if (completed === 'true') {
        filteredTask = tasks.filter((task) => task.completed);
      } else if (completed === 'false') {
        filteredTask = tasks.filter((task) => !task.completed);
      }

      return h.response({
        message: 'All tasks',
        data: filteredTask,
        error: false,
      });
    } catch (error) {
      throw Boom.badRequest(error);
    }
  },
  showOneTask: async (request, h) => {
    try {
      const { user } = request.auth.credentials;
      const { id } = request.params;
      const task = await Task.findOne({ _id: id, owner: user._id });

      if (!task) {
        throw Boom.notFound('Task not found');
      }

      return h.response({
        message: 'Task found',
        data: task,
        error: false,
      });
    } catch (error) {
      throw Boom.badRequest(error);
    }
  },
  updateTask: async (request, h) => {
    const updates = Object.keys(request.payload);
    const allowedUpdates = ['title', 'description', 'completed', 'urgency', 'important', 'deadline'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
      throw Boom.badRequest('Invalid updates!');
    }

    try {
      const { user } = request.auth.credentials;
      const { id } = request.params;
      const { payload } = request;
      const task = await Task.findOne({ _id: id, owner: user._id });

      if (!task) {
        throw Boom.notFound('Task not found');
      }

      updates.forEach((update) => (task[update] = payload[update]));
      await task.save();

      return h.response({
        message: 'Task updated successfully',
        data: task,
        error: false,
      });
    } catch (error) {
      throw Boom.badRequest(error);
    }
  },
  deleteTask: async (request, h) => {
    try {
      const { user } = request.auth.credentials;
      const { id } = request.params;
      const task = await Task.findOne({ _id: id, owner: user._id });

      if (!task) {
        throw Boom.notFound('Task not found');
      }

      await task.remove();

      return h.response({
        message: 'Task deleted successfully',
        data: task,
        error: false,
      });
    } catch (error) {
      throw Boom.badRequest(error);
    }
  },
  matrix: async (request, h) => {
    try {
      const { user } = request.auth.credentials;
      const tasks = await Task.find({ owner: user._id });
      const matrix = {
        do: tasks.filter((task) => !task.completed && task.urgency > 3 && task.important),
        decide: tasks.filter((task) => !task.completed && task.urgency <= 3 && task.important),
        delegate: tasks.filter((task) => !task.completed && task.urgency > 3 && !task.important),
        delete: tasks.filter((task) => !task.completed && task.urgency <= 3 && !task.important),
      };

      return h.response({
        message: 'Matrix',
        data: matrix,
        error: false,
      });
    } catch (error) {
      throw Boom.badRequest(error);
    }
  },
};
