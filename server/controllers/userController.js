// controllers/userController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const getUser = async (req, res) => {
  if (req.user._id.toString() !== req.params.id && !req.user.isAdmin) {
    return res.status(403).json({ message: 'Not authorized' });
  }

  const user = await User.findById(req.params.id).select('-password');
  if (user) res.json(user);
  else res.status(404).json({ message: 'User not found' });
};

const updateUser = async (req, res) => {
  if (req.user._id.toString() !== req.params.id && !req.user.isAdmin) {
    return res.status(403).json({ message: 'Not authorized' });
  }

  const user = await User.findById(req.params.id);
  if (user) {
    user.name = req.body.name || user.name;
    if (req.body.password) {
      user.password = await bcrypt.hash(req.body.password, 10);
    }

    await user.save();
    res.json({ message: 'User updated' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

module.exports = { getUser, updateUser };
