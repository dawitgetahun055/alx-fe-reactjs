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

  const fetchUserData = async () => {
    setLoading(true);
    setError(null);
    try {
      const users = await searchUsers(searchParams);
      setResults(users);
      if (users.length === 0) {
        setError("Looks like we can't find any users.");
      }
    } catch (error) {
      console.error("Error during search:", error);
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData();
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={searchParams.username}
          onChange={(e) =>
            setSearchParams({ ...searchParams, username: e.target.value })
          }
          className="border p-2 w-full rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={searchParams.location}
          onChange={(e) =>
            setSearchParams({ ...searchParams, location: e.target.value })
          }
          className="border p-2 w-full rounded-md"
        />
        <input
          type="number"
          placeholder="Minimum Repos"
          value={searchParams.minRepos}
          onChange={(e) =>
            setSearchParams({ ...searchParams, minRepos: e.target.value })
          }
          className="border p-2 w-full rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="mt-4 space-y-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="border p-4 rounded-md flex items-center space-x-4"
          >
            <img
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-bold">{user.login}</h3>
              <p>{user.location || "Location not available"}</p>
              <p>Repositories: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
