// Webstack-Portfolio-Project/Server/routes/user.js

const express = require('express');
const { registerUser } = require('../controllers/register');
const { Loginhandler } = require('../controllers/login');
const getUser = require('../controllers/getUser');
const createUser = require('../controllers/createUser');
const updateUser = require('../controllers/updateUser');
const deleteUser = require('../controllers/deleteUser');
const router = express.Router();

// Route to handle user registration
router.get('/:email', getUser);
router.post('/create', createUser);
router.put('/update/:email', updateUser);
router.delete('/delete/:email', deleteUser);
router.post('/register',  registerUser)
router.post('/login',  Loginhandler)
   


module.exports = router;
