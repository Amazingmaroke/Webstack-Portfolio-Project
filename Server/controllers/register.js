// Webstack-Portfolio-Project/Server/controllers/user.js
const User = require('../model/user');

const registerUser = async (req, res) => {

    const {  password,email ,phone, firstname, lastname } = req.body;
    if ( !password ||!email ||!phone||!firstname||!lastname) return res.status(400).json({ 'message': 'password,email,firstname and lastanme  required.' });

    
    
    const duplicateemail = await User.findOne({ email: email }).exec();

    
    
    if ( duplicateemail)return res.status(401).json({ error: 'Email already used' });



    try {
        const newUser = await User.create({
            "password": password,
            "email":email,
            "firstname":firstname,
            "lastname":lastname,
            "phone":phone,
        });
       
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
