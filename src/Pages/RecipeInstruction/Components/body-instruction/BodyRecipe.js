import React from "react";

export default function BodyRecipe(props) {
    return (
        <>
            <img className="recipe-image" src={props.img} />
            <h1 className="recipe-title">{props.title}</h1>
            <div className="info-recipe-container">
                <div className="cooking-info-container">
                    <div className="general-info">
                        <p><strong>Preparation time:</strong> {props.time} minutes</p>
                        <p><strong>Dish type:</strong> {props.dishTypes.join(" | ")}</p>
                        <p><strong>Cost:</strong> {props.cost}</p>
                        <p><strong>Cuisine type:</strong> {props.cuisine.join(" | ")}</p>
                    </div>  
                    <div className="ingredients">
                        {/* <img className="recipe-image" src={props.imgIngredients} />    */}
                    </div>                   
                </div>
                <div className="steps-container">
                    {props.steps &&
                        (props.steps.map(data => {
                            return (
                                <>
                                    <h2><strong>Step</strong> {data.number}</h2>
                                    <p>{data.step}</p>
                                    {data.ingredients.length > 0 &&
                                        <ul>
                                            <h3>Ingredients required:</h3>
                                            {
                                                data.ingredients.map(element => {
                                                    return (
                                                        <li>{element.name}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    }
                                    {data.equipment.length > 0 &&
                                        <ul>
                                            <h3>Equipment required:</h3>
                                            {
                                                data.equipment.map(element => {
                                                    return (
                                                        <li>{element.name}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    }
                                </>                                
                            )
                        }))
                    }
                    
                </div>
            </div>
        </>
    )
}