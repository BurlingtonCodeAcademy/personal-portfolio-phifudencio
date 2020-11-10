import React from "react";
import "./Home.css";
import Banner from "../img/banner.jpg";
import Facebook from "../img/facebook.svg"
import Instagram from "../img/instagram.svg"
import Linkedin from "../img/linkedin.svg"


function Homepage() {
  return (
    <body id="home">
      <div className="banner_row">
        <img id="banner"src={Banner}></img>
        <div className="bannerTxt">
          <h1>I'm Matheus Drumond</h1>
          <h3>I'm a Vermont based <span>Student && Jiu-Jitsu Fighter</span> by day, and programer by night.</h3>
           <div className="tagSocial">
           <div className="social">
       <a id="social_icon1" href="https://www.facebook.com/mhDrumond/"><img className="img" src={Facebook}></img></a> 
       <a id="social_icon2" href="https://www.instagram.com/mathewszhd/"><img className="img" src={Instagram}></img></a> 
        <a id="social_icon3" href="https://www.linkedin.com/in/matheus-drumond-75112b1b8/"><img id="link"className="img" src={Linkedin}></img></a>
        </div>
        </div>
        </div>
        
      </div>
    </body>
  );
}

export default Homepage;
