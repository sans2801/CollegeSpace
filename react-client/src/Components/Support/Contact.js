import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] =useState(null);
  const [isPending, setIsPending] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    setIsPending(true);
    e.preventDefault();
    if(name=="") {alert("Enter your name");return;}
    if(message=="") {alert("Enter your message");return;}

    axios.post('http://localhost:3001/users/feedback',{name,message}).then((res)=>{
      if(res.data.error) throw Error(res.data.error)
      console.log(res.data);
      setIsPending(false);
      setError(res.data.message);

    }).catch((err)=>{
      setIsPending(false);
      setError(err.message);
    })

  };
  return (
    <form id="form" className="forms" onSubmit={handleSubmit}>
      <h1>Let's Talk &#128242;</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : "rgb(2,2,110)" }}
      >
        Submit
      </button>

      
      {error && <small style={{color:'white',}}>{error}</small>}
      {!isPending && <small>Sending...</small>}

    </form>
  );
};

export default Contact;
