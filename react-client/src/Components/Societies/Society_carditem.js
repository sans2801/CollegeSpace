import React from "react";
import { Link } from "react-router-dom";

const Society_carditem = (props) => {
  return (
    <>
      <li className="cardss__item">
        <Link className="cardss__item__link" to={props.path} target="_blank">
          <figure
            className="cardss__item__pic-wrap"
            data-category={props.label}
          >
            <a
              className="cardss1__item__link"
              href={props.path}
              target="_blank"
            >
              <img
                className="cardss__item__img"
                alt="Travel Image"
                src={props.src}
              />
            </a>
          </figure>
          <div className="cardss__item__info">
            <h5 className="cardss__item__text">
              <center>{props.text}</center>
            </h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default Society_carditem;
