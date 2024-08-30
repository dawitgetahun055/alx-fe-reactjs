import useRecipeStore from "./recipeStore";
import FavBtn from "./FavBtn";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) =>
      state.recipes.find((recipe) => recipe.id === id)
    )
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <FavBtn recipeId={recipe.id} />
          <Link to={`/recipe/${recipe.id}`} style={{ marginLeft: "10px" }}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
