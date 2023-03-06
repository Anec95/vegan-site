import { NavLink } from "react-router-dom"


export default function MenuCard(props) {
    console.log(props.name, props.value)
    return (
        <div
            name={props.name}
            value={props.value}
            onMouseEnter={props.handleFunction}
            className={props.element ? `menu-showed menu-element ${props.number}` : `menu-element ${props.number}`}
        >
            <div
                className={props.element ? `${props.color} menu-container menu-list-showed` : `${props.color} menu-container`}
            >
                {props.element === false && props.vertical_name}
                <NavLink
                    to={props.link}
                    className={props.element ? `menu-list show-img ${props.name_section}` : `menu-list ${props.name_section}`}
                >
                    {props.element &&<p className='title-inside-img animate__animated animate__flipInX'>{props.name_menu}</p>}
                </NavLink>
            </div>
        </div>
)
}