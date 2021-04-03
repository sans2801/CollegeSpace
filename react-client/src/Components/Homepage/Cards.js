import React from "react";
import "./Cards.css";
import Carditem from "./Carditem";

function Cards(props) {
  return (
    <div className="cards">
      {props.user ? (
        <h1>Hello {props.user.displayName}, Explore CollegeSpace!</h1>
      ) : (
        <h1>Explore CollegeSpace!</h1>
      )}
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Carditem
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9uJTIwdGVjaG5vbG9neXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
              text="LearnSpace | Resource Library"
              path="/learnspace"
            />
            <Carditem
              src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              text="ChatSpace | Discuss Among your classmates"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <Carditem
              src="https://www.dscvjti.tech/assets/images/AboutVJTI.png"
              text="VJTIPedia | Campus, Faculties & Societies"
              path="/vjtipedia"
            />
            <Carditem
              src="https://media.istockphoto.com/photos/diverse-education-shoot-picture-id871461580?b=1&k=6&m=871461580&s=170667a&w=0&h=_8yav_XQjGnDKR_1tMb5sms63QDAvUw3OJaCmpy1_vQ="
              text="Societies and Clubs"
              path="/societies"
            />
            <Carditem
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YnVpbGRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              text="Internships and Placement Stories"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
