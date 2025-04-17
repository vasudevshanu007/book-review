// controllers/reviewController.js
const Review = require('../models/Review');
const Book = require('../models/Book');

const getReviews = async (req, res) => {
  const { bookId } = req.query;

  if (!bookId) {
    return res.status(400).json({ message: 'bookId query param is required' });
  }

  const reviews = await Review.find({ book: bookId }).populate('user', 'name');
  res.json(reviews);
};

const postReview = async (req, res) => {
  const { book, rating, comment } = req.body;

  if (!book || !rating) {
    return res.status(400).json({ message: 'Book and rating are required' });
  }

  const review = new Review({
    book,
    user: req.user._id,
    rating,
    comment,
  });

  await review.save();

  // Update average rating
  const reviews = await Review.find({ book });
  const avgRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  await Book.findByIdAndUpdate(book, { averageRating: avgRating });

  res.status(201).json(review);
};

module.exports = { getReviews, postReview };
