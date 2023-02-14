//ricerca ingredienti
// let url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=06b02d587fd44294a1575f43e96f2df2"

// export default async function getRecipes(queryString) {
//     let ingredientsArray = queryString.split(" ")
//     let ingredients = ingredientsArray.join(",")
//     let completeURL = `${url}&includeIngredients=${ingredients}&diet=vegan|vegetarian&number=100`

//     try {
//         let response = await fetch(completeURL);
//         let data = await response.json();
//         return data
        
//     } catch (error) {
//         console.error(error);
//     }
//     console.log(completeURL)
// }




//ricerca generale
let urlSearch = "https://api.spoonacular.com/recipes/complexSearch?apiKey=06b02d587fd44294a1575f43e96f2df2"

export default async function searchRecipes(queryString) {
    let ingredientsArray = queryString.split(" ")
    let ingredients = ingredientsArray.join("+")
    let completeURL = `${urlSearch}&query=${ingredients}&diet=vegan|vegetarian&number=100`

    try {
        let response = await fetch(completeURL);
        let data = await response.json();
        return data
        
    } catch (error) {
        console.error(error);
    }
    console.log(completeURL)
}

