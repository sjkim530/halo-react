import React, { Component } from "react";
import axios from "axios";
import Chevron from "./Chevron";

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      isDone: false,
      error: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      if (!this.state.content.trim()) {
        this.setState({
          content: "",
        });
        throw new Error(alert("Invalid input. Please try again"));
      } else {
        const { data } = await axios.post(
          "https://halo-todo-app.herokuapp.com/todos",
          this.state
        );
        this.props.addTodo(data);
        this.setState({
          content: "",
        });
      }
    } catch (error) {
      this.setState({
        error,
      });
    }
  }

  render() {
    return (
      <div className="createtodo-container">
        <Chevron clickChevron={this.props.clickChevron} />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="content"
            placeholder="What needs to be done?"
            onChange={this.handleChange}
            value={this.state.content}
            required
          />
        </form>
      </div>
    );
  }
}
