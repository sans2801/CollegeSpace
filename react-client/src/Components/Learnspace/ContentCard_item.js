import React from "react";
import "./ContentCard.css";

const ContentCard_item = (props) => {
  return (
    <>
      <li style={{ marginBottom: "25px" }} className="cardsl__item">
        <div className="cardsl__item__link" to={props.path}>
          <figure
            className="cardsl__item__pic-wrap"
            data-category={props.label}
          >
            <a className="cards1__item__link" href={props.path} target="_blank">
              <img
                className="cardsl__item__img"
                alt="Travel Image"
                src={props.srce}
              />
            </a>
          </figure>
          <div
            style={{ height: "16vh", maxHeight: "130px" }}
            className="cardsl__item__info"
          >
            <h5 className="cardsl__item__text">
              <center>{props.text}</center>

              <center>{props.description}</center>
            </h5>
          </div>
        </div>
      </li>
    </>
  );
};

export default ContentCard_item;
