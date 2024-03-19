import React from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import "../App.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer-content-social">
        <a
          href="https://github.com/Zach-Jordan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>

        <a
          href="https://www.linkedin.com/in/zachery-jordan-30a265173/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
      </div>
    </div>
  );
};

export default Footer;
