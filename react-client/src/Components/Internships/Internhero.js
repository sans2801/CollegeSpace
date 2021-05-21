import React from "react";
import Typical from "react-typical";
import "./Internhero.css";
import Arrow from "../UI elements/Arrow";

const Internhero = () => {
  return (
    <div className="back">
      <div className="heroit-container">
        <h2>
          <Typical
            steps={["The expert in anything was once a beginner", 1000]}
            loop={3}
            wrapper="b"
          />
        </h2>
        <div className="heroit-btns">
          <p>
            <Arrow />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Internhero;
