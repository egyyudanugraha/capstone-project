const Boom = require('@hapi/boom');
const History = require('../Models/history');

module.exports = {
  createHistory: async (request, h) => {
    try {
      const {
        taskId, finishedIn, finishedAt, uid,
      } = request.payload;

      const checkHistory = await History.findOne({ task: taskId });
      if (checkHistory) {
        throw Boom.badRequest('Task already has a history');
      }

      const history = new History({
        finishedIn,
        finishedAt,
        task: taskId,
        owner: uid,
      });

      await history.save();

      return h.response({
        message: 'History created successfully',
        data: history,
        error: false,
      });
    } catch (error) {
      throw Boom.badRequest(error);
    }
  },
  showAllHistory: async (request, h) => {
    try {
      const { uid } = request.query;
      const histories = await History.find({ owner: uid });

      return h.response({
        message: 'All histories',
        data: histories,
        error: false,
      });
    } catch (error) {
      throw Boom.badRequest(error);
    }
  },
  showOneHistory: async (request, h) => {
    try {
      const { uid } = request.query;
      const { id } = request.params;
      const history = await History.findOne({ _id: id, owner: uid });

      if (!history) {
        throw Boom.badRequest('History not found');
      }

      return h.response({
        message: 'Get detail history successfully',
        data: history,
        error: false,
      });
    } catch (error) {
      throw Boom.badRequest(error);
    }
  },
  deleteHistory: async (request, h) => {
    try {
      const { uid } = request.query;
      const { id } = request.params;
      const history = await History.findOne({ _id: id, owner: uid });

      if (!history) {
        throw Boom.badRequest('History not found');
      }

      await history.remove();

      return h.response({
        message: 'History deleted successfully',
        data: history,
        error: false,
      });
    } catch (error) {
      throw Boom.badRequest(error);
    }
  },
};
