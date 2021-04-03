import React from "react";
import Typical from "react-typical";
import "./Society_hero.css";
import Arrow from "../UI elements/Arrow";

const Society_hero = () => {
  return (
    <div className="society-container">
      <h1>
        <Typical
          steps={["Hi There!", 1000, "Thanks for visiting!", 1000]}
          loop={Infinity}
          wrapper="p"
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
