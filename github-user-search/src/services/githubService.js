import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export const fetchUserData = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};
