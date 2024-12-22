import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState(""); // Captures the username input

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      onSearch(username); // Pass the username to the parent component (App.jsx)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update state when the user types
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
