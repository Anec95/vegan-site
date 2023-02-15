import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo-potato-removebg-preview.png"


export default function Header(props) {
    return (
        <nav className="header-navbar">
            <div className="nav-link-container">
                <NavLink to="/">
                    <span
                        className="home-icon material-icons-outlined"
                    >
                        home
                    </span>
                </NavLink>                
                <p
                    onClick={props.handleAppetizer}
                    className={props.appetizer ? "highlited" : "header-link"}
                >
                    Appetizer
                </p>
                <p
                    onClick={props.handleMainCourse}
                    className={props.mainCourse ? "highlited" : "header-link"}
                >
                    Main Course
                </p>
                <p
                    onClick={props.handleSideDish}
                    className={props.sideDish ? "highlited" : "header-link"}
                >
                    Side Dish
                </p>
                <p
                    onClick={props.handleDessert}
                    className={props.dessert ? "highlited" : "header-link"}
                >
                    Dessert
                </p>          
            </div>
            <form
                className="searchbar-header-container"
                onSubmit={props.handleSubmit}
            >
                <input
                    className="research-box text-area-header"
                    type="text"
                    value={props.ingredients}
                    onChange={props.handleChange}                   
                />
                <button
                    className="research-btn"
                    type ="submit"                       
                >
                    <span className="material-icons-outlined">
                        fastfood
                    </span>
                </button>
            </form>
            <div className="logo-container">
                <img className="logo-header" alt="logo" src={logo} />
            </div>
        </nav>
    )
}