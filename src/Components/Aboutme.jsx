import React from 'react';
import "./Aboutme.css";
import SecondImage from "../assets/WhatsApp Image 2023-09-05 at 01.09.45 (1).jpeg";

function Aboutme() {
  return (
    <div className="aboutme__maincontainer">
        <div className="aboutme__mainheading">
            <h4>Get to know more</h4>
            <h1>About Me</h1>
        </div>

        <div className="aboutme__body">
            <div className="body__profileimage">
            <img src={SecondImage} alt="second image" className='body__secondimage'/>
            </div>
            <div className="body__information">
                <div className="bodyinformation__experience">
                    <h4>Experience</h4>
                    <p>10mos</p>
                    <p>Automation Testing</p>
                </div>
                <div className="bodyinformation__education">
                    <h4>Education</h4>
                    <p>Integrated M.Tech</p>
                    <p>Software Engineering</p>
                </div>
                <div className="bodyinformation__introduction">
                    <p>" I am V Sai Charan, a highly motivated Software Engineer with a strong commitment to
leveraging my technical expertise to drive excellence within esteemed organizations. 
With a current pursuit of an Integrated M.Tech in Software Engineering from Vellore 
Institute of Technology, I have achieved a notable CGPA of 8.47. "</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Aboutme;