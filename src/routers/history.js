const express = require('express');
const { createHistory, getAllHistory } = require('../controllers/history');
const auth = require('../middleware/auth');

const router = new express.Router();

router.post('/history', auth, createHistory);
router.get('/history', auth, getAllHistory);

module.exports = router;
