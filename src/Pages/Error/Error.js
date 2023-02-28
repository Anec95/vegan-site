import { NavLink } from 'react-router-dom'

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