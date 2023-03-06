import { useState } from "react"
import MenuCard from "./components/MenuCard"
import "./left-section.css"


export default function LeftSection() {
    const [elementOne, setElementOne] = useState(false)
    const [elementTwo, setElementTwo] = useState(false)
    const [elementThree, setElemenThree] = useState(false)
    const [elementFour, setElementFour] = useState(false)
    const verticalTitleAppetizer = <p className='title contact-title'>A<br/>P<br/>P<br/>E<br/>T<br/>I<br/>Z<br/>E<br/>R</p>
    const verticalTitleMainCourse = <p className='title practices-title'>M<br/>A<br/>I<br/>N<br/><br/>C<br/>O<br/>U<br/>R<br/>S<br/>E</p>
    const verticalTitleSideDish = <p className='title activities-title'>S<br/>I<br/>D<br/>E<br/><br/>D<br/>I<br/>S<br/>H</p>
    const verticalTitleDessert = <p className='title courses-title'>D<br/>E<br/>S<br/>S<br/>E<br/>R<br/>T</p>

    function handleFirstElement() {
        setElementOne(oldValue => true)
        setElementTwo(oldValue => false)
        setElemenThree(oldValue => false)
        setElementFour(oldValue => false)
    }

    function handleSecondElement() {
        setElementTwo(oldValue => true)
        setElementOne(oldValue => false)
        setElemenThree(oldValue => false)
        setElementFour(oldValue => false)
    }

    function handleThirdElement() {
        setElementOne(oldValue => false)
        setElementTwo(oldValue => false)
        setElemenThree(oldValue => true)
        setElementFour(oldValue => false)
    }

    function handleFourthElement() {
        setElementTwo(oldValue => false)
        setElementOne(oldValue => false)
        setElemenThree(oldValue => false)
        setElementFour(oldValue => true)
    }

    // const [menu, setMenu] = useState([false, false, false, false])

    // function handleChange(event) {
    //     const {name, value} = event.target
    //     setMenu(prevState => {
    //         return {
    //             ...prevState,
    //             [name]: value
    //         }
    //     })
    // }

    // console.log(menu)    
    
    return (
        <section className='left-section'>
            <MenuCard
            // name={"elementOne"}
            // value={menu.elementOne}
                handleFunction={handleFirstElement}
                element={elementOne}
                color={"appetizer-color "}
                link={"/appetizer"}
                number={"one"}
                name_section={"appetizer-section"}
                vertical_name={verticalTitleAppetizer}
                name_menu={"Appetizer"}
            />
            <MenuCard
            // name={"elementTwo"}
            // value={menu.elementTwo}
                handleFunction={handleSecondElement}
                element={elementTwo}
                color={"main-course-color"}
                link={"/main_course"}
                number={"two"}
                name_section={"main-course-section"}
                vertical_name={verticalTitleMainCourse}
                name_menu={"Main Course"}
            />
            <MenuCard
            // name={"elementThree"}
            // value={menu.elementThree}
                handleFunction={handleThirdElement}
                element={elementThree}
                color={"side-dish-color"}
                link={"/side_dish"}
                number={"three"}
                name_section={"side-dish-section"}
                vertical_name={verticalTitleSideDish}
                name_menu={"Side Dish"}
            />
            <MenuCard
            // name={"elementFour"}
            // value={menu.elementFour}
                handleFunction={handleFourthElement}
                element={elementFour}
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