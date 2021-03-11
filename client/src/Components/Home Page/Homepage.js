import React from "react";
import "./Home.css";
import Banner from "../img/banner.jpg";
import Facebook from "../img/social/facebook.svg";
import Instagram from "../img/social/instagram.svg";
import Linkedin from "../img/social/linkedin.svg";

function Homepage() {
  return (
    <div className="banner_row">
      <div className="background">
        <img id="banner" src={Banner}></img>
        <div className="txt">
          <div id="title">
            <h1>I'm Matheus Drumond</h1>
          </div>
          <h3>
            I'm a Vermont based <span>Student && Jiu-Jitsu Fighter</span> by
            day, and programer by night.
          </h3>
        </div>
      </div>
      <div className="social">
        <ul className="social_list">
          <li>
            <a href="https://www.instagram.com/matheus9d6/">
              <img id="my-" src={Instagram} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/mhDrumond">
              <img id="my-" src={Facebook} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/matheus-drumond-75112b1b8/">
              <img id="my-" src={Linkedin} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Homepage;
