import React from "react";

const BottomNavBar = (props) => {
  const count = props.count;

  return (
    <div>
      {count < 2 ? <p>{count} item left</p> : <p>{count} items left</p>}
      <button type="button">All</button>
      <button type="button">Active</button>
      <button type="button">Completed</button>
    </div>
  );
};

export default BottomNavBar;
