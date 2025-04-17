// models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  genre: String,
  publishedYear: Number,
  averageRating: { type: Number, default: 0 },
  image: { type: String }, // New field for image filename
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
