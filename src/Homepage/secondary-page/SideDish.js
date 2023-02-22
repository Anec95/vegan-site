import React, {useState, useEffect} from "react"
import Card from "../result-pool/card/Card"

export default function SideDish() {
    let urlSearch = "https://api.spoonacular.com/recipes/complexSearch?apiKey=06b02d587fd44294a1575f43e96f2df2"

    const [sideDishResult, setSideDishResult] = useState("")
    const [sideDishData, setSideDishData] = useState("")
    
    async function searchSideDish() {
        let completeURL = `${urlSearch}&type=side+dish&diet=vegan|vegetarian&addRecipeNutrition=true&number=50`
    
        try {
            let response = await fetch(completeURL);
            let data = await response.json();
            setSideDishResult(data)
            
        } catch (error) {
            console.error(error);
        }
        
        console.log(completeURL)
    }
    
    useEffect(() => {
        searchSideDish()
    }, [])    
    console.log(sideDishResult)

    useEffect(() => {
        if (sideDishResult) {
            setSideDishData(oldValue => sideDishResult.results.map(data => {
                return (
                        <Card
                            key={data.id}
                            data={data}
                        />
                )
            }))
        }
    }, [sideDishResult])

    return (
        <section className='result-section'>
            <h1>Side Dish</h1>
            <div className="result-container">
                {sideDishData}
            </div>  
        </section>
    )
}