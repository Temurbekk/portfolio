import React from "react";
import Bouce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

import data from "../../Data";
import profilePic from "../../Assets/profile_pic.jpg";

const About = () => {
  return (
    <div className="columns">
      <div className="column">
        <Zoom>
          <figure className="image is-square">
            {data.ShowAboutImage ? (
              <img className="is-rounded" src={profilePic} alt="Profile" />
            ) : null}
          </figure>
        </Zoom>
      </div>
      <div className="column ml-5 mr-5">
        <h1>
          <Bouce right>
            <h1 className="title is-2">Hello, My name is Temurbek.</h1>
            <br />
          </Bouce>
        </h1>
        <Bouce right>
          {data.about.map((link, idx) => (
            <div key={idx}>
              <p className="is-size-4">{link.abouttext}</p>
              <br />
            </div>
          ))}
        </Bouce>
      </div>
    </div>
  );
};

export default About;
