import './App.css'
import 'animate.css'
import 'Assets/css/style.css'
import { useState } from 'react'
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
import { searchRecipes } from 'API/dataRecipes';
import SearchResult from 'Pages/SearchResult/SearchResult';


export default function App() {
    const [searchResult, setSearchResult] = useState([])
    const [error, setError] = useState(null)

    const navigate = useNavigate()

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
            <Route path='/appetizer' element={<Appetizer />} />
            <Route path='/main_course' element={<MainCourse />} />
            <Route path='/side_dish' element={<SideDish />} />
            <Route path='/dessert' element={<Dessert />} />
            <Route path='/search_result' element={<SearchResult searchResult={searchResult} />} />
            <Route path='/recipe_instruction' element={<RecipeInstruction />} />
            <Route path='/error_page' element={<Error message={error} />} />
        </Route>
        <Route path='*' element={<NotFound />} />
    </Routes>   
  );
}

