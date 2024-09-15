import { useState } from "react";
import recipesData from "../data.json";
import { useEffect } from "react";

const Homepage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => {
          <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="mt-2 text-gray-600">{recipe.summary}</p>
              <a
                href={`/recipe/${recipe.id}`}
                className="block mt-4 text-blue-500 hover:underline"
              >
                View Recipe
              </a>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Homepage;
