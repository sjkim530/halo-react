import React from "react";

const BottomNavBar = (props) => {
  const count = props.count;

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
    </div>
  );
};

export default BottomNavBar;
