const express = require('express');
const loginController = require('../controllers/loginController');
const router = express.Router();

//! Login - GET
router.get('/login', loginController.loginGet);

//! Login - POST
router.post('/api/v1/auth', loginController.loginPost);

//! Logout - GET
router.get('/api/v1/logout', loginController.logoutGet);

//! Register - POST
router.post('/register', loginController.registerPost);

module.exports = router;