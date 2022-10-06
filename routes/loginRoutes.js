const express = require('express');
const loginController = require('../controller/loginController');
const router = express.Router();

//! Login - GET
router.get('/login', loginController.loginGet);

module.exports = router;