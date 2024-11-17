import React, { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return alert('Please fill in all fields.');
    addRecipe({ id: Date.now(), title, description }); // Date.now() generates unique ID
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description"
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />
      </div>
      <button type="submit" style={{ padding: '0.5rem 1rem' }}>
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
