import axios from 'axios';

const API_KEY = 'your_api_key';
const BASE_URL = 'https://api.spoonacular.com/recipes/findByIngredients';

export const fetchRecipes = async (ingredients) => {
    const response = await axios.get(BASE_URL, {
        params: {
            ingredients: ingredients.join(','),
            apiKey: API_KEY,
        },
    });
    return response.data;
};
