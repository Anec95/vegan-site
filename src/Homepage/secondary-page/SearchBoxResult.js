import React, {useEffect, useState} from "react"
import Card from "../result-pool/card/Card"
import Error from "../error/Error"
import { Navigate } from "react-router"

export default function SearchBoxResult(props) {
    const [infoRecipes, setInfoRecipes] = useState("")
    const [searchResultData, setSearchResultData] = useState("")

    useEffect(() => {
        setInfoRecipes(oldValue => props.searchResult)
    }, [])

    // useEffect(() => {
    //     setSearchResultData(oldValue => infoRecipes.results.map(data => {
    //         return (
    //             <Card
    //                 key={data.id}
    //                 data={data}
    //             />
    //         )
    //     }))
    // }, [infoRecipes])

    
    return (
        <section className='result-section'>
            <h1>Search Results</h1>
            <div className="result-container">
                {searchResultData}
            </div>  
        </section>
    )    
}