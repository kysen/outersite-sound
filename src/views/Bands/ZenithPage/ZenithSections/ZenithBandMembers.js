import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// import { Link } from "react-router-dom";

// core components
import GridContainer from "components/Grid/GridContainer.js";

import styles from "assets/jss/material-kit-react/views/outersiteSoundPageSections/meetTheBands.js";

// import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/outerSite/moose-canoe/stage-frontal.jpg";
// import team3 from "assets/img/outerSite/zenith/fam-pic.jpg";

import BandMember from "views/Bands/ZenithPage/ZenithSections/BandMember.js";

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
            image={team2}
          />
          <BandMember
            classes={classes}
            imageClasses={imageClasses}
            content={
              "plays Guitar and Vocals brings the band together with his energy."
            }
            member="Ted"
            image={team2}
          />
          <BandMember
            classes={classes}
            imageClasses={imageClasses}
            content={"is impeccable on the Bass and Keyboards."}
            member="Eddie Cuellar"
            image={team2}
          />
          <BandMember
            classes={classes}
            imageClasses={imageClasses}
            content={
              "is the newest addition. He is their Flutist. He has performed with the School of Rock, playing a great Jethro Tull, and other flute based songs."
            }
            member="Damek"
            image={team2}
          />
        </GridContainer>
      </div>
    </div>
  );
}
