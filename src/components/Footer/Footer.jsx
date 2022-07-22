import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p>
          Developed with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by{" "}
          <a
            href="https://kirwako.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            kirwako
          </a>
        </p>
        <h1>Css2Flutter Convert css style to flutter style</h1>
        <div>
          [I am very{" "}
          <span role="img" aria-label="happy">
            😀
          </span>{" "}
          about every coffee!]
          <a
            href="https://www.buymeacoffee.com/imranbaali"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="buy-coffe"
          >
            Buy me a coffee{" "}
            <span role="img" aria-label="coffe">
              ☕
            </span>
          </a>
        </div>
      </div>
      <div className="line" />
    </>
  );
};

export default Footer;
