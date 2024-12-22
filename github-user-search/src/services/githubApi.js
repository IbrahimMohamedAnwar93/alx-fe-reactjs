import axios from 'axios';

// Base URL for GitHub API
const BASE_URL = 'https://api.github.com';

// Get API key from environment variables
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY || ''; // Default to an empty string if not defined

// Create an instance of Axios
const githubApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: API_KEY ? `token ${API_KEY}` : undefined, // Include token only if API_KEY is defined
  },
});

// Function to search users by username
export const searchUsers = async (query) => {
  try {
    const response = await githubApi.get(`/search/users?q=${query}`);
    return response.data; // Returns the search results
  } catch (error) {
    console.error('Error fetching data from GitHub API:', error);
    throw error;
  }
};
