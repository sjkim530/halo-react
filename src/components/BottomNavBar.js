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
    <div>
      {count === 1 ? <p>{count} item left</p> : <p>{count} items left</p>}
      <button type="button" onClick={props.clickAll}>
        All
      </button>
      <button type="button" onClick={props.clickActive}>
        Active
      </button>
      <button type="button" onClick={props.clickCompleted}>
        Completed
      </button>
      {todos.includes(true) ? (
        <button type="button" onClick={clickClearCompleted}>
          Clear Completed
        </button>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default BottomNavBar;
