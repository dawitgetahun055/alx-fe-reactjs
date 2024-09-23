import axios from "axios";

// GitHub API base URL for searching users
const GITHUB_API_BASE_URL = "https://api.github.com";
const GITHUB_SEARCH_URL = "https://api.github.com/search/users";

// GitHub Personal Access Token from .env
const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

// Function to fetch user data by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `${GITHUB_API_BASE_URL}/users/${username}`,
      {
        headers: {
          Authorization: `token ${GITHUB_API_KEY}`, // Include the token for authentication
        },
      }
    );
    return response.data; // Return user data
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // Throw error to handle it in the component
  }
};

// Function to search for users with advanced criteria
export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    // Construct the query with advanced search criteria
    let query = `q=${username}`;

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    // Make a GET request to the GitHub Search API
    const response = await axios.get(`${GITHUB_SEARCH_URL}?${query}`, {
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
