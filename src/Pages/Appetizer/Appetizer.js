import Card from "../../Components/card/Card"
import Error from "Pages/Error/Error"

export default function Appetizer({appetizerData}) {
    if (appetizerData.length === 0) {
        return <Error message="Torna domani" />
    }

    return (
        <section className='result-section'>
            <h1>Appetizer</h1>
            <div className="result-container">
                {
                    appetizerData.map(data => {
                        return (
                            <Card
                                key={data.id}
                                data={data}
                            />
                        )
                    })
                }
            </div>            
        </section>       
    )
}