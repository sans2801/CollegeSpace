import React from "react";
import "./Society_card.css";
import Society_carditem from "./Society_carditem";
import DSC from "./DSC.png";
import COC from "./COC.jpg";
import SRA from "./SRA.png";
import Techno from "./Techno.png";
import Prati from "./Prati.jpg";
import Enthu from "./Enthu.jpg";

const Society_cards = (props) => {
  return (
    <div className="cardss">
      <div className="cardss__container">
        <div className="cardss__wrapper">
          <ul className="cardss__items">
            <Society_carditem
              src={DSC}
              text="DSC VJTI"
              path="https://www.dscvjti.tech/"
            />
            <Society_carditem
              src={COC}
              text="Community of Coders"
              path="https://communityofcoders.in/"
            />
          </ul>
          <ul className="cardss__items">
            <Society_carditem
              src={SRA}
              text="Society of Robotics & Automation"
              path="https://www.sravjti.in/"
            />
            <Society_carditem
              src={Techno}
              text="Technovanza, VJTI"
              path="https://technovanza.org/"
            />
          </ul>
          <ul className="cardss__items">
            <Society_carditem
              src={Prati}
              text="Pratibimb, VJTI"
              path="https://www.instagram.com/pratibimbvjti/?hl=en"
            />
            <Society_carditem
              src={Enthu}
              text="Enthusia, VJTI"
              path="http://enthusia.in/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Society_cards;
