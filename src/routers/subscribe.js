const express = require('express');
const { pushNotification, subscribe } = require('../controllers/subscribe');

const router = express.Router();

router.post('/save-subscribe', subscribe);
router.get('/push-notification', pushNotification);

module.exports = router;
