import "./FooterStyles.css";
import React from "react";
import {
    FaFacebook,
    FaGithub,
    FaHome,
    FaLinkedin,
    FaMailBulk,
    FaPhone
}
    from "react-icons/fa"


const Footer = () => {
    return (
        <div className="foter">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Podujeve Kosove</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{
                                color:
                                    "#fff", marginRight: "2rem"
                            }} />
                            +38345624785
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{
                                color:
                                    "#fff", marginRight: "2rem"
                            }} />
                            kodraliukaltrim@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About me</h4>
                    <p>I am a React Developer</p>
                    <div className="social">
                        <FaLinkedin size={30} style={{
                            color:
                                "#fff", marginRight: "1rem"
                        }} />
                        <FaGithub size={30} style={{
                            color:
                                "#fff", marginRight: "1rem"
                        }} />
                        <FaFacebook size={30} style={{
                            color:
                                "#fff", marginRight: "1rem"
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;