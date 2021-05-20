import React from "react";

const ContentCard_item = (props) => {
  return (
    <>
      <li style={{ marginBottom: "25px" }} className="cardsa__item">
        <div className="cardsa__item__link" to={props.path}>
          <figure
            className="cardsa__item__pic-wrap"
            data-category={props.label}
          >
            <a className="cards1__item__link" href={props.path} target="_blank">
              <img
                className="cardsa__item__img"
                alt="Travel Image"
                src={props.srce}
              />
            </a>
          </figure>
          <div
            style={{ height: "16vh", maxHeight: "130px" }}
            className="cardsa__item__info"
          >
            <h5 className="cardsa__item__text">
              <center>{props.text}</center>
            </h5>
            <h5>
              <center>{props.description}</center>
            </h5>
          </div>
        </div>
      </li>
    </>
  );
};

export default ContentCard_item;
