import React from "react";
import "./Header.scss";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

const Header = () => {
  // implement shareOnX functions
  const shareOnX = () => {
    const tweet = "Check out this awesome post on Rustcrab!";
    const url = "https://rohittcodes.netlify.app";
    window.location.href = `https://twitter.com/intent/tweet?text=${tweet}&url=${url}`;
  };

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={images.avatar} alt="John Doe profile picture" />
      </div>
      <div className="section__text">
        <div>
          <span
            className="p-text bold-text"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            {"Hey there, I'm"}
            <h1
              className="head-text"
              style={{ textAlign: "right", color: "#313BAC" }}
            >
              Rohith Singh
            </h1>
          </span>
          <br />
          <p
            className="p-text"
            style={{ display: "flex", flexDirection: "column", gap: "6px" }}
          >
            <p className="p-text">
              • A Passionate Computer Science professional with proven skills in
              Web development, and C++. Seeking to work hard and smart as an
              intern.
            </p>
            <p className="p-text">
              • Developed two applications aimed at facilitating collaborative
              and streamlined experiences for developers.
            </p>
            <p className="p-text">
              • Additionally, I bring over an year of experience as a technical
              writer to complement my skills and dedication.
            </p>
          </p>
        </div>
        <div className="btn-container p-text">
          <a href={images.resume} download="rohittcodes">
            <button className="btn btn-color-2">Download CV</button>
          </a>
          <button
            className="btn btn-color-1"
            onClick={() => {
              location.href = "#contact";
            }}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line new-cap
export default AppWrap(Header, "home");
