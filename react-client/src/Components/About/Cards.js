import React from "react";
import "./Cards.css";
import Carditem from "./Carditem";
import Nikhil from "./Nikhil.jpeg";

function Cards(props) {
  return (
    <div className="cardsa">
      <h1>CREATED BY</h1>

      <div className="cardsa__container">
        <div className="cardsa__wrapper">
          <ul className="cardsa__items">
            <Carditem
              src="https://scontent.fpnq13-1.fna.fbcdn.net/v/t1.0-9/22140753_918775148272812_8263574953368137870_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=3mMsAu_7IkYAX_3p3ZP&_nc_ht=scontent.fpnq13-1.fna&oh=409b25c462aec1c12b5568678973b54f&oe=60853D60"
              text="Akshay Bakshi"
              description={[
                "Web Developer | ",
                "ML Enthusiast | ",
                "CS Student",
              ]}
              github_link="https://github.com/akshayb80"
              linkedin_link="https://www.linkedin.com/in/akshay-bakshi-a877a91b9/"
              // path="/home"
            />
            <Carditem
              // path="./Nikhil.jpeg"
              src={Nikhil}
              text="Nikhil Sharma"
              description={[
                "Web Developer | ",
                "ML Enthusiast | ",
                "CS Student",
              ]}
              github_link="https://github.com/nikhilgwl"
              linkedin_link="https://www.linkedin.com/in/nikhil-sharma-7278a6166"
              // path="/home"
            />
          </ul>
          {/* <ul className="cards__items">
            <Carditem
              src="https://www.dscvjti.tech/assets/images/AboutVJTI.png"
              text="VJTIPedia | Campus, Faculties & Societies"
              path="/services"
            />
            <Carditem
              src="https://media.istockphoto.com/photos/diverse-education-shoot-picture-id871461580?b=1&k=6&m=871461580&s=170667a&w=0&h=_8yav_XQjGnDKR_1tMb5sms63QDAvUw3OJaCmpy1_vQ="
              text="Societies and Clubs"
              path="/products"
            />
            <Carditem
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YnVpbGRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              text="Internships and Placement Stories"
              path="/sign-up"
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
