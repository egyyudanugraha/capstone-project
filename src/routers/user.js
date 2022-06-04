const express = require('express');
const auth = require('../middleware/auth');
const {
  register, login, profile, logout, updateUser, deleteUser, updatePassword, logoutAll,
} = require('../controllers/user');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', auth, logout);
router.get('/logoutall', auth, logoutAll);
router.get('/user', auth, profile);
router.put('/user', auth, updateUser);
router.put('/user/password', auth, updatePassword);
router.delete('/user', auth, deleteUser);

module.exports = router;
