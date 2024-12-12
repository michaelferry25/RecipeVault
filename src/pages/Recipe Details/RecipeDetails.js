import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function RecipeDetails() {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/recipes/${id}`);
        setRecipe(response.data);
      } catch (err) {
        setError("Failed to fetch recipe details");
      }
    };

    fetchRecipeDetails();
  }, [id]);

  const addToFavorites = async () => {
    try {
      await axios.post(`http://localhost:4000/api/recipes/${id}/favorite`);
      setMessage("Recipe added to favorites!");
    } catch (err) {
      setMessage("Failed to add to favorites.");
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <h3>Cuisine: {recipe.cuisine}</h3>
      <p><strong>Prep Time:</strong> {recipe.prepTime} minutes</p>
      <h4>Ingredients:</h4>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h4>Instructions:</h4>
      <p>{recipe.instructions}</p>
      <button onClick={addToFavorites} className="btn btn-success">
        Add to Favorites
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}
