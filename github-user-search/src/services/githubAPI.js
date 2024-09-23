import axios from "axios";

// GitHUb API base URL
const GITHUB_API_BASE_URL = "https://api.github.com";

// GitHub Personal Access Tocken from .env
const REACT_APP_GITHUB_API_KEY = import.meta.env.REACT_APP_GITHUB_API_KEY;

// Function to get user data from GitHub
export const getUserData = async (username) => {
  try {
    // Make a Get request to the GitHub API to fetch user data
    const response = await axios.get(
      `${GITHUB_API_BASE_URL}/users/${username}`,
      {
        headers: {
          Authorization: `token ${REACT_APP_GITHUB_API_KEY}`, // Include the token for authentication
        },
      }
    );
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // Throw error so that it can be caught in the component
  }
};
