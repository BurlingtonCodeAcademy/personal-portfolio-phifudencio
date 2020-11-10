import React from "react";
import Navbar from "./Components/Nav Bar/Navbar";
import Homepage from "./Components/Home Page/Homepage";
import About from "./Components/About/About.js";
import Resume from "./Components/Resume/Resume";
import Footer from "./Components/Footer/Footer";
import Project from "./Components/Projects Page/Project";
import Description from "./Components/Project Description/Description"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/project/description" component={Description}/>
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
