import React from "react";
import { Zoom } from "react-reveal";

import Experience from "./Experience";
import data from "../../../Data";

const Experiences = () => {
  return (
    <div>
      <h1 className="heading">
        <Zoom right cascade>
          <h1 className="title">Experiences</h1>
        </Zoom>
      </h1>
      <div className="columns">
        {data.experiences.map((experience) => (
          <div key={experience.id} className="column">
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
