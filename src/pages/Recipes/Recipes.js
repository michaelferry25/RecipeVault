import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./recipes.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch recipes from the backend
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/recipes");
        setRecipes(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching recipes:", err);
        setError("Failed to fetch recipes. Please try again later.");
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  // Handle Delete
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this recipe?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:4000/api/recipes/${id}`);
        setRecipes(recipes.filter((recipe) => recipe._id !== id));
        setSuccessMessage("Recipe deleted successfully!");
        setTimeout(() => setSuccessMessage(""), 3000); // Clear success message after 3 seconds
      } catch (err) {
        console.error("Failed to delete recipe:", err);
        setError("Failed to delete recipe. Please try again.");
        setTimeout(() => setError(""), 3000); // Clear error message after 3 seconds
      }
    }
  };

  // Handle loading and error states
  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="container my-5">
      <h1>Recipes</h1>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="col-md-4 mb-4">
            <div className="card recipe-card">
              <img
                src={recipe.image || "https://via.placeholder.com/150"}
                alt={recipe.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">
                  {recipe.instructions.substring(0, 100)}...
                </p>
                <div className="button-container">
                  <Link to={`/recipe/${recipe._id}`} className="btn btn-primary">
                    View Recipe
                  </Link>
                  <Link to={`/edit-recipe/${recipe._id}`} className="btn btn-warning">
                    Edit Recipe
                  </Link>
                  <button
                    onClick={() => handleDelete(recipe._id)}
                    className="btn btn-danger"
                  >
                    Delete Recipe
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
