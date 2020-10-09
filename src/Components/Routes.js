import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "./Pages/About";
import Projects from "./Pages/Projects/Projects";
import Experiences from "./Pages/Experiences/Experiences";
import Contact from "./Pages/Contact";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route exact path="/experiences" component={Experiences} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default Routes;
