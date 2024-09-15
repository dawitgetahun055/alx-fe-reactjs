import React, { useState } from "react";

const AddRecipeForm = () => {
  // Define state to hold form data and validation status
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparationSteps, setPreparationSteps] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation: Check if all fields are filled and ingredients have at least two items
    if (!title || !ingredients || !preparationSteps) {
      setError("All fields are required.");
      return;
    }

    const ingredientList = ingredients.split(",").map((item) => item.trim());
    if (ingredientList.length < 2) {
      setError("Please include at least two ingredients.");
      return;
    }

    // Clear the error message and process form data
    setError("");

    const recipeData = {
      title,
      ingredients: ingredientList,
      preparationSteps,
    };

    console.log("Recipe submitted:", recipeData);
    // Reset form fields
    setTitle("");
    setIngredients("");
    setPreparationSteps("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Recipe Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter recipe title"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="ingredients"
        >
          Ingredients (comma-separated)
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter ingredients, separated by commas"
        ></textarea>
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="preparationSteps"
        >
          Preparation Steps
        </label>
        <textarea
          id="preparationSteps"
          value={preparationSteps}
          onChange={(e) => setPreparationSteps(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter preparation steps"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
