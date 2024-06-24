import React from 'react'
import "./Experience.css";

function Experience() {
  return (
    <div className="experience__maincontainer">
        <div className="experience__mainheading">
            <h4>Explore My</h4>
            <h1>Experience</h1>
        </div>
        <div className="experience__mainbody">
            <div className="experience__objectoriented">
                <h2 className="objectoriented__heading">
                    Object-Oriented
                </h2>
                <div className="objectoriented__textbox">
                    <p>Java</p>
                    <span>Intermediate</span>
                </div>
                <div className="objectoriented__textbox">
                    <p>C</p>
                    <span>Intermediate</span>
                </div>
                <div className="objectoriented__textbox">
                    <p>Python</p>
                    <span>Intermediate</span>
                </div>
            </div>
            <div className="experience__frontend">
                <h2 className="frontend__heading">
                    Frontend Development
                </h2>
                <div className="skills__box">
                    <div className="frontend__textbox">
                        <p>HTML</p>
                        <span>Experienced</span>
                    </div>
                    <div className="frontend__textbox">
                        <p>CSS</p>
                        <span>Experienced</span>
                    </div>
                    <div className="frontend__textbox">
                        <p>Javascript</p>
                        <span>Intermediate</span>
                    </div>
                    <div className="frontend__textbox">
                        <p>React</p>
                        <span>Intermediate</span>
                    </div>
                    <div className="frontend__textbox">
                        <p>PHP</p>
                        <span>Basic</span>
                    </div>
                </div>
            </div>
            <div className="experience__backend">
                <h2 className="backend__heading">
                    Backend Development
                </h2>
                <div className="skills__box__backend">
                    <div className="backend__textbox">
                        <p>Node JS</p>
                        <span>Intermediate</span>
                    </div>
                    <div className="backend__textbox">
                        <p>SQL</p>
                        <span>Intermediate</span>
                    </div>
                    <div className="backend__textbox">
                        <p>Express JS</p>
                        <span>Intermediate</span>
                    </div>
                    <div className="backend__textbox">
                        <p>GIT</p>
                        <span>Intermediate</span>
                    </div>
                </div>
            </div>
            <div className="experience__networking">
                <h2 className="networking__heading">
                    Networking Automation
                </h2>
                <div className="skills__box__networking">
                <div className="networking__textbox">
                    <p>Kubernetes</p>
                    <span>Basic</span>
                </div>
                <div className="networking__textbox">
                    <p>Docker</p>
                    <span>Basic</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience;