import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],  // Added favorites array
  recommendations: [],  // Added recommendations array
  
  // Existing actions for managing recipes
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (recipeId) => set(state => ({ recipes: state.recipes.filter(recipe => recipe.id !== recipeId) })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  
  // Search and filter functionality
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||  
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(state.searchTerm.toLowerCase()))  
    ),
  })),

  // New actions for favorites and recommendations
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),
  
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  generateRecommendations: () => set(state => {
    // Mocked logic for generating recommendations based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  // Set recipes (can also be used to fetch recipes)
  setRecipes: (newRecipes) => set({ recipes: newRecipes, filteredRecipes: newRecipes })
}));

export default useRecipeStore;
