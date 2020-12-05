import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Zoom } from "react-reveal";

const NavBar = () => {
  const [menuIsDisplayed, setMenuIsDisplayed] = useState(false);
  const handleClick = () => setMenuIsDisplayed(!menuIsDisplayed);

  return (
    <div
      className="navbar has-shadow mobile"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Zoom right cascade>
          <Link to="/" className="navbar-item">
            <h1 className="title is-size-1">iTemur</h1>
          </Link>
        </Zoom>

        <div
          className={`navbar-burger ${menuIsDisplayed ? "is-active" : ""}`}
          onClick={handleClick}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className={`navbar-menu ${menuIsDisplayed ? "is-active" : ""}`}>
        <div className="navbar-end" onClick={handleClick}>
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
