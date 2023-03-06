import Error from "Pages/Error/Error"
import Schedule from "Components/Schedule/Schedule"
import { useState, useEffect } from "react"
import { searchMeal } from "API/dataRecipes"

export default function MainCourse() {
    const [mainCourseData, setMainCourseData] = useState([])

    useEffect(() => {
        async function renderingDataApp() {
            const fetchDataMainCourse = await searchMeal("main+course")
            setMainCourseData(fetchDataMainCourse.results)
        }
        renderingDataApp() 
    }, [])

    if (mainCourseData.length === 0) {
        return <Error message="Daily requests have ended, please come back tomorrow as soon as they are restored" />
    }

    return (
        <>
            <Schedule
                name={"Main Course"}
                recipeData={mainCourseData}
            />
        </>
    )
}