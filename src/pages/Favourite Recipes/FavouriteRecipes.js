import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      
      // Update the local state by removing the unfavorited recipe
      setFavoriteRecipes(prevState => prevState.filter(recipe => recipe._id !== id));
    } catch (err) {
      setError("Failed to update favorite status");
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Favorite Recipes</h1>
      {favoriteRecipes.length > 0 ? (
        <ul>
          {favoriteRecipes.map((recipe) => (
            <li key={recipe._id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.ingredients.join(', ')}</p>
              <button onClick={() => handleUnfavorite(recipe._id)}>Unfavorite</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite recipes found.</p>
      )}
    </div>
  );
}
