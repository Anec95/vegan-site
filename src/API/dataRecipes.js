import axios from "axios"

const API_KEY = process.env.REACT_APP_API_KEY

let urlSearch = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`

const resultNumber = 18


//ricerca generale da barra navigazione
export async function searchRecipes(queryString) {
    let ingredientsArray = queryString.split(" ")
    let ingredients = ingredientsArray.join("+")
    let completeURL = `${urlSearch}&query=${ingredients}&diet=vegan|vegetarian&addRecipeNutrition=true&number=${resultNumber}`

    let {data, status} = await axios.get(completeURL)

    if (status === 402) {
        throw new Error("Daily requests have ended, please come back tomorrow as soon as they are restored")
    }
    
    return data
}

//ricerca per sezioni pasti
export async function searchMeal(typeOfMeal) {
    let completeURL = `${urlSearch}&type=${typeOfMeal}&diet=vegan|vegetarian&addRecipeNutrition=true&number=${resultNumber}`

    let {data, status} = await axios.get(completeURL)

    if (status === 402) {
        throw new Error("Daily requests have ended, please come back tomorrow as soon as they are restored")
    }
    
    return data
}


//istruzioni ricetta
    export async function getInfoRecipe(idRecipe) {
        let completeURL = `https://api.spoonacular.com/recipes/${idRecipe}/analyzedInstructions?apiKey=${API_KEY}`
        
        let {data, status} = await axios.get(completeURL)

        if (status === 402) {
            throw new Error("Daily requests have ended, please come back tomorrow as soon as they are restored")
        }

        return data
    }

    export async function getImgIngredients(idRecipe) {
        let ingredientsURL = `https://api.spoonacular.com/recipes/${idRecipe}/ingredientWidget.png?apiKey=${API_KEY}`

        let imgResponse = await fetch(ingredientsURL)
        let imgResult = await imgResponse.blob()

        const imgURl = URL.createObjectURL(imgResult)

        return imgURl
    }
    