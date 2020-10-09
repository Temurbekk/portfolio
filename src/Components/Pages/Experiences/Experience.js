import React from "react";
import Fade from "react-reveal/Fade";

const Experience = ({ url, imageSrc, title, service }) => {
  return (
    <Fade bottom>
      <div className="project">
        <a href={url}>
          <img src={imageSrc} alt={title}></img>
        </a>
        <h1>{title}</h1>
        <span>{service}</span>
      </div>
    </Fade>
  );
};

export default Experience;
