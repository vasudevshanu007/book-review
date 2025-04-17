import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const Profile = () => {
  const { user, setUser } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`${process.env.REACT_APP_API}/api/users/${user._id}`, { name, email });
      setUser(res.data);
      localStorage.setItem('user', JSON.stringify(res.data));
      alert('Profile updated!');
    } catch (err) {
      alert('Update failed');
    }
  };

  return (
    <form onSubmit={handleUpdate} className="max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Edit Profile</h2>
      <input className="w-full p-2 border" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <input className="w-full p-2 border" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <button className="bg-yellow-500 text-white px-4 py-2" type="submit">Update</button>
    </form>
  );
};

export default Profile;