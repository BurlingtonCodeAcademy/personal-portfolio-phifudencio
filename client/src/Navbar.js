import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <body>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap');
      </style>
      <nav>
        <div class="logo">
          <h4>The Nav</h4>
        </div>
        <ul className="ullist">
          <li><a className="tag" href="#">Home</a></li>
          <li><a className="tag" href="#">About</a></li>
          <li><a className="tag" href="#">Work</a></li>
          <li><a className="tag" href="#">Projects</a></li>
        </ul>
        <div class="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </nav>
    </body>
  );
}

export default Navbar;
