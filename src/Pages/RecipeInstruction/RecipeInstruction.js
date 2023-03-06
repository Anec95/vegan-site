import React, {useState, useEffect} from "react";
import { useLocation } from "react-router";
import { getInfoRecipe, getImgIngredients } from "API/dataRecipes"
import Error from "Pages/Error/Error";
import "./recipe-instruction.css"

export default function RecipeInstruction() {
    const location = useLocation()
    const idRecipe = location.state.id
    const [dataRecipe, setDataRecipe] = useState([])
    const [imgIngredients, setImgIngredients] = useState("")

    const expensive = <><span className="euro-icon material-icons-outlined">euro</span><span className="euro-icon material-icons-outlined">euro</span><span className="euro-icon material-icons-outlined">euro</span></>
    const cheap = <span className="euro-icon material-icons-outlined">euro</span>    
    
    useEffect(() => {
        async function receiveDataRecipe(idRecipe) {
            const fetchDataRecipe = await getInfoRecipe(idRecipe)
            setDataRecipe(fetchDataRecipe)

            const fetchDataImg = await getImgIngredients(idRecipe)
            setImgIngredients(fetchDataImg)
        }
        receiveDataRecipe(idRecipe)
    }, [idRecipe])

    if (dataRecipe.length === 0) {
        return <Error message="Daily requests have ended, please come back tomorrow as soon as they are restored" />
    }

    return (
        <>
            <img className="recipe-image" alt="recipe" src={location.state.img} />
            <h1 className="recipe-title">{location.state.title}</h1>
            <div className="info-recipe-container">
                <div className="cooking-info-container">
                    <div className="general-info">
                        <p><strong>Preparation time:</strong> {location.state.time} min.</p>
                        <p><strong>Dish type:</strong> {location.state.dishTypes.join(" | ")}</p>
                        <p><strong>Cost:</strong> {location.state.cost ? expensive : cheap}</p>
                        <p><strong>Cuisine type:</strong> {location.state.cuisine.join(" | ")}</p>
                    </div>  
                    <div className="ingredients">
                        <img className="ingredients-image" alt="recipe" src={imgIngredients} />   
                    </div>                   
                </div>
                <div className="steps-container">
                    {dataRecipe[0].steps &&
                        (dataRecipe[0].steps.map((data, index) => {
                            return (
                                <div className="single-step" key={index}>
                                    <h2 className="step-title"><strong>Step</strong> {data.number}</h2>
                                    <p className="step-summary">{data.step}</p>
                                    <div className="step-info">
                                        {data.ingredients.length > 0 &&
                                            <ul>
                                                <h4 className="step-ingredients">Ingredients required:</h4>
                                                {
                                                    data.ingredients.map((element, index) => {
                                                        return (
                                                            <li className="li-ingredient" key={index}>{element.name}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        }
                                        {data.equipment.length > 0 &&
                                            <ul>
                                                <h4 className="step-equipment">Equipment required:</h4>
                                                {
                                                    data.equipment.map((element, index) => {
                                                        return (
                                                            <li className="li-equipment" key={index}>{element.name}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        }
                                    </div>
                                </div>                                
                            )
                        }))
                    }
                </div>
            </div>
        </>
        
    )
}