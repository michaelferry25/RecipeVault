import React, { useState } from "react";
import axios from "axios";

const CreateRecipe = () => {
  // State for form data
  const [formData, setFormData] = useState({
    title: "",
    ingredients: [],
    instructions: "",
    prepTime: "",
    cuisine: "",
    difficulty: "",
    servings: "",
    image: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle ingredients dynamically
  const addIngredient = () => {
    setFormData({ ...formData, ingredients: [...formData.ingredients, ""] });
  };
  // Update ingredients
  const updateIngredient = (index, value) => {
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients[index] = value;
    setFormData({ ...formData, ingredients: updatedIngredients });
  };

  //To remove an ingredient if required
  const removeIngredient = (index) => {
    const updatedIngredients = formData.ingredients.filter((_, i) => i !== index);
    setFormData({ ...formData, ingredients: updatedIngredients });
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/recipes", formData);
      console.log("Recipe created:", response.data);
      alert("Recipe added successfully!");
      // Reset form after submission
      setFormData({
        title: response.data.title,
        ingredients: response.data.ingredients,
        instructions: response.data.instructions,
        prepTime: response.data.prepTime,
        cuisine: response.data.cuisine,
        difficulty: response.data.difficulty,
        servings: response.data.servings,
        image: response.data.image,
      });
    } catch (error) {
      console.error("Error creating recipe:", error);
      alert("Failed to add recipe. Please try again.");
    }
  };

  //create a new recipe form
  return (
    <div className="container my-5">
      <h1>Create a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Recipe Title</label>
          <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
          />
        </div>

        {/*ingredients section*/}
        <div className="mb-3">
          <label className="form-label">Ingredients</label>
          {formData.ingredients.map((ingredient, index) => (
              <div key={index} className="d-flex mb-2">
                <input
                    type="text"
                    className="form-control me-2"
                    value={ingredient}
                    onChange={(e) => updateIngredient(index, e.target.value)}
                    required
                />
                {/*Button to remove ingredients*/}
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => removeIngredient(index)}
                >
                  Remove
                </button>
              </div>
          ))}

        </div>

        {/*Add ingredient button*/}
        <button type="button" className="btn btn-primary" onClick={addIngredient}>
          Add Ingredient
        </button>
        <div className="mb-3">
          <label htmlFor="instructions" className="form-label">Instructions</label>
          <textarea
              className="form-control"
              id="instructions"
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              rows="5"
              required
          ></textarea>
        </div>

        {/*Preparation time section/button*/}
        <div className="mb-3">
          <label htmlFor="prepTime" className="form-label">Preparation Time (minutes)</label>
          <input
              type="number"
              className="form-control"
              id="prepTime"
              name="prepTime"
              value={formData.prepTime}
              onChange={handleChange}
              required
          />
        </div>

        {/*Cuisine label area*/}
        <div className="mb-3">
          <label htmlFor="cuisine" className="form-label">Cuisine Type</label>
          <input
              type="text"
              className="form-control"
              id="cuisine"
              name="cuisine"
              value={formData.cuisine}
              onChange={handleChange}
          />
        </div>

        {/*Difficulty drop down box part*/}
        <div className="mb-3">
          <label htmlFor="difficulty" className="form-label">Difficulty Level</label>
          <select
              className="form-select"
              id="difficulty"
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
          >
            {/*Options*/}
            <option value="">Select Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        {/*Servings part*/}
        <div className="mb-3">
          <label htmlFor="servings" className="form-label">Number of Servings</label>
          <input
              type="number"
              className="form-control"
              id="servings"
              name="servings"
              value={formData.servings}
              onChange={handleChange}
              required
          />
        </div>
        {/*image url part of the form*/}
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input
              type="text"
              className="form-control"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
          />
          {formData.image && (
              <img
                  src={formData.image}
                  alt="Preview"
                  className="img-thumbnail mt-2"
                  style={{maxWidth: "300px"}}
              />
          )}
        </div>
        {/*Submit button*/}
        <button type="submit" className="btn btn-success">Create Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
