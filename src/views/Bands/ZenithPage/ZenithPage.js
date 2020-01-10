import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import { container, title } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

import profile from "assets/img/outerSite/zenith/zenith-round-logo.jpg";

import ZenithBandMembers from "./ZenithSections/ZenithBandMembers";
import VideoSection from "../../../myComponents/VideoSection";

// band members images:
// import damek from "assets/img/outerSite/zenith/band-members/damek.jpg";
// import eddie from "assets/img/outerSite/zenith/band-members/eddie-cuellar.jpg";
// import ted from "assets/img/outerSite/zenith/band-members/ted.png";
// import jan from "assets/img/outerSite/zenith/band-members/jan.jpg";

import damek from "assets/img/outerSite/zenith/band-members/damekSchool.jpg";
import eddie from "assets/img/outerSite/zenith/band-members/longhair.jpg";
import ted from "assets/img/outerSite/zenith/band-members/man2.jpg";
import jan from "assets/img/outerSite/zenith/band-members/girl.jpg";
import man from "assets/img/outerSite/zenith/band-members/man.jpg";

const useStyles = makeStyles({
  container,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important"
  },
  paragraph: {
    fontSize: "30px",
    padding: "0px 0px 20px 0px",
    color: "black",
    lineHeight: 1.3
  },
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "50px",
    color: "#999",
    cursor: "poiner",
    transition: ".3s ease-in-out",
    "&:hover": {
      color: "blue"
    }
  },
  emails: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999",
    cursor: "poiner",
    transition: ".3s ease-in-out",
    "&:hover": {
      color: "red"
    }
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  }
});

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
  const urls = [
    {
      url: "https://www.youtube.com/watch?v=ClB-JQKM6So",
      description: "Zenith performing White Rabbit"
    }
  ];
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
                    <h4>Cover Band</h4>
                    <h4>Do Originals</h4>
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
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                    >
                      <a href={"mailto:thc5@comcast.net"}>
                        <i className={classes.emails + " far fa-envelope"} />
                      </a>
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p className={classes.paragraph}>
                Zenith is a combination of generations brought together in the
                name of Classical Rock. Jeff Case the originator of Zenith and
                also the Drummer, said he named it because the songs we perform
                were in the Zenith time period from which they originate.{" "}
              </p>
              <p className={classes.paragraph}>
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
              image5={man}
              member5="other"
              description5="placeholder"
            />
            <VideoSection urls={urls} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
