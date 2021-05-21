import React from "react";
import Typical from "react-typical";
import "./Society_hero.css";
import Arrow from "../UI elements/Arrow";

const Society_hero = () => {
  return (
    <div className="society-container">
      <h1>
        <Typical
          steps={["Where We All Collaborate", 1000]}
          loop={Infinity}
          wrapper="b"
        />
      </h1>
      <div className="society-btns">
        <p>
          <Arrow />
        </p>
      </div>
    </div>
  );
};

export default Society_hero;
