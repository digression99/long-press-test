import React, { useState, useEffect } from 'react';

export default ({ onClick }) => {
  const [ isOwnTouch, setIsOwnTouch ] = useState(false);

  useEffect(() => {
    console.log('touch button created.');
  }, []);

  const onClickClose = e => {
    console.log('[onClickClose]');
    if (!isOwnTouch) {
      return;
    }

    onClick(e);
  };

  const onMouseUp = e => {
    console.log('[onMouseUp]');
    setIsOwnTouch(true);
  };

  const onTouchStartClose = e => {

  };

  const onTouchEndClose = e => {
    setIsOwnTouch(true);
  };

  return (
    <span
      className="close flex-center"
      onClick={onClickClose}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStartClose}
      onTouchEnd={onTouchEndClose}
    >
      X
    </span>
  );
};