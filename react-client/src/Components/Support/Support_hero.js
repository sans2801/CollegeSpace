import React from "react";
import Typical from "react-typical";
import Contact from "./Contact";
import "./Support_hero.css";
import Arrow from "../UI elements/Arrow";

const Support_hero = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  return (
    <div className="hero-container-support">
      <h1>
        <Typical
          steps={["Any queries?", 1000, "Let Us Know!", 1000]}
          loop={Infinity}
          wrapper="b"
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

export default Support_hero;
