import React, { useState, useEffect } from "react";
import { Button } from "./Homepage/Button";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import axios from 'axios'

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const history=useHistory();
    const handleLogout = () =>{
      if(props.user)
      {
        axios.post('http://localhost:3001/users/express-logout').then((res)=>{
          props.onChange(null);
          history.push('/');
        })
      }
    };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            V J T I {/* <i class="fab fa-typo3" /> */}|{" "}
            <i class="fas fa-landmark"></i>|
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Academics
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>

            <li className="nav-item">
              {!props.user && <Link
                to="/Signup"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>}

              {props.user && <Link
                className="nav-links-mobile"
                onClick={handleLogout}
              >
                Logout
              </Link>}

            </li>
          </ul>
          {button && !props.user && <Button buttonStyle="btn--outline">SIGN UP</Button>}
          {button && props.user && <Button onClick={handleLogout} buttonStyle="btn--outline">LOG OUT</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
