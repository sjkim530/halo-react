import React, { Component } from "react";
import axios from "axios";
import CreateTodo from "./CreateToDo";
import Todo from "./Todo";
import BottomNavBar from "./BottomNavBar";

export default class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      count: 0,
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get("https://halo-todo-app.herokuapp.com/todos");
    this.setState({ todos: res.data });
  }

  async addTodo(content) {
    const { data } = await axios.get(
      "https://halo-todo-app.herokuapp.com/todos/count"
    );
    this.setState({
      todos: [...this.state.todos, content],
      count: data,
    });
  }

  async removeTodo(todoId) {
    const res = await axios.get("https://halo-todo-app.herokuapp.com/todos");
    const { data } = await axios.get(
      "https://halo-todo-app.herokuapp.com/todos/count"
    );
    console.log(data);
    this.setState({ todos: res.data, count: data });
  }

  render() {
    return (
      <div className="todos">
        <CreateTodo />
        {this.state.todos.map((todo) => (
          <Todo todo={todo} key={todo.id} removeTodo={this.removeTodo} />
        ))}
        {this.state.count === 0 ? (
          <p></p>
        ) : (
          <BottomNavBar count={this.state.count} />
        )}
      </div>
    );
  }
}
