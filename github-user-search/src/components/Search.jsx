import { useState } from "react";
import { searchUsers } from "../services/githubAPI";

const Search = () => {
  const [searchParams, setSearchParams] = useState({
    username: "",
    location: "",
    minRepos: "",
  });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission (page reload)
    setLoading(true); // Set loading state
    setError(null); // Reset error state

    try {
      const users = await searchUsers(searchParams);
      setResults(users);
      if (users.length === 0) {
        setError("Looks like we can't find the user"); // Set error message if no users found
      }
    } catch (error) {
      console.error("Error during search:", error);
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div>
      {/* Search form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={searchParams.username}
          onChange={(e) =>
            setSearchParams({ ...searchParams, username: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={searchParams.location}
          onChange={(e) =>
            setSearchParams({ ...searchParams, location: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Minimum Repos"
          value={searchParams.minRepos}
          onChange={(e) =>
            setSearchParams({ ...searchParams, minRepos: e.target.value })
          }
        />
        <button type="submit">Search</button> {/* Submit button */}
      </form>

      {/* Display loading state */}
      {loading && <p>Loading...</p>}

      {/* Display error message */}
      {error && <p>{error}</p>}

      {/* Check if results array is empty */}
      {results.length === 0 && !loading && !error && (
        <p>Looks like we can't find the user.</p>
      )}

      {/* Display search results */}
      <div>
        {results.map((user) => (
          <div key={user.id}>
            <img
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
              className="w-16 h-16"
            />{" "}
            {/* User avatar */}
            <h3>{user.login}</h3>
            <p>{user.location || "Location not available"}</p>
            <p>Repositories: {user.public_repos}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
