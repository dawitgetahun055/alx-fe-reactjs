// src/App.jsx
import ProtectedRoute from "./components/ProtectedRoute";
import { Route, Router, Link, Routes, Home } from "react-router-dom";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";

function App() {
  const isAuthenticated = false; // This should be dynamic based on real authentication logic

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/blog/:postId" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
