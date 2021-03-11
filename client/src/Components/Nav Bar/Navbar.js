import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {Navbar,Nav} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
function Navs() {
  return (
    <div>
    
      <Navbar bg="dark" expand="lg">
      <Navbar.Brand style={{fontSize:"32px",}}> <Link style={{color:"inherit", textDecoration:"none"}} to="/">M H D</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto" activeKey="/home" style={{paddingRight:"80px"}}>
    <Nav.Item >
      <Nav.Link ><Link style={{textDecoration:"none", color: "inherit", fontSize:"28px", paddingRight:"10px"}} to="/Projects">Projects</Link></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link style={{fontSize:"28px",paddingRight:"10px"}} href="#aboutMe">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link style={{fontSize:"28px",}} ><Link style={{extDecoration:"none", color: "inherit",paddingRight:"10px"}}to="/Hobbies">Hobbies</Link></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link style={{fontSize:"28px",}}eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
  </Navbar.Collapse>
      </Navbar>
    </div>
    
  );
}

export default Navs;
