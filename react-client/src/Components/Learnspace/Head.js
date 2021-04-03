import React from "react";
import Footer from "../Homepage/Footer";
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
      <Footer />
    </div>
  );
};

export default Head;
