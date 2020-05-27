import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./Components/Pages/About";
import Projects from "./Components/Pages/Projects";
import Experience from "./Components/Pages/Experience";
import Contact from "./Components/Pages/Contact";

import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Experience" component={Experience} />
          <Route path="/Contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
