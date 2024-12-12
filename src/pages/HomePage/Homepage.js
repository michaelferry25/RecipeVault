import React from "react";
import "./HomePage.css"; // Add styles for this page
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Recipe Vault</h1>
          <p>Discover, save, and share your favorite recipes all in one place!</p>
          <Link to="/recipes" className="btn btn-primary">
            Explore Recipes
          </Link>
        </div>
      </header>

      {/* Search Bar */}
      <div className="search-bar container my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for recipes..."
        />
      </div>

      {/*Create Recipe*/}
      <div className="container my-5">
      <Link to="/create-recipe" className="btn btn-primary">
        Add a Recipe
      </Link>
    </div>

      {/* Featured Recipes */}
      <section className="featured-recipes container">
        <h2>Featured Recipes</h2>
        <div className="recipe-grid">
          <div className="recipe-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Recipe"
              className="recipe-image"
            />
            <h3>Recipe Title 1</h3>
            <p>Quick description of the recipe.</p>
            <Link to="/recipe-details/1" className="btn btn-outline-primary">
              View Recipe
            </Link>
          </div>
          <div className="recipe-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Recipe"
              className="recipe-image"
            />
            <h3>Recipe Title 2</h3>
            <p>Quick description of the recipe.</p>
            <Link to="/recipe-details/2" className="btn btn-outline-primary">
              View Recipe
            </Link>
          </div>
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
