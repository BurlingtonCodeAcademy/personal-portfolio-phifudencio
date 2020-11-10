import React from "react";
import "./About.css";
import Mypic from "../img/mypic.jpg";

function About() {
  return (
    <div>
      <div id="aboutMe">
        <img className="about_pic" src={Mypic}></img>
        <div className="about_txt">
          <h1 className="h1_home">About Me</h1>
          <h3 id="about">
            My name is Mathes Drumond, I'm a Student and avid Jiu-Jitsu fighter.
            Currently I'm working with cleaning.
          </h3>
          <h1 className="h1_home">Contact Details</h1>
          <p id="about">Matheus Drumond</p>
          <p id="about">123 Fake Street</p>
          <p id="about">Minas Gerais Brazil,ABC 123</p>
          <p id="about">+1 123 456 7890</p>
          <p id="about">fake_email@gmail.com</p>
          <button className="resume_button">Download Resume</button>
        </div>
      </div>
    </div>
  );
}

export default About;
