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
      bottomNavBar: false,
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.clickAll = this.clickAll.bind(this);
    this.clickActive = this.clickActive.bind(this);
    this.clickCompleted = this.clickCompleted.bind(this);
    this.clickChevron = this.clickChevron.bind(this);
    this.removeCompleted = this.removeCompleted.bind(this);
    this.updateStateAfterCheckboxClick =
      this.updateStateAfterCheckboxClick.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get("https://halo-todo-app.herokuapp.com/todos");
    const count = await axios.get(
      "https://halo-todo-app.herokuapp.com/todos/count"
    );

    if (count === 0) this.setState({ todos: res.data, count: count.data });
    else
      this.setState({
        todos: res.data.sort((a, b) => b.id - a.id),
        count: count.data,
        bottomNavBar: true,
      });
  }

  addTodo(content) {
    const addCount = this.state.count + 1;
    this.setState({
      todos: [content, ...this.state.todos],
      count: addCount,
      bottomNavBar: true,
    });
  }

  removeTodo(todoId) {
    const updatedTodos = this.state.todos.filter((todo) => todo.id !== todoId);
    const subtractCount = this.state.count - 1;

    if (subtractCount === 0) {
      this.setState({
        todos: updatedTodos,
        count: subtractCount,
        bottomNavBar: false,
      });
    } else this.setState({ todos: updatedTodos, count: subtractCount });
  }

  async removeCompleted() {
    const { data } = await axios.get(
      "https://halo-todo-app.herokuapp.com/todos"
    );

    if (!data.length) {
      this.setState({
        todos: data.sort((a, b) => b.id - a.id),
        count: data.length,
        bottomNavBar: false,
      });
    } else
      this.setState({
        todos: data.sort((a, b) => b.id - a.id),
        count: data.length,
      });
  }

  async clickAll() {
    const res = await axios.get("https://halo-todo-app.herokuapp.com/todos");
    this.setState({
      todos: res.data.sort((a, b) => b.id - a.id),
      count: res.data.length,
    });
  }

  async clickActive() {
    const res = await axios.get("https://halo-todo-app.herokuapp.com/todos");
    const activeTodos = res.data.filter((todo) => todo.isDone === false);
    this.setState({
      todos: activeTodos.sort((a, b) => b.id - a.id),
      count: activeTodos.length,
    });
  }

  async clickCompleted() {
    const res = await axios.get("https://halo-todo-app.herokuapp.com/todos");
    const completedTodos = res.data.filter((todo) => todo.isDone === true);
    this.setState({
      todos: completedTodos.sort((a, b) => b.id - a.id),
      count: completedTodos.length,
    });
  }

  async clickChevron() {
    const isDoneTodos = this.state.todos.map((todo) => todo.isDone);
    const currState = this.state.todos;

    if (isDoneTodos.includes(true) && isDoneTodos.includes(false)) {
      await Promise.all(
        currState.map(async (todo) => {
          await axios.put(
            `https://halo-todo-app.herokuapp.com/todos/${todo.id}`,
            {
              isDone: true,
            }
          );
        })
      );
    } else if (isDoneTodos.includes(false) && !isDoneTodos.includes(true)) {
      await Promise.all(
        currState.map(async (todo) => {
          await axios.put(
            `https://halo-todo-app.herokuapp.com/todos/${todo.id}`,
            {
              isDone: true,
            }
          );
        })
      );
    } else {
      await Promise.all(
        currState.map(async (todo) => {
          await axios.put(
            `https://halo-todo-app.herokuapp.com/todos/${todo.id}`,
            {
              isDone: false,
            }
          );
        })
      );
    }

    const res = await axios.get("https://halo-todo-app.herokuapp.com/todos");

    this.setState({ todos: res.data.sort((a, b) => b.id - a.id) });
  }

  async updateStateAfterCheckboxClick() {
    const { data } = await axios.get(
      "https://halo-todo-app.herokuapp.com/todos"
    );
    this.setState({
      todos: data.sort((a, b) => b.id - a.id),
    });
  }

  render() {
    return (
      <div className="todos">
        <CreateTodo
          addTodo={this.addTodo}
          todos={this.state.todos}
          clickChevron={this.clickChevron}
        />
        {this.state.todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            removeTodo={this.removeTodo}
            onChange={this.onChange}
            updateStateAfterCheckboxClick={this.updateStateAfterCheckboxClick}
          />
        ))}
        {!this.state.bottomNavBar ? (
          <span></span>
        ) : (
          <BottomNavBar
            todos={this.state.todos}
            count={this.state.count}
            clickAll={this.clickAll}
            clickActive={this.clickActive}
            clickCompleted={this.clickCompleted}
            removeCompleted={this.removeCompleted}
          />
        )}
      </div>
    );
  }
}
