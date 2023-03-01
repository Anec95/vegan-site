import logo from "Assets/images/logo-potato-removebg-preview.png"
import Nav from "./Nav/Nav";
import SearchBox from "./SearchBox/SearchBox";
import "./header.css"


export default function Header({handleSearch}) {
    return (
        <nav className="header-navbar">
            <Nav />
            <SearchBox handleSearch={handleSearch} />
            <div className="logo-container">
                <img className="logo-header" alt="logo" src={logo} />
            </div>
        </nav>
    )
}