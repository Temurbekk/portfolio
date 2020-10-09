import React from "react";
import Fade from "react-reveal/Fade";
import data from "../../Data";

const Contact = () => {
  return (
    <div>
      <h1>
        <Fade bottom cascade>
          Contact.
        </Fade>
      </h1>
      <Fade bottom>
        <div className="contact-content">
          <a href={`mailto:${data.contactEmail}`} className="email">
            {data.contactEmail}
          </a>
          <ul>
            {data.social.map((link, index) => (
              <li key={index}>
                <a target="_blank" rel="noopener noreferrer" href={link.url}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
