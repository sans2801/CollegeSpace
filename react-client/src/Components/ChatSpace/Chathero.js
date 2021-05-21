import React from "react";
import Typical from "react-typical";
import "./Chathero.css";
import Arrow from "../UI elements/Arrow";

const Chathero = () => {
  return (
    <div className="heroa-container">
      <h1>
        <Typical
          steps={["ChatSpace is coming soon!", 1000]}
          loop={3}
          wrapper="b"
        />
      </h1>
    </div>
  );
};

export default Chathero;
