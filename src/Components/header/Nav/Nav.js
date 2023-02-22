import { NavLink, useLocation } from "react-router-dom";

export default function Nav() {
    const { pathname } = useLocation()

    return (
        <div className="nav-link-container">
                <NavLink to="/">
                    <span
                        className="home-icon material-icons-outlined"
                    >
                        home
                    </span>
                </NavLink>                
                <NavLink
                    to="/appetizer"
                    className={pathname === "/appetizer" ? "highlited" : "header-link"}
                >
                    Appetizer
                </NavLink>
                <NavLink
                    to="/main_course"
                    className={pathname === "/main_course" ? "highlited" : "header-link"}
                >
                    Main Course
                </NavLink>
                <NavLink
                    to="/side_dish"
                    className={pathname === "/side_dish" ? "highlited" : "header-link"}
                >
                    Side Dish
                </NavLink>
                <NavLink
                    to="/dessert"
                    className={pathname === "/dessert" ? "highlited" : "header-link"}
                >
                    Dessert
                </NavLink>          
            </div>
    )
}