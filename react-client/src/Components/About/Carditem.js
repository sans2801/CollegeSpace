import React from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";

function CardItem(props) {
  return (
    <>
      <li className="cardsa__item">
        <div className="cardsa__item__link" to={props.path}>
          <figure
            className="cardsa__item__pic-wrap"
            data-category={props.label}
          >
            <img
              className="cardsa__item__img"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="cardsa__item__info">
            <h5 className="cardsa__item__text">
              <center>{props.text}</center>
            </h5>
            <h5>
              <center>{props.description}</center>
            </h5>
            <center>
              <a href={props.github_link}>
                <i class="fab fa-github" />
              </a>{" "}
              <a href={props.linkedin_link}>
                <i class="fab fa-linkedin" />
              </a>{" "}
            </center>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
