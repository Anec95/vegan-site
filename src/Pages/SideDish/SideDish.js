import Card from "../../Components/card/Card"
import Error from "Pages/Error/Error"

export default function SideDish({sideDishData}) {
    if (sideDishData.length === 0) {
        return <Error message="Daily requests have ended, please come back tomorrow as soon as they are restored" />
    }

    return (
        <section className='result-section'>
            <h1>Side Dish</h1>
            <div className="result-container">
                {
                    sideDishData.map(data => {
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