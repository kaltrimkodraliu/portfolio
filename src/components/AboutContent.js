import "../styles/AboutContentStyle.css";
import React from "react";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>Im a react front-end developer. I create
                    responsive secure websites for my clients.
                </p>
                <a className='btn mt-3' href={"assets/documents/KaltrimKodraliu-CV.pdf"} download>Download CV</a>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                    <h1>Skills</h1>
                        <img src={"assets/1.png"} alt="true"></img>

                    </div>
                </div>
            </div>
        </div>
    )
};
export default AboutContent;