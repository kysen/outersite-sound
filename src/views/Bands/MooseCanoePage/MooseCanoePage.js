import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/outerSite/zenith/zenith-round-logo.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

import ZenithBandMembers from "./ZenithSections/ZenithBandMembers";

const useStyles = makeStyles(styles);

export default function ZenithPage(props) {
  const classes = useStyles();
  // const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Parallax
        filter
        image={require("assets/img/outerSite/zenith/zenith-banner.jpg")}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Zenith</h3>
                    <h6>Cover Band</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook " + classes.socials} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Zenith is a combination of generations brought together in the
                name of Classical Rock. Jeff Case the originator of Zenith and
                also the Drummer, said he named it because the songs we perform
                were in the Zenith time period from which they originate.{" "}
              </p>
              <p>
                Their retake on the songs they pick to perform catch your
                listening ear. You will enjoy this band. They love to play and
                it shows
              </p>
            </div>
            <ZenithBandMembers />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
