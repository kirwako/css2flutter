import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p>
          Developed with ❤️ by{" "}
          <a
            href="https://kirwako.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            kirwako
          </a>
        </p>
        <h1>Css2Flutter Convert css style to flutter style</h1>
		<div>
		[I am very 😀 about every coffee!]
			<a
          href="https://www.buymeacoffee.com/imranbaali"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="buy-coffe"
        >
          Buy me a coffee{" "}
          <g-emoji
            class="g-emoji"
            alias="coffee"
            fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2615.png"
          >
            ☕
          </g-emoji>
        </a>
		</div>

      </div>
      <div className="line" />
    </>
  );
};

export default Footer;
