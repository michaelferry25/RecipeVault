import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

export default function FavouriteRecipe() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch favorite recipes
  useEffect(() => {
    const fetchFavoriteRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/favorites');
        setFavoriteRecipes(response.data);
      } catch (err) {
        setError("Failed to fetch favorite recipes");
      }
    };

    fetchFavoriteRecipes();
  }, []);

  // Function to unfavorite a recipe
  const handleUnfavorite = async (id) => {
    try {
      await axios.post(`http://localhost:4000/api/recipes/${id}/favorite`);
      
      {/*error handling for not being able to change the error message*/}
      setFavoriteRecipes(prevState => prevState.filter(recipe => recipe._id !== id));
    } catch (err) {
      setError("Failed to update favorite status");
    }
  };

  if (error) {
    return <div>{error}</div>;
  }


  return (
      <div className="container">
        {/*Favourite recipes*/}
        <h1 className="text-center mb-4">Favorite Recipes</h1>
        {favoriteRecipes.length > 0 ? (
            <div className="row">
              {favoriteRecipes.map((recipe) => (
                  <div className="col-md-4 mb-4" key={recipe._id}>
                    <div className="card h-100">
                      {/*image urls or a placeholder image for all*/}
                      <img
                          src={
                            recipe.image && recipe.image.startsWith("http")
                                ? recipe.image
                                : "https://via.placeholder.com/150"
                          }
                          alt={recipe.title}
                          className="card-img-top"
                      />
                      {/*card handling*/}
                      <div className="card-body">
                        <h3 className="card-title">{recipe.title}</h3>
                        <p className="card-text">{recipe.ingredients.join(", ")}</p>
                        {/*unfavouriting button*/}
                        <button
                            onClick={() => handleUnfavorite(recipe._id)}
                            className="btn btn-danger"
                        >
                          Unfavorite
                        </button>
                        <Link to={`/recipe/${recipe._id}`}>
                        {/*button to view the recipe form favourites*/}
                          <button
                              className="text-white btn btn-info"
                          >
                            View Recipe
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
        ) : (
            <p className="text-center">No favorite recipes found.</p>
        )}
      </div>
  );

}
