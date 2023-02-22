import React, {useState} from 'react'
import LeftSection from "./components/left-section/LeftSection"
import MiddleSection from "./components/middle-section/MiddleSection"
import RightSection from "./components/right-section/RightSection"


export default function Homepage({handleSearch}) {
    const [ingredients, setIngredients] = useState("")

    function handleChange(event) {
        setIngredients(event.target.value)
        console.log(ingredients)
    }

    function handleSubmit(event) {
        event.preventDefault()
        handleSearch(ingredients)
        setIngredients("")
    }

    return (
        <main className='homepage-main'>
            <>
                <LeftSection />
                <MiddleSection
                    handleSubmit={handleSubmit}
                    ingredients={ingredients}
                    handleChange={handleChange}                    
                />
                <RightSection />
            </>
        </main>
    )
}