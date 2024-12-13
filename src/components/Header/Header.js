import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                {/*centres the logo and text buttons*/}
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img
                        src="/images/recipeVaultLogo.jpg"
                        alt="Recipe Vault Logo"
                        className="header-logo"
                    />
                    <span className="ml-2">Recipe Vault</span>
                </Link>
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
                    {/*NavBar links for top of page*/}
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link text-white" to="/">Home</Link>
                        <Link className="nav-item nav-link text-white" to="/favourites">Favourites</Link>
                        <Link className="nav-item nav-link text-white" to="/recipes">Recipes</Link>
                        <Link className="nav-item nav-link text-white" to="/create-recipe">Create Recipe</Link>
                        <div className="navbar-nav ml-auto">
                        <Link className="nav-item nav-link text-white" to="/settings">Settings</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
