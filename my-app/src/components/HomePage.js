import React, { useState } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [tags, setTags] = useState([]); // Array of selected ingredients
  const [inputValue, setInputValue] = useState(""); // Current input value
  const [suggestions, setSuggestions] = useState([]); // Filtered suggestions

  const ingredientList = [
    "Eggs",
    "Tomatoes",
    "Cheese",
    "Milk",
    "Chicken",
    "Onions",
    "Garlic",
    "Potatoes",
    "Pepper",
    "Carrots",
  ]; // List of suggested ingredients

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter suggestions based on input
    if (value) {
      const filtered = ingredientList.filter((ingredient) =>
        ingredient.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // Add tag
  const addTag = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
    setInputValue(""); // Clear input
    setSuggestions([]); // Clear suggestions
  };

  // Remove tag
  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      addTag(inputValue.trim());
    }
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero">
        <h1>What’s in Your Kitchen?</h1>
        <p>Discover Delicious Recipes Instantly!</p>
        <button className="cta-button">Get Started</button>
      </div>

      {/* Ingredient Input Section */}
      <div className="ingredient-section">
        <h2>Enter Your Ingredients:</h2>

        {/* Search Bar with Tags */}
        <div className="input-with-tags">
          {tags.map((tag, index) => (
            <div key={index} className="tag">
              {tag}
              <button
                className="remove-tag-button"
                onClick={() => removeTag(tag)}
              >
                ×
              </button>
            </div>
          ))}
          <input
            type="text"
            className="ingredient-input"
            placeholder="Type to add an ingredient"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="suggestion-item"
                onClick={() => addTag(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}

        <button className="find-recipes-button">Find Recipes</button>
      </div>

      {/* Featured Section */}
      <div className="featured-section">
        <h2>Why Use Recipe Finder?</h2>
        <ul>
          <li>Find recipes tailored to your ingredients</li>
          <li>Save your favorite recipes</li>
          <li>Quick and easy to use</li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Recipe Finder. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
