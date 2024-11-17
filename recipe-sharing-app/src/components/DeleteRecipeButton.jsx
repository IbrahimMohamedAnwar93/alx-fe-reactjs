import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useRecipeStore } from './recipeStore'; 

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // Navigate to the recipe list page after deleting
  };

  return (
    <button onClick={handleDelete}>Delete Recipe</button>
  );
};

export default DeleteRecipeButton;
