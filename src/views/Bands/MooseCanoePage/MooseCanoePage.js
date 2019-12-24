import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/outerSite/zenith/zenith-round-logo.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

// import ZenithBandMembers from "./ZenithSections/ZenithBandMembers";
import VideoSection from "../../../myComponents/VideoSection";

const useStyles = makeStyles(styles);

export default function MooseCanoePage() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const handleLinkClick = link => {
    window.open(link, "_blank");
  };
  return (
    <div>
      <Parallax
        filter
        image={require("assets/img/outerSite/moose-canoe/moose-canoe-backdrop.png")}
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
                    <h3 className={classes.title}>Moose Canoe</h3>
                    <h6>Cover Band</h6>
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
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
              “Moose Canoe” don’t let the name fool you. It’s a fun name that you can scream out loud at a Rock Concert. The band "MOOSE CANOE" is a widely versatile and very seasoned group. They take you back to the days you loved.
              </p>
              <p>
              The band members come from all over the United States. They play the Classic Rock era to a genuine remembrance. The range of music can be from Heart to Patsy Cline, to Lynard Skynard to Stevie Ray Vaughn
              </p>
              <p>
              They love their audience. They get you involved, and the children in the audience have the opportunity to grab something from the percussion box and rock with the band. Janette loves to go out into the audience and sing to them personally and make them smile and blush.                </p>
              <p>
              Moose Canoe has performed for old and young alike at local Clubs and throughout the U.S., Concerts, Car Shows, State Fair, Las Vegas, USO Tours, Weddings, Jordan Landing, Park City Silly Days, about every possible event you can imagine, and they love every minute of it and it shows in their Concerts.              </p>
              <p>
Weddings, Jordan Landing, Park City Silly Days, about every possible event you can imagine, and they love every minute of it and it shows in their Concerts.              </p>
<p>	Moose Canoe is High energy, with good vibes – that take you back to the days of true rock n’ roll. People in the audience always comments on  “this brought back great memories. I could close my eyes and Moose Canoe was so great you would believe you were listening to the real band but better of the songs they would perform. Wonderful. Fun. Real!</p>
            </div>
            {/* <ZenithBandMembers /> */}
            <VideoSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
