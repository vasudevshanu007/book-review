// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import BookDetails from './pages/BookDetails';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Profile from './pages/Profile';
// import AdminUpload from './pages/AdminUpload';
// import Header from './components/Header';
// import ProtectedRoute from './components/ProtectedRoute';

// function App() {
//   return (
//     <div>
//       <Header />
//       <main className="p-4">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/books/:id" element={<BookDetails />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
//           <Route path="/admin" element={<ProtectedRoute><AdminUpload /></ProtectedRoute>} />
//         </Routes>
//       </main>
//     </div>
//   );
// }

// export default App;



// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import AdminUpload from './pages/AdminUpload';
import BookDetails from './pages/BookDetails';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/upload"
            element={
              <ProtectedRoute adminOnly={true}>
                <AdminUpload />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer /> 
    </Router>
  );
}

export default App;
