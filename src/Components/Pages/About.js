import React from "react";
import Fade from "react-reveal/Fade";
import data from "../../Data";

import profilePic from "../../Assets/profile_pic.png";

const About = () => {
  return (
    <div className="columns">
      <div className="column">
        <Fade left>
          <figure className="image is-320x640">
            {data.ShowAboutImage ? (
              <img className="is-rounded" src={profilePic} alt="Profile" />
            ) : null}
          </figure>
        </Fade>
      </div>
      <div className="column ml-5">
        <h1>
          <Fade bottom cascade>
            <h1 className="title is-2">Hello, My name is Temurbek.</h1>
            <br />
          </Fade>
        </h1>
        <Fade bottom>
          {data.about.map((link, idx) => (
            <div key={idx}>
              <p className="is-size-4">{link.abouttext}</p>
              <br />
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default About;
