import React from "react";
import Zoom from "react-reveal/Zoom";

const Project = ({
  url,
  imageSrc,
  title,
  service,
  description,
  technologies,
}) => {
  return (
    <Zoom top>
      <div className="box">
        <div className="column">
          <figure className="image is-5by2">
            <a href={url}>
              <img src={imageSrc} alt={title} />
            </a>
          </figure>
        </div>
        <div className="column">
          <h1 className="title is-2">
            <a href={url}>{title}</a>
          </h1>
          <h2 className="subtitle is-5">
            <b>{service}</b>
          </h2>
          <h3 className="subtitle is-6">
            <b>Technologies:</b> {technologies}
          </h3>

          <p className="is-size-6">
            <b>Description: </b>
            {description}
          </p>
        </div>
      </div>
    </Zoom>
  );
};

export default Project;
