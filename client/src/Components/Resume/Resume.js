import React from "react";
import "./Resume.css";
function Resume() {
  return (
    <div className="resume_container">
      <div className="container_education" id="education">
        <div className="title">
          <h1>Education</h1>
        </div>
        <div className="description">
          <h2>Burlington Code Academy</h2>
          <p>Full Stack Web Developer - December 4</p>
        </div>
      </div>
      <div class="line"></div>
      <div className="container_work" id="Work">
        <div className="title">
          <h1>Work</h1>
        </div>
        <div className="description">
          <h2>Drumond Cleaning Services</h2>
          <p>Floor Cleaner - January 2014 - Present</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
