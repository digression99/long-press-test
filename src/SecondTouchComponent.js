import React from 'react';

const style = {
  width: "100px",
  height: "100px",
  background: "red",
  WebkitUserSelect: 'none',
  WebkitTouchCallout: 'none',
};

export default () => {

  const handleTouchStart = e => {
    console.log('on touch start');
  };

  const handleTouchEnd = e => {
    console.log('on touch end');
  };

  const handleTouchMove = e => {
    console.log('on touch move');
  };

  return (
    <div style={style}>
      touch this
    </div>
  )
};

