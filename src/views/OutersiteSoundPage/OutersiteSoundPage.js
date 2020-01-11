import React from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import MeetTheBands from "./Sections/MeetTheBands.js";

import landingImage from "assets/img/a-purple-space-background.jpg"

import { container } from "assets/jss/material-kit-react.js";

const useStyles = makeStyles({
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
    height: "99vh",
    width: "99vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  wasParallax: {
    backgroundImage: `url(${landingImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "99vw 99vh",


    height: "99vh",
    width: "99vw",
    maxWidth: "100vw",
  },
  title: {
    // ...title,
    fontSize: "8rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#F7CA00",
    textDecoration: "none",
    width: "100%",
    textAlign: "center"
  },
  subtitle: {
    color: "#F7CA00",

    fontSize: "1.8rem",
    maxWidth: "500px",
    margin: "10px auto 0",
    textAlign: "center"
  },
  main: {
    background: "#FFFFF5",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
})


export default function OutersiteSoundPage(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.wasParallax}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.brand}>
                <h1 className={classes.title}>Outersite Sound</h1>
                <h3 className={classes.subtitle}>
                  Production of Music at its Finest
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <MeetTheBands />
        </div>
      </div>
      <Footer />
    </div>
  );
}
