// Webstack-Portfolio-Project/Server/controllers/user.js
const User = require('../model/user');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                status: 'error',
                message: 'User already exists',
            });
        }

        // Create a new user
        const newUser = new User({
            firstname,
            lastname,
            email,
            password,
        });

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 8);
        newUser.password = hashedPassword;

        // Save the user to the database
        await newUser.save();

        res.status(201).json({
            status: 'success',
            data: { user: newUser },
            message: 'User registered successfully',
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
        });
    }
};

module.exports = { registerUser };
