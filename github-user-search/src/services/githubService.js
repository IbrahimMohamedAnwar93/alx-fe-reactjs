import axios from "axios";

// Create an axios instance
const api = axios.create({
  baseURL: "https://api.github.com",
});

// Fetch user data based on username
export const fetchUserData = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data; // Return the user data if successful
  } catch (error) {
    throw new Error("User not found"); // Throw an error if user not found
  }
};
