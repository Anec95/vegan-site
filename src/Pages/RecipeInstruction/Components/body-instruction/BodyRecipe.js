import React from "react";
import photo from "Assets/images/main-two.jpg"

export default function BodyRecipe() {
    //funzione che mappa gli ingredienti e che li mette in una lista
    //funzione che mappa gli step e li riporta con l'equipment necessario
    return (
        <>
            <img className="recipe-image" src={photo} />
            <h1 className="recipe-title">Title</h1>
            <div className="info-recipe-container">
                <p>Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be
                    a good recipe to expand your main course repertoire. One portion
                    of this dish contains approximately 19g of protein, 20g of fat,
                    and a total of 584 calories. For $1.63 per serving, this Recipe
                    covers 23% of your daily requirements of vitamins and minerals.
                    This recipe serves 2. It is brought to you by fullbellysisters.
                    blogspot.com. 209 people were glad they tried this recipe.
                    A mixture of scallions, salt and pepper, white wine, and a handful
                    of other ingredients are all it takes to make this recipe so
                    scrumptious. From preparation to the plate, this recipe takes
                    approximately 45 minutes. All things considered, we decided this
                    recipe deserves a spoonacular score of 83%. This score is awesome.
                    If you like this recipe, take a look at these similar recipes:
                    Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</p> 
                <div className="cooking-info-container">
                    <div className="general-info">
                        <p><strong>Preparation time:</strong> 45 minutes</p>
                        <p><strong>Dish type:</strong> Lunch...</p>
                        <p><strong>Cost:</strong> €€€</p>
                    </div>  
                    <div className="ingredients">
                        <h3>Ingredients:</h3>
                        <ul>
                            <li>Patate</li>
                            <li>Olio</li>
                            <li>Cipolle</li>
                            <li>Pasta</li>
                            <li>Paprika</li>
                        </ul>
                    </div>                   
                </div>
                <div className="steps-container">
                    {/* ricordare proprietà key con id da passare a pagina successiva */}
                    <h2>Steps 1</h2>
                    <p>Put the garlic in a pan and then add the onion.</p>
                </div>
            </div>
        </>
    )
}