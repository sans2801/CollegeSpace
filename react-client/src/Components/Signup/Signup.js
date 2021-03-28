import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

import "./Form.css";

const Signup = (props) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    props.submitForm,
    validate
  );

  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('');
  const [password2, setPassword2]=useState('');
  const [isPending,setIsPending]=useState(false);
  const [error,setError]=useState(null);

  const history = useHistory();

  const handleSubmit2 = (e)=>{

    var res = email.split("@");
    if(res.length===1 || res[1].substring(3) !== "vjti.ac.in")
    {
      setError("Please enter a valid VJTI email ID");
      return;
    }

    if(password!=password2)
    {
      setError("Passwords do not match");
      return;
    }

    e.preventDefault();

    setIsPending(true);
    const user={username,email,password};
    axios.post('http://localhost:3001/users/express-signup', user)
    .then((res)=>{

        console.log(res);

        if(res.data.error)
        {
          throw Error(res.data.error);
        }
        alert(res.data.message);
        history.push('/login')

    }).catch((err)=>{
      setIsPending(false);
      setError(err.message);
    });
};


  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          Get Started with CollegeSpace today! Create your account by filling
          out the information below.
        </h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Confirm your password"
            value={password2}
            onChange={(e)=>setPassword2(e.target.value)}
          />
        </div>
        {!isPending && <button className="form-input-btn" type="submit" onClick={handleSubmit2}>
          Sign up
        </button>}

        {isPending && <button disabled className="form-input-btn" type="submit">
          Signing In...
        </button>}

        <span className="form-input-login">
          Already have an account? Login <a href="/login">here</a>
        </span>

        {error && <span className="form-input-login">{error}</span>}

      </form>
    </div>
  );
};

export default Signup;
