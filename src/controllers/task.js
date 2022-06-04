const Task = require('../models/task');

module.exports = {
  createTask: async (req, res) => {
    const { body, user } = req;
    try {
      const task = new Task({
        ...body,
        owner: user._id,
      });

      await task.save();
      res.status(201).send({
        message: 'Task created successfully',
        data: task,
        error: false,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },

  getTasks: async (req, res) => {
    const owner = req.user._id;
    const { priority, completed } = req.query;
    try {
      const tasks = await Task.find({ owner });
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

      res.status(200).send({
        message: 'Get tasks successfully',
        data: filteredTask,
        error: false,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  getDetailTask: async (req, res) => {
    const { _id } = req.params;
    const owner = req.user._id;

    try {
      const task = await Task.findOne({ _id, owner });
      if (!task) {
        return res.status(404).send();
      }

      res.status(200).send({
        message: 'Get task successfully',
        data: task,
        error: false,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  updateTask: async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['title', 'description', 'completed', 'urgency', 'important', 'deadline'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
      return res.status(400).send({
        message: 'Invalid updates!',
        error: true,
      });
    }

    const owner = req.user._id;
    const { _id } = req.params;
    const { body } = req;

    try {
      const task = await Task.findOne({ _id, owner });
      if (!task) {
        return res.status(404).send({
          message: 'Task not found!',
          error: true,
        });
      }

      updates.forEach((update) => {
        task[update] = body[update];
      });

      await task.save();
      res.status(200).send({
        message: 'Task updated successfully',
        error: false,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  deleteTask: async (req, res) => {
    const owner = req.user._id;
    const { _id } = req.params;

    try {
      const task = await Task.findOne({ _id, owner });
      if (!task) {
        return res.status(404).send({
          message: 'Task not found!',
          error: true,
        });
      }

      await task.remove();
      res.status(200).send({
        message: 'Task deleted successfully',
        error: false,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  deleteAllTask: async (req, res) => {
    const owner = req.user._id;

    try {
      const tasks = await Task.find({ owner });
      if (!tasks) {
        return res.status(404).send({
          message: 'Tasks not found!',
          error: true,
        });
      }

      await Task.deleteMany({ owner });
      res.status(200).send({
        message: 'Tasks deleted successfully',
        error: false,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
