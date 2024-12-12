import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const SearchPage = () => {
    const { query } = useParams(); // Extract the :query parameter from the URL
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState(""); // Search input state

    const navigate = useNavigate();


    useEffect(() => {
        const fetchSearchResults = async () => {
            setLoading(true);//starts loading before the api call
            setError("");//error reset
            try {
                const response = await axios.get(`http://localhost:4000/api/recipes/search/${query}`);
                setResults(response.data); //the api gave results and sets them
            } catch (err) {
                if (err.response && err.response.status === 404) {
                    setError("No recipes found.");//404 error handling
                } else {
                    setError("Failed to fetch search results. Please try again.");
                }
            } finally {
                setLoading(false);//Stops api loading
            }
        };

        fetchSearchResults();
    }, [query]);//runs whenever the query changes 

    const handleSearch = () => {
        const searchValue = searchTerm.toLowerCase(); //lowercase input 
        if (searchValue.trim()) {
            navigate(`/search/${searchValue}`); //Navigates to search results page
        }
    };

    return (
        <div className="container my-5">
            <div className="search-bar-container d-flex justify-content-center align-items-center mx-auto w-50 mt-5">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a recipe..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Capture input changes
                />
                <button className="btn btn-primary" onClick={handleSearch}>
                    Search
                </button>
            </div>

            <h1 className="mb-4">Search Results for "{query}"</h1>
            {loading && <p>Loading...</p>}
            {error && <p className="text-danger">{error}</p>}
            <div className="row">
                {results.map((recipe) => (
                    <div className="col-md-4 mb-4" key={recipe._id}>
                        <div className="card h-100">
                            <img
                                src={recipe.image || "https://via.placeholder.com/150"}
                                className="card-img-top"
                                alt={recipe.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{recipe.title}</h5>
                                <p className="card-text">
                                    {recipe.instructions.substring(0, 100)}...
                                </p>
                                <a href={`/recipe/${recipe._id}`} className="btn btn-primary">
                                    View Recipe
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
