// Webstack-Portfolio-Project/Server/routes/index.js
const express = require('express');
const { registerUser } = require('../controllers/user'); // Import the registerUser function

const app = express();

app.disable('x-powered-by'); // Reduce fingerprinting (optional)

// Home route with the get method and a handler
app.get('/v1', (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            data: [],
            message: 'Welcome to our API homepage!',
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
        });
    }
});

// Register route
app.post('/v1/register', registerUser);

module.exports = app;
