import React from "react";
import "./HomePage.css"; // Create a CSS file for styling

const HomePage = () => {
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
        <input
          type="text"
          className="ingredient-input"
          placeholder="e.g., eggs, tomatoes, cheese"
        />
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
