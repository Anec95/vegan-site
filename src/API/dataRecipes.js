import React from "react"
import { Navigate } from "react-router"

let urlSearch = "https://api.spoonacular.com/recipes/complexSearch?apiKey=06b02d587fd44294a1575f43e96f2df2"


//ricerca generale da barra navigazione
export async function searchRecipes(queryString) {
    let ingredientsArray = queryString.split(" ")
    let ingredients = ingredientsArray.join("+")
    let completeURL = `${urlSearch}&query=${ingredients}&diet=vegan|vegetarian&addRecipeNutrition=true&number=1`

    let response = await fetch(completeURL);
    let result = await response.json();
      
    if (response.status === 402) {
        throw new Error("Daily requests have ended, please come back tomorrow as soon as they are restored")
    }
    // if (!Array.isArray(result)) {
    //     throw new Error ("risultato non valido")
    // } 
    
    return result
}

//ricerca per sezione appetizer
export async function searchAppetizer() {
    let completeURL = `${urlSearch}&type=appetizer&diet=vegan|vegetarian&addRecipeNutrition=true&number=1`

    let response = await fetch(completeURL);
    let result = await response.json();

    if (response.status === 402) {
        throw new Error("Daily requests have ended, please come back tomorrow as soon as they are restored")
    }
    // if (!Array.isArray(result)) {
    //     throw new Error ("risultato non valido")
    // } 
    
    return result
}


//ricerca per sezione main course
export async function searchMainCourse() {
    let completeURL = `${urlSearch}&type=main+course&diet=vegan|vegetarian&addRecipeNutrition=true&number=1`

    let response = await fetch(completeURL);
    let result = await response.json();

    if (response.status === 402) {
        throw new Error("Daily requests have ended, please come back tomorrow as soon as they are restored")
    }
    // if (!Array.isArray(result)) {
    //     throw new Error ("risultato non valido")
    // } 
    
    return result
}


//ricerca per sezione side dish
export async function searchSideDish() {
    let completeURL = `${urlSearch}&type=side+dish&diet=vegan|vegetarian&addRecipeNutrition=true&number=1`

    let response = await fetch(completeURL);
    let result = await response.json();

    if (response.status === 402) {
        throw new Error("Daily requests have ended, please come back tomorrow as soon as they are restored")
    }
    // if (!Array.isArray(result)) {
    //     throw new Error ("risultato non valido")
    // } 
    
    return result
}


//ricerca per sezione dessert
export async function searchDessert() {
    let completeURL = `${urlSearch}&type=dessert&diet=vegan|vegetarian&addRecipeNutrition=true&number=1`

    let response = await fetch(completeURL);
    let result = await response.json();

    if (response.status === 402) {
        throw new Error("Daily requests have ended, please come back tomorrow as soon as they are restored")
    }
    // if (!Array.isArray(result)) {
    //     throw new Error ("risultato non valido")
    // } 
    
    return result
}


//istruzioni ricetta
    export async function getInfoRecipe(idRecipe) {
        let completeURL = `https://api.spoonacular.com/recipes/${idRecipe}/analyzedInstructions?apiKey=06b02d587fd44294a1575f43e96f2df2`
        
        let response = await fetch(completeURL);
        let result = await response.json();

        if (response.status === 402) {
            throw new Error("Daily requests have ended, please come back tomorrow as soon as they are restored")
        }

        return result
    }

    export async function getImgIngredients(idRecipe) {
        let ingredientsURL = `https://api.spoonacular.com/recipes/${idRecipe}/ingredientWidget?apiKey=06b02d587fd44294a1575f43e96f2df2`

        let imgResponse = await fetch(ingredientsURL)
        let imgResult = await imgResponse.json()

        return imgResult
    }


//informazioni per carosello
    export async function getSimilarRecipe(idRecipe) {
        let completeURL = `https://api.spoonacular.com/recipes/${idRecipe}/similar?apiKey=06b02d587fd44294a1575f43e96f2df2`
        
        let response = await fetch(completeURL);
        let result = await response.json();

        if (response.status === 402) {
            throw new Error("Daily requests have ended, please come back tomorrow as soon as they are restored")
        }

        return result
    }
    