import React from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/outersiteSoundPage.js";

import MeetTheBands from "./Sections/MeetTheBands.js";

const useStyles = makeStyles(styles);

export default function OutersiteSoundPage(props) {
  const classes = useStyles();
  return (
    <div>
      <Parallax
        filter
        image={require("assets/img/a-purple-space-background.jpg")}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.brand}>
                <h1 className={classes.title}>OuterSite Sound</h1>
                <h3 className={classes.subtitle}>
                  Production of Music at its Finest.
              </h3>
                <br />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <MeetTheBands />
        </div>
      </div>
      <Footer />
    </div>
  );
}
