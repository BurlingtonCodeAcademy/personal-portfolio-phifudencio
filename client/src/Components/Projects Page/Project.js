/* Imports from react and css */
import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

/*Images imports */
import Remock from "../img/Remock.JPG";
import TicTacToe from "../img/Tic-Tac-Toe.JPG";
import Yelp from "../img/Yelp.JPG";
import Zork from "../img/Zork.JPG";

function Project() {
  return (
    <div>
      <h1 className="project_title">Projects Page</h1>
      <div className="container">
        {/* Project page container */}
        <div className="right">
          <div className="image_row">
            {/* Container for the project */}
            <p>Web Site Remock</p>
            <Link to="/project/description/Remock">
              <img src={Remock}></img>
            </Link>
          </div>
          <div className="image_row">
            {/* Container for the project */}
            <p>Tic-Tac-Toe</p>
            <Link to="/project/description/TicTacToe">
              <img src={TicTacToe}></img>
            </Link>
          </div>
          <div className="image_row">
            {/* Container for the project */}
            <p>Burlington Yelpitong</p>
            <Link to="/project/description/Yelpington">
              <img src={Yelp}></img>
            </Link>
          </div>
        </div>
        <div className="right">
          {/* Right side of the project page*/}
          <div className="image_row">
            {/* Container for the project */}
            <p>Zorkington</p>
            <img src={Zork}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
