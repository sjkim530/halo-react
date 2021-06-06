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
    console.log(res.data);
    this.setState({ todos: res.data });
  }

  addTodo(content) {
    this.setState({ todos: [...this.state.todos, content] });
  }

  render() {
    return (
      <div className="todos">
        <CreateTodo />
        {this.state.todos.map((todo) => (
          <p key={todo.id}>{todo.content}</p>
        ))}
      </div>
    );
  }
}
