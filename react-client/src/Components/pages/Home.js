import React from "react";
import "../../App.css";
import Cards from "../Homepage/Cards";
import Footer from "../Homepage/Footer";
import HeroSection from "../Homepage/herosection";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
