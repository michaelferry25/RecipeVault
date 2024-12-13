import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './pages/HomePage/Homepage';
import Recipes from './pages/Recipes/Recipes';
import RecipeDetails from './pages/Recipe Details/RecipeDetails';
import FavouriteRecipe from './pages/Favourite Recipes/FavouriteRecipes';
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe";
import SearchPage from "./pages/search/SearchPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favourites" element={<FavouriteRecipe />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/search/:query" element={<SearchPage />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
      </Routes>
      <Footer /> {/* Footer will be rendered on all pages */}
    </>
  );
}

export default App;
