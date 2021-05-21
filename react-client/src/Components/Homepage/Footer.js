import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription"></section>
      {/* <div class="footer-links">
        {/* <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>
              <Link to="/aboutus">About Us</Link>
            </h2>
          </div>
          <div class="footer-link-items">
            <h2>
              <Link to="/support">Support</Link>
            </h2>
          </div>
        </div> 
      </div> */}
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              VJTI | CollegeSpace
            </Link>
          </div>
          <h3 class="website-rights">CollegeSpace &copy; 2021</h3>
          <div class="social-icons">
            <a href="https://www.facebook.com/fb.vjti/" className="Facebook">
              <i class="fab fa-facebook-f" />
            </a>

            <a
              href="https://www.instagram.com/vjtistudentactivities/?hl=en"
              className="Instagram"
            >
              <i class="fab fa-instagram" />
            </a>

            <a href="https://youtube.com" className="Youtube">
              <i class="fab fa-youtube" />
            </a>

            <a href="https://twitter.com/vjti?lang=en" className="Twitter">
              <i class="fab fa-twitter" />
            </a>

            <a
              href="https://www.linkedin.com/in/tpo-vjti-30061971/"
              className="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
