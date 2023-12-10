// Webstack-Portfolio-Project/Server/controllers/deleteUser.js
const User = require('../model/user');

const deleteUser = async (req, res) => {
  try {
    const { email } = req.params;

    const user = await User.findOneAndDelete({ email }).exec();
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({
      status: 'success',
      data: { user },
      message: 'User deleted successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = deleteUser;
