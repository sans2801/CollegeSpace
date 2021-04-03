import React from "react";
import "../../App.css";
import "./herosection.css";
import Typical from "react-typical";
import Arrow from "../UI elements/Arrow";

function herosection() {
  return (
    <div className="hero-container">
      <h2>
        <Typical
          steps={["Welcome to CollegeSpace!", 1000]}
          loop={3}
          wrapper="b"
        />
      </h2>
      <div className="hero-btns">
        <p>
          <Arrow />
        </p>
      </div>
    </div>
  );
}

export default herosection;
