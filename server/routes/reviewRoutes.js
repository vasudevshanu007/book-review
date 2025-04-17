// routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const { getReviews, postReview } = require('../controllers/reviewController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getReviews); // /api/reviews?bookId=xyz
router.post('/', protect, postReview);

module.exports = router;
