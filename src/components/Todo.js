import React from "react";
import axios from "axios";

const Todo = (props) => {
  const todo = props.todo;

  const handleClick = async (todoId) => {
    await axios.delete(`https://halo-todo-app.herokuapp.com/todos/${todoId}`);
    props.removeTodo(todoId);
  };

  return (
    <div key={todo.id}>
      <input className="checkTodo" type="checkbox" />
      <label for="checkTodo">{todo.content}</label>
      <button
        className="delete"
        type="button"
        onClick={() => handleClick(todo.id)}
      >
        X
      </button>
    </div>
  );
};

export default Todo;
