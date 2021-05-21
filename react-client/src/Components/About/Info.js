import React, { useState } from "react";
import "./Info.css";

const Info = () => {
  const [info, setInfo] = useState(false);

  const changeFont = () => {
    if (window.innerWidth <= 960) {
      setInfo(true);
    } else {
      setInfo(false);
    }
  };

  window.addEventListener("load", changeFont);
  window.addEventListener("resize", changeFont);
  return (
    <div className="supportbody">
      <div className={info ? "description active" : "description"}>
        <h1>
          CollegeSpace strives to provide all that one needs to survive the
          pressures in engineering. The aim is to make all the academic
          resources available at one place in an organized way. This is a one
          stop shop for every student for all their academic needs in college!
          For any suggestions or queries
        </h1>

        <div className="supportfooter">
          <h3>Contact us on our email</h3>

          <h3 className="email">collegespacevjti@gmail.com</h3>
          <h4> h </h4>
        </div>
      </div>
    </div>
  );
};

export default Info;
