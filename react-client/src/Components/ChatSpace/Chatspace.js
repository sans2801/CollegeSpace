import React from "react";
import Footer from "../Homepage/Footer";
import Chathero from "./Chathero";

const Chatspace = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <>
      <Chathero />
      <Footer />
    </>
  );
};

export default Chatspace;
