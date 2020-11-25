import React from "react";
import Navbar from "./Components/Nav Bar/Navbar";
import Homepage from "./Components/Home Page/Homepage";
import About from "./Components/About/About.js";
import Resume from "./Components/Resume/Resume";
import Footer from "./Components/Footer/Footer";
import Project from "./Components/Projects Page/Project";
import Remock from "./Components/Project Description/Remock"
import Hobbies from "./Components/Hobbies/Hobbie"
import TicTacToe from "./Components/Project Description/TicTacToe"
import Yelp from "./Components/Project Description/Yelp"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/project/description/Remock" component={Remock}/>
          <Route path="/project/description/TicTacToe" component={TicTacToe}/>
          <Route path="/project/description/Yelpington" component={Yelp}/>
          <Route path="/Projects" component={Project} />
          <Route path="/Hobbies" component={Hobbies}/>
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
