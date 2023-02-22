import React, {useEffect, useState} from "react"
import Card from "../../Components/card/Card"
import Error from "../Error/Error"
import { Navigate } from "react-router"

export default function SearchResult({searchResult}) {    
    return (
        <section className='result-section'>
            <h1>Search Results</h1>
            <div className="result-container">
                {
                    searchResult.map(data => {
                        return (
                            <Card
                                key={data.id}
                                data={data}
                            />
                        )})
                }
            </div>  
        </section>
    )    
}