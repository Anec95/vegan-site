import Card from "../../Components/card/Card"
import Error from "Pages/Error/Error"

export default function Dessert({dessertData}) {
    if (dessertData.length === 0) {
        return <Error message="Torna domani" />
    }

    return (
        <section className='result-section'>
            <h1>Sezione Dessert</h1>
            <div className="result-container">
                {
                    dessertData.map(data => {
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