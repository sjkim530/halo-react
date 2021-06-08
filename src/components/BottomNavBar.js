import React from "react";
import axios from "axios";

const BottomNavBar = (props) => {
  const count = props.count;
  const todos = props.todos.map((todo) => todo.isDone);

  const clickClearCompleted = async () => {
    const { data } = await axios.get(
      "https://halo-todo-app.herokuapp.com/todos"
    );
    const completedTodos = data.filter((todo) => todo.isDone);

    await Promise.all(
      completedTodos.map(async (todo) => {
        await axios.delete(
          `https://halo-todo-app.herokuapp.com/todos/${todo.id}`
        );
      })
    );
    props.removeCompleted();
  };

  return (
    <div className="bottomnavbar-container">
      {count === 1 ? (
        <div className="item-count">
          {" "}
          <p>{count} item left</p>{" "}
        </div>
      ) : (
        <div className="item-count">
          {" "}
          <p>{count} items left</p>{" "}
        </div>
      )}
      <div className="filter-button-container">
        <button type="button" onClick={props.clickAll}>
          All
        </button>
        <button type="button" onClick={props.clickActive}>
          Active
        </button>
        <button type="button" onClick={props.clickCompleted}>
          Completed
        </button>
      </div>
      {todos.includes(true) ? (
        <div className="clear-completed-button-container">
          <button type="button" onClick={clickClearCompleted}>
            Clear Completed
          </button>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default BottomNavBar;
