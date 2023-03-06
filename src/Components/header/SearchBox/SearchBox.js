import { useState } from "react";

export default function SearchBox({handleSearch}) {
    const [ingredients, setIngredients] = useState("")

    function handleChange(event) {
        setIngredients(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        handleSearch(ingredients)
        setIngredients("")
    }

    return (
        <form
            className="searchbar-header-container"
            onSubmit={handleSubmit}
        >
            <input
                className="research-box text-area-header"
                type="text"
                value={ingredients}
                onChange={handleChange}                   
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
    )
}