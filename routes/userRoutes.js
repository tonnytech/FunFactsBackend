const express = require('express');
const {
  signup,
  verifyEmail,
  login,
  forgotPassword,
  logout,
  protect,
  resetPassword,
} = require('../controllers/authController');
const { getMe } = require('../controllers/userController');
const router = express.Router();

router.post('/signup', signup);
router.get('/verifyEmail/:token', verifyEmail);
router.post('/login', login);
router.get('/logout', logout);
router.post('/forgotPassword', forgotPassword);
router.post('/resetPassword/:token', resetPassword);
router.get('/me', protect, getMe);

module.exports = router;
