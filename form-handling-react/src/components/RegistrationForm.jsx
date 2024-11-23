import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  // State hooks to manage input values
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Validation state
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!username || !email || !password) {
      setErrors({
        username: !username ? "Username is required" : "",
        email: !email ? "Email is required" : "",
        password: !password ? "Password is required" : "",
      });
    } else {
      // Proceed with form submission (e.g., API call)
      console.log("Form submitted:", { username, email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username} // Controlled value
          onChange={(e) => setUsername(e.target.value)} // onChange handler
        />
        {errors.username && <p>{errors.username}</p>}{" "}
        {/* Display error message */}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email} // Controlled value
          onChange={(e) => setEmail(e.target.value)} // onChange handler
        />
        {errors.email && <p>{errors.email}</p>} {/* Display error message */}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password} // Controlled value
          onChange={(e) => setPassword(e.target.value)} // onChange handler
        />
        {errors.password && <p>{errors.password}</p>}{" "}
        {/* Display error message */}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
