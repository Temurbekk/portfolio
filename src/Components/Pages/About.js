import React from "react";
import Fade from "react-reveal/Fade";
import data from "../../Data";

import profilePic from "../../Assets/profile_pic.png";

const About = () => {
  return (
    <div>
      <div className="columns about-content">
        <div className="column">
          <Fade left>
            <figure className="image is-320x640">
              {data.ShowAboutImage ? (
                <img
                  className="is-rounded"
                  src={profilePic}
                  alt="about image"
                />
              ) : null}
            </figure>
          </Fade>
        </div>
        <div className="column">
          <h1>
            <Fade bottom cascade>
              Hello, My name is Temur.
            </Fade>
          </h1>
          <Fade bottom>
            {data.about.map((link, idx) => (
              <div key={idx}>
                <p>{link.abouttext}</p>
                <br />
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
