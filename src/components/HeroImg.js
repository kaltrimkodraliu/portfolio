import "../styles/HeroImgStyles.css";
import React from "react";
import { Link } from "react-router-dom";



const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img"
                    src={process.env.PUBLIC_URL + "/assets/laptop-background.jpg"} alt="IntroImg" />
            </div>
            <div className="content">
                <p>Hi, I'M KALTRIM KODRALIU</p>
                <h1>React Developer.</h1>
                <div>
                    <Link to="/project"
                        className="btn">
                        Projects
                    </Link>
                    <Link to="/contact"
                        className="btn btn-light">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroImg;