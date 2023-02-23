import React, {useState, useEffect} from "react";
import { useLocation } from "react-router";
import { getInfoRecipe, getImgIngredients } from "API/dataRecipes";
import BodyRecipe from "./Components/body-instruction/BodyRecipe";
import RecipesCarosel from "./Components/Carosel/RecipesCarosel"

export default function RecipeInstruction() {
    const location = useLocation()
    console.log(location.state.id)
    const idRecipe = location.state.id
    const [dataRecipe, setDataRecipe] = useState([])
    const [imgIngredients, setImgIngredients] = useState("")

    
    
    useEffect(() => {
        async function receiveDataRecipe(idRecipe) {
            const fetchDataRecipe = await getInfoRecipe(idRecipe)
            setDataRecipe(fetchDataRecipe)

            const fetchDataImg = await getImgIngredients(idRecipe)
            setImgIngredients(fetchDataImg)
        }
        receiveDataRecipe(idRecipe)
    }, [])

    console.log(dataRecipe[0])

    return (
        <>
            <BodyRecipe
                img={location.state.img}
                steps={dataRecipe[0].steps}
                title={location.state.title}
                time={location.state.time}
                summury={location.state.summury}
                cost={location.state.cost}
                types={location.state.types}
                cuisine={location.state.cuisine}
                imgIngredients={imgIngredients}
            />
            <RecipesCarosel />
        </>
        
    )
}