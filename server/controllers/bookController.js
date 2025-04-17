// controllers/bookController.js
const Book = require('../models/Book');

const getBooks = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  const books = await Book.find().skip(skip).limit(limit);
  res.json(books);
};

const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found this Id' });
  }
  if (book) res.json(book);
  else res.status(404).json({ message: 'Book not found' });
};


const createBook = async (req, res) => {
  const { title, author, genre, publishedYear } = req.body;
  const image = req.file?.filename;

  const book = new Book({ title, author, genre, publishedYear, image });
  await book.save();
  res.status(201).json({message: "Book created",book});
};


module.exports = { getBooks, getBookById, createBook };
