// Webstack-Portfolio-Project/Server/controllers/getUser.js
const User = require('../model/user');

const getUser = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email }).exec();

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = getUser;
