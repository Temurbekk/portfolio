import React from "react";
import Fade from "react-reveal/Fade";

import Experience from "./Experience";
import data from "../../../Data";

const Experiences = () => {
  return (
    <div>
      <h1 className="heading">
        <Fade bottom cascade>
          <h1 className="title">Experience</h1>
        </Fade>
      </h1>
      <div className="columns">
        {data.projects.map((project) => (
          <div className="column">
            <Experience
              key={project.id}
              title={project.title}
              service={project.service}
              imageSrc={project.imageSrc}
              url={project.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
