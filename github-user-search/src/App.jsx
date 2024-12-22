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
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data); // Set user data on successful API call
    } catch (err) {
      setError("Looks like we can’t find the user"); // Show error if the user is not found
    } finally {
      setLoading(false); // Stop loading after the API call is finished
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* Display user data if API call is successful */}
      {user && !loading && !error && (
        <div>
          <h2>{user.name || user.login}</h2>{" "}
          {/* Fallback to login if name is missing */}
          <p>{user.bio || "No bio available"}</p>{" "}
          {/* Show a default message if no bio */}
          <img
            src={user.avatar_url || "https://via.placeholder.com/100"} // Use a placeholder if avatar_url is missing
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
