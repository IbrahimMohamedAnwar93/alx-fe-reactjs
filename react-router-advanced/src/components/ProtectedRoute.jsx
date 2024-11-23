import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "./useAuth"; // Import the useAuth hook

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Use the hook to get authentication status

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
