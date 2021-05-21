import React from "react";
import Footer from "../Homepage/Footer";

import Contact from "./Contact";
import Support_hero from "./Support_hero";

const Support = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <>
      <Support_hero />
      <Contact />
      <Footer />
    </>
  );
};

export default Support;
