import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api/api';
import ReviewCard from '../components/ReviewCard';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API.get(`/books/${id}`).then(res => setBook(res.data));
    API.get(`/reviews?bookId=${id}`).then(res => setReviews(res.data));
  }, [id]);

  return (
    <div className="p-4">
      <h2>{book.title}</h2>
      <img src={`http://localhost:5000/uploads/${book.image}`} alt={book.title} width="200" />
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Rating:</strong> {book.averageRating}</p>
      <hr />
      <h3>Reviews</h3>
      {reviews.map(r => <ReviewCard key={r._id} review={r} />)}
    </div>
  );
};

export default BookDetails;
