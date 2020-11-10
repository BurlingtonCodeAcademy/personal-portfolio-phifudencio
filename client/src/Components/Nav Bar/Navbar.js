import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap');
      </style>
      <nav>
        <div className="logo">
          <h4>The Nav</h4>
        </div>
    
          <ul className="ullist">
            <Link className="tag" to="/">
              Home
            </Link>
            <a className="tag" href="#aboutMe">
              About
            </a>
            <Link className="tag" to="/Projects">
              Projects
            </Link>
          </ul>
        
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
