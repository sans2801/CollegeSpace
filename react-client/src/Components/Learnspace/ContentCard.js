import {
  Card,
} from "@material-ui/core";
import React from "react";
import ContentCard_item from "./ContentCard_item";
import { Grid } from "@material-ui/core";

const ContentCard = ({ contentList }) => {

  return (
    <Card>
      <div className="cards__container">
        <ul className="cards__items">
          <Grid container direction="row">
            {contentList.length > 0 ? (
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
