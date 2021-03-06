import React, { FC } from "react";
import { Zoom } from "react-reveal";

import Project from "./Project";
import data from "../../../Data";

const Projects: FC = () => {
  return (
    <div>
      <Zoom right cascade>
        <div className="heading">
          <h1 className="title">Projects</h1>
        </div>
      </Zoom>
      <div className="columns is-multiline is-mobile is-centered">
        {data.projects.map((project) => (
          <div
            key={project.id}
            className={`column ${
              window.innerWidth <= 800 ? "is-full" : "is-half"
            }`}
          >
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
