import React, { FC } from "react";
import Zoom from "react-reveal/Zoom";
import ExperienceType from "../../../Models/experience";

const Experience: FC<ExperienceType> = ({
  url,
  imageSrc,
  title,
  technologies,
  description,
  job,
}: ExperienceType) => {
  return (
    <Zoom bottom>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <img src={imageSrc} alt={title} />
              </figure>
            </div>
          </div>
          <div className="media-content">
            <p className="title is-4">
              <a href={url}>{title}</a>
            </p>
            <p className="subtitle is-6">
              <b>Job Title:</b> {job}
            </p>
            <p className="subtitle is-6">
              <b>Technologies:</b> {technologies}
            </p>
          </div>
          <br />
          <div className="content">
            <b>Description:</b> {description}
            <br />
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default Experience;
