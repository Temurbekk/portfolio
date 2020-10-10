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
        <h1>{title}</h1>
        <span>{service}</span>
        <h1>{technologies}</h1>

        <h1>{description}</h1>
      </div>
    </Fade>
  );
};

export default Project;
