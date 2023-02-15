import React, {useState} from 'react'
import Header from '../header/Header'
import Card from "./card/Card"
import Appetizer from "../secondary-page/Appetizer"
import MainCourse from "../secondary-page/MainCourse"
import SideDish from "../secondary-page/SideDish"
import Dessert from "../secondary-page/Dessert"
import SearchBoxResult from "../secondary-page/SearchBoxResult"
import searchRecipes from "../../API/dataRecipes"

export default function ResultPool() {
    const [appetizer, setAppetizer] = useState(false)
    const [mainCourse, setMainCourse] = useState(false)
    const [sideDish, setSideDish] = useState(false)
    const [dessert, setDessert] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [ingredients, setIngredients] = useState("")
    const [searchResult, setSearchResult] = useState("")

    function handleAppetizer() {
        setAppetizer(oldValue => true)
        setMainCourse(oldValue => false)
        setSideDish(oldValue => false)
        setSubmit(oldValue => false)
        setDessert(oldValue => false)
        console.log(appetizer, mainCourse, sideDish, dessert)
    }

    function handleMainCourse() {
        setAppetizer(oldValue => false)
        setMainCourse(oldValue => true)
        setSideDish(oldValue => false)
        setSubmit(oldValue => false)
        setDessert(oldValue => false)
        console.log(appetizer, mainCourse, sideDish, dessert)
    }

    function handleSideDish() {
        setAppetizer(oldValue => false)
        setMainCourse(oldValue => false)
        setSideDish(oldValue => true)
        setSubmit(oldValue => false)
        setDessert(oldValue => false)
        console.log(appetizer, mainCourse, sideDish, dessert)
    }

    function handleDessert() {
        setAppetizer(oldValue => false)
        setMainCourse(oldValue => false)
        setSideDish(oldValue => false)
        setDessert(oldValue => true)
        setSubmit(oldValue => false)
        console.log(appetizer, mainCourse, sideDish, dessert)
    }

    function showSubmitResearch() {
        setAppetizer(oldValue => false)
        setMainCourse(oldValue => false)
        setSideDish(oldValue => false)
        setDessert(oldValue => false)
        setSubmit(oldValue => true)
        console.log(appetizer, mainCourse, sideDish, dessert)
    }

    function handleChange(event) {
        setIngredients(event.target.value)
        console.log(ingredients)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const result = await searchRecipes(ingredients)
        console.log(result)
        // setSearchResult(result)
        setIngredients("")
        showSubmitResearch()
    }

    return (
        <main className='research-pool-main'>
            <Header
                handleAppetizer={handleAppetizer}
                appetizer={appetizer}
                handleMainCourse={handleMainCourse}
                mainCourse={mainCourse}
                handleSideDish={handleSideDish}
                sideDish={sideDish}
                handleDessert={handleDessert}
                dessert={dessert}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                ingredients={ingredients}
            />
            {appetizer && <Appetizer />}
            {mainCourse && <MainCourse />}
            {sideDish && <SideDish />}
            {dessert && <Dessert />}
            {submit && <SearchBoxResult />}
        </main>
    )
}