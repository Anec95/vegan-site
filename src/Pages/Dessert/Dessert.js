import Error from "Pages/Error/Error"
import Schedule from "Components/Schedule/Schedule"
import { useState, useEffect } from "react"
import { searchMeal } from "API/dataRecipes"

export default function Dessert() {
    const [dessertData, setDessertData] = useState([])

    useEffect(() => {
        async function renderingDataApp() {

                const fetchDataDessert = await searchMeal("dessert")
                setDessertData(fetchDataDessert.results)
                   
        }
        renderingDataApp() 
    }, [])

    if (dessertData.length === 0) {
        return <Error message="Daily requests have ended, please come back tomorrow as soon as they are restored" />
    }

    return (
        <>
            <Schedule
                name={"Dessert"}
                recipeData={dessertData}
            />
        </>
    )
}