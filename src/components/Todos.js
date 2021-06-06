import React, { Component } from "react";
import axios from "axios";
import CreateTodo from "./CreateToDo";
import Todo from "./Todo";

export default class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get("https://halo-todo-app.herokuapp.com/todos");
    console.log(res.data);
    this.setState({ todos: res.data });
  }

  addTodo(content) {
    this.setState({ todos: [...this.state.todos, content] });
  }

  async removeTodo(todoId) {
    const res = await axios.get("https://halo-todo-app.herokuapp.com/todos");
    this.setState({ todos: res.data });
  }

  render() {
    return (
      <div className="todos">
        <CreateTodo />
        {this.state.todos.map((todo) => (
          <Todo todo={todo} key={todo.id} removeTodo={this.removeTodo} />
        ))}
      </div>
    );
  }
}
