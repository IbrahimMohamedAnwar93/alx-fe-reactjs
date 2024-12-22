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

      {user && !loading && !error && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <img src={user.avatar_url} alt={user.name} width="100" />
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
