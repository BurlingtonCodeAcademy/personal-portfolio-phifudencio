import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import About from "./About";
import Resume from "./Resume";
import Footer from "./Footer";
import Project from "./Project";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/Projects" component={Project} />
          <Route exact path="/">
            <Homepage />
            <About />
            <Resume />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
