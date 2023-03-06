import Card from "Components/card/Card"


export default function Schedule(props) {
    return (
        <section className='result-section'>
            <h1>{props.name}</h1>
            <div className="result-container">
                {
                    props.recipeData.map(data => {
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