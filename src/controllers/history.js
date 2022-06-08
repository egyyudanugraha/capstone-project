const History = require('../models/history');
const Task = require('../models/task');

module.exports = {
  createHistory: async (req, res) => {
    const { body, user } = req;
    try {
      const checkTask = await Task.findOne({ _id: body.task });
      if (!checkTask) {
        return res.status(400).send({
          message: 'Task not found!',
          error: true,
        });
      }

      const checkHistory = await History.findOne({ task: body.task, owner: user._id });
      if (checkHistory) {
        return res.status(400).send({
          message: 'You have already completed this task',
          error: true,
        });
      }

      const history = new History({
        ...body,
        owner: user._id,
      });

      await history.save();
      res.status(201).send({
        message: 'History created successfully',
        data: history,
        error: false,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  getAllHistory: async (req, res) => {
    const owner = req.user._id;
    try {
      const histories = await History.find({ owner }).populate({ path: 'task', select: 'title' });
      const mapping = histories.map((history) => ({
        _id: history._id,
        task: history.task.title,
        start_date: history.start_date,
        end_date: history.end_date,
      }));

      res.status(200).send({
        message: 'Get histories successfully',
        data: mapping,
        error: false,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
