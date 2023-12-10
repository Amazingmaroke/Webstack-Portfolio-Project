// Webstack-Portfolio-Project/Server/controllers/createUser.js
const User = require('../model/user');

const createUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password, phone } = req.body;

    const duplicateEmail = await User.findOne({ email }).exec();
    if (duplicateEmail) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password,
      phone,
    });

    await newUser.save();

    res.status(201).json({
      status: 'success',
      data: { user: newUser },
      message: 'User created successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = createUser;
