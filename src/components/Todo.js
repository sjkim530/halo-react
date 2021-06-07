import React, { useEffect, useState } from "react";
import axios from "axios";

const Todo = (props) => {
  const todo = props.todo;
  const [checked, setChecked] = useState(todo.isDone);
  const [toggle, setToggle] = useState(true);
  const [content, setContent] = useState(todo.content);

  useEffect(() => {
    setChecked(todo.isDone);
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
    props.updateStateAfterCheckboxClick();
  };

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      await axios.put(`https://halo-todo-app.herokuapp.com/todos/${todo.id}`, {
        content: content,
      });
      setToggle(true);
    }
  };
  return (
    <div key={todo.id}>
      <input
        id={content}
        type="checkbox"
        onChange={() => clickCheckbox(todo.id)}
        checked={checked}
      />
      {toggle ? (
        <label htmlFor={content} onDoubleClick={() => setToggle(false)}>
          {content}
        </label>
      ) : (
        <input
          type="text"
          value={content}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      )}

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
