import React, { useMemo, useState, useEffect } from 'react';

export default ({ children, onLongPress, onPress, time, onTouchEnd : handleTouchEnd, disabled }) => {
  const [ canUseTouch, setCanUseTouch ] = useState(true);
  const [ isMoved, setIsMoved ] = useState(false);
  const [ shouldShortPress, setShouldShortPress ] = useState(true);
  let touchTimer = null;
  let touchTime = useMemo(() => time || 1000, [time]);

  useEffect(() => {
    try {
      document.createEvent('TouchEvent');
    } catch (e) {
      setCanUseTouch(false);
    }
  }, []);

  const longPressed = () => {
    setShouldShortPress(false);

    if(onLongPress && isMoved === false) {
      onLongPress();
    }
  }

  const onTouchStart = e => {
    console.log("[onTouchStart]");
    touchTimer = setTimeout(longPressed, touchTime);
  };

  const onTouchEnd = e => {
    console.log('[onTouchEnd]');
    clearTimeout(touchTimer);

    if (onPress && shouldShortPress && isMoved === false) {
      onPress();
    }

    if (onTouchEnd) {
      handleTouchEnd(e);
    }
  };

  const onTouchMove = e => {
    setIsMoved(true);
  };

  const props = {
    onContextMenu : e => e.preventDefault(),
    onTouchStart,
    onTouchEnd,
    onTouchMove,
    style : {
      ...children.props.style,
      WebkitUserSelect: 'none',
      WebkitTouchCallout: 'none',
    }
  }

  if (!canUseTouch || disabled) return children;

  return React.cloneElement(children, {...children.props, ...props });
};

