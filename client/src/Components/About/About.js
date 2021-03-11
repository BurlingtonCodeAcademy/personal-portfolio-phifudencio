//Imports off css and images.
import React from "react";
import "./About.css";
import Mypic from "../img/mypic.jpg";
import Resume from "../img/Resume.pdf";

function About() {
  return (
    <div id="aboutMe">
    <div className="about_desc">
    <div className="about_img">
     <img src={Mypic}></img>
    </div>
    <div className="about_txt">
    <div className="about_me">
    <h2>About me</h2>
    <p>My name is Matheus Drumond, I'm Brazilian living in United States.</p>
    </div>
    <div className="about_contact">
<h2>Contact Me</h2>
<ul style={{ listStyle: "none" }}>
          <li>Matheus Drumond</li>
          <li>matheus9d6@gmail.com</li>
        </ul>
    </div>
    <div>
    <a className="button" href={Resume} download>
          Download Resume
        </a></div> 
    </div>
    </div>
    </div>
  );
}

export default About;
