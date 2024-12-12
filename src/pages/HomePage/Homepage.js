import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./HomePage.css";

const HomePage = () => {
  const [featuredRecipes, setFeaturedRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Search input state
  const [filteredRecipes, setFilteredRecipes] = useState([]); // Filtered recipes for search

  useEffect(() => {
    // Fetch Featured Recipes
    const fetchFeaturedRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/recipes");
        setFeaturedRecipes(response.data.slice(0, 4)); // Top 4 featured recipes
        setFilteredRecipes(response.data); // Initially show all recipes
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

  // Handle search input change
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    // Filter recipes based on the search term
    const filtered = featuredRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchValue)
    );
    setFilteredRecipes(filtered);
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-overlay">
          <h1>Welcome to Recipe Vault</h1>
          <p>Discover, save, and share your favorite recipes all in one place!</p>
          <Link to="/recipes" className="btn btn-primary">
            Explore Recipes
          </Link>
        </div>
      </header>

      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
      </div>

      {/* Create Recipe Button */}
      <div className="container my-5">
        <Link to="/create-recipe" className="btn btn-primary">
          Add a Recipe
        </Link>
      </div>

      {/* Featured Recipes */}
      <section className="featured-recipes container">
        <h2>Featured Recipes</h2>
        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <div className="recipe-card" key={recipe._id}>
              <img
                src={
                  recipe.image && recipe.image.startsWith("http")
                    ? recipe.image
                    : "https://via.placeholder.com/150"
                }
                alt={recipe.title}
                className="recipe-image"
              />
              <h3>{recipe.title}</h3>
              <p>{recipe.instructions.substring(0, 100)}...</p>
              <Link to={`/recipe/${recipe._id}`} className="btn btn-outline-primary">
                View Recipe
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Favorite Recipes */}
      <section className="favorite-recipes container">
        <h2>Favorite Recipes</h2>
        <div className="recipe-grid">
          {favoriteRecipes.map((recipe) => (
            <div className="recipe-card" key={recipe._id}>
              <img
                src={
                  recipe.image && recipe.image.startsWith("http")
                    ? recipe.image
                    : "https://via.placeholder.com/150"
                }
                alt={recipe.title}
                className="recipe-image"
              />
              <h3>{recipe.title}</h3>
              <p>{recipe.instructions.substring(0, 100)}...</p>
              <Link to={`/recipe/${recipe._id}`} className="btn btn-primary">
                View Recipe
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories container my-5">
        <h2>Recipe Categories</h2>
        <div className="category-list">
          <Link to="/categories/breakfast" className="btn btn-secondary">
            Breakfast
          </Link>
          <Link to="/categories/lunch" className="btn btn-secondary">
            Lunch
          </Link>
          <Link to="/categories/dinner" className="btn btn-secondary">
            Dinner
          </Link>
          <Link to="/categories/desserts" className="btn btn-secondary">
            Desserts
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
