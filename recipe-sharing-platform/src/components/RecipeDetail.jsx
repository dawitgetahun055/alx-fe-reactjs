import { useEffect, useState } from "react";
import recipeData from "../data.json";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by ID in the mock data
    const selectedRecipe = recipeData.find(
      (recipe) => recipe.id === parseInt(id)
    );
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p>Loading recipe...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover mb-4"
      />
      <p className="text-gray-700">{recipe.summary}</p>
      <h2 className="text-2xl font-bold mt-6">Ingredients</h2>
      <ul className="list-disc pl-6">
        {recipe.ingredients.map((ingredient, index) => {
          <li key={index}>{ingredient}</li>;
        })}
      </ul>

      <h2 className="text-2xl font-bold mt-6">Instructions</h2>
      <ol className="list-decimal pl-6">
        {recipe.instructions.map((instruction, index) => {
          <li key={index} className="mt-2">
            {instruction}
          </li>;
        })}
      </ol>

      <a
        href="/"
        className="inline-block mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Back to Home
      </a>
    </div>
  );
};

export default RecipeDetail;
