const History = require('../models/history');

module.exports = {
  createHistory: async (req, res) => {
    const { body, user } = req;
    try {
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
      const histories = await History.find({ owner });
      res.status(200).send({
        message: 'Get histories successfully',
        data: histories,
        error: false,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
