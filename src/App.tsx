import React, { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Components/Routes";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App: FC = () => {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <br />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
