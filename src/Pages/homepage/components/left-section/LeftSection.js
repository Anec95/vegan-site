import { useState } from "react"
import { NavLink } from "react-router-dom"
import "./left-section.css"


export default function LeftSection() {
    const [elementOne, setElementOne] = useState(false)
    const [elementTwo, setElementTwo] = useState(false)
    const [elementThree, setElemenThree] = useState(false)
    const [elementFour, setElementFour] = useState(false)

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

    return (
        <section className='left-section'>
            <div
                onMouseEnter={handleFirstElement}
                className={elementOne ? 'menu-showed menu-element one' : 'menu-element one'}
            >
                <div
                    className={elementOne ? 'contact-and-biography menu-container menu-list-showed' : 'contact-and-biography menu-container'}
                >
                    {elementOne === false && <p className='title contact-title'>A<br/>P<br/>P<br/>E<br/>T<br/>I<br/>Z<br/>E<br/>R</p>}
                    <NavLink
                        to="/appetizer"
                        className={elementOne ? 'menu-list appetizer-section show-img' : 'menu-list appetizer-section'}
                    >
                        <p className='title-inside-img'>Appetizer</p>
                    </NavLink>
                </div>
            </div>
            <div
                onMouseEnter={handleSecondElement}
                className={elementTwo ? 'menu-showed menu-element two' : 'menu-element two'}
            >
                <div
                    className={elementTwo ? 'practices menu-container menu-list-showed' : 'practices menu-container'}
                >                        
                    {elementTwo === false && <p className='title practices-title'>M<br/>A<br/>I<br/>N<br/><br/>C<br/>O<br/>U<br/>R<br/>S<br/>E</p>}
                    <NavLink
                        to="/main_course"
                        className={elementTwo ? 'menu-list main-course-section show-img' : 'menu-list main-course-section'}
                    >
                        <p className='title-inside-img'>Main Course</p>
                    </NavLink>
                </div>
            </div>
            <div
                onMouseEnter={handleThirdElement}
                className={elementThree ? 'menu-showed menu-element three' : 'menu-element three'}
            >
                <div
                    className={elementThree ? 'activities menu-container menu-list-showed' : 'activities menu-container'}
                >
                    {elementThree === false &&<p className='title activities-title'>S<br/>I<br/>D<br/>E<br/><br/>D<br/>I<br/>S<br/>H</p>}
                    <NavLink
                        to="/side_dish"
                        className={elementThree ? 'menu-list side-dish-section show-img' : 'menu-list side-dish-section'}
                    >
                        <p className='title-inside-img'>Side Dish</p>
                    </NavLink>
                </div>
            </div>
            <div
                onMouseEnter={handleFourthElement}
                className={elementFour ? 'menu-showed menu-element four' : 'menu-element four'}
            >
                <div
                    className={elementFour ? 'courses menu-container menu-list-showed' : 'courses menu-container'}
                >
                    {elementFour === false && <p className='title courses-title'>D<br/>E<br/>S<br/>S<br/>E<br/>R<br/>T</p>}
                    <NavLink
                        to="/dessert"
                        className={elementFour ? 'menu-list dessert-section show-img' : 'menu-list dessert-section'}
                    >
                        <p className='title-inside-img'>Dessert</p>
                    </NavLink>
                </div>
            </div>
        </section>
    )
}