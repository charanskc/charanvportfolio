import React from 'react'
import "./Contact.css";


function Contact() {
  return (
    <div className="contact__maincontainer">
        <div className="contact__mainheading">
            <h4>Get In Touch</h4>
            <h1>Contact Me</h1>
        </div>
        <div className="contact__mainbody">
            <h4 className="contact__email"><a href="mailto:charanskc7@gmail.com">charanskc7@gmail.com</a></h4>
            <h4 className="contact__linkedin"><a href="https://www.linkedin.com/in/sai-charan-v-ba7a04184/">LinkedIn</a></h4>
        </div>
    </div>
  )
}

export default Contact;