import React from "react";
// import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/outersiteSoundPageSections/meetTheBands.js";

const useStyles = makeStyles(styles);

export default function VideoSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>VideoSection</h2>
      {/* add videos here */}
    </div>
  );
}
