import React from "react";
import "../../App.css";
import Cards from "../Homepage/Cards";
import Footer from "../Homepage/Footer";
import HeroSection from "../Homepage/herosection";

function Home(props) {
  return (
    <>
      <HeroSection />
      <Cards user={props.user}/>
      <Footer />
    </>
  );
}

export default Home;
