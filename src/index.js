import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
// import Components from "views/Components/Components.js";
import OutersiteSoundPage from "views/OutersiteSoundPage/OutersiteSoundPage.js";
// import ProfilePage from "views/ProfilePage/ProfilePage.js";
// import LoginPage from "views/LoginPage/LoginPage.js";

import ZenithPage from "views/Bands/ZenithPage/ZenithPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {/* <Route path="/profile-page" component={ProfilePage} /> */}
      <Route path="/zenith-page" component={ZenithPage} />
      {/* <Route path="/login-page" component={LoginPage} /> */}
      {/* <Route path="/components" component={Components} /> */}
      <Route path="/" component={OutersiteSoundPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
