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
    const count = await axios.get(
      "https://halo-todo-app.herokuapp.com/todos/count"
    );
    this.setState({ todos: res.data, count: count.data });
  }

  addTodo(content) {
    const addCount = this.state.count + 1;
    this.setState({
      todos: [content, ...this.state.todos],
      count: addCount,
    });
  }

  removeTodo(todoId) {
    const updatedTodos = this.state.todos.filter((todo) => todo.id !== todoId);
    const subtractCount = this.state.count - 1;
    this.setState({ todos: updatedTodos, count: subtractCount });
  }

  render() {
    console.log(this.state.count, this.state.todos);
    return (
      <div className="todos">
        <CreateTodo addTodo={this.addTodo} />
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
