import React from "react";
import "./Arrow.css";

const Arrow = () => {
  const scrollToBottom = () =>
    window.scrollTo({
      top: 850,
      behavior: "smooth",
    });
  return (
    <div className="arrow" onClick={scrollToBottom}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Arrow;
