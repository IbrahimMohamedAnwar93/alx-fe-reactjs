import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const validate = () => {
    let valid = true;
    const errors = {};

    if (!title) {
      errors.title = "Title is required.";
      valid = false;
    }

    if (!ingredients) {
      errors.ingredients = "Ingredients are required.";
      valid = false;
    } else {
      const ingredientList = ingredients.split(",").map((item) => item.trim());
      if (ingredientList.length < 2) {
        errors.ingredients = "Please list at least two ingredients.";
        valid = false;
      }
    }

    if (!steps) {
      errors.steps = "Preparation steps are required.";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (!validate()) return;

    const ingredientList = ingredients.split(",").map((item) => item.trim());

    const newRecipe = {
      title,
      ingredients: ingredientList,
      steps,
    };

    console.log("New Recipe Submitted:", newRecipe);

    // Clear the form fields
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h1>
      <form
        className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter the recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="ingredients"
          >
            Ingredients (separated by commas)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter ingredients separated by commas"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="steps"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full border ${errors.steps ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter preparation steps"
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
