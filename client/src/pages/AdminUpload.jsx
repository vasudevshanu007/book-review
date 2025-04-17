
import { useState } from 'react';
import axios from 'axios';

const AdminUpload = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('image', image);

    try {
      await axios.post(`${process.env.REACT_APP_API}/api/books`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Book uploaded successfully!');
      setTitle('');
      setAuthor('');
      setImage(null);
    } catch (err) {
      alert('Upload failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Upload New Book</h2>
      <input className="w-full p-2 border" type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input className="w-full p-2 border" type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <input className="w-full p-2 border" type="file" onChange={(e) => setImage(e.target.files[0])} required />
      <button className="bg-purple-500 text-white px-4 py-2" type="submit">Upload</button>
    </form>
  );
};

export default AdminUpload;
