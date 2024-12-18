import React, { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import "./HomePage.css";

const HomePage = () => {
  const [featuredRecipes, setFeaturedRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Search input state
  const [filteredRecipes, setFilteredRecipes] = useState([]); // Filtered recipes for search

  const navigate = useNavigate();


  useEffect(() => {
    //Fetch Featured Recipes
    const fetchFeaturedRecipes = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/recipes");
            const allRecipes = response.data;

            //randomize the order
            const shuffledRecipes = [...allRecipes].sort(() => 0.5 - Math.random());

            //takes the first 3 recipes after shuffling
            const randomRecipes = shuffledRecipes.slice(0, 3);

            setFeaturedRecipes(randomRecipes); // Sets the 3 random recipes as featured
        } catch (error) {
            console.error("Error fetching featured recipes:", error);
        }
    };

    // Fetch Favorite Recipes
    const fetchFavoriteRecipes = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/favorites"); // Endpoint for favorite recipes
            setFavoriteRecipes(response.data);
        } catch (error) {
            console.error("Error fetching favorite recipes:", error);
        }
    };

    fetchFeaturedRecipes();
    fetchFavoriteRecipes();
}, []);

  //Search handler for the recipes
  const handleSearch = () => {
    const searchValue = searchTerm.toLowerCase();
    if (searchValue.trim()) {
      navigate(`/search/${searchValue}`); // Navigates to search results page
    }
  };

  return (
      <div className="homepage">
        {/*Calls the hero section i made in the css file*/}
        <header className="hero-section">
          <div className="hero-overlay">
            {/*Greeting text*/}
            <h1>Welcome to Recipe Vault</h1>
            <p>Discover, save, and share your favorite recipes all in one place!</p>
            <Link to="/recipes">
              <button className="btn btn-primary">Explore Recipes</button>
            </Link>
          </div>
        </header>

         {/*Saerch bar container with placeholder*/}
        <div className="search-bar-container d-flex justify-content-center align-items-center mx-auto w-50 mt-5">
          <input
              type="text"
              className="form-control"
              placeholder="Search for a recipe..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Capture input changes
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>

         {/*Add recipe button with link to page*/}
        <div className="container my-5">
          <Link to="/create-recipe" className="btn btn-primary">
            Add a Recipe
          </Link>
        </div>

        {/*Loops through recipes array and creates a card for each recipe */}
        <section className="featured-recipes container">
          <h2 className="text-center mb-4">Featured Recipes</h2>
          <div className="row">
            {featuredRecipes.map((recipe) => (
              <div className="col-md-4 mb-4" key={recipe._id}>
                <div className="card h-100">
                  <img
                    src={
                      recipe.image && recipe.image.startsWith("http")
                        ? recipe.image
                        : "https://via.placeholder.com/150"
                    }
                    alt={recipe.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h3 className="card-title">{recipe.title}</h3>
                    <p className="card-text">
                      {recipe.instructions.substring(0, 100)}...
                    </p>
                    <Link to={`/recipe/${recipe._id}`} className="btn btn-outline-primary">
                      View Recipe
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className="favorites-recipes container">
  <h2 className="text-center mb-4">Favorite Recipes</h2>
  <div className="row">
    {/* Display the first 3 favorite recipes */}
    {favoriteRecipes.slice(0, 3).map((recipe) => (
      <div className="col-md-4 mb-4" key={recipe._id}>
        <div className="card h-100">
          <img
            src={
              recipe.image && recipe.image.startsWith("http")
                ? recipe.image
                : "https://via.placeholder.com/150"
            }
            alt={recipe.title}
            className="card-img-top"
          />
          <div className="card-body">
            <h3 className="card-title">{recipe.title}</h3>
            <p className="card-text">
              {recipe.instructions.substring(0, 100)}...
            </p>
             {/*Link to view recipe*/}
            <Link to={`/recipe/${recipe._id}`} className="btn btn-outline-primary">
              View Recipe
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>



      </div>
  );
};

export default HomePage;
