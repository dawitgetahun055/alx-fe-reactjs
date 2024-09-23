import { useState } from "react";
import { searchUsers } from "../services/githubAPI"; // Ensure this path is correct

const Search = () => {
  const [searchParams, setSearchParams] = useState({
    username: "",
    location: "",
    minRepos: "",
  });
  const [results, setResults] = useState([]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission (page reload)

    try {
      const users = await searchUsers(searchParams);
      setResults(users);
    } catch (error) {
      console.error("Error during search:", error);
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

      {/* Display search results */}
      <div>
        {results.map((user) => (
          <div key={user.id}>
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
