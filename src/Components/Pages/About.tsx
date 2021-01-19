import React, { FC } from "react";
import Bouce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

import data from "../../Data/";
import profilePic from "../../Assets/profile_pic.jpg";

const About: FC = () => {
  return (
    <div className="columns">
      <Zoom>
        <div className="column">
          <figure className="image is-square">
            <img className="is-rounded" src={profilePic} alt="Profile" />
          </figure>
        </div>
      </Zoom>
      <Bouce right>
        <div className="column ml-5 mr-5">
          <h1 className="title is-2">Hello, My name is Temurbek.</h1>
          {data.about.map((link, idx) => (
            <div key={idx}>
              <p className="is-size-4 mb-5">{link.abouttext}</p>
            </div>
          ))}
        </div>
      </Bouce>
    </div>
  );
};

export default About;
