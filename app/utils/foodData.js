const foodApiId = process.env.NEXT_PUBLIC_EDAMAM_FOOD_ID;
const foodApiKey = process.env.NEXT_PUBLIC_EDAMAM_FOOD_KEY;

const nutritionApiId = process.env.NEXT_PUBLIC_EDAMAM_NUTRITION_ID;
const nutritionApiKey = process.env.NEXT_PUBLIC_EDAMAM_NUTRITION_KEY;

const recipeApiId = process.env.NEXT_PUBLIC_EDAMAM_RECIPE_ID
const recipeApiKey = process.env.NEXT_PUBLIC_EDAMAM_RECIPE_KEY
export const fetchFoodData = async (searchQuery) => {
   
    try {
      const response = await fetch(
        `https://api.edamam.com/api/food-database/v2/parser?app_id=${foodApiId}&app_key=${foodApiKey}&ingr=${searchQuery}&nutrition-type=cooking`
      );
  
      if (!response.ok) {
        throw new Error('Request failed');
      }
  
      const data = await response.json();
      return data
    } catch (error) {
      console.error(error);
    }
  };

  export const fetchNutritionData = async (searchQuery) => {
   
    try {
      const response = await fetch(
        `https://api.edamam.com/api/nutrition-details?app_id=${nutritionApiId}&app_key=${nutritionApiKey}`
        `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${nutritionApiId}&app_key=${nutritionApiKey}&diet=low-fat&health=low-sugar`

      );
  
      if (!response.ok) {
        throw new Error('Request failed');
      }
  
      const data = await response.json();
      return data
    } catch (error) {
      console.error(error);
    }
  };

  // https://api.edamam.com/api/nutrition-details?app_id=a8451563&app_key=c17250c5ea86c79ed53cba21d1daa96e //nutrition


//   https://api.edamam.com/api/food-database/v2/parser?app_id=8e0bd067&app_key=6a38cf87ae8017de073395be73379658&ingr=banana&nutrition-type=cooking