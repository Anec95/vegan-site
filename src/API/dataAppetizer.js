let urlSearch = "https://api.spoonacular.com/recipes/complexSearch?apiKey=06b02d587fd44294a1575f43e96f2df2"

export default async function searchRecipes(queryString) {
    let ingredientsArray = queryString.split(" ")
    let ingredients = ingredientsArray.join("+")
    let completeURL = `${urlSearch}&query=${ingredients}&diet=vegan|vegetarian&addRecipeNutrition=true&number=100`

    try {
        let response = await fetch(completeURL);
        let data = await response.json();
        return data
        
    } catch (error) {
        console.error(error);
    }
    console.log(completeURL)
}