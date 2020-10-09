import React from "react";
import Fade from "react-reveal/Fade";

import Project from "./Project";
import data from "../../../Data";

const Projects = () => {
  return (
    <div>
      <h1 className="heading">
        <Fade bottom cascade>
          Projects
        </Fade>
      </h1>
      <div className="columns is-multiline is-mobile is-centered">
        {data.projects.map((project) => (
          <div className="column">
            <Project
              key={project.id}
              title={project.title}
              service={project.service}
              imageSrc={project.imageSrc}
              url={project.url}
            ></Project>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
