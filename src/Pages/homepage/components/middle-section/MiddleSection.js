import logo from "Assets/images/logo-potato-removebg-preview.png"
import "./middle-section.css"

export default function MiddleSection(props) {
    return (
        <section className='middle-section'>
            <div className='info-association-container'>
                <h1 className='name-association'>VaaoV</h1>
                <img className='logo' src={logo} alt='vegan site logo' />                    
            </div>
                <form
                    onSubmit={props.handleSubmit}
                >
                    <input
                        className="research-box"
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
        </section>
    )
}