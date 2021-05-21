import React from "react";
import "./Cards.css";
import Carditem from "./Carditem";
import Nikhil from "../../images/Nikhil.png";
import Akshay from "../../images/Akshay1.png";
import Prasad from "../../images/Prasad.jpg";
import Purvank from "../../images/Purvank.jpg";

function Cards(props) {
  return (
    <div className="cardsa">
      <h1>CREATED BY</h1>

      <div className="cardsa__container">
        <div className="cardsa__wrapper">
          <ul className="cardsa__items">
            <Carditem
              src={Akshay}
              text="Akshay Bakshi"
              description={[
                "Web Developer | ",
                "ML Enthusiast | ",
                "CS Student",
              ]}
              github_link="https://github.com/akshayb80"
              linkedin_link="https://www.linkedin.com/in/akshay-bakshi-a877a91b9/"
            />
            <Carditem
              src={Nikhil}
              text="Nikhil Sharma"
              description={["Web Developer | ", "Computer Science Student"]}
              github_link="https://github.com/nikhilgwl"
              linkedin_link="https://www.linkedin.com/in/nikhil-sharma-7278a6166"
            />
          </ul>
          <ul className="cardsa__items">
            <Carditem
              src={Prasad}
              text="Prasad Thakare"
              description={[
                "Web Developer |  ",
                "AI Enthusiast |  ",
                "CS Student",
              ]}
              github_link="https://github.com/sans2801"
              linkedin_link="https://www.linkedin.com/in/prasad-thakare-4a8279198/"
            />
            <Carditem
              src={Purvank}
              text="Purvank Bhiwgade"
              description={["Web Developer | ML Enthusiast | TC Student"]}
              github_link="https://github.com/purvankbhiwgade"
              linkedin_link="https://www.linkedin.com/in/purvank-bhiwgade-483a9415a/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
