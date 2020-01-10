import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

import Navbar from "myComponents/Navbar.js"

import OutersiteSoundPage from "views/OutersiteSoundPage/OutersiteSoundPage.js";
import ZenithPage from "views/Bands/ZenithPage/ZenithPage.js";
import MooseCanoePage from "views/Bands/MooseCanoePage/MooseCanoePage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Navbar />
    <Switch>
      <Route path="/zenith" component={ZenithPage} />
      <Route path="/moose-canoe" component={MooseCanoePage} />
      <Route path="/" component={OutersiteSoundPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
