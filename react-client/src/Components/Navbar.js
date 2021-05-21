import React, { useState, useEffect } from "react";
import { Button } from "./Homepage/Button";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import axios from "axios";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const history = useHistory();
  const handleLogout = () => {
    if (props.user) {
      axios.post("http://localhost:3001/users/express-logout").then((res) => {
        props.onChange(null);
        history.push("/");
      });
    }
  };

  const func = () => {
    changeBackground();
    handleClick();
  };

  const handleClick = () => {
    setClick(!click);
    setNavbar(!navbar);
  };
  const closeMobileMenu = () => setClick(false, changeBackground);

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

  const changeBackground = () => {
    if (window.scrollY >= 80 || window.innerWidth <= 960) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("resize", showButton);
  window.addEventListener("resize", changeBackground);

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            CollegeSpace {/* <i class="fab fa-typo3" /> */}
            {/* <i class="fas fa-landmark"></i>| */}
          </Link>

          <div className="menu-icon" onClick={func}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/support"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/aboutus"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>

            <li className="nav-item">
              {!props.user && (
                <Link
                  to="/Signup"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              )}

              {props.user && (
                <Link className="nav-links-mobile" onClick={handleLogout}>
                  Logout
                </Link>
              )}
            </li>
          </ul>
          {button && !props.user && (
            <Button buttonStyle="btn--out">SIGN UP</Button>
          )}
          {button && props.user && (
            <Button onClick={handleLogout} buttonStyle="btn--out">
              LOG OUT
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
