import "./AboutContentStyle.css";
import React from "react";
import { Link } from "react-router-dom";
import rr from "../assets/rr.jpg"


const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>Im a react front-end developer. I create
                    responsive secure websites for my clients.
                </p>
                <Link to="/contact">
                    <button className="btn">Contact</button>

                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={rr} alt="true"></img>

                    </div>
                </div>
            </div>
        </div>
    )
};
export default AboutContent;