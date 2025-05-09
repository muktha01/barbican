const express = require('express');
const { fetchAllUsers, loginUser, registerUser, sendOTP, verifyOTP,  } = require('../controllers/userController');
const router = express.Router();

router.get('/users', fetchAllUsers);
router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/send-otp', sendOTP);
router.post('/verify-otp', verifyOTP);


module.exports = router;
