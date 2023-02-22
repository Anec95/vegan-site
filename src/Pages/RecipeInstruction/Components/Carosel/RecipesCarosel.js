import React from "react";
import photo from "Assets/images/main-two.jpg"
import CardCarosel from "./card-carosel/CardCarosel"

export default function RecipesCarosel() {
    return (
        <nav className="carosel-navbar">
            <div className="carosel-container">
                <div className="carosel-card">
                    <img className="carosel-img" src={photo} />
                    <h3 className="carosel-title">Title</h3>
                </div>
                <div className="carosel-card">
                    <img className="carosel-img" src={photo} />
                    <h3 className="carosel-title">Title</h3>
                </div>
                <div className="carosel-card">
                    <img className="carosel-img" src={photo} />
                    <h3 className="carosel-title">Title</h3>
                </div>
                <div className="carosel-card">
                    <img className="carosel-img" src={photo} />
                    <h3 className="carosel-title">Title</h3>
                </div>
                <div className="carosel-card">
                    <img className="carosel-img" src={photo} />
                    <h3 className="carosel-title">Title</h3>
                </div>
                <div className="carosel-card">
                    <img className="carosel-img" src={photo} />
                    <h3 className="carosel-title">Title</h3>
                </div>
                <div className="carosel-card">
                    <img className="carosel-img" src={photo} />
                    <h3 className="carosel-title">Title</h3>
                </div>
                <div className="carosel-card">
                    <img className="carosel-img" src={photo} />
                    <h3 className="carosel-title">Title</h3>
                </div>
                <div className="carosel-card">
                    <img className="carosel-img" src={photo} />
                    <h3 className="carosel-title">Title</h3>
                </div>
                <div className="carosel-card">
                    <img className="carosel-img" src={photo} />
                    <h3 className="carosel-title">Title</h3>
                </div>
            </div>
        </nav>
    )
}