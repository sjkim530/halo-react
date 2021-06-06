import React, { Component } from "react";
import Todos from "./components/Todos";
import { Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <Route exact path="/" component={Todos} />
      </div>
    );
  }
}
