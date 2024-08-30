import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import { useEffect } from "react";

const RecipeList = () => {
  const { recipes, filteredRecipes, searchTerm, filterRecipes } =
    useRecipeStore((state) => ({
      recipes: state.recipes,
      filteredRecipes: state.filteredRecipes,
      searchTerm: state.searchTerm,
      filterRecipes: state.filterRecipes,
    }));

  useEffect(() => {
    if (searchTerm.trim() === "") {
      useRecipeStore.setState({ filteredRecipes: recipes });
    } else {
      filterRecipes();
    }
  }, [searchTerm, filterRecipes, recipes]);

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      ) : (
        <p>No recipes found For what you are looking for.</p>
      )}
    </div>
  );
};

export default RecipeList;
