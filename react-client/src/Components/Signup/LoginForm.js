import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from 'axios';


function LoginForm(props) {

  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const [isPending,setIsPending]=useState(false);
  const [error,setError]=useState(null);

  const history =useHistory();

  const submitHandler = (e) => {
    
    e.preventDefault();

    setIsPending(true);
    const email=details.email;
    const password=details.password
    const userAuth={email,password};

    axios.post('http://localhost:3001/users/express-login',userAuth).then((res)=>{
        
        if(res.data.error)
            throw Error(res.data.error);
        
        props.onChange(res.data.user);
            setIsPending(false);
            history.push('/');
    
            
        }).catch((err)=>{
            setIsPending(false);
          setError(err.message);
        });

     props.Login(details);
  };



  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {error && <small>{error}</small>}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />

        </div>

        {!isPending && <input type="submit" value="LOGIN" />}
        {isPending && <input disabled type="submit" value="LOGGING IN..." />}

        
      </div>
    </form>
  );
}

export default LoginForm;
