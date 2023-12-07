// Webstack-Portfolio-Project/Server/routes/user.js
const bcrypt = require('bcrypt');
const express = require('express');
const { registerUser } = require('../controllers/user');

const router = express.Router();

// Route to handle user registration
router.post('/register', async (req, res) => {
    try {
        await registerUser(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
        });
    }
});

// Add more routes as needed

module.exports = router;
