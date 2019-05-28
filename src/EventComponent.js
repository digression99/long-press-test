import React, { useEffect, useCallback, useRef } from "react";
import useEventListener from "./hooks/useEventListener";
import useMouseHover from './hooks/useMouseHover';

const areaStyle = {
  width : '100px',
  height : '100px',
  background : 'red'
};

export default () => {
  const buttonRef = useRef();
  const areaRef = useRef();

  useEffect(() => {
    console.log('button ref changed : ', buttonRef.current);

  }, [buttonRef]);

  const handler = useCallback(e => {
    console.log('event object : ', e);
    console.log("event occured!");
  }, []);

  const documentTouchHandler = useCallback(e => {
    console.log('event object : ', e);
    console.log("document clicked.");
  }, []);

  const handleMouseHover = useCallback(e => {
    console.log('callback called!');
  }, []);

  useEventListener("click", handler, buttonRef.current);
  useEventListener("click", documentTouchHandler, document);

  // useMouseHover({ 
  //   callback : handleMouseHover, 
  //   element : areaRef.current, 
  //   time : 1000 
  // });

  return (
    <div>
      <button ref={buttonRef}>Event Component</button>
      <div style={areaStyle} ref={areaRef}>This is area</div>
    </div>
  );
};
