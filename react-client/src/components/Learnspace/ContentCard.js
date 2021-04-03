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
import { Grid } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: "345px",
    margin: "10px auto",
    textAlign: "left",
    background: "#f6f6f6",
  },
}));

const ContentCard = ({ contentList }) => {
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
        {/* <div className="cards__wrapper"> */}
        <ul className="cards__items">
          <Grid container direction="row">
            {contentList.length > 1 ? (
              contentList.map((content) => (
                <Grid item xs={6} md={4}>
                  <ContentCard_item
                    srce={content.img}
                    text={content.name}
                    description={content.author}
                    path={content.url}
                  />
                </Grid>
              ))
            ) : (
              <div>
                <h2>Your search doesn't have any matching results</h2>
              </div>
            )}

            {/* <ContentCard_item
              src="https://images-na.ssl-images-amazon.com/images/I/41T0iBxY8FL._SX440_BO1,204,203,200_.jpg"
              text={contentList[0].name}
              description={["By CLRS"]}
            />
            <ContentCard_item
              src="https://scontent.fpnq13-1.fna.fbcdn.net/v/t1.0-9/22140753_918775148272812_8263574953368137870_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=3mMsAu_7IkYAX_3p3ZP&_nc_ht=scontent.fpnq13-1.fna&oh=409b25c462aec1c12b5568678973b54f&oe=60853D60"
              text="Operating Systems"
              description={["By Galvin"]} */}
          </Grid>
        </ul>
        {/* </div> */}
      </div>
    </Card>
  );
};

export default ContentCard;
