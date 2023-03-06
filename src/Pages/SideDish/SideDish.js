import Error from "Pages/Error/Error"
import Schedule from "Components/Schedule/Schedule"
import { useState, useEffect } from "react"
import { searchMeal } from "API/dataRecipes"

export default function SideDish() {
    const [sideDishData, setSideDishData] = useState([])

    useEffect(() => {
        async function renderingDataApp() {
            const fetchDataSideDish = await searchMeal("side+dish")
            setSideDishData(fetchDataSideDish.results)
        }
        renderingDataApp() 
    }, [])

    if (sideDishData.length === 0) {
        return <Error message="Daily requests have ended, please come back tomorrow as soon as they are restored" />
    }

    return (
        <>
            <Schedule
                name={"Side Dish"}
                recipeData={sideDishData}
            />
        </>
    )
}