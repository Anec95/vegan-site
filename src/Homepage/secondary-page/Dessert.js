import React, {useState, useEffect} from "react"
import Card from "../result-pool/card/Card"

export default function Dessert() {
    let urlSearch = "https://api.spoonacular.com/recipes/complexSearch?apiKey=06b02d587fd44294a1575f43e96f2df2"

    const [dessertResult, setDessertResult] = useState("")
    const [dessertData, setDessertData] = useState("")

    
    async function searchDessert() {
        let completeURL = `${urlSearch}&type=dessert&diet=vegan|vegetarian&addRecipeNutrition=true&number=50`
    
        try {
            let response = await fetch(completeURL);
            let data = await response.json();
            setDessertResult(data)
            
        } catch (error) {
            console.error(error);
        }
        
        console.log(completeURL)
    }
    
    useEffect(() => {
        searchDessert()
    }, [])    

    console.log(dessertResult)

    useEffect(() => {
        if (dessertResult) {
            setDessertData(oldValue => dessertResult.results.map(data => {
                return (
                        <Card
                            key={data.id}
                            data={data}
                        />
                )
            }))
        }
    }, [dessertResult])

    return (
        <section className='result-section'>
            <h1>Sezione Dessert</h1>
            <div className="result-container">
                {dessertData}
            </div>  
        </section>
    )
}