import React from "react";
import Footer from "../Homepage/Footer";
import Society_cards from "./Society_cards";
import Society_hero from "./Society_hero";

const Society = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <>
      <Society_hero />
      <Society_cards />
      <Footer />
    </>
  );
};

export default Society;
