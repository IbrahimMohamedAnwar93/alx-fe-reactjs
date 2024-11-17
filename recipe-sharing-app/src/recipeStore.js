import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // Action to add a recipe
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe], // Removed `Date.now()` here, since ID comes with the recipe
    })),

  // Action to delete a recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Action to update a recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
}));
