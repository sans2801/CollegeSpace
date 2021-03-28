import React from "react";
import Typical from "react-typical";
import Contact from "./Contact";
import "./Support_hero.css";

const Support_hero = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  return (
    <div className="hero-container-support">
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      {/* <img src="college.jpg" alt="college" /> */}
      {/* <h1>Hi there!</h1> */}
      <h1>
        <Typical
          steps={["Any queries?", 1000, "Let Us Know!", 1000]}
          loop={Infinity}
          wrapper="b"
        />
      </h1>
      <div className="hero-btns">
        <p>
          {/* Get Started <i class="fa fa-arrow-down" aria-hidden="true" /> */}
          <a href="#form" class="scroll-down">
            <i class="fas fa-angle-double-down"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Support_hero;
