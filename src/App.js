import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./routes";
import Define from "./routes/define";
import Match from "./routes/match";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/define" component={Define} />
        <Route exact path="/match" component={Match} />
      </Switch>
    );
  }
}

export default App;
