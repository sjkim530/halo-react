import React, { Component } from "react";
import axios from "axios";

export default class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get("https://halo-todo-app.herokuapp.com/todos");
    this.setState({ todos: res.data });
  }

  render() {
    return (
      <div class="todos">
        <p>{this.state.todos}</p>
      </div>
    );
  }
}
