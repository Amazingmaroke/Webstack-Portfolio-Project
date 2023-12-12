// Webstack-Portfolio-Project/Server/controllers/logout.js
const User = require('../model/user');

const logoutUser = async (req, res) => {
  try {
    const { user } = req;
    
    // Clear the refresh token from the user's array
    user.userrefreshToken = [];
    await user.save();

    // Clear the JWT cookie
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None' });

    res.status(200).json({
      status: 'success',
      message: 'You are now logged out.',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = logoutUser;