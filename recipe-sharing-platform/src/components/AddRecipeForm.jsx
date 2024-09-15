import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddRecipeForm = () => {
  // Formik logic for handling the form
  const formik = useFormik({
    initialValues: {
      title: "",
      ingredients: "",
      preparationSteps: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Recipe title is required"),
      ingredients: Yup.string().required("Please provide ingredients"),
      preparationSteps: Yup.string().required(
        "Please provide preparation steps"
      ),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log("Form submitted:", values);
      // Simulate form submission
      setSubmitting(true);
      setTimeout(() => {
        resetForm();
        setSubmitting(false);
      }, 500);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
            formik.touched.title && formik.errors.title ? "border-red-500" : ""
          }`}
          placeholder="Enter recipe title"
        />
        {formik.touched.title && formik.errors.title ? (
          <p className="text-red-500 text-sm">{formik.errors.title}</p>
        ) : null}
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.ingredients}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
            formik.touched.ingredients && formik.errors.ingredients
              ? "border-red-500"
              : ""
          }`}
          placeholder="Enter ingredients, separated by commas"
        ></textarea>
        {formik.touched.ingredients && formik.errors.ingredients ? (
          <p className="text-red-500 text-sm">{formik.errors.ingredients}</p>
        ) : null}
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.preparationSteps}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
            formik.touched.preparationSteps && formik.errors.preparationSteps
              ? "border-red-500"
              : ""
          }`}
          placeholder="Enter preparation steps"
        ></textarea>
        {formik.touched.preparationSteps && formik.errors.preparationSteps ? (
          <p className="text-red-500 text-sm">
            {formik.errors.preparationSteps}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        disabled={formik.isSubmitting}
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
