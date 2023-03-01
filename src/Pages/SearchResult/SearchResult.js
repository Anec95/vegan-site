import Card from "../../Components/card/Card"
import "./search-result.css"

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