import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Zoom } from "react-reveal";

const NavBar = () => {
  const [menuIsDisplayed, setMenuIsDisplayed] = useState(false);
  return (
    <div
      className="navbar has-shadow mobile"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <Zoom right cascade>
            <h1 className="title is-size-1">iTemur</h1>
          </Zoom>
        </Link>

        <div
          className={`navbar-burger ${menuIsDisplayed ? "is-active" : ""}`}
          onClick={() => setMenuIsDisplayed(!menuIsDisplayed)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className={`navbar-menu ${menuIsDisplayed ? "is-active" : ""}`}>
        <div className="navbar-end">
          <Link to="/projects" className="navbar-item">
            Projects
          </Link>
          <Link to="/experiences" className="navbar-item">
            Experiences
          </Link>
          <Link to="/contact" className="navbar-item">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
