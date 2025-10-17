// src/api/index.ts
import axios from "axios";

const BASE_URL = "https://api.github.com/";

export const searchUsers = async (username: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}search/users?q=${username}&per_page=5`,
    );
    return response.data.items;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};

export const getRepositories = async (username: string) => {
  try {
    const response = await axios.get(`${BASE_URL}users/${username}/repos`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching repositories for ${username}`);
  }
};
