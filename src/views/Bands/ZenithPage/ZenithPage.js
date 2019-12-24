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

import ZenithBandMembers from "./ZenithSections/ZenithBandMembers";
import VideoSection from "../../../myComponents/VideoSection";

// band members images:
import damek from "assets/img/outerSite/zenith/band-members/damek.jpg";
import eddie from "assets/img/outerSite/zenith/band-members/eddie-cuellar.jpg";
import ted from "assets/img/outerSite/zenith/band-members/ted.png";
import jan from "assets/img/outerSite/zenith/band-members/jan.jpg";

const useStyles = makeStyles(styles);


export default function ZenithPage() {
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
            {/* TODO */}
            <ZenithBandMembers 
              image1={jan}
              member1="Janette"
              description1="On Vocals has a feel to bring the classic songs back to life. Loves to play Guitar and Keyboards."
              image2={ted}
              member2="Ted"
              description2="plays Guitar and Vocals brings the band together with his energy."
              image3={eddie}
              member3="Eddie Cuellar"
              description3="is impeccable on the Bass and Keyboards."
              image4={damek}
              member4="Damek"
              description4="is the newest addition. He is their Flutist. He has performed with the School of Rock, playing a great Jethro Tull, and other flute based songs."
            />
            <VideoSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
