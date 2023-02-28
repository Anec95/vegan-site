import './App.css'
import 'Assets/css/style.css'
import 'Assets/css/tablet.css'
import 'Assets/css/smartphone.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import Layout from 'Pages/layout/Layout'
import Homepage from './Pages/homepage/Homepage'
import RecipeInstruction from "./Pages/RecipeInstruction/RecipeInstruction"
import Error from "./Pages/Error/Error"
import Appetizer from 'Pages/Appetizer/Appetizer';
import MainCourse from 'Pages/MainCourse/MainCourse';
import SideDish from 'Pages/SideDish/SideDish';
import Dessert from 'Pages/Dessert/Dessert';
import NotFound from 'Pages/NotFound/NotFound'
import { searchMeal, searchRecipes } from 'API/dataRecipes';
import SearchResult from 'Pages/SearchResult/SearchResult';


export default function App() {
    const [appetizerData, setAppetizerData] = useState([])
    const [mainCourseData, setMainCourseData] = useState([])
    const [sideDishData, setSideDishData] = useState([])
    const [dessertData, setDessertData] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        async function renderingDataApp() {

                const fetchDataAppetizer = await searchMeal("appetizer")
                setAppetizerData(fetchDataAppetizer.results)

                const fetchDataMainCourse = await searchMeal("main+course")
                setMainCourseData(fetchDataMainCourse.results)

                const fetchDataSideDish = await searchMeal("side+dish")
                setSideDishData(fetchDataSideDish.results)

                const fetchDataDessert = await searchMeal("dessert")
                setDessertData(fetchDataDessert.results)
                   
        }
        renderingDataApp() 
    }, [])

    async function handleSearch(ingredients) {
        try {
            const fetchDataSearch = await searchRecipes(ingredients)
            setSearchResult(fetchDataSearch.results)
            navigate("/search_result")
        } catch (err) {
            setError(err.message)
            navigate("/error_page")
        }
    }

  return (
    <Routes>
        <Route path='/' element={<Homepage handleSearch={handleSearch} />} />
        <Route element={<Layout handleSearch={handleSearch} />}>
            <Route path='/appetizer' element={<Appetizer appetizerData={appetizerData} />} />
            <Route path='/main_course' element={<MainCourse mainCourseData={mainCourseData} />} />
            <Route path='/side_dish' element={<SideDish sideDishData={sideDishData} />} />
            <Route path='/dessert' element={<Dessert dessertData={dessertData} />} />
            <Route path='/search_result' element={<SearchResult searchResult={searchResult} />} />
            <Route path='/recipe_instruction' element={<RecipeInstruction />} />
            <Route path='/error_page' element={<Error message={error} />} />
        </Route>
        <Route path='*' element={<NotFound />} />
    </Routes>   
  );
}

