import React, {useState, useEffect} from "react"
import Card from "../result-pool/card/Card"

export default function MainCourse() {
    let urlSearch = "https://api.spoonacular.com/recipes/complexSearch?apiKey=06b02d587fd44294a1575f43e96f2df2"

    const [mainCourseResult, setMainCourseResult] = useState("")
    const [mainCourseData, setMainCourseData] = useState("")
    
    async function searchMainCourse() {
        let completeURL = `${urlSearch}&type=main+course&diet=vegan|vegetarian&addRecipeNutrition=true&number=50`
    
        try {
            let response = await fetch(completeURL);
            let data = await response.json();
            setMainCourseResult(data)
            
        } catch (error) {
            console.error(error);
        }
        
        console.log(completeURL)
    }
    
    useEffect(() => {
        searchMainCourse()
    }, [])

    console.log(mainCourseResult)

    useEffect(() => {
        if (mainCourseResult) {
            setMainCourseData(oldValue => mainCourseResult.results.map(data => {
                return (
                        <Card
                            key={data.id}
                            data={data}
                        />
                )
            }))
        }
    }, [mainCourseResult])

    return (
        <section className='result-section'>
            <h1>Main Course</h1>
            <div className="result-container">
                {mainCourseData}
            </div>  
        </section>
    )
}