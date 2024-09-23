import axios from "axios";

const GITHUB_API_BASE_URL = "https://api.github.com/search/users";
const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = `q=${username}`;

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(`${GITHUB_API_BASE_URL}?${query}`, {
      headers: {
        Authorization: `token ${GITHUB_API_KEY}`,
      },
    });

    return response.data.items;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};
