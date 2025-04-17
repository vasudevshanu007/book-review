// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token = req.headers.authorization?.split(' ')[1];

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch {
      res.status(401).json({ message: 'Unauthorized' });
    }
  } else {
    res.status(401).json({ message: 'No token' });
  }
};

const admin = (req, res, next) => {
  if (req.user?.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: 'Admin access required' });
  }
};

module.exports = { protect, admin };
