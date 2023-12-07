// Webstack-Portfolio-Project/Server/routes/user.js

const express = require('express');
const { registerUser } = require('../controllers/register');
const router = express.Router();

// Route to handle user registration
router.post('/register',  registerUser)
   


module.exports = router;
