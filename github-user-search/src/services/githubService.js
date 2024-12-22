import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q';

export const fetchUserData = async ({ username, location, minRepos }) => {
  const queryParts = [];
  if (username) queryParts.push(`user:${username}`);
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>=${minRepos}`);
  const query = queryParts.join('+');
  try {
    const response = await axios.get(`${BASE_URL}?q=${query}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching search results');
  }
};
