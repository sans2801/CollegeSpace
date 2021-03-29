import React from "react";
import Learnspace from "./Learnspace";
import Learn_hero from "./Learn_hero";

const Head = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div>
      <Learn_hero />
      <Learnspace />
    </div>
  );
};

export default Head;
