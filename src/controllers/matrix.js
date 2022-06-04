const Task = require('../models/task');

const mapingMatrix = (tasks) => tasks.map((task) => ({ _id: task._id, title: task.title }));

module.exports = {
  matrix: async (req, res) => {
    const owner = req.user._id;

    try {
      const tasks = await Task.find({ owner });
      const matrix = {
        do: mapingMatrix(tasks.filter((task) => !task.completed && task.urgency > 3 && task.important)),
        decide: mapingMatrix(tasks.filter((task) => !task.completed && task.urgency <= 3 && task.important)),
        delegate: mapingMatrix(tasks.filter((task) => !task.completed && task.urgency > 3 && !task.important)),
        delete: mapingMatrix(tasks.filter((task) => !task.completed && task.urgency <= 3 && !task.important)),
      };

      res.status(200).send({
        message: 'Get matrix successfully',
        data: matrix,
        error: false,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
