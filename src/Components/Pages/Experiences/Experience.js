import React from "react";

import Fade from "react-reveal/Fade";

const Experience = ({
  url,
  imageSrc,
  title,
  technologies,
  description,
  job,
}) => {
  return (
    <Fade bottom>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={imageSrc} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                <a href={url}>{title}</a>
              </p>
              <p className="subtitle is-6">Job Title: {job}</p>
              <p className="subtitle is-6">Technologies: {technologies}</p>
            </div>
          </div>

          <div className="content">
            {description}
            <br />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Experience;
