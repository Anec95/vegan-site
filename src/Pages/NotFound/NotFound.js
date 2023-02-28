import { NavLink } from 'react-router-dom'

export default function NotFound() {
    
    
    return (
        <div>
            <p>Page not Found</p>
            <NavLink to="/">Homepage</NavLink>
        </div>
    )
}