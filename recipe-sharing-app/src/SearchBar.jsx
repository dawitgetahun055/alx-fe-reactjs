import useRecipeStore from "./components/recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filteredRecipes();
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
