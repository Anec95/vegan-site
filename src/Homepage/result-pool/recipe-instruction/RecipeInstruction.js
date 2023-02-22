import React, {useState, useEffect} from "react";
import { useLocation } from "react-router";
import Header from "../../header/Header"
import BodyRecipe from "./body-instruction/BodyRecipe";
import RecipesCarosel from "./recipe-adviced/RecipesCarosel"

export default function RecipeInstruction() {
    // Fare una richiesta "Analyze Recipe o Get Recipe Information" e una "Analyzed recipe Instructions"
    // Farne una terza "Get Similir Recipes" da mettere come footer con number impostato a max 10


    // const location = useLocation()
    // console.log(location.state.id)
    // const [infoRecipe, setInfoRecipe] = useState("")
    // const [dataRecipe, setDataRecipe] = useState("")
    
    // async function getInfoRecipe() {
    //     let completeURL = `https://api.spoonacular.com/recipes/${location.state.id}/analyze?apiKey=06b02d587fd44294a1575f43e96f2df2`
    
    //     try {
    //         let response = await fetch(completeURL);
    //         let data = await response.json();
    //         setInfoRecipe(data)
            
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    
    // useEffect(() => {
    //     getInfoRecipe()
    // }, [])

    // console.log(infoRecipe)

    return (
        <>
            <Header />
            <BodyRecipe />
            <RecipesCarosel />
        </>
        
    )
}