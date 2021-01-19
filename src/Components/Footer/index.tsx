import React, { FC } from "react";

import data from "../../Data";

const Footer: FC = () => {
  return (
    <div>
      <div className="phantom" />
      <div className="footer">
        {data.social.map((link, index) => (
          <a
            className="mr-5"
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={link.url}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
