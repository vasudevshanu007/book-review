
import React, { useEffect, useState } from 'react';
import API from '../api/api';
import BookCard from '../components/BookCard';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    API.get('/books').then(res => setBooks(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2>Books</h2>
      <div className="grid grid-cols-3 gap-4">
        {books.map(book => <BookCard key={book._id} book={book} />)}
      </div>
    </div>
  );
};

export default Home;
