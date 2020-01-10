import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/outerSite/moose-canoe/outersite-round-logo.png";

import { container, title } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

// import ZenithBandMembers from "./ZenithSections/ZenithBandMembers";
import VideoSection from "../../../myComponents/VideoSection";

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
    fontSize: "20px",
    padding: "0px 0px 20px 0px",
    color: "black"
  },
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
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
    fontSize: "20px",
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
  const urls = [
    {
      url: "https://www.youtube.com/watch?v=2HIC3hn0sPY",
      description: "Magic Man"
    },
    {
      url: "https://www.youtube.com/watch?v=zm07CN33J-g",
      description: "Sweet Emotion, Walk This Way"
    },
    {
      url: "https://www.youtube.com/watch?v=4jE7H3nQAY4",
      description: "Black Magic Woman"
    },
    {
      url: "https://www.youtube.com/watch?v=XTjTpsP7k58",
      description: "Kenny playing Radar Love with Moose Canoe White City Days"
    },
    {
      url: "https://www.youtube.com/watch?v=9SwWxG5sqWI",
      description: "Rhiannon – Moose Canoe White City Days"
    },
    {
      url: "https://www.youtube.com/watch?v=efbSsZFd9qM",
      description: "Feel Like A Woman"
    }
  ];
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
                    <h4>Cover Band</h4>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                      onClick={() =>
                        handleLinkClick(
                          "https://www.facebook.com/moose.canoe/timeline?lst=100042823572604%3A100000708717440%3A1578696221"
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
                “Moose Canoe” don’t let the name fool you. It’s a fun name that
                you can scream out loud at a Rock Concert. The band "MOOSE
                CANOE" is a widely versatile and very seasoned group. They take
                you back to the days you loved.
              </p>
              <p className={classes.paragraph}>
                The band members come from all over the United States. They play
                the Classic Rock era to a genuine remembrance. The range of
                music can be from Heart to Patsy Cline, to Lynard Skynard to
                Stevie Ray Vaughn
              </p>
              <p className={classes.paragraph}>
                They love their audience. They get you involved, and the
                children in the audience have the opportunity to grab something
                from the percussion box and rock with the band. Janette loves to
                go out into the audience and sing to them personally and make
                them smile and blush.{" "}
              </p>
              <p className={classes.paragraph}>
                Moose Canoe has performed for old and young alike at local Clubs
                and throughout the U.S., Concerts, Car Shows, State Fair, Las
                Vegas, USO Tours, Weddings, Jordan Landing, Park City Silly
                Days, about every possible event you can imagine, and they love
                every minute of it and it shows in their Concerts.{" "}
              </p>
              <p className={classes.paragraph}>
                Weddings, Jordan Landing, Park City Silly Days, about every
                possible event you can imagine, and they love every minute of it
                and it shows in their Concerts.{" "}
              </p>
              <p className={classes.paragraph}>
                {" "}
                Moose Canoe is High energy, with good vibes – that take you back
                to the days of true rock n’ roll. People in the audience always
                comments on “this brought back great memories. I could close my
                eyes and Moose Canoe was so great you would believe you were
                listening to the real band but better of the songs they would
                perform. Wonderful. Fun. Real!
              </p>
            </div>
            {/* <ZenithBandMembers /> */}
            <VideoSection urls={urls} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
