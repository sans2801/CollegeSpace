import React from "react";
import Typical from "react-typical";
import "./Learn_hero.css";
import Arrow from "../UI elements/Arrow";

const Learn_hero = () => {
  return (
    <div className="herol-container">
      <h1>
        <Typical
          steps={["Hi There!", 1000, "Welcome to Learnspace!", 1000]}
          loop={Infinity}
          wrapper="b"
        />
      </h1>
      <div className="herol-btns">
        <p>
          <Arrow />
        </p>
      </div>
    </div>
  );
};

export default Learn_hero;
