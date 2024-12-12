import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function RecipeDetails() {
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const [message, setMessage] = useState('');

    useEffect(() => {
        //Gets recipe details wjen it loads the component
        const fetchRecipeDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/recipes/${id}`);
                setRecipe(response.data);//stores the recipe
                setError(null); //clear any mistakes if its gets it successfully
            } catch (err) {
                setError("Failed to fetch recipe details");//Handles fetch errors
            }
        };

        fetchRecipeDetails();//Calling the function to fetch
    }, [id]);//Dependancy array runs when id chances

    const addToFavorites = async () => {
        //Function to change favourite or not
        try {
            const response = await axios.put(`http://localhost:4000/api/recipes/favorite/${id}`);
            if (response.status === 200) {
                //successful msg
                setMessage("Recipe favorite status updated!");
            } else {
                //failure msg
                setMessage("Failed to update favorite status.");
            }
        } catch (err) {
            //Handles the api failure if happens
            setMessage("Failed to update favorite status.");
        }
    };

    if (error) {
        return <div className="text-danger">{error}</div>;//Displays error msg
    }

    if (!recipe) {
        return <div>Loading...</div>;//Loading msg
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
                Toggle Favorite
            </button>
            {message && <p className="mt-3">{message}</p>}
        </div>
    );
}
