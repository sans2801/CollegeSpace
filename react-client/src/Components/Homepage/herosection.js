import React from "react";
import "../../App.css";
import { Button } from "./Button";
import "./herosection.css";
import Typical from "react-typical";

function herosection() {
  return (
    <div className="hero-container">
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      {/* <img src="college.jpg" alt="college" /> */}
      <h2>
        <Typical
          steps={["Welcome to CollegeSpace!", 1000]}
          loop={1}
          wrapper="b"
        />
      </h2>
      <div className="hero-btns">
        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        ></Button> */}
        <p>
          {/* Get Started <i class="fa fa-arrow-down" aria-hidden="true" /> */}
          <i class="fas fa-angle-double-down"></i>
        </p>
      </div>
    </div>
  );
}

export default herosection;
