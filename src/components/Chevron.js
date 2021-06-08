import React from "react";

const Chevron = (props) => {
  return (
    <div>
      <button
        className="chevron-button"
        type="button"
        onClick={props.clickChevron}
      >
        ⌄
      </button>
    </div>
  );
};

export default Chevron;
