const express = require('express');
const { matrix } = require('../controllers/matrix');
const auth = require('../middleware/auth');

const router = new express.Router();

router.get('/matrix', auth, matrix);

module.exports = router;
