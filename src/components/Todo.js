import React, { useEffect, useState } from "react";
import axios from "axios";

const Todo = (props) => {
  const todo = props.todo;
  const [checked, setChecked] = useState(todo.isDone);

  useEffect(() => {
    setChecked(checked);
  }, [todo.isDone]);

  const clickDelete = async (todoId) => {
    await axios.delete(`https://halo-todo-app.herokuapp.com/todos/${todoId}`);
    props.removeTodo(todoId);
  };

  const clickCheckbox = async (todoId) => {
    await axios.put(`https://halo-todo-app.herokuapp.com/todos/${todoId}`, {
      isDone: !checked,
    });
    setChecked(!checked);
  };
  return (
    <div key={todo.id}>
      <input
        id={todo.content}
        type="checkbox"
        onChange={() => clickCheckbox(todo.id)}
        checked={checked}
      />
      <label htmlFor={todo.content}>{todo.content}</label>
      <button
        className="delete"
        type="button"
        onClick={() => clickDelete(todo.id)}
      >
        X
      </button>
    </div>
  );
};

export default Todo;
