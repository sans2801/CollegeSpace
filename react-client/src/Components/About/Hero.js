import React from "react";
import Typical from "react-typical";
import "./Hero.css";
import Arrow from "../UI elements/Arrow";

const Hero = () => {
  return (
    <div className="heroa-container">
      <h1>
        <Typical
          steps={["Hi There!", 1000, "Thanks for visiting!", 1000]}
          loop={Infinity}
          wrapper="p"
        />
      </h1>
      <div className="heroa-btns">
        <p>
          <Arrow />
        </p>
      </div>
    </div>
  );
};

export default Hero;
