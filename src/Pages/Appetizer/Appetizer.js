import Card from "../../Components/card/Card"
import Error from "Pages/Error/Error"

export default function Appetizer({appetizerData}) {
    if (appetizerData.length === 0) {
        return <Error message="Daily requests have ended, please come back tomorrow as soon as they are restored" />
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