import { useState } from "react"
import MenuCard from "./components/MenuCard"
import "./left-section.css"


export default function LeftSection() {
    const verticalTitleAppetizer = <p className='title contact-title'>A<br/>P<br/>P<br/>E<br/>T<br/>I<br/>Z<br/>E<br/>R</p>
    const verticalTitleMainCourse = <p className='title practices-title'>M<br/>A<br/>I<br/>N<br/><br/>C<br/>O<br/>U<br/>R<br/>S<br/>E</p>
    const verticalTitleSideDish = <p className='title activities-title'>S<br/>I<br/>D<br/>E<br/><br/>D<br/>I<br/>S<br/>H</p>
    const verticalTitleDessert = <p className='title courses-title'>D<br/>E<br/>S<br/>S<br/>E<br/>R<br/>T</p>
    const [element, setElement] = useState([false, false, false, false])

    function handleElement(elementIndex) {
        const newArray = [false, false, false, false]
        newArray[elementIndex] = true
        setElement(newArray)
    }    
    
    return (
        <section className='left-section'>
            <MenuCard
                handleFunction={() => {handleElement(0)}}
                element={element[0]}
                color={"appetizer-color "}
                link={"/appetizer"}
                number={"one"}
                name_section={"appetizer-section"}
                vertical_name={verticalTitleAppetizer}
                name_menu={"Appetizer"}
            />
            <MenuCard
                handleFunction={() => {handleElement(1)}}
                element={element[1]}
                color={"main-course-color"}
                link={"/main_course"}
                number={"two"}
                name_section={"main-course-section"}
                vertical_name={verticalTitleMainCourse}
                name_menu={"Main Course"}
            />
            <MenuCard
                handleFunction={() => {handleElement(2)}}
                element={element[2]}
                color={"side-dish-color"}
                link={"/side_dish"}
                number={"three"}
                name_section={"side-dish-section"}
                vertical_name={verticalTitleSideDish}
                name_menu={"Side Dish"}
            />
            <MenuCard
                handleFunction={() => {handleElement(3)}}
                element={element[3]}
                color={"dessert-color"}
                link={"/dessert"}
                number={"four"}
                name_section={"dessert-section"}
                vertical_name={verticalTitleDessert}
                name_menu={"Dessert"}
            />
        </section>
    )
}