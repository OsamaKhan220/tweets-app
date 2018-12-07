import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Home from "./Pages/Home/Home.js";

ReactDOM.render(
  <Router>
    <Route
      path="/"
      exact
      component={Home}
    />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();