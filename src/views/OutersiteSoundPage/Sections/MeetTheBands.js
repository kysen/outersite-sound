import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import { Link } from "react-router-dom";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/outersiteSoundPageSections/meetTheBands.js";

// import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/outerSite/moose-canoe/stage-frontal.jpg";
import team3 from "assets/img/outerSite/zenith/fam-pic.jpg";

const useStyles = makeStyles(styles);

export default function MeetTheBands() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const handleLinkClick = link => {
    window.location.href = link;
  };
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Meet the Bands!</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6} className={classes.gridItemShadowed}>
            <Link to="zenith-page">
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team3} alt="..." className={imageClasses} />
                </GridItem>
                <h3 className={classes.cardTitle}>
                  Zenith
                  <br />
                  {/* <small className={classes.smallTitle}>Designer</small> */}
                </h3>
                <CardBody>
                  <p className={classes.description}>
                    Zenith is a combination of generations brought together in
                    the name of Classical Rock. Jeff Case the originator of
                    Zenith and also the Drummer, said he named it because the
                    songs we perform were in the Zenith time period from which
                    they originate.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    onClick={() =>
                      handleLinkClick(
                        "https://www.facebook.com/profile.php?id=100011745003253"
                      )
                    }
                  >
                    <i className={classes.socials + " fab fa-facebook-f"} />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} className={classes.gridItemShadowed}>
            <Link>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team2} alt="..." className={imageClasses} />
                </GridItem>
                <h3 className={classes.cardTitle}>Moose Canoe</h3>
                <CardBody>
                  <p
                    className={classes.description}
                    styles={{ fontSize: "2em" }}
                  >
                    “Moose Canoe” don’t let the name fool you. It’s a fun name
                    that you can scream out loud at a Rock Concert. The band
                    "MOOSE CANOE" is a widely versatile and very seasoned group.
                    They take you back to the days you loved.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    onClick={() =>
                      handleLinkClick("https://www.facebook.com/moose.canoe")
                    }
                  >
                    <i className={classes.socials + " fab fa-facebook-f"} />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
