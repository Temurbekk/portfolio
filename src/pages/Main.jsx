import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Main = () => (
  <Switch>
    <Route exact path='/portfolio' component={Home} />
    <Route path='/About' component={About} />
    <Route path='/Projects' component={Projects} />
    <Route path='/Contact' component={Contact} />
  </Switch>
);

export default Main;
