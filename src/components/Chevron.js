import React from "react";

const Chevron = (props) => {
  return (
    <div>
      <button type="button" onClick={props.clickChevron}>
        ⌄
      </button>
    </div>
  );
};

export default Chevron;
