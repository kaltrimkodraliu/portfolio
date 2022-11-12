import "../styles/FooterStyles.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
    FaHome,
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
                    <p>Im friendly Front-End Developer</p>
                    <div className='icons'>
                        <a href="https://www.linkedin.com/in/kaltrim-kodraliu-1838081aa/"><FontAwesomeIcon className='icon fa-2xl' icon={faLinkedin} style={{
                            color:
                                "#fff", marginRight: "2rem"
                        }} /></a>

                        <a href="https://github.com/kaltrimkodraliu"><FontAwesomeIcon className='icon fa-2xl' icon={faGithub} style={{
                            color:
                                "#fff", marginRight: "2rem"
                        }} /></a>

                        <a href="https://www.facebook.com/kaltrim.kodraliu"><FontAwesomeIcon className='icon fa-2xl' icon={faFacebook} style={{
                            color:
                                "#fff", marginRight: "2rem"
                        }} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;