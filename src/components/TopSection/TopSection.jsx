import React from "react";
import "./TopSection.css";
import GithubIcon from "./GithubIcon";
// import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

const TopSection = () => {
  return (
    <div className="top-section-container">
      <div className="line" />
      <a
        href="https://github.com/manuarora700/react-code-editor"
        title="Fork me on GitHub"
        className="github-corner"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </a>
      <div className="container">
        <div className="top-section-navbar">
          {/* <a
            href="https://github.com/manuarora700/react-code-editor"
            title="Fork me on GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo />
          </a> */}
          {/* <h1>Css2Flutter Convert css style to flutter style</h1> */}
        </div>
      </div>
    </div>
  );
};

export default TopSection;
