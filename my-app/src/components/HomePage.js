//Spoonacular API Key: 36fcabd0f6c1474289e471ce05bacdf7
import React, { useState, useEffect } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [tags, setTags] = useState([]); // Array of selected ingredients
  const [inputValue, setInputValue] = useState(""); // Current input value
  const [suggestions, setSuggestions] = useState([]); // Filtered suggestions
  const [debouncedInput, setDebouncedInput] = useState(""); // Debounced input value
  const [recipes, setRecipes] = useState([]); // Fetched recipes

  const API_KEY = "36fcabd0f6c1474289e471ce05bacdf7"; // Replace with your Spoonacular API key

  // Debounce the input value
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInput(inputValue);
    }, 300); // Adjust the delay as needed (e.g., 300ms)

    return () => clearTimeout(timer); // Cleanup the timer on input change
  }, [inputValue]);

  // Fetch ingredient suggestions based on the debounced input
  useEffect(() => {
    if (debouncedInput.trim()) {
      fetch(
        `https://api.spoonacular.com/food/ingredients/autocomplete?query=${debouncedInput}&number=10&apiKey=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          const ingredientNames = data.map((item) => item.name);
          setSuggestions(ingredientNames);
        })
        .catch((error) => {
          console.error("Error fetching ingredient suggestions:", error);
        });
    } else {
      setSuggestions([]); // Clear suggestions when input is empty
    }
  }, [debouncedInput]);

  // Fetch recipes based on selected ingredients
  const fetchRecipes = () => {
    if (tags.length > 0) {
      const ingredientString = tags.join(",");
      fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientString}&number=5&apiKey=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          setRecipes(data); // Update the recipes state
        })
        .catch((error) => {
          console.error("Error fetching recipes:", error);
        });
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
            onChange={(e) => setInputValue(e.target.value)}
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

        <button className="find-recipes-button" onClick={fetchRecipes}>
          Find Recipes
        </button>
      </div>

      {/* Recipes Section */}
      {recipes.length > 0 && (
        <div className="recipes-section">
          <h2>Recipes Found:</h2>
          <ul className="recipes-list">
            {recipes.map((recipe, index) => (
              <li key={index} className="recipe-item">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="recipe-image"
                />
                <h3>
                  <a
                    href={`https://spoonacular.com/recipes/${recipe.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}-${recipe.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {recipe.title}
                  </a>
                </h3>
              </li>
            ))}
          </ul>
        </div>
      )}

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
