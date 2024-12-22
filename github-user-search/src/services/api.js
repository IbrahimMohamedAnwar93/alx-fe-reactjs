import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_BASE_URL,
});

export const getUser = async (username) => {
  const response = await api.get(`/users/${username}`);
  return response.data;
};
