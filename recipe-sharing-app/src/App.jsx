import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';  

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing Application</h1>
        <AddRecipeForm />
        <RecipeList />
        <Routes>  
          <Route path="/" element={<RecipeList />} />  
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
