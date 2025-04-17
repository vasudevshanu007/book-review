const express = require('express');
const router = express.Router();
const { getBooks, getBookById, createBook } = require('../controllers/bookController');
const { protect, admin } = require('../middleware/authMiddleware');
const { body, validationResult } = require('express-validator');
const upload = require('../middleware/upload');

router.get('/', getBooks);
router.get('/:id', getBookById);

router.post(
  '/',
  protect,
  admin,
  upload.single('image'), // Accept file upload
  [
    body('title', 'Title is required').notEmpty(),
    body('author', 'Author is required').notEmpty(),
    body('publishedYear', 'Must be a valid year').isInt({ min: 1000, max: 9999 }),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
  createBook
);

module.exports = router;
