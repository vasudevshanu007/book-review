// import { Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Header = () => {
//   const { user, logout } = useAuth();

//   return (
//     <header className="bg-gray-800 text-white p-4 flex justify-between">
//       <Link to="/" className="font-bold">Book Review</Link>
//       <nav>
//         {user ? (
//           <>
//             <Link to="/profile" className="mr-4">Profile</Link>
//             {user.isAdmin && <Link to="/admin" className="mr-4">Admin</Link>}
//             <button onClick={logout}>Logout</button>
//           </>
//         ) : (
//           <>
//             <Link to="/login" className="mr-4">Login</Link>
//             <Link to="/register">Register</Link>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;


// src/components/Header.js
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">BookReview</Link>
      <nav className="space-x-4">
        {!user && <Link to="/login">Login</Link>}
        {!user && <Link to="/register">Register</Link>}
        {user && <Link to="/profile">Profile</Link>}
        {user?.isAdmin && <Link to="/admin/upload">Upload</Link>}
        {user && <button onClick={logout}>Logout</button>}
      </nav>
    </header>
  );
};

export default Header;
