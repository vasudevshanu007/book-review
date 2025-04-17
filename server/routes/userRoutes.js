// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getUser, updateUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.get('/:id', protect, getUser);
router.put('/:id', protect, updateUser);

module.exports = router;
