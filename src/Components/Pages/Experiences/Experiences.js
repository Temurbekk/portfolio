import React from "react";
import Fade from "react-reveal/Fade";

import Experience from "./Experience";
import data from "../../../Data";

const Experiences = () => {
  return (
    <div>
      <h1 className="heading">
        <Fade bottom cascade>
          <h1 className="title">Experiences</h1>
        </Fade>
      </h1>
      <div className="columns">
        {data.experiences.map((experience) => (
          <div className="column">
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
