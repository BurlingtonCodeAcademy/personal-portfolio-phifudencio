import React from "react";
import "./Resume.css";
function Resume() {
  return (
    /* Resume Container */
    <div className="resume_container">
    {/* Container for Education */}
      <div className="container_education" id="education">
        <div className="title"> {/* Title */}
          <h1>Education</h1>
        </div>
        {/* Places that i did my Education */}
        <div className="description">
          <h2>Burlington Code Academy</h2>
          <p>Full Stack Web Developer - December 4</p>
        </div>
      </div>
      {/* Work Container */}
      <div class="line"></div>{/* Lines Drawing */}
      <div className="container_work" id="Work">
        <div className="title">
          <h1>Work</h1>
        </div>
        {/* Description were i worked */}
        <div className="description">
          <h2>Drumond Cleaning Services</h2>
          <p>Floor Cleaner - January 2014 - Present</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
