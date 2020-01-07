import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import styles from "assets/jss/material-kit-react/views/outersiteSoundPageSections/meetTheBands.js";

import damek from "assets/img/outerSite/zenith/band-members/damekSchool.jpg";
import eddie from "assets/img/outerSite/zenith/band-members/longhair.jpg";
import ted from "assets/img/outerSite/zenith/band-members/man2.jpg";
import jan from "assets/img/outerSite/zenith/band-members/girl.jpg";
import man from "assets/img/outerSite/zenith/band-members/man.jpg";

import BandMember from "myComponents/BandMember.js";

const useStyles = makeStyles(styles);

export default function ZenithBandMembers() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Band Members</h2>
      <div>
        <GridContainer>
          <BandMember
            classes={classes}
            imageClasses={imageClasses}
            content={
              "On Vocals has a feel to bring the classic songs back to life. Loves to play Guitar and Keyboards."
            }
            member="Janette"
            image={jan}
          />
          <BandMember
            classes={classes}
            imageClasses={imageClasses}
            content={
              "plays Guitar and Vocals brings the band together with his energy."
            }
            member="Ted"
            image={ted}
          />
          <BandMember
            classes={classes}
            imageClasses={imageClasses}
            content={"is impeccable on the Bass and Keyboards."}
            member="Eddie Cuellar"
            image={eddie}
          />
          <BandMember
            classes={classes}
            imageClasses={imageClasses}
            content={
              "is the newest addition. He is their Flutist. He has performed with the School of Rock, playing a great Jethro Tull, and other flute based songs."
            }
            member="Damek"
            image={damek}
          />
          <BandMember
            classes={classes}
            imageClasses={imageClasses}
            content={
              "is the newest addition. He is their Flutist. He has performed with the School of Rock, playing a great Jethro Tull, and other flute based songs."
            }
            member="bro"
            image={man}
          />
        </GridContainer>
      </div>
    </div>
  );
}
