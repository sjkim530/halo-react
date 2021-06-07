import React from "react";

const Chevron = (props) => {
  const onClick = () => {
    props.clickChevron();
    // props.rerender();
  };
  return (
    <div>
      <button type="button" onClick={onClick}>
        ⌄
      </button>
    </div>
  );
};

export default Chevron;
