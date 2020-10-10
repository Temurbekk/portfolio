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

function Footer() {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>
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
}

export default Footer;
