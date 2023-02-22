import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'

export default function Card(props) {
    const expensive = <><span className="euro-icon material-icons-outlined">euro</span><span className="euro-icon material-icons-outlined">euro</span><span className="euro-icon material-icons-outlined">euro</span></>
    const cheap = <span className="euro-icon material-icons-outlined">euro</span>
    
    return (
        <NavLink
            to="/Instruction"
            state={{id:props.data.id}}
            className='card'>
            <img className='card-img' src={props.data.image} />
            <h4>{props.data.title}</h4>
            <div className='general-info-grid'>
                <p>Ready in {props.data.readyInMinutes} minutes</p>
                {props.data.vegan ? <p>VeganOk</p> : <p>Vegetarian</p>}
                <p>{props.data.glutenFree ? "Gluten free" : "Not Gluten Free"}</p>
                <p>Cost: {props.data.cheap ? cheap : expensive}</p>
                {props.data.cuisines.length > 0 && <p>Cuisine type: {props.data.cuisines.join(" | ")}</p>}
            </div>
        </NavLink>
    )
}