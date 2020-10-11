import React from "react";
import Fade from "react-reveal/Fade";

const Project = ({
  url,
  imageSrc,
  title,
  service,
  description,
  technologies,
}) => {
  return (
    <Fade bottom>
      <div className="column">
        <a href={url}>
          <img src={imageSrc} alt={title} width="100%" height="50%" />
        </a>
        <h1 className="title is-1">
          <a href={url}>{title}</a>
        </h1>
        <h2 className="subtitle is-3">{service}</h2>
        <h3 className="subtitle is-5">Technologies: {technologies}</h3>

        <p className="is-size-5">{description}</p>
      </div>
    </Fade>
  );
};

export default Project;
