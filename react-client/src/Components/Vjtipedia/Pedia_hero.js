import React from "react";
import Typical from "react-typical";
import "./Pedia_hero.css";
import Arrow from "../UI elements/Arrow";

const Pedia_hero = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div className="pedia-container">
      <h1>
        <Typical
          steps={[
            "Established in 1887",
            1000,
            "Strengthening Technology Excellence of Country",
            1000,
          ]}
          loop={Infinity}
          wrapper="b"
        />
      </h1>
      <div className="pedia-btns">
        <p>
          <Arrow />
        </p>
      </div>
    </div>
  );
};

export default Pedia_hero;
