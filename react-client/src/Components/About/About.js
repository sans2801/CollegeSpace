import React from "react";
import Footer from "../Homepage/Footer";
import Cards from "./Cards";
import Hero from "./Hero";
import Info from "./Info";

const About = (props) => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <>
      <Hero />
      <Info />
      <Cards user={props.user} />
      <Footer />
    </>
  );
};

export default About;
