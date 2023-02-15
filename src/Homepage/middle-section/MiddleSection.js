import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import searchRecipes from "../../API/dataRecipes"
import logo from "../../images/logo-potato-removebg-preview.png"

export default function MiddleSection(props) {
    return (
        <section className='middle-section'>
            <div className='info-association-container'>
                <h1 className='name-association'>VaaoV</h1>
                <img className='logo' src={logo} alt='vegan site logo' />                    
            </div>
                <form
                    onSubmit={props.handleSubmit}
                >
                    <input
                        className="research-box"
                        type="text"
                        value={props.ingredients}
                        onChange={props.handleChange}                   
                    />
                    {/* <input
                        className="research-btn"
                        type ="submit"
                        value="Submit"                        
                    /> */}
                    <button
                        className="research-btn"
                        type ="submit"                       
                    >
                        <span className="material-icons-outlined">
                            fastfood
                        </span>
                    </button>
                </form>                           
        </section>
    )
}