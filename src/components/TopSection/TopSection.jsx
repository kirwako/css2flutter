import React from "react";
import "./TopSection.css";
import GithubIcon from "./GithubIcon";
// import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

const TopSection = () => {
  return (
    <div className="top-section-container">
      <div className="line" />
      <a
        href="https://github.com/kirwa-KO/css2flutter"
        title="Fork me on GitHub"
        className="github-corner"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </a>
      <div className="container">
        <div className="top-section-navbar">
        </div>
      </div>
    </div>
  );
};

export default TopSection;
