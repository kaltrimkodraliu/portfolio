import "../styles/WorkCardStyles.css";
import React from "react"
import WorkCard from "./WorkCard";
import WorkData from "./WorkData"

const Work = () => {
    return <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkData.map((item, ind) =>{
                return(
                    <WorkCard 
                    key={ind}
                    imgsrc={item.imgsrc}
                    title={item.title}
                    text ={item.text}
                    link ={item.link}
                    />
                )
            })}
        </div>
    </div>
};

export default Work;