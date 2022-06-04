const express = require('express');
const {
  createTask, getTasks, getDetailTask, updateTask, deleteTask, deleteAllTask,
} = require('../controllers/task');
const auth = require('../middleware/auth');

const router = new express.Router();

router.post('/task', auth, createTask);
router.get('/task', auth, getTasks);
router.get('/task/:_id', auth, getDetailTask);
router.put('/task/:_id', auth, updateTask);
router.delete('/task/:_id', auth, deleteTask);
router.delete('/task', auth, deleteAllTask);

module.exports = router;
