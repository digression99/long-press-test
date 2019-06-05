import React, { useEffect, useState } from "react";

const style = {
  width: "100px",
  height: "100px",
  background: "red",
  WebkitUserSelect: 'none',
  WebkitTouchCallout: 'none',
};

export default () => {
  const [ touchStartX, setTouchStartX ] = useState(0);
  const [ touchStartY, setTouchStartY ] = useState(0);
  const [ touchEndX, setTouchEndX ] = useState(0);
  const [ touchEndY, setTouchEndY ] = useState(0);

  const [ clientStartX, setClientStartX ] = useState(0);
  const [ clientStartY, setClientStartY ] = useState(0);
  const [ clientEndX, setClientEndX ] = useState(0);
  const [ clientEndY, setClientEndY ] = useState(0);

  let threshold = 6;

  useEffect(() => {
    console.log('re rendering');
    console.log('client end x : ', clientEndX);
    console.log('client end y : ', clientEndY);
  });

  const handleGesture = e => {
    console.log('client start x : ', clientStartX);
    console.log('client start y : ', clientStartY);
    console.log('client end x : ', clientEndX);
    console.log('client end y : ', clientEndY);

    calcDistance();
  };

  const calcDistance = () => {
    const diffX = clientEndX - clientStartX;
    const diffY = clientEndY - clientStartY;

    const lineDist = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));

    console.log('diffX : ', diffX);
    console.log('diffY : ', diffY);
    console.log('line dist : ', lineDist);

    if (lineDist < threshold) {
      console.log('smaller than threshold');
    } else {
      console.log('longer than threshold');
    }
  };

  const handleTouchStart = e => {
    console.log('on touch start');

    setTouchStartX(e.changedTouches[0].screenX);
    setTouchStartY(e.changedTouches[0].screenY);

    setClientStartX(e.changedTouches[0].clientX);
    setClientStartY(e.changedTouches[0].clientY);
  };

  const handleTouchEnd = e => {
    console.log('on touch end');
    handleGesture();
  };

  const handleTouchMove = e => {
    e.preventDefault();
    console.log('on touch move');
    setTouchEndX(e.changedTouches[0].screenX);
    setTouchEndY(e.changedTouches[0].screenY);

    setClientEndX(e.changedTouches[0].clientX);
    setClientEndY(e.changedTouches[0].clientY);
  };

  const handleClick = e => {
    console.log('handle click!');
  };


  return (
    <div
      style={style}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      onClick={handleClick}
    >
      touch move
    </div>
  );
};
