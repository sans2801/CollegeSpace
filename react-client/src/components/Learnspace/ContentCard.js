import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ContentCard_item from "./ContentCard_item";

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: "345px",
    margin: "10px auto",
    textAlign: "left",
    background: "#f6f6f6",
  },
}));

const ContentCard = (props) => {
  const classes = useStyle();
  const [elevation, setElevation] = useState(2);

  const handleOnHover = () => {
    setElevation(10);
  };

  const handleonMouseLeave = () => {
    setElevation(2);
  };

  return (
    <Card
    //   className={classes.root}
    //   elevation={`${elevation}`}
    //   onMouseEnter={handleOnHover}
    //   onMouseLeave={handleonMouseLeave}
    >
      {/* <CardHeader
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title="B.P.Lathi"
        subheader="Signals and System"
      />
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p">
          <ul>
            <li>Second Year</li>
            <li>Jamkar Padho</li>
          </ul>
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions> */}
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <ContentCard_item
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9uJTIwdGVjaG5vbG9neXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
              text="LearnSpace | Resource Library"
              path="/learnspace"
            />
            <ContentCard_item
              src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              text="ChatSpace | Discuss Among your classmates"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <ContentCard_item
              src="https://www.dscvjti.tech/assets/images/AboutVJTI.png"
              text="VJTIPedia | Campus, Faculties & Societies"
              path="/services"
            />
            <ContentCard_item
              src="https://media.istockphoto.com/photos/diverse-education-shoot-picture-id871461580?b=1&k=6&m=871461580&s=170667a&w=0&h=_8yav_XQjGnDKR_1tMb5sms63QDAvUw3OJaCmpy1_vQ="
              text="Societies and Clubs"
              path="/products"
            />
            <ContentCard_item
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YnVpbGRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              text="Internships and Placement Stories"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default ContentCard;
