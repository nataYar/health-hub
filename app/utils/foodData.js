const foodApiId = process.env.NEXT_PUBLIC_EDAMAM_FOOD_ID;
const foodApiKey = process.env.NEXT_PUBLIC_EDAMAM_FOOD_KEY;

const nutritionApiId = process.env.NEXT_PUBLIC_EDAMAM_NUTRITION_ID;
const nutritionApiKey = process.env.NEXT_PUBLIC_EDAMAM_NUTRITION_KEY;

const recipeApiId = process.env.NEXT_PUBLIC_EDAMAM_RECIPE_ID;
const recipeApiKey = process.env.NEXT_PUBLIC_EDAMAM_RECIPE_KEY;


export const fetchFoodData = async (searchQuery) => {
  try {
    const response = await fetch(
      `https://api.edamam.com/api/food-database/v2/parser?app_id=${foodApiId}&app_key=${foodApiKey}&ingr=${searchQuery}&nutrition-type=logging`
    );

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// 1 cup rice,
// 10 oz chickpeas
export const fetchNutritionData = async (searchQuery) => {
  try {
    const ingr = searchQuery.split('\n');
    console.log(ingr);
    const url = `https://api.edamam.com/api/nutrition-details?app_id=${nutritionApiId}&app_key=${nutritionApiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ingr })
    });

    const data = await response.json();
    console.log(data)
    return data;


    // const url=`https://api.edamam.com/api/nutrition-details?app_id=${nutritionApiId}&app_key=${nutritionApiKey}&nutrition-type=cooking&ingr=${searchQuery}`

    // const response = await fetch(url);

    // if (!response.ok) {
    //   throw new Error("Request failed");
    // }

    // const data = await response.json();
    // return data;
  } catch (error) {
    console.error(error);
  }
};


export const fetchRecipeData = async (searchQuery, diet = "", health="") => {
  try {
    let apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=${nutritionApiId}&app_key=${nutritionApiKey}`;

    if (diet) {
      apiUrl += `&diet=${diet}`;
    }

    if (health) {
      apiUrl += `&health=${health}`;
    }

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
  }
};

// https://api.edamam.com/api/nutrition-details?app_id=a8451563&app_key=c17250c5ea86c79ed53cba21d1daa96e //nutrition

//   https://api.edamam.com/api/food-database/v2/parser?app_id=8e0bd067&app_key=6a38cf87ae8017de073395be73379658&ingr=banana&nutrition-type=cooking


// page.js: 16
// {text: 'milk', parsed: Array(1), hints: Array(2
// • 1), .
// links: {77 v hints: Array (21)
// v OR
// v food:
// category: "Generic foods" categoryLabel: "food" foodId: "food_b49rs1kaw@jktabzkg2vvanvvsis image: "https://www.edamam.com/food-img/7c'
// knownAs: "whole milk" label: "Milk"
// v nutrients:
// CHOCDF: 4.8
// ENERC_KCAL: 61
// FAT: 3.25
// FIBTG: 0
// PROCNT: 3.15
// • [Prototype]l: Object
// • [IPrototype]l: Object ~ measures: Array (11)
// 0:
// label: "Serving" uri: "http://www.edamam.com/ontologies/ec
// weight: 244
// • [Prototype]l: Object
// • 1: furi: 'http://www.edamam.com/ontologies,
// • 2: {uri: 'http://www.edamam.com/ontologies,
// • 3: {uri: 'http://www.edamam.com/ontologies,
// • 4: {uri: 'http://www.edamam.com/ontologies,
// • 5: {uri: 'http://www.edamam.com/ontologies,
// • 6: {uri: 'http://www.edamam.com/ontologies,
// > 7: {uri: 'http://www.edamam.com/ontologies,
// • 8: {uri: 'http://www.edamam.com/ontologies,
// • 9: furi: 'http://www.edamam.com/ontologies,
// • 10: furi: 'http://www.edamam.com/ontologie:
// length: 11
// • [Prototype]l: Array(0)
// • [Prototype]l: Object
// • 1: {food: {.), measures: Array (11)}
// » 2: {food: {.), measures: Array (8)}
// D 3. Sfood. S Y measures: Arravl§Y
