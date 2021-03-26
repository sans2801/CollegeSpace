import React, { useState } from "react";
import Signup from "./Signup";
import FormSuccess from "./FormSuccess";
import "./Form.css";
import login from "./login";

const Form = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn">x</span>
        <div className="form-content-left">
          <img
            src="https://raw.githubusercontent.com/briancodex/react-form-v1/286f4a4603bda257ae001dc57c74d7f30bd4eedb/public/img/img-2.svg"
            alt="spaceship"
            className="form-img"
          />
        </div>
        {!isSubmitted ? <Signup submitForm={submitForm} user={props.user} onChange={props.onChange}/> : <FormSuccess />}
      </div>
    </>
  );
};

export default Form;
