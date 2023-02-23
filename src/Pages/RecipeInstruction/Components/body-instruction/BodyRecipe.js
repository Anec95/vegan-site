import React from "react";

export default function BodyRecipe({steps}, {img}, {title}, {time}, {summury}, {cost}, {types}, {cuisine}, {imgIngredients}) {
    return (
        <>
            <img className="recipe-image" src={img} />
            <h1 className="recipe-title">{title}</h1>
            <div className="info-recipe-container">
                <p>{summury}</p> 
                <div className="cooking-info-container">
                    <div className="general-info">
                        <p><strong>Preparation time:</strong> {time} minutes</p>
                        <p><strong>Dish type:</strong> {types.join(" | ")}</p>
                        <p><strong>Cost:</strong> {cost}</p>
                        <p><strong>Cuisine type:</strong> {cuisine.join(" | ")}</p>
                    </div>  
                    <div className="ingredients">
                        <img className="recipe-image" src={imgIngredients} />   
                    </div>                   
                </div>
                <div className="steps-container">
                    {
                        steps.map(data => {
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
                        })
                    }
                    
                </div>
            </div>
        </>
    )
}