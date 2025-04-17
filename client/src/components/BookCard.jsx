import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => (
  <div className="border rounded p-3 shadow">
    <img src={`http://localhost:5000/uploads/${book.image}`} alt={book.title} width="150" />
    <h4>{book.title}</h4>
    <p>{book.author}</p>
    <Link to={`/books/${book._id}`} className="text-blue-500">View Details</Link>
  </div>
);

export default BookCard;
