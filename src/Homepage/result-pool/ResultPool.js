import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Header from '../header/Header'
import Appetizer from "../secondary-page/Appetizer"
import MainCourse from "../secondary-page/MainCourse"
import SideDish from "../secondary-page/SideDish"
import Dessert from "../secondary-page/Dessert"
import SearchBoxResult from "../secondary-page/SearchBoxResult"
import searchRecipes from "../../API/dataRecipes"

export default function ResultPool(props) {
    const [appetizer, setAppetizer] = useState(false)
    const [mainCourse, setMainCourse] = useState(false)
    const [sideDish, setSideDish] = useState(false)
    const [dessert, setDessert] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [ingredients, setIngredients] = useState("")
    const [searchResult, setSearchResult] = useState("")

    const location = useLocation()
    // console.log(location)

    useEffect(() => {
        setAppetizer(oldValue => location.state.element1)
    }, [])

    useEffect(() => {
        setMainCourse(oldValue => location.state.element2)
    }, [])

    useEffect(() => {
        setSideDish(oldValue => location.state.element3)
    }, [])

    useEffect(() => {
        setDessert(oldValue => location.state.element4)
    }, [])

    useEffect(() => {
        setSubmit(oldValue => location.state.element5)
    }, [])

    useEffect(() => {
        setSearchResult(oldValue => location.state.result)
    }, [])

    function handleAppetizer() {
        setAppetizer(oldValue => true)
        setMainCourse(oldValue => false)
        setSideDish(oldValue => false)
        setSubmit(oldValue => false)
        setDessert(oldValue => false)
    }

    function handleMainCourse() {
        setAppetizer(oldValue => false)
        setMainCourse(oldValue => true)
        setSideDish(oldValue => false)
        setSubmit(oldValue => false)
        setDessert(oldValue => false)
    }

    function handleSideDish() {
        setAppetizer(oldValue => false)
        setMainCourse(oldValue => false)
        setSideDish(oldValue => true)
        setSubmit(oldValue => false)
        setDessert(oldValue => false)
    }

    function handleDessert() {
        setAppetizer(oldValue => false)
        setMainCourse(oldValue => false)
        setSideDish(oldValue => false)
        setDessert(oldValue => true)
        setSubmit(oldValue => false)
    }

    function showSubmitResearch() {
        setAppetizer(oldValue => false)
        setMainCourse(oldValue => false)
        setSideDish(oldValue => false)
        setDessert(oldValue => false)
        setSubmit(oldValue => true)
    }

    function handleChange(event) {
        setIngredients(event.target.value)
        console.log(ingredients)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const result = await searchRecipes(ingredients)
        console.log(result)
        setSearchResult(result)
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
            {submit && <SearchBoxResult searchResult={searchResult}/>}
        </main>
    )
}