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
    height: "auto"
  }
};
const useStyles = makeStyles(teamStyle);

export default function VideoSection() {
  const classes = useStyles();

  const urls = [
    // phone
    // {
    //   url:
    //     "https://www.facebook.com/553088384/videos/10156696984013385/UzpfSTE2Njc4NTc4NzQ6MTAyMTc5OTQ4OTY0OTg0ODc/",
    //   description: "hi"
    // },
    {
      url:
        "https://www.facebook.com/zeniththerockband/videos/2024299227894351/UzpfSTE2Njc4NTc4NzQ6MTAyMTQyMDY4Mzk3MTk0MzU/",
      description: "hi"
    },
    {
      url:
        "https://www.facebook.com/553088384/videos/pcb.10157643986588385/10157643908563385/?type=3&theater",
      description: "hi"
    }
    // "https://www.facebook.com/zeniththerockband/videos/2024299227894351/UzpfSTE2Njc4NTc4NzQ6MTAyMTQyMDY4Mzk3MTk0MzU/",
    // "https://www.facebook.com/Mrs.SierraFoulks1017/videos/pcb.10209058607256734/10209058575535941/?type=3&theater",
    // "https://www.facebook.com/Mrs.SierraFoulks1017/videos/pcb.10209058607256734/10209058591336336/?type=3&theater",
    // "https://www.facebook.com/krystle.elliott1/videos/pcb.1516086365123644/1516083395123941/?type=3&theater",
    // "https://www.facebook.com/553088384/videos/pcb.10157643986588385/10157643908563385/?type=3&theater"
  ];

  const displayVideos = () => {
    return urls.map((current, id) => {
      return (
        <GridItem xs={12} key={id} className={classes.gridItem}>
          <ReactPlayer url={current.url} width="100%" height="100%" />
          <div>{current.description}</div>
        </GridItem>
      );
    });
  };
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Past Work</h2>
      {/* add videos here */}

      <GridContainer justify="center">{displayVideos()}</GridContainer>
    </div>
  );
}
