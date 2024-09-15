import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import recipeData from '../data.json'; // Assuming the mock data is here

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulating fetching the data from a JSON file
    setRecipes(recipeData);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-lg p-4">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
            <p className="text-gray-700 mb-4">{recipe.summary}</p>
            
            {/* Wrap the button or title in Link for navigation */}
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
