import React, { useEffect, useState } from "react";
import axios from "axios";

const Todo = (props) => {
  const todo = props.todo;
  const [checked, setChecked] = useState(todo.isDone);
  const [toggle, setToggle] = useState(true);
  const [content, setContent] = useState(todo.content);
  let [clicks, setClicks] = useState(0);

  useEffect(() => {
    setChecked(todo.isDone);
  }, [todo.isDone]);

  useEffect(() => {
    let clickTimer;
    if (clicks === 1) {
      clickTimer = setTimeout(function () {
        clickCheckbox();
        setClicks(0);
      }, 250);
    } else if (clicks === 2) {
      setToggle(false);
      setClicks(0);
    }
    return () => clearTimeout(clickTimer);
  }, [clicks]);

  const clickDelete = async (todoId) => {
    await axios.delete(`https://halo-todo-app.herokuapp.com/todos/${todoId}`);
    props.removeTodo(todoId);
  };

  const clickCheckbox = async () => {
    await axios.put(`https://halo-todo-app.herokuapp.com/todos/${todo.id}`, {
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
        onChange={() => setClicks(clicks + 1)}
        checked={checked}
      />
      {toggle ? (
        <label htmlFor={content}>{content}</label>
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
