/*All imports for app.js*/
import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './pages/HomePage/Homepage';
import Recipes from './pages/Recipes/Recipes';
import RecipeDetails from './pages/Recipe Details/RecipeDetails';
import FavouriteRecipe from './pages/Favourite Recipes/FavouriteRecipes';
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe";
import SearchPage from "./pages/search/SearchPage";
import PrivacyPolicy from "./pages/Policies/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService/TermsOfService";
import Settings from "./pages/Settings/settings";
import Footer from "./components/Footer/Footer";

/*All routes for the website*/
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
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/settings" element={<Settings />} /> 
      </Routes>
      <Footer /> {/* Footer will be rendered on all pages */}
    </>
  );
}

export default App;
