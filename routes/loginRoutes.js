const express = require('express');
const loginController = require('../controller/loginController');
const router = express.Router();

//! Login - GET
router.get('/login', loginController.loginGet);

//! Login - POST
router.post('/api/v1/auth', loginController.loginPost);

module.exports = router;