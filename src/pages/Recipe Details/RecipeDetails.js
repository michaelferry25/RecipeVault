import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function RecipeDetails() {
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch recipe details when component loads
        const fetchRecipeDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/recipes/${id}`);
                setRecipe(response.data); // Store the recipe data
                setError(null); // Clear errors on success
            } catch (err) {
                setError("Failed to fetch recipe details."); // Handle fetch errors
            }
        };

        fetchRecipeDetails(); // Call fetch function
    }, [id]); // Dependency array runs when id changes

    const addToFavorites = async () => {
        // Function to toggle favorite status
        try {
            const response = await axios.put(`http://localhost:4000/api/recipes/favorite/${id}`);
            if (response.status === 200) {
                setMessage("Recipe favorite status updated!"); // Success message
            } else {
                setMessage("Failed to update favorite status."); // Failure message
            }
        } catch (err) {
            setMessage("Failed to update favorite status."); // API failure handling
        }
    };

    if (error) {
        return <div className="text-danger">{error}</div>; // Display error message
    }

    if (!recipe) {
        return <div>Loading...</div>; // Loading message
    }

    return (
        <div className="recipe-details container">
            <h1>{recipe.title}</h1>
            <h3>Cuisine: {recipe.cuisine}</h3>
            <p>
                <strong>Prep Time:</strong> {recipe.prepTime} minutes
            </p>
            <h4>Ingredients:</h4>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h4>Instructions:</h4>
            <p>{recipe.instructions}</p>
            <button onClick={addToFavorites} className="btn btn-success">
                Toggle Favorite
            </button>
            {message && <p className="mt-3">{message}</p>}
        </div>
    );
}
