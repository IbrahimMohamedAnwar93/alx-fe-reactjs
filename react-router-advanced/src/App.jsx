import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // Your home page component
import Login from "./components/Login"; // Your login page component
import Profile from "./components/Profile"; // Your profile page component
import BlogPost from "./components/BlogPost"; // Import the BlogPost component
import NotFound from "./components/NotFound"; // A 404 page for invalid routes
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        {/* Protected route for the profile */}
        <Route
          path="profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
