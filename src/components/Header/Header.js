import {Link, Route} from "react-router-dom";
import FavouriteRecipe from "../../pages/Favourite Recipes/FavouriteRecipes";
import Recipes from "../../pages/Recipes/Recipes";
import RecipeDetails from "../../pages/Recipe Details/RecipeDetails";
import CreateRecipe from "../../pages/CreateRecipe/CreateRecipe";

const Header = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link text-white" to="/">Home</Link>
                        <Link className="nav-item nav-link text-white" to="/favourites">Favourites</Link>
                        <Link className="nav-item nav-link text-white" to="/recipes">Recipes</Link>
                        <Link className="nav-item nav-link text-white" to="/create-recipe">Create Recipe</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;