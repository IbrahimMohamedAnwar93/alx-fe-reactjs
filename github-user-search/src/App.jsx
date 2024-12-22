import React, { useState } from "react";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";
import "./App.css";

function App() {
  const [user, setUser] = useState(null); // Store user data
  const [loading, setLoading] = useState(false); // Handle loading state
  const [error, setError] = useState(""); // Handle error state

  const handleSearch = async (username) => {
    setLoading(true);
    setError(""); // Reset any previous errors
    setUser(null); // Reset user data

    try {
      const data = await fetchUserData(username); // Fetch user data from GitHub API
      setUser(data); // Set the user data on success
    } catch (err) {
      setError("Looks like we can’t find the user"); // Set error if user not found
    } finally {
      setLoading(false); // Stop loading after the API call
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />{" "}
      {/* Pass the search handler to Search component */}
      {loading && <p>Loading...</p>}{" "}
      {/* Show loading message while API call is in progress */}
      {error && <p>{error}</p>}{" "}
      {/* Show error message if something goes wrong */}
      {/* Display user data if the API call is successful */}
      {user && !loading && !error && (
        <div>
          <h2>{user.name || user.login}</h2>{" "}
          {/* Display name or login if name is missing */}
          <p>{user.bio || "No bio available"}</p>{" "}
          {/* Display bio or fallback message */}
          <img
            src={user.avatar_url || "https://via.placeholder.com/100"} // Fallback to a placeholder if avatar is missing
            alt={user.name || user.login}
            width="100"
          />
          <br />
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
