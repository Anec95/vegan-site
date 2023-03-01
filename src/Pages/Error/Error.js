import { NavLink } from 'react-router-dom'
import "./error.css"

export default function Error({message}) {
    
    
    return (
        <div className='error_main'>
            <h1>{message}</h1>
            <NavLink
                to="/"
            >
                Back to Homepage
            </NavLink>
        </div>
    )
}