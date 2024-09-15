import React, { useState } from "react";

const AddRecipeForm = () => {
  // State to manage form inputs
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparationSteps, setPreparationSteps] = useState("");
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const validationErrors = {};
    if (!title) validationErrors.title = "Recipe title is required";
    if (!ingredients)
      validationErrors.ingredients = "Please provide ingredients";
    if (!preparationSteps)
      validationErrors.preparationSteps = "Please provide preparation steps";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", { title, ingredients, preparationSteps });
      // Reset form fields
      setTitle("");
      setIngredients("");
      setPreparationSteps("");
      setErrors({});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Recipe Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
            errors.title ? "border-red-500" : ""
          }`}
          placeholder="Enter recipe title"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
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
          name="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
            errors.ingredients ? "border-red-500" : ""
          }`}
          placeholder="Enter ingredients, separated by commas"
        ></textarea>
        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}
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
          name="preparationSteps"
          value={preparationSteps}
          onChange={(e) => setPreparationSteps(e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
            errors.preparationSteps ? "border-red-500" : ""
          }`}
          placeholder="Enter preparation steps"
        ></textarea>
        {errors.preparationSteps && (
          <p className="text-red-500 text-sm">{errors.preparationSteps}</p>
        )}
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
