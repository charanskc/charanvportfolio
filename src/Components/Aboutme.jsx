import React from 'react';
import "./Aboutme.css";
import timelineElements from "../assets/timelineElements";
import {ReactComponent as SchoolIcon} from "../assets/school.svg";
import {ReactComponent as WorkIcon} from "../assets/work.svg";
import {ReactComponent as FreelancingIcon} from "../assets/software-developer-work-on-computer-programmer-coder-svgrepo-com.svg";
import {ReactComponent as FullTimeIcon} from "../assets/user-tie-svgrepo-com.svg";
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';

function Aboutme() {

  return (
    <div className="aboutme__maincontainer">
        <div className="aboutme__mainheading">
            <h4>Get to know more about my</h4>
        </div>

            <div className="bodyinformation__education">
                    <h4>Education</h4>
                    <p>Integrated M.Tech, Software Engineering</p>
                <div className="bodyinformation__introduction">
                        <p>" Heyy, I'm Charan, a highly motivated Software Engineer with a strong commitment to
    leveraging my technical expertise to drive excellence within esteemed organizations. 
    With a current pursuit of an Integrated M.Tech in Software Engineering from Vellore 
    Institute of Technology, I have achieved a notable CGPA of 8.47. "</p>
                </div>
            </div>

        <div className="bodyinformation__experience">
            <h1>Experience</h1>
            <VerticalTimeline animate={true}>
                {timelineElements.map((element) =>{

                    let isWorkIcon = element.icon === "work";
                    let isFreelancingIcon = element.icon ==="freelancing";
                    let isFullTimeIcon = element.icon ==="fulltime";

                    return (
                        <VerticalTimelineElement 
                            className='experience__card'
                            key={element.id}
                            date={element.date}
                            dateClassName='date'
                            icon={isWorkIcon ? <WorkIcon /> : (isFreelancingIcon ? <FreelancingIcon/> : (isFullTimeIcon ? <FullTimeIcon/> : <SchoolIcon/>))}
                        >
                            
                            <h3 className='vertical-timeline-element-title'>{element.title}</h3>
                            <h5 className='vertical-timeline-element-subtitle'>{element.subtitle}</h5>
                            <p id="description">{element.description}</p>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>

    </div>
  )
}

export default Aboutme;