import Error from "Pages/Error/Error"
import Schedule from "Components/Schedule/Schedule"
import { useState, useEffect } from "react"
import { searchMeal } from "API/dataRecipes"

export default function Appetizer() {
    const [appetizerData, setAppetizerData] = useState([])

    useEffect(() => {
        async function renderingDataApp() {
            const fetchDataAppetizer = await searchMeal("appetizer")
            setAppetizerData(fetchDataAppetizer.results)   
        }
        renderingDataApp() 
    }, [])

    if (appetizerData.length === 0) {
        return <Error message="Daily requests have ended, please come back tomorrow as soon as they are restored" />
    }

    return (
        <>
            <Schedule
                name={"Appetizer"}
                recipeData={appetizerData}
            />
        </>      
    )
}