import React from 'react'
import "./Projects.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import amazonImage from "../assets/amazon shopping.jpg"
import Game2048 from "../assets/2048gamesnapshot.jpg"
import lostandfound from "../assets/lafimgae.png"

function Projects() {
  return (
    <div className="projects__maincontainer">
        <div className="projects__mainheading">
            <h4>Browse My Recent</h4>
            <h1>Projects</h1>
        </div>

        <div className="projects__mainbody">
            <div className="project__one">
                <img src={amazonImage} alt="amazon_svg" className='projectsAmazonImage' />
                <h2 className='projects__projectHeader'>Amazon-Clone&ensp;<a href="https://challenge-dc623.firebaseapp.com/"><FontAwesomeIcon icon={faUpRightFromSquare} size="2xs" /> </a></h2>
                <p>A copy of amazon with more advanced features using REACT-JS.</p>
                
            </div>
            <div className="project__two">
                <img src={Game2048} alt="2048_svg" className='Game2048Image' />
                <h2 className='projects__projectHeader'>2048 Game&ensp;<a href="https://charanskc.github.io/Clone-2048/"><FontAwesomeIcon icon={faUpRightFromSquare} size="2xs" /></a> </h2>
                <p>A game of 2048 as web application.</p>
            </div>
            <div className="project__three">
                <img src={lostandfound} alt="laf_svg" className='lostandfoundImage'/>
                <h2 className='projects__projectHeader'>Lost and Found&ensp;<a></a><FontAwesomeIcon icon={faUpRightFromSquare} size="2xs" /> </h2>
                <p>A platform where people from an organization can go if they find any items or if they loose.</p>
            </div>
        </div>

    </div>
  )
}

export default Projects;