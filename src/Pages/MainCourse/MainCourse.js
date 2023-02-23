import Card from "../../Components/card/Card"
import Error from "Pages/Error/Error"

export default function MainCourse({mainCourseData}) {
    if (mainCourseData.length === 0) {
        return <Error message="Daily requests have ended, please come back tomorrow as soon as they are restored" />
    }

    return (
        <section className='result-section'>
            <h1>Main Course</h1>
            <div className="result-container">
                {
                    mainCourseData.map(data => {
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