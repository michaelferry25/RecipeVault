import React, { useState } from "react";
import "./settings.css";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
      return newMode;
    });
  };

  const clearFavorites = () => {
    if (window.confirm("Are you sure you want to clear all favorites?")) {
      fetch("http://localhost:4000/api/clear-favorites", { method: "POST" })
        .then(() => alert("Favorites cleared successfully!"))
        .catch(() => alert("Failed to clear favorites."));
    }
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="setting-option">
        <label htmlFor="darkModeToggle">Dark Mode</label>
        <input
          id="darkModeToggle"
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
      </div>
      <div className="setting-option">
        <h4>Contact Information</h4>
        <p>Email: info@recipevault.ie</p>
        <p>Phone: +353 123 4567</p>
      </div>
      <div className="setting-option">
        <h4>Acknowledgments</h4>
        <p>Recipes sourced from food.com.</p>
      </div>
      <div className="setting-option">
        <button className="btn btn-danger" onClick={clearFavorites}>
          Clear All Favorites
        </button>
      </div>
    </div>
  );
};

export default Settings;
