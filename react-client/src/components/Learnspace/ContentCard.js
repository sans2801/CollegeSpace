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
    <Card>
      <div className="cards__container">
        <ul className="cards__items">
          <Grid container direction="row">
            {contentList.length >= 1 ? (
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
          </Grid>
        </ul>
      </div>
    </Card>
  );
};

export default ContentCard;
