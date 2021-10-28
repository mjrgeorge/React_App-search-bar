import { CssBaseline } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactList from "./ContactList";
import HeaderSection from "./HeaderSection";

function App() {

  return (
    <Router>
      <CssBaseline />
      <HeaderSection />
      <Switch>
        <Route path="/" component={ContactList} />
      </Switch>
    </Router>
  );
}

export default App;
