import React from "react";
import PropTypes from "prop-types";

const Footer = ({ footerClass }) => (
  <div className={`defaultFooter ${footerClass}`}>
    <p>
      View site source on{" "}
      <a
        href="https://github.com/Temurbekk/portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>{" "}
      | Designed and Developed by{" "}
      <a
        href="https://github.com/Temurbekk"
        target="_blank"
        rel="noopener noreferrer"
      >
        Temurbek Sabirov
      </a>
    </p>
  </div>
);
Footer.propTypes = {
  footerClass: PropTypes.string,
};
export default Footer;
