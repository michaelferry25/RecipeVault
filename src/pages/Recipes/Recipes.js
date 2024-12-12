import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

    // Fetch all recipes from the API when the component mounts
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/recipes");
                setRecipes(response.data);
            } catch (err) {
                setError("Failed to fetch recipes");
                console.error(err);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div>
            <h1>Recipes</h1>
            {error && <p>{error}</p>}
            <div className="recipe-list">
                {recipes.length === 0 ? (
                    <p>No recipes found</p>
                ) : (
                    recipes.map((recipe) => (
                        <div key={recipe._id} className="recipe-card">
                            <h2>{recipe.title}</h2>
                            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                            <p><strong>Prep Time:</strong> {recipe.prepTime} minutes</p>
                            <p><strong>Ingredients:</strong></p>
                            <ul>
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                            <p><strong>Instructions:</strong> {recipe.instructions}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
