import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

import OutersiteSoundPage from "views/OutersiteSoundPage/OutersiteSoundPage.js";
import ZenithPage from "views/Bands/ZenithPage/ZenithPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/zenith-page" component={ZenithPage} />
      <Route path="/" component={OutersiteSoundPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
