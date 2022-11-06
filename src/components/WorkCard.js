import "./WorkCardStyles.css"
import React from "react"
import pro1 from "../assets/pybuddy.PNG";
import { Link, NavLink } from "react-router-dom";

const WorkCard = (props) => {
    return(
            <div className="project-card">
                <img src={props.imgsrc} alt="image" />
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                         <a href={props.link}
                         
                        className="btn">View</a>
                    </div>
                </div>
            </div>
    );
};

export default WorkCard;