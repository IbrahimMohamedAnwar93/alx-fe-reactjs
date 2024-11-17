import React, { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ ...recipe, title, description });
    alert('Recipe updated successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
