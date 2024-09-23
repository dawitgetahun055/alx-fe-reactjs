import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUser(null); // Reset user state on new search

    try {
      const response = await handleSearch(inputValue);
      if (!response) {
        setError("Looks like we cant find the user");
      } else {
        setUser(response);
      }
    } catch (err) {
      setError("An error occurred while fetching the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search GitHub users..."
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} />
          <p>{user.login}</p>
        </div>
      )}
    </div>
  );
};

// Example of a fetchUserData function
const fetchUserData = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    return null; // Return null if user not found
  }
  return response.json(); // Return the user data
};

// In your main component or wherever you use SearchBar
const App = () => {
  const handleSearch = async (username) => {
    return await fetchUserData(username);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar handleSearch={handleSearch} />
    </div>
  );
};

export default App;
