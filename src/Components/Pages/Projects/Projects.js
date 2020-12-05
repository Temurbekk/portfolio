import React from "react";
import { Zoom } from "react-reveal";

import Project from "./Project";
import data from "../../../Data";

const Projects = () => {
  return (
    <div>
      <div className="heading">
        <Zoom right cascade>
          <h1 className="title">Projects</h1>
        </Zoom>
      </div>
      <div className="columns is-multiline is-mobile is-centered">
        {data.projects.map((project) => (
          <div key={project.id} className="column is-half">
            <Project
              key={project.id}
              title={project.title}
              technologies={project.technologies}
              description={project.description}
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
