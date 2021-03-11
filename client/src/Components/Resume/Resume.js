import React from "react";
import "./Resume.css";
function Resume() {
  return (
    /* Resume Container */
    <div className="resume_container">
      <div className="resume_c">
        <div className="resume_edu">
          <div className="resume_title">
            <h1>Education</h1>
          </div>
          <div className="resume_txt">
            <h2>Burlington Code Academy</h2>
            <p>Full Stack Web Developer - December 4/2020</p>
            <p></p>
          </div>
        </div>
        <div className="line"></div>
        <div className="resume_work">
          <div className="resume_title">
            <h1>Work</h1>
          </div>
          <div className="resume_txt">
            <h2>Drumond Cleaning Services</h2>
            <p>Floor Cleaner - January 2014 - Present</p>
            <br></br>
            <h2>National Maintenance Supply & Service Co. LLC</h2>
            <p>Field Support - January 2021 - Present</p>
          </div>
         
          
          
        </div>
      </div>
    </div>
  );
}

export default Resume;
