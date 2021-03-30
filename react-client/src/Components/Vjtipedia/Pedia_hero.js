import React from "react";
import Typical from "react-typical";
import "./Pedia_hero.css";

const Pedia_hero = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div className="pedia-container">
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      {/* <img src="college.jpg" alt="college" /> */}
      {/* <h1>Hi there!</h1> */}
      <h1>
        <Typical
          steps={["Hi There!", 1000, "Thanks for visiting!", 1000]}
          loop={Infinity}
          wrapper="p"
        />
      </h1>
      <div className="pedia-btns">
        <p>
          {/* Get Started <i class="fa fa-arrow-down" aria-hidden="true" /> */}
          <i class="fas fa-angle-double-down"></i>
        </p>
      </div>
    </div>
  );
};

export default Pedia_hero;
