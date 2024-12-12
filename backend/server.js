const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const MONGO_URI = 'mongodb+srv://g00420185:Zq3e6Cwfku!9@enduro.bvivf.mongodb.net/?retryWrites=true&w=majority&appName=Enduro'; 
mongoose.connect(MONGO_URI);


const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    instructions: { type: String, required: true },
    prepTime: { type: Number, required: true },
    cuisine: { type: String },
    createdAt: { type: Date, default: Date.now },
    favorites: { type: Boolean, default: false }, 
});



const Recipe = mongoose.model('Recipe', recipeSchema);



// Fetch all recipes
app.get('/api/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch recipes' });
    }
});

// Fetch a single recipe by ID
app.get('/api/recipes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findById(id);
        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch recipe' });
    }
});

// Create a new recipe
app.post('/api/recipes', async (req, res) => {
    try {
        const newRecipe = new Recipe(req.body);
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create recipe' });
    }
});

// Update an existing recipe
app.put('/api/recipes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedRecipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedRecipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.json(updatedRecipe);
    } catch (err) {
        res.status(400).json({ error: 'Failed to update recipe' });
    }
});

// Delete a recipe
app.delete('/api/recipes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRecipe = await Recipe.findByIdAndDelete(id);
        if (!deletedRecipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.json({ message: 'Recipe deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete recipe' });
    }
});

// Add to favorites endpoint
app.post('/api/recipes/:id/favorite', async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findById(id);
        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }

        // Toggle the favorite status
        recipe.favorites = !recipe.favorites;
        await recipe.save();

        res.json({ message: recipe.favorites ? 'Recipe added to favorites' : 'Recipe removed from favorites' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to toggle favorite status' });
    }
});


// Fetch all favorite recipes
app.get('/api/favorites', async (req, res) => {
    try {
        const favoriteRecipes = await Recipe.find({ favorites: true });
        res.json(favoriteRecipes);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch favorite recipes' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/api/recipes`);
});

