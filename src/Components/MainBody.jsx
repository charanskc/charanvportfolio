import React, { useState } from 'react'
import "./MainBody.css";
import MyImage from "../assets/WhatsApp Image 2024-06-10 at 16.42.51.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import myResume from "D:/Documents/projects/portfolio/src/assets/Vayigandla Sai Charan Resume.pdf"


function MainBody() {
  //an idea addition to this is to change this resume dynamically if i upload it from somewhere else.
  const handleResumeDownload = () => {
    fetch(myResume)
    .then(response =>  response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download',"Vayigandla Sai Charan Resume.pdf");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    })
    .catch(error => {
      console.error("Error downloading pdf: ",error);
    })
  }

  const [modal,setModal] = useState(false);

  const handleContactDetails = () =>{
    setModal(!modal);
  }

  modal ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal');

  const handleGithubProfile = () =>{
    window.open("https://github.com/charanskc",'_blank');
  }

  const handleLinkedIn = () =>{
    window.open("https://www.linkedin.com/in/sai-charan-v-ba7a04184/",'_blank');
  }

  return (
    <div className="mainbody__container">
      {modal && (
        <div className="modal">
          <div onClick={handleContactDetails} className="overlay"></div>
          <div className="modal-content">
          <div className="contact__mainheading">
            <h1>Contact Me</h1>
        </div>
        <div className="contact__mainbody">
            <h4 className="contact__email"><a href="mailto:charanskc7@gmail.com">charanskc7@gmail.com</a></h4>
            <h4 className="contact__linkedin"><a href="https://www.linkedin.com/in/sai-charan-v-ba7a04184/">LinkedIn</a></h4>
        </div>
            <button className="close-modal" onClick={handleContactDetails}>
              CLOSE
            </button>
          </div>
        </div>
      )}    
        <img src={MyImage} alt="user_img" className='mainbody__image' />       
        <div className="mainprofile__content">
            <h5>Hello, I'm</h5>
            <h3>Sai Charan V</h3>
            <h2>Full Stack Developer</h2>
            <div className="main_profile__buttons">
                <button className="mainprofile__download__resume" onClick={handleResumeDownload}>Download CV</button>
                <button className="mainprofile__contact__info" onClick={handleContactDetails}>Contact Info</button>
            </div>
            <div className="main_profile_icon_links">
              <FontAwesomeIcon icon={faGithub} className='github_icon' onClick={handleGithubProfile} />
              <FontAwesomeIcon icon={faLinkedin} className='linkedin_icon' onClick={handleLinkedIn}/>
            </div>
        </div>
    </div>
  )
}

export default MainBody