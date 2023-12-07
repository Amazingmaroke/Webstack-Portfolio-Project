// Webstack-Portfolio-Project/Server/routes/user.js

const express = require('express');
const { registerUser } = require('../controllers/register');
const { Loginhandler } = require('../controllers/login');
const router = express.Router();

// Route to handle user registration
router.post('/register',  registerUser)
router.post('/login',  Loginhandler)
   


module.exports = router;
