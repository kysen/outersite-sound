import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem.js";

// styles copied
import { title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

import ReactPlayer from "react-player";

const teamStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  ...imagesStyle,
  gridItem: {
    width: "100%",
    height: "100%",
    padding: "50px 0px"
  },
  video: {
    height: "100%"
  },
  vidSubtitle: {
    padding: "20px",
    fontSize: "25px"
  }
};
const useStyles = makeStyles(teamStyle);

export default function VideoSection(props) {
  const classes = useStyles();

  const displayVideos = () => {
    return props.urls.map((current, id) => {
      return (
        <GridItem xs={12} key={id} className={classes.gridItem}>
          <GridItem xs={12} className={classes.video}>
            <ReactPlayer url={current.url} width="100%" height="30vw" />
          </GridItem>
          <div className={classes.vidSubtitle}>{current.description}</div>
        </GridItem>
      );
    });
  };
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Past Gigs</h2>
      {/* add videos here */}

      <GridContainer justify="center">{displayVideos()}</GridContainer>
    </div>
  );
}
