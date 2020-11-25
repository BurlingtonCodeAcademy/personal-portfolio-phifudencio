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
      </div>
      {/*Tex that goes in the middle off the page */}
      <div className="bannerTxt">
        <h1>I'm Matheus Drumond</h1>
        <h3>
          I'm a Vermont based <span>Student && Jiu-Jitsu Fighter</span> by day,
          and programer by night.
        </h3>

        {/*Pictures that goes to social media */}
        <div className="social">
          <a id="social_icon" href="https://www.facebook.com/mhDrumond/">
            {/*Facebook Link */}
            <img className="img" src={Facebook}></img>
          </a>
          <a id="social_icon" href="https://www.instagram.com/mathewszhd/">
            {/*Instagram Link */}
            <img className="img" src={Instagram}></img>
          </a>
          <a
            id="social_icon"
            href="https://www.linkedin.com/in/matheus-drumond-75112b1b8/"
          >
            {/*Linkedin  Link */}
            <img id="link" className="img" src={Linkedin}></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
