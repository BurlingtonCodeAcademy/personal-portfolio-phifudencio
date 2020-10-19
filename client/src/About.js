import React from 'react'
import "./About.css" 
import Mypic from "./img/mypic.jpg"
function About() {
    return (
        <body>
        <div class="aboutMe">
        
        <img class="about_pic" src={Mypic}></img>
        <div class="about_txt">
           <h1 class="h1_home">About Me</h1> 
           <h3 id="about">My name is Mathes Drumond, I'm a Student and avid Jiu-Jitsu fighter. Currently I'm working with cleaning.</h3>
           <h1 class="h1_home">Contact Details</h1>
           <p id="about">Matheus Drumond</p>
           <p id="about">123 Fake Street</p>
           <p id="about">Minas Gerais Brazil,ABC 123</p>
           <p id="about">+1 123 456 7890</p>
           <p id="about">fake_email@gmail.com</p>
           <button id="resume_button">Download Resume</button>
           </div>
           
        </div>
        </body>
    )
}

export default About
