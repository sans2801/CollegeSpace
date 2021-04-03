import React from "react";
import Typical from "react-typical";
import "./Learn_hero.css";
import Arrow from "../UI elements/Arrow";

const Learn_hero = () => {
  return (
    <div className="herol-container">
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      {/* <img src="college.jpg" alt="college" /> */}
      {/* <h1>Hi there!</h1> */}
      <h1>
        <Typical
          steps={["Hi There!", 1000, "Welcome to Learnspace!", 1000]}
          loop={Infinity}
          wrapper="p"
        />
      </h1>
      <div className="herol-btns">
        <p>
          {/* Get Started <i class="fa fa-arrow-down" aria-hidden="true" /> */}
          {/* <i class="fas fa-angle-double-down"></i> */}
          <Arrow />
        </p>
      </div>
    </div>
  );
};

export default Learn_hero;
