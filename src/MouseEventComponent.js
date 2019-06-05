import React from "react";

const style = {
  width: "100px",
  height: "100px",
  background: "blue"
};

export default () => {
  const handleMouseOver = e => {
    console.log("handleMouseOver");
  };

  const handleMouseUp = e => {
    console.log("handleMouseUp");
  };

  const handleMouseDown = e => {
    console.log("handleMouseDown");
  };

  const handleMouseLeave = e => {
    console.log("handleMouseLeave");
  };

  const handleMouseEnter = e => {
    console.log("handleMouseEnter");
  };

  return (
    <div
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseOver={handleMouseOver}
    >
      Mouse
    </div>
  );
};
