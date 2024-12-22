import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

// Function to fetch user data from the GitHub API
export const fetchUserData = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
