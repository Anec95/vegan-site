import React, {useEffect, useState, useLocation} from "react"
import Card from "../result-pool/card/Card"

export default function Appetizer() {
    let urlSearch = "https://api.spoonacular.com/recipes/complexSearch?apiKey=06b02d587fd44294a1575f43e96f2df2"
    const [appetizerResult, setAppetizerResult] = useState("")
    const [appetizerData, setAppetizerData] = useState("")
    
    async function searchAppetizer() {
        let completeURL = `${urlSearch}&type=appetizer&diet=vegan|vegetarian&addRecipeNutrition=true&number=50`
    
        try {
            let response = await fetch(completeURL);
            let data = await response.json();
            setAppetizerResult(data)
            
        } catch (error) {
            console.error(error);
        }
        
        console.log(completeURL)
    }
    
    useEffect(() => {
        searchAppetizer()
    }, []) 
    
    useEffect(() => {
        if (appetizerResult) {
            setAppetizerData(oldValue => appetizerResult.results.map(data => {
                return (
                        <Card
                            key={data.id}
                            data={data}
                        />
                )
            }))
        }
    }, [appetizerResult])

    console.log(appetizerResult)

    return (
        <section className='result-section'>
            <h1>Appetizer</h1>
            <div className="result-container">
                {appetizerData}
            </div>            
        </section>
    )
}