import logo from './logo.svg';
import './App.css';
import {browserRouter as Router,Route, Routes} from "react-router-dom"
import Homepage from './pages/HomePage/Homepage';
import Recipes from './pages/Recipes/Recipes';
import RecipeDetails from './pages/Recipe Details/RecipeDetails';
import FavouriteRecipe from './pages/Favourite Recipes/FavouriteRecipes';
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe";
import SearchPage from "./pages/search/SearchPage";

function App() {
  return (
    <Routes>
      <Route path= "/" element={<Homepage />}></Route>
      <Route path= "/favourites" element={<FavouriteRecipe />}></Route>
      <Route path= "/recipes" element={<Recipes />}></Route>
        <Route path= "/recipe/:id" element={<RecipeDetails />}></Route>
        <Route path= "/search/:query" element={<SearchPage />}></Route>
      <Route path="/create-recipe" element={<CreateRecipe />} />
    </Routes>
  );
}

export default App;