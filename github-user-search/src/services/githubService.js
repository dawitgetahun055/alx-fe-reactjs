import axios from "axios";

// GitHub API base URL
const GITHUB_API_BASE_URL = "https://api.github.com/search/users?q";

// GitHub Personal Access Token from .env
const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

// Function to search for users with advanced criteria
export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    // Construct the query string with advanced search criteria
    let query = `q=${encodeURIComponent(username)}`;

    if (location) {
      query += `+location:${encodeURIComponent(location)}`;
    }

    if (minRepos) {
      query += `+repos:>=${encodeURIComponent(minRepos)}`;
    }

    // Construct the full API URL
    const apiUrl = `${GITHUB_API_BASE_URL}?${query}`;

    // Make a GET request to the GitHub Search API
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `token ${GITHUB_API_KEY}`, // Include the token for authentication
      },
    });

    return response.data.items; // Return the array of matching users
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error; // Throw error to handle it in the component
  }
};
