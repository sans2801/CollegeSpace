import React from "react";
import "../../App.css";
import Cards from "../Homepage/Cards";
import Footer from "../Homepage/Footer";
import HeroSection from "../Homepage/herosection";

function Home(props) {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <>
      <HeroSection />
      <Cards user={props.user} />
      <Footer />
    </>
  );
}

export default Home;
