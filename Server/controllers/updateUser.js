// Webstack-Portfolio-Project/Server/controllers/updateUser.js
const User = require('../model/user');

const updateUser = async (req, res) => {
  try {
    const { email } = req.params;
    const { firstname, lastname, password, phone } = req.body;

    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.firstname = firstname || user.firstname;
    user.lastname = lastname || user.lastname;
    user.password = password || user.password;
    user.phone = phone || user.phone;

    await user.save();

    res.status(200).json({
      status: 'success',
      data: { user },
      message: 'User updated successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = updateUser;
