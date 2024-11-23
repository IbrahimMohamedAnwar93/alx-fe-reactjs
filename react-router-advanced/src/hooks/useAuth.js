import { useState, useEffect } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate checking user authentication status (e.g., from localStorage or an API)
    const userAuth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(userAuth === "true"); // Check if the user is authenticated
  }, []);

  return { isAuthenticated };
};

export default useAuth;
