import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  useEffect(() => {
    useRecipeStore.getState().filterRecipes(); // Initial filtering when component mounts
  }, []);
  
  return (
    <div>
      <SearchBar />
      <ul>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </li>
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </ul>
    </div>
  );
};

export default RecipeList;
