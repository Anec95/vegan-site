import React, {useState} from 'react'
import './homepage.css'
import LeftSection from "./left-section/LeftSection"
import MiddleSection from "./middle-section/MiddleSection"
import RightSection from "./right-section/RightSection"
import ResultPool from "./result-pool/ResultPool"
import searchRecipes from "../API/dataRecipes"
import {NavLink, Navigate} from "react-router-dom"
// import getRecipes from "../API/dataRecipes"


export default function Homepage() {
    const [ingredients, setIngredients] = useState("")
    const [searchResult, setSearchResult] = useState("")
    const [submit, setSubmit] = useState(false)

    function handleChange(event) {
        setIngredients(event.target.value)
        console.log(ingredients)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const result = await searchRecipes(ingredients)
        // console.log(result)
        setSearchResult(result)
        setIngredients("")
        setSubmit(oldValue => true)
        console.log(searchResult)
    }

    return (
        <main className='homepage-main'>
            <>
                <LeftSection />
                {submit && (
                    <Navigate to="/ResultPool" replace={true} />
                )}
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