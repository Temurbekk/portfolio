import React from "react";

import data from "../../Data";

const footerStyle = {
  backgroundColor: "white",
  fontSize: "20px",
  color: "black",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%",
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantomStyle} />
      <div className="level" style={footerStyle}>
        <div className="level-left">
          <h1>iTemur 2020</h1>
        </div>
        <div className="level-right">
          {data.social.map((link, index) => (
            <a
              key={index}
              className="level-item has-text-centered"
              target="_blank"
              rel="noopener noreferrer"
              href={link.url}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
