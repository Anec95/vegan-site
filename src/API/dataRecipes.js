import React from "react"
import { Navigate } from "react-router"

const API_KEY = process.env.REACT_APP_API_KEY

let urlSearch = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`


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
    
    return result
}

//ricerca per sezione appetizer
export async function searchAppetizer() {
    let completeURL = `${urlSearch}&type=appetizer&diet=vegan|vegetarian&addRecipeNutrition=true&number=1`

    let response = await fetch(completeURL);
    let result = await response.json();

    // if (response.status === 402) {
    //     throw new Error("Daily requests have ended, please come back tomorrow as soon as they are restored")
    // }
    
    console.log(response)
    
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
    
    return result
}


//istruzioni ricetta
    export async function getInfoRecipe(idRecipe) {
        let completeURL = `https://api.spoonacular.com/recipes/${idRecipe}/analyzedInstructions?apiKey=${API_KEY}`
        
        let response = await fetch(completeURL);
        let result = await response.json();

        if (response.status === 402) {
            throw new Error("Daily requests have ended, please come back tomorrow as soon as they are restored")
        }

        return result
    }

    export async function getImgIngredients(idRecipe) {
        let ingredientsURL = `https://api.spoonacular.com/recipes/${idRecipe}/ingredientWidget.png?apiKey=${API_KEY}`

        let imgResponse = await fetch(ingredientsURL)
        let imgResult = await imgResponse.blob()

        const imgURl = URL.createObjectURL(imgResult)

        return imgURl
    }
    