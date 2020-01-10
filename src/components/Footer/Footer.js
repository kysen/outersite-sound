import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          &copy; {1900 + new Date().getYear()} OutersiteSound
        </div>
        <div className={classes.right}>
          <a className={classes.a} target="blank_" href="tel:801-518-3964">
            (801) - 518 - 3964
          </a>
          <a className={classes.a} target="blank_" href="mailto:thc5@comcast.net">
            thc5@comcast.net
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
