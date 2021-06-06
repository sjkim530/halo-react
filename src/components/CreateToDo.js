import React, { Component } from "react";
import axios from "axios";

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      error: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "https://halo-todo-app.herokuapp.com/todos",
        this.state
      );
      this.props.addTodo(data);
      this.setState({
        content: "",
      });
    } catch (error) {
      this.setState({
        error,
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="content"
            placeholder="What needs to be done?"
          />
        </form>
      </div>
    );
  }
}
