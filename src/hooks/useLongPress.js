import { useState, useEffect } from 'react';

export default ({ onPress, onLongPress, time }) => {
  const [ timer, setTimer ] = useState(null);
  const [ isMoved, setIsMoved ] = useState(false);
  const [ shouldShortPress, setShouldShortPress ] = useState(true);

  const longPressed = () => {
    console.log('timer ended');
    setShouldShortPress(false);
    if(onLongPress && isMoved === false) {
      onLongPress();
    }
  }

  const handleTouchEnd = e => {
    console.log('handle touch end!');
    clearTimeout(timer);
    setTimer(null);

    if (onPress && shouldShortPress && isMoved === false) {
      onPress(e);
    }
  };

  const handleTouchStart = e => {
    console.log('handle touch start!');
    setIsMoved(false);

    const timeoutTimer = setTimeout(longPressed, time);
    setTimer(timeoutTimer);
  };

  const handleTouchMove = e => {
    console.log('handle touch move!');
    setIsMoved(true);
    clearTimeout(timer);
  }

  const handleContextMenu = e => e.preventDefault()

  return {
    onContextMenu : handleContextMenu,
    onTouchEnd : handleTouchEnd,
    onTouchStart : handleTouchStart,
    onTouchMove : handleTouchMove
  }
};

