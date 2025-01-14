Recipe Finder App
A sleek and interactive recipe discovery app that allows users to find delicious recipes based on the ingredients they have at home. Built with React, it leverages the Spoonacular API for real-time recipe suggestions and detailed cooking instructions.

Features
Ingredient-Based Recipe Search: Enter ingredients, get tailored recipes.
Dynamic Autocomplete: Smart ingredient suggestions as you type.
Detailed Recipe View: Includes ingredients, instructions, and images for each recipe.
Dark Mode Toggle: Seamlessly switch between light and dark themes.

Tech Stack
Frontend Framework: React (functional components, hooks)
Styling: Custom CSS (responsive design, light/dark mode)
API Integration: Spoonacular API (ingredient autocomplete, recipe details)
State Management: React useState, useEffect
Performance Enhancements: Debounced API calls for efficient querying
Version Control: Git/GitHub for source code management

Getting Started
Clone the repository.
Add your Spoonacular API key in the Homepage.js in components folder.
Run npm install to install dependencies.
Start the app with npm start.

Issues with React Dom 19. Reverting to 18 until compatible. 
npm uninstall react react-dom
npm install react@18 react-dom@18
npm install --no-audit --save @testing-library/jest-dom@^5.14.1 @testing-library/react@^13.0.0 @testing-library/user-event@^13.2.1 web-vitals@^2.1.0
