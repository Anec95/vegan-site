import { useState } from "react"
import { Link } from "react-router-dom"
import "./right-section.css"

export default function RightSection() {
    const [info, setInfo] = useState(false)

    function handleInfo() {
        setInfo(oldValue => !oldValue)
    }
    return (
        <section className='right-section'>
            <div className="info-container">
                <button onClick={handleInfo} className="infoBtn">Contacts</button>
                {info &&
                    <div className="info-hiddenDiv">
                        <p>WebSite created by Thomas Miori</p>
                        <Link to="https://github.com/Anec95" target="_blank">Thomas Miori - Portfolio</Link>
                    </div>
                } 
            </div>
        </section>
    )
}