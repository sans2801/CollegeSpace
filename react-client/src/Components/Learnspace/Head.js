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
    <>
      <Learn_hero />
      <Learnspace />
      <Footer />
    </>
  );
};

export default Head;
