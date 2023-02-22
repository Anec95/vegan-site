import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'

export default function Error({message}) {
    
    
    return (
        <div>
            <p>{message}</p>
            <NavLink to="/">Homepage</NavLink>
        </div>
    )
}