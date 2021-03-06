import React, { FC } from "react";
import { Zoom } from "react-reveal";

import Experience from "./Experience";
import data from "../../../Data";

const Experiences: FC = () => {
  return (
    <div>
      <Zoom right cascade>
        <div className="heading">
          <h1 className="title">Experiences</h1>
        </div>
      </Zoom>
      <div className="columns is-multiline is-mobile is-centered">
        {data.experiences.map((experience) => (
          <div
            key={experience.id}
            className={`column ${
              window.innerWidth <= 800 ? "is-full" : "is-half"
            }`}
          >
            <Experience
              key={experience.id}
              title={experience.title}
              technologies={experience.technologies}
              imageSrc={experience.imageSrc}
              url={experience.url}
              job={experience.job}
              description={experience.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
