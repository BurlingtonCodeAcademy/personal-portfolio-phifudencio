import React from "react";
import "./Projects.css";
import Remock from "../img/Remock.JPG"
import TicTacToe from "../img/Tic-Tac-Toe.JPG"
import Yelp from "../img/Yelp.JPG"
import Zork from "../img/Zork.JPG"
import {Link} from "react-router-dom";

function Project() {
  return (
    <div>
      <h1 className="project_title">Projects Page</h1>
      <div className="container">
        <div className="right">
          <div className="image_row">
          <p>Web Site Remock</p>
           <Link to="/project/description"> <img src={Remock}></img></Link>
          </div>
          <div className="image_row">
          <p>Tic-Tac-Toe</p>
            <img src={TicTacToe}></img>
          </div>
          <div className="image_row">
          <p>Burlington Yelpitong</p>
            <img src={Yelp}></img>
          </div>
        </div>
        <div className="right">
          <div className="image_row">
          <p>Zorkington</p>
            <img src={Zork}></img>
          </div>
        </div>
      
    </div>
    </div>
  );
}

export default Project;
