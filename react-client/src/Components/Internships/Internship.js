import React from "react";
import Footer from "../Homepage/Footer";
import Pagination from "./Pagination";
import "./Intern.css";
import Internhero from "./Internhero";

const Internship = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div className="Container">
      <Internhero />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Internship;
