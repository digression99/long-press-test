import React, { useEffect, useCallback, useRef } from "react";
import useEventListener from "./hooks/useEventListener";
import useMouseHover from "./hooks/useMouseHover";

const areaStyle = {
  width: "100px",
  height: "100px",
  background: "red"
};

export default () => {
  // const handler = useCallback(e => {
  //   console.log("event object : ", e);
  //   console.log("event occured!");
  // }, []);

  // useEventListener("click", handler);

  // useEffect(() => {
  //   console.log("button ref changed : ", buttonRef.current);
  // }, [buttonRef]);
  const areaRef = useRef();

  useEffect(() => {
    console.log("[EventComponent]");
  }, [areaRef.current]);


  const handleHover = e => {
    console.log("handle hover!");
  };

  useMouseHover({
    callback: handleHover,
    element: areaRef,
    time: 1000
  });

  return (
    <div>
      <div style={areaStyle} ref={areaRef}>
        This is area
      </div>
    </div>
  );
};
