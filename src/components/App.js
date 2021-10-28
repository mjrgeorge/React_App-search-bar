import { CssBaseline } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import HeaderSection from "./HeaderSection";
import Details from "./Details";

function App() {
  return (
    <Router>
      <CssBaseline />
      <HeaderSection />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
