import React, {useState, useEffect} from 'react'
import './homepage.css'
import {NavLink} from "react-router-dom"
import logo from "../images/logo-potato-removebg-preview.png"
import appetizer from "../images/appetizer.jpg"
// import getRecipes from "../API/dataRecipes"
import searchRecipes from "../API/dataRecipes"

export default function Homepage() {
    const [ingredients, setIngredients] = useState("")

    function handleChange(event) {
        setIngredients(event.target.value)
        console.log(ingredients)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const result = await searchRecipes(ingredients)
        console.log(result)
        setIngredients("")
    }

    return (
        <main className='homepage-main'>
            <section className='left-section'>
                <div className='menu-element one'>
                    <div className='contact-and-biography menu-container'>
                        <p className='title contact-title'>A<br/>P<br/>P<br/>E<br/>T<br/>I<br/>Z<br/>E<br/>R</p>
                        <NavLink className='menu-list appetizer-section'>
                            <p>Appetizer</p>
                        </NavLink>
                    </div>
                </div>
                <div className='menu-element two'>
                    <div className='practices menu-container'>                        
                        <p className='title practices-title'>M<br/>A<br/>I<br/>N<br/><br/>C<br/>O<br/>U<br/>R<br/>S<br/>E</p>
                        <NavLink className='menu-list main-course-section'>
                            <p>Main Course</p>
                        </NavLink>
                    </div>
                </div>
                <div className='menu-element three'>
                    <div className='activities menu-container'>
                        <p className='title activities-title'>S<br/>I<br/>D<br/>E<br/><br/>D<br/>I<br/>S<br/>H</p>
                        <NavLink className='menu-list side-dish-section'>
                            <p>Side Dish</p>
                        </NavLink>
                    </div>
                </div>
                <div className='menu-element four'>
                    <div className='courses menu-container'>
                        <p className='title courses-title'>D<br/>E<br/>S<br/>S<br/>E<br/>R<br/>T</p>
                        <NavLink className='menu-list dessert-section'>
                            <p>Dessert</p>
                        </NavLink>
                    </div>
                </div>
            </section>
            <section className='middle-section'>
                <div className='info-association-container'>
                    <h1 className='name-association'>VaaoV</h1>
                    <img className='logo' src={logo} alt='vegan site logo' />                    
                </div>
                <form
                    onSubmit={handleSubmit}
                >
                    <input
                        className="research-box"
                        type="text"
                        value={ingredients}
                        onChange={handleChange}                   
                    />
                    <input
                        className="research-btn"
                        type ="submit"
                        value="Submit"                        
                    />
                </form>                
            </section>
        </main>
    )
}