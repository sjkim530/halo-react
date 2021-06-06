import React, { Component } from "react";
import axios from "axios";
import CreateTodo from "./CreateToDo";

export default class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get("https://halo-todo-app.herokuapp.com/todos");
    this.setState({ todos: res.data });
  }

  addTodo(content) {
    this.setState({ todos: [...this.state.todos, content] });
  }

  render() {
    return (
      <div className="todos">
        <CreateTodo />
        <p>{this.state.todos}</p>
      </div>
    );
  }
}
